"""Render both portfolio READMEs from the existing immutable catalog."""
import argparse
import html
import json
from catalog_readme_helpers import fenced
from readme import ROOT, template, featured_entries, featured_navigation, external_links, presentation

LABELS = {'posters': ('Posters & typography', '海报与文字排版'), 'portraits': ('Portraits', '人像'), 'storyboards': ('Character sheets & sequences', '角色设定与连续画面'), 'products': ('Products & object studies', '产品与物体研究'), 'edits': ('Photo editing', '照片编辑'), 'styles': ('Styles & scenes', '风格与场景')}


def render(entries, locale):
    zh = locale == 'zh'
    lines = [template('intro', locale, entries), '', featured_navigation(entries, locale), '', '## ' + ('分类浏览' if zh else 'Browse categories'), '', '| ' + ('分类 | 作品 |' if zh else 'Category | Works |'), '| --- | ---: |']
    for key, labels in LABELS.items():
        count = sum(e['category'] == key for e in entries)
        if count:
            lines.append(f'| [{labels[int(zh)]}](#{key}) | {count} |')
    lines += ['', '## ' + ('作品与完整提示词' if zh else 'Artwork & complete prompts'), '']
    config = presentation()
    chosen = config['featured']
    ordered = featured_entries(entries)
    # Selected works first, then the remaining works grouped by their actual category.
    ordered = [e for e in ordered if e['slug'] in chosen] + [e for category in LABELS for e in entries if e['category'] == category and e['slug'] not in chosen]
    current = None
    for e in ordered:
        if e['slug'] not in chosen and current != e['category']:
            current = e['category']
            lines += [f'<a id="{current}"></a>', '## ' + LABELS[current][int(zh)], '']
        title = e['title'].get(locale) or e['title']['en']
        description = config['descriptions'].get(e['slug'], {}).get(locale) or e['description'].get(locale) or e['description']['en']
        lines += [f'<a id="{e["slug"]}"></a>', '### ' + html.escape(title), '', html.escape(description), '', f'{html.escape(e["author"]["name"])} (@{html.escape(e["author"]["handle"])}) · [Original post / 原帖]({e["sourceUrl"]})', '']
        if e['promptSourceUrl'] != e['sourceUrl']:
            lines += [f'[Prompt source / 提示词原帖]({e["promptSourceUrl"]})', '']
        if e['mediaSourceUrl'] != e['sourceUrl']:
            lines += [f'[Artwork source / 作品原帖]({e["mediaSourceUrl"]})', '']
        for m in e['media']:
            if m['role'] == 'output':
                lines += [f'![{html.escape(m["alt"])}]({m["cdn"]["url"]})', '']
        references = e.get('referenceAssets', [])
        if references:
            lines += [('参考输入（与输出分开）：' if zh else 'Input references (separate from the output):'), '']
            for index, m in enumerate(references, 1):
                label = ('输入参考图 ' if zh else 'Input reference ') + str(index)
                lines += [f'[{label}]({m["cdn"]["url"]}) · [Source / 原帖]({m["sourceUrl"]})', '']
        lines += ['<details>', '<summary>' + ('完整原始提示词' if zh else 'Complete original prompt') + '</summary>', '', fenced(e['originalPrompt']), '', '</details>', '']
    lines += [template('footer', locale, entries), '']
    return external_links('\n'.join(lines))


def generate(check=False):
    entries = json.loads((ROOT / 'export/catalog.json').read_text())['entries']
    for locale, name in [('en', 'README.md'), ('zh', 'README.zh-CN.md')]:
        expected = render(entries, locale)
        target = ROOT / name
        if check:
            if not target.exists() or target.read_text() != expected:
                raise ValueError('Stale README: ' + name)
        else:
            target.write_text(expected)
    print(('Checked' if check else 'Generated') + ' 2 portfolio READMEs')

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true')
    generate(parser.parse_args().check)
