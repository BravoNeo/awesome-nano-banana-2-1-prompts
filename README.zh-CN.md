# Awesome Nano Banana 2.1 Prompts

[English](README.md) · [简体中文](README.zh-CN.md)

**Curated by <a href="https://reeldance.ai/" rel="nofollow noreferrer" referrerpolicy="no-referrer">ReelDance</a>**

ReelDance 是一个多模型 AI 图像与视频创作平台。可以从文字生成图片或视频、让图片动起来，并为创作选择合适的模型。

收集 41 位创作者的 73 个图像作品与提示词，从多语言咖啡菜单、杂志人像到角色设定、产品场景和照片编辑。可以浏览输出作品、复制完整原始提示词，并查看作者原帖。

<a href="https://reeldance.ai/nano-banana-2-1-prompts" rel="nofollow noreferrer" referrerpolicy="no-referrer">浏览在线作品库</a> · <a href="https://reeldance.ai/explore" rel="nofollow noreferrer" referrerpolicy="no-referrer">探索更多灵感</a>

## 关于 Nano Banana 2.1

<a href="https://ai.google.dev/gemini-api/docs/models/gemini-nano-banana-2.1?hl=en" rel="nofollow noreferrer" referrerpolicy="no-referrer">Nano Banana 2.1</a> 是 Google 的图像生成与对话式编辑模型，支持文字创作和图片参考，并改进了画面质量、角色一致性与文字渲染。

## 如何使用

1. 选择一个案例，展开完整原始提示词。
2. 替换地点、主体等变量；编辑类作品先准备自己有权使用的参考图。
3. 在支持该模型的工具中选择模型并粘贴提示词，再按你的目标调整构图、文字或风格。

## 从这些作品开始

| 作品 | 看点 |
| --- | --- |
| [英日阿印四种文字的咖啡菜单](#four-script-caf-menu) | 咖啡店黑板把英文、日文、阿拉伯文与天城文菜单排在同一版面；JSON 提示词逐项指定标题、价格、文字及顺序。 |
| [枫糖浆拼出 SUNDAY 的松饼](#sunday-written-in-maple-syrup) | 枫糖浆沿松饼侧面形成 SUNDAY 字样，用一条简短提示词将食物摄影与材质文字结合。 |
| [照片渐融为手绘的怀旧艺术书页](#nostalgic-photo-to-illustration-artbook) | 将一张生活照片变成上下两部分的艺术书页：上方保留彩色照片，下方化为黑白墨线画，以暖色纸张和手写注释连接。需要提供参考照片。 |
| [红发少女 aoi 角色设计表](#aoi-red-haired-anime-character-sheet) | 红发动漫角色以正面、侧面、背面和面部特写呈现，并配色彩标注。作者分享的是应用截图，画面保留界面元素。 |
| [盐湖上的一把红伞](#red-umbrella-on-a-mirror-salt-flat) | 淡色盐湖上，一把小红伞与倒影成为视觉焦点；提示词通过主体尺度、留白和阴天光线营造安静的极简场景。 |
| [六种文字招牌的雨夜街市](#rainy-market-with-six-writing-systems) | 雨水、伞、蒸汽与霓虹围绕六种文字的店铺招牌，提示词在繁忙夜市场景中提出明确的文字要求。 |


## 分类浏览

| 分类 | 作品 |
| --- | ---: |
| [海报与文字排版](#posters) | 13 |
| [人像](#portraits) | 15 |
| [角色设定与连续画面](#storyboards) | 5 |
| [产品与物体研究](#products) | 6 |
| [照片编辑](#edits) | 10 |
| [风格与场景](#styles) | 24 |

## 作品与完整提示词

<a id="four-script-caf-menu"></a>
### 英日阿印四种文字的咖啡菜单

咖啡店黑板把英文、日文、阿拉伯文与天城文菜单排在同一版面；JSON 提示词逐项指定标题、价格、文字及顺序。

Dheepan Ratnam (@Dheepanratnam) · <a href="https://x.com/Dheepanratnam/status/2107534300044316830" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Four-Script Café Menu](https://media.reeldance.ai/galleries/assets/da43205b2b85572d0304a7b31e2d2d8ce39e19145ea035bcc66b0a8b447b8840.webp)

<details>
<summary>完整原始提示词</summary>

```text
{
  "scene": "black chalkboard menu in a wooden frame, hand-lettered in white and yellow chalk, standing on the counter of a small corner coffee shop, shot straight-on, eye level, shallow depth of field on the background only",
  "text_exact": {
    "headline": "THE MORNING CUP",
    "menu_lines_in_order": [
      "Flat White - £3.40",
      "抹茶ラテ - £4.10",
      "قهوة عربية - £2.90",
      "मसाला चाय - £3.00",
      "Almond Croissant - £3.25"
    ],
    "footer": "Open 7am - 4pm  |  Card only",
    "small_print_bottom_right": "Oat milk +40p"
  },
  "rules": ["render every character exactly as written", "Arabic reads right-to-left with correct letter joining", "no extra words, no invented items", "board text fully legible and in focus"]
}
```

</details>

<a id="sunday-written-in-maple-syrup"></a>
### 枫糖浆拼出 SUNDAY 的松饼

枫糖浆沿松饼侧面形成 SUNDAY 字样，用一条简短提示词将食物摄影与材质文字结合。

Emilio (@EmilioSchwaiger) · <a href="https://x.com/EmilioSchwaiger/status/2107579187888287942" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![SUNDAY Written in Maple Syrup](https://media.reeldance.ai/galleries/assets/c774dec82c32733b48b1bbed76723befa524918a7f19381903ed6aa91a4c6789.webp)

<details>
<summary>完整原始提示词</summary>

```text
A photo of a tall stack of fluffy pancakes on a diner plate, the maple syrup dripping down the side naturally spells the word SUNDAY
```

</details>

<a id="nostalgic-photo-to-illustration-artbook"></a>
### 照片渐融为手绘的怀旧艺术书页

将一张生活照片变成上下两部分的艺术书页：上方保留彩色照片，下方化为黑白墨线画，以暖色纸张和手写注释连接。需要提供参考照片。

Sharon Riley (@Just_sharon7) · <a href="https://x.com/Just_sharon7/status/2107574724041769179" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Nostalgic Photo-to-Illustration Artbook](https://media.reeldance.ai/galleries/assets/6d04e9b53040041545f7592c8c0f9006a31b43a29f0adee22315887678a6949d.webp)

<details>
<summary>完整原始提示词</summary>

```text
Create a nostalgic, magazine-inspired photo-and-illustration artbook spread using the reference image as the visual foundation. Maintain the original subjects, identities, poses, expressions, wardrobe, framing, and emotional tone without altering their recognizable appearance.

Design the composition as two vertically flowing interpretations of the same moment.

In the upper portion, recreate the reference as an intimate cinematic photograph. Use gentle natural light, realistic skin and fabric textures, muted authentic colors, delicate analog film grain, soft background separation, and shallow depth of field. The image should feel spontaneous and personal, like a quiet memory captured on film rather than a staged portrait.

In the lower portion, reinterpret that identical moment as a raw black-and-white ink drawing printed on warm ivory sketchbook paper. Preserve the characters, pose, proportions, and composition while replacing photographic detail with expressive hand-drawn linework, irregular pen strokes, loose cross-hatching, unfinished contours, and restrained shading. Allow small imperfections so the illustration feels genuinely handmade rather than digitally traced.

Blend both sections naturally so the photograph appears to dissolve into the drawing, creating the impression of a memory gradually becoming an illustration.

Surround the lower artwork with restrained editorial design elements: a small numbered chapter heading, a brief poetic handwritten annotation, tiny archival or documentary notes, and subtle typographic details. Keep all typography secondary to the imagery.

Use generous cream-toned negative space, tactile paper grain, faint printing imperfections, understated vintage publishing details, and an elegant minimalist layout inspired by contemporary photography journals and Japanese visual diaries.

Overall mood: nostalgic, intimate, poetic, cinematic, handcrafted, sophisticated, and emotionally warm.

Maintain realistic anatomy, natural body proportions, recognizable faces, believable hands, and consistent clothing throughout both versions. High-detail editorial finish, cohesive photo-to-sketch transition, no branding, no logos, and no watermark.
```

</details>

<a id="aoi-red-haired-anime-character-sheet"></a>
### 红发少女 aoi 角色设计表

红发动漫角色以正面、侧面、背面和面部特写呈现，并配色彩标注。作者分享的是应用截图，画面保留界面元素。

𝐚𝐨𝐢❀.*ﾟ (@GPT_AOI) · <a href="https://x.com/GPT_AOI/status/2107641922147995878" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Aoi: Red-Haired Anime Character Sheet — Author-provided mobile-app screenshot containing the output; interface elements remain visible.](https://media.reeldance.ai/galleries/assets/a5dbe6b6659a4144b866164f5a3d29113121c45390f781c5a464fd554840edff.webp)

<details>
<summary>完整原始提示词</summary>

```text
masterpiece, best quality, highres, 8k, anime character design sheet, clean turnaround aesthetic, color callouts, (1girl, solo, red hair, bob cut, blunt bangs, straight bangs, cute face, autumn outfit, knit cardigan, boots), side view, profile, close-up, portrait, face focus, 名前 aoi
```

</details>

<a id="red-umbrella-on-a-mirror-salt-flat"></a>
### 盐湖上的一把红伞

淡色盐湖上，一把小红伞与倒影成为视觉焦点；提示词通过主体尺度、留白和阴天光线营造安静的极简场景。

Emilio (@EmilioSchwaiger) · <a href="https://x.com/EmilioSchwaiger/status/2107669756845191508" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Red Umbrella on a Mirror Salt Flat](https://media.reeldance.ai/galleries/assets/f24fd56a2facf06edb8240cb24eef3a787cd71d924a19d4d58dd46ed02b8cd51.webp)

<details>
<summary>完整原始提示词</summary>

```text
A minimal photograph of a single red umbrella on an endless pale salt flat under a pearl-white overcast sky, a perfect mirror reflection, the umbrella tiny in the frame, soft and silent
```

</details>

<a id="rainy-market-with-six-writing-systems"></a>
### 六种文字招牌的雨夜街市

雨水、伞、蒸汽与霓虹围绕六种文字的店铺招牌，提示词在繁忙夜市场景中提出明确的文字要求。

Raza (@AIWithRaza) · <a href="https://x.com/AIWithRaza/status/2107532529070985393" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Rainy Market with Six Writing Systems](https://media.reeldance.ai/galleries/assets/112b4dc05a6ec460cad87ec61fbf4a1c053a7e2d9840623e0f6913904c643e3d.webp)

<details>
<summary>完整原始提示词</summary>

```text
A photorealistic night photo of a crowded street market in the rain, neon and lantern light reflecting on wet pavement, shot on a 35mm lens. Six shop signs are clearly visible, each with sharp, correctly spelled text: an Urdu sign in Nastaliq script reading "چائے خانہ", an Arabic sign reading "مخبز", a Hindi sign reading "मिठाई की दुकान", a Japanese sign reading "ラーメン", a Korean sign reading "카페", and an English sign reading "OPEN ALL NIGHT". Shoppers with umbrellas, steam rising from food stalls, realistic faces and hands. Aspect ratio 4:5, 4K.
```

</details>

<a id="posters"></a>
## 海报与文字排版

<a id="little-devil-super-famicom-game-poster"></a>
### 小恶魔莉莉的超级任天堂游戏海报

把小恶魔角色设计成超级任天堂风格的游戏海报。对比图左侧为 Nano Banana 2.1，右侧为 Nano Banana 2。

EvoLink.ai (@EvoLinkAi) · <a href="https://x.com/EvoLinkAi/status/2107659940936483064" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Little Devil Super Famicom Game Poster — Comparison image: Nano Banana 2.1 is the LEFT panel; the right panel is Nano Banana 2.](https://media.reeldance.ai/galleries/assets/179eda74bfb18905bb2eaccbe9662d35f38f7e844d082512baecffbc3934835a.webp)

<details>
<summary>完整原始提示词</summary>

```text
小悪魔リリムリリィちゃんが　スーパーファミコンのゲームだったときのポスターを考えて
```

</details>

<a id="viennese-caf-chalkboard-menu"></a>
### 维也纳咖啡馆粉笔菜单

晨光照亮维也纳咖啡馆的黑板菜单，三项餐饮、价格和咖啡杯涂鸦构成简单版面。

Emilio (@EmilioSchwaiger) · <a href="https://x.com/EmilioSchwaiger/status/2107639572918124553" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Viennese Café Chalkboard Menu](https://media.reeldance.ai/galleries/assets/4cd435c6fce30a4abed6ca068c6d3090d46a7017fbaa16bbe9b684bd1839cd90.webp)

<details>
<summary>完整原始提示词</summary>

```text
A chalkboard menu outside a tiny Viennese café, handwritten in chalk: "Melange 3.80", "Apfelstrudel 4.50", "Sachertorte 5.20", with a little doodled coffee cup, morning light
```

</details>

<a id="the-daily-prompt-newspaper-front-page"></a>
### 可读头版报纸与拉合尔天气栏

虚构报纸头版用报头、标题、分栏、图片说明和天气栏探索密集的编辑排版。

Raza (@AIWithRaza) · <a href="https://x.com/AIWithRaza/status/2107533856601751752" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![The Daily Prompt Newspaper Front Page](https://media.reeldance.ai/galleries/assets/c3a90aad40d8e129b7c83902f98cc976305b71c77d94782837908ea72e5d7807.webp)

<details>
<summary>完整原始提示词</summary>

```text
A photorealistic close-up of a printed newspaper front page lying on a wooden desk in morning light. Masthead: "THE DAILY PROMPT". Date: "TUESDAY, OCTOBER 6, 2026". Main headline: "GOOGLE RELEASES NANO BANANA 2.1". Subheadline: "Can it finally render text without mistakes?" Three columns of readable body text, a photo of a banana captioned "Fig. 1: The banana in question", a weather box reading "Lahore 31°C Sunny", and the page number "A1". Every word sharp and correctly spelled. Aspect ratio 3:4, 4K.
```

</details>

<a id="sonic-characters-forming-nano-banana-text"></a>
### 索尼克角色排列成 Nano Banana 字样

把 Sonic 角色排列为 Nano Banana 2.1 字样，将角色插画与文字构图结合。

Socratech (@sadlemonjuice) · <a href="https://x.com/sadlemonjuice/status/2107522346907316237" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Sonic Characters Forming Nano Banana Text](https://media.reeldance.ai/galleries/assets/c145da3b87388877f2d6c69f3727db5212e25c0a4210951914e722019e5ab403.webp)

<details>
<summary>完整原始提示词</summary>

```text
sonic the hedgehog characters organized perfectly making text Nano Banana 2.1 anime illustration
```

</details>

<a id="magical-girl-anime-key-visual"></a>
### 魔法少女动画主视觉海报

用简短日文提示词生成魔法少女动画主视觉，并完成含标题字标的海报。

SSSS.CRYPTOMAN⚡️AI (@SSSS_CRYPTOMAN) · <a href="https://x.com/SSSS_CRYPTOMAN/status/2107617855906975865" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Magical Girl Anime Key Visual](https://media.reeldance.ai/galleries/assets/dd724d978d200cf00c63e86d2da023c5d4dddcb73813d225fb4b0f5dbe2bf0bc.webp)

<details>
<summary>完整原始提示词</summary>

```text
魔法少女アニメのキービジュアルを作成。タイトルロゴまで含めた魅力的なポスターデザインとして仕上げる。
```

</details>

<a id="j-mon-and-yayoi-museum-style-comparison"></a>
### 绳文人与渡来系弥生人面貌比较图

博物馆风格图版并列想象中的绳文与弥生人像，附面部特征标注。这是生成的重建插画，并非历史照片。

BLITAST STUDIO (@blitast_studio) · <a href="https://x.com/blitast_studio/status/2107589324518961287" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Jōmon and Yayoi Museum-Style Comparison — AI-generated educational illustration. Appearance reconstructions are an artistic example, not validated historical or anthropological evidence.](https://media.reeldance.ai/galleries/assets/7e11c44605023d66a7927d252f9d8a357197d21b1705415ddcb3265daaad2f75.webp)

<details>
<summary>完整原始提示词</summary>

```text
縄文人と渡来系弥生人の顔立ちを比較する教育用図版。横長16:9、白背景、博物館の復元画のような写実的表現。左右に30歳前後の男性の正面バストショットを配置。顔の大きさ、照明、表情を統一する。

左「縄文人」：横幅が広く、縦に短めの顔。眉間の隆起が目立ち、眉間から鼻の付け根にかけて凹凸のある、彫りの深い顔立ち。

右「渡来系弥生人」：比較的面長の顔。額から鼻の付け根にかけて凹凸が小さく、平坦な顔立ち。鼻幅は比較的狭い。

両者とも髪で顔を隠さず、肌色・髭・衣装の違いで特徴を誇張しない。輪郭・眉間・鼻に細い引き出し線を添え、上記の特徴を短い日本語で解説。美化や戯画化は避ける。

下部に「骨格的傾向を参考にした想像復元。個人差・地域差があり、全員に当てはまるものではありません」と注記。
```

</details>

<a id="claude-webpage-as-a-graphic-recording"></a>
### Claude 页面内容纵向图解

用短提示词把网页概括成长幅图解笔记，并保留作者原始短链接。

IT navi (@itnavi2022) · <a href="https://x.com/itnavi2022/status/2107516223185633575" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Claude Webpage as a Graphic Recording — The source prompt includes its original shortened webpage URL. The gallery preserves the prompt and does not verify the webpage summary.](https://media.reeldance.ai/galleries/assets/5672f92d82ff5a1a6c327efc71fe0bc8f1d7ecf1283aad044be0e5a3a29da253.webp)

<details>
<summary>完整原始提示词</summary>

```text
以下のページの内容を縦長のグラレコで描いて
https://t.co/jDrGPzxx3x
```

</details>

<a id="nano-banana-2-1-launch-poster"></a>
### Nano Banana 2.1 发布小红书海报

作者制作的 3:4 发布海报探索小红书式公告排版，画中文字属于生成设计。

nicekate (@nicekate8888) · <a href="https://x.com/nicekate8888/status/2107507607183478923" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Nano Banana 2.1 Launch Poster — Author-generated launch poster. Text inside the artwork is not an independently verified model specification.](https://media.reeldance.ai/galleries/assets/e306c1fa0c40abbe021e1ce1525a618c8bf4eaa055ecd4ee57f3ded0ce3ed4fe.webp)

<details>
<summary>完整原始提示词</summary>

```text
Nano Banana 2.1 已推出，请搜索信息，并生成适合小红书的海报，3:4
```

</details>

<a id="philosopher-and-labyrinth-banknote"></a>
### 哲学家的迷宫纸币

虚构雕版纸币把哲学家轮廓变成迷宫，以视觉错觉装饰和深蓝、珊瑚色油墨完成画面。

ibexdream (@ibexdream) · <a href="https://x.com/ibexdream/status/2107520949557875182" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Philosopher and Labyrinth Banknote](https://media.reeldance.ai/galleries/assets/fa1c8ce5c0ab88c27c81609078a553089b0be301ad1db1920e5949b8704d312d.webp)

<details>
<summary>完整原始提示词</summary>

```text
A classical philosopher depicted on an imaginary banknote, his silhouette gradually opening into an elaborate labyrinth populated by tiny anonymous figures.
The surrounding ornamental frame contains subtle optical illusions that change direction across the page.
Copperplate engraving, muted ivory stock, deep navy and fluorescent coral inks, cerebral surrealism, museum-print precision.
```

</details>

<a id="premier-league-table-infographic-attempt"></a>
### 英超前六排名联网信息图

深蓝白色体育表格探索列对齐与紧凑信息设计，用作版式示例，不能作为实时足球积分榜来源。

Dheepan Ratnam (@Dheepanratnam) · <a href="https://x.com/Dheepanratnam/status/2107534307627872710" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Premier League Table Infographic Attempt — Author-generated football-table infographic. Treat the displayed rankings as an image-generation example, not verified current standings.](https://media.reeldance.ai/galleries/assets/a02edd89363734a2204bbb11af88c3b9e42acfcedd4c875f9a84b654c4e79761.webp)

<details>
<summary>完整原始提示词</summary>

```text
{
  "task": "Search the web for the current English Premier League table as of 6 October 2026 and build a vertical infographic",
  "data": "top 6 clubs with columns: position, club name, games played, points",
  "title": "PREMIER LEAGUE - TOP 6",
  "subtitle": "As of 6 October 2026",
  "design": "clean editorial sports infographic, dark navy background, white type, one accent colour",
  "rules": ["numbers must match real data", "no club crests or logos, text only", "all text legible, aligned in a proper table grid"]
}
```

</details>

<a id="retro-anime-website-character-page"></a>
### 约2000年代动漫官网角色介绍页

重现 2000 年前后动画官网的角色介绍页，采用怀旧网页排版。

Jayz(ジェイズ)＠AI音楽 (@PElfines71321) · <a href="https://x.com/PElfines71321/status/2107528268069110149" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Retro Anime Website Character Page](https://media.reeldance.ai/galleries/assets/95afb7ea344e26f7b380f82d3f9541e35377d0cae46ee0673737f42fe72c77cb.webp)

<details>
<summary>完整原始提示词</summary>

```text
2000年くらいに流行ったアニメの公式サイトキャラ紹介ページを作ってみて
```

</details>

<a id="bonsai-couture-paris-runway-magazine"></a>
### 盆栽先锋时装巴黎秀场杂志跨页

杂志跨页呈现巴黎秀场上以盆栽为灵感的前卫服饰与妆容，并配法文编辑文字。

Jayz(ジェイズ)＠AI音楽 (@PElfines71321) · <a href="https://x.com/PElfines71321/status/2107531113384345668" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Bonsai Couture Paris Runway Magazine](https://media.reeldance.ai/galleries/assets/8104b865ef92646621f4eba2a92578b7aa3b615a739914aa104ea21b967af6c5.webp)

<details>
<summary>完整原始提示词</summary>

```text
盆栽をテーマにしたアヴァンギャルド衣装をメイク込みで着たモデルがパリコレのランウェイ路歩いている写真を乗せた雑誌の見開きを写真に映して。文字はフランス語で
```

</details>

<a id="portraits"></a>
## 人像

<a id="jess-unretouched-smartphone-portrait"></a>
### 真实手机质感的 UGC 创作者 Jess

虚构创作者 Jess 以抓夹、罗纹家居服和略不均匀的手机光线呈现日常自拍感。

Wanderson Jackson (@jackson99ai) · <a href="https://x.com/jackson99ai/status/2107636549927985231" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Jess: Unretouched Smartphone Portrait](https://media.reeldance.ai/galleries/assets/e92fbea600b64e810270a14f7c1bfac225a4c7cd8e2067c2a3fddc5e41c90009.webp)

<details>
<summary>完整原始提示词</summary>

```text
Character: Jess, 26, UGC content creator, authentic smartphone-camera realism, no retouching, natural skin texture, blonde balayage hair in a claw clip, beige ribbed lounge set, white socks, small gold hoop earrings. Candid, slightly imperfect lighting as if shot on an iPhone front camera.
```

</details>

<a id="ana-natural-light-commercial-character"></a>
### 自然光下的巴西母亲 Ana

为剧情广告设计巴西母亲角色，用温暖而疲惫的眼神、针织开衫与自然日光建立人物气质。

Wanderson Jackson (@jackson99ai) · <a href="https://x.com/jackson99ai/status/2107636141109153812" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Ana: Natural-Light Commercial Character](https://media.reeldance.ai/galleries/assets/0e23015a81583532ffbf03aea0c75394ba10e0ffb13b1687bb000354ebef1177.webp)

<details>
<summary>完整原始提示词</summary>

```text
Character: Ana, 38, Brazilian mother, realistic photographic, for an emotional drama TV commercial. Tired warm eyes, light freckles, dark hair in a loose low bun, oversized oatmeal knit cardigan over a white tee, straight-leg jeans, bare feet. Natural daylight, true-to-life skin texture, 35mm photography.
```

</details>

<a id="dorian-vale-cinematic-detective-portrait"></a>
### 黑色高领风衣侦探 Dorian Vale

炭灰风衣与黑色高领衫塑造饱经风霜的侦探，以克制色调和面部光线营造电影剧照感。

Wanderson Jackson (@jackson99ai) · <a href="https://x.com/jackson99ai/status/2107635339724550571" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Dorian Vale: Cinematic Detective Portrait](https://media.reeldance.ai/galleries/assets/ceaa22705fb3e106cf5a72b31673acf2242247d67b6a1c95272d35df6f2484f4.webp)

<details>
<summary>完整原始提示词</summary>

```text
Character: Dorian Vale, mid-40s detective, cinematic film-still quality, weathered face, salt-and-pepper stubble, charcoal wool overcoat over a black turtleneck, dark trousers, leather boots. Anamorphic lens look, filmic color grade, moody but even key light on the face.
```

</details>

<a id="south-asian-casual-mirror-selfie"></a>
### 自然生活感南亚女性镜面自拍

用 JSON 分项描述姿态、图案服装、手机位置和自然摄影风格，构建轻松的镜面自拍。

Ryan Fox (@hardik_lut83675) · <a href="https://x.com/hardik_lut83675/status/2107622936278335992" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![South Asian Casual Mirror Selfie](https://media.reeldance.ai/galleries/assets/d91df452ecc27d1fd77005f4ec030b74ec278acc125d23ebf19d9dffff5fa8b3.webp)

<details>
<summary>完整原始提示词</summary>

```text
{
  "prompt": {
    "style": "authentic casual mirror selfie, realistic smartphone photography, natural unretouched appearance",
    "subject": {
      "gender": "young woman",
      "appearance": "young South Asian woman with medium warm skin tone, dark brown eyes, thick black hair styled in a loose messy low bun with soft face-framing strands",
      "expression": "subtle relaxed smile, calm confident expression",
      "pose": "standing in front of a full-length mirror, torso slightly angled, left hand placed behind her neck, right hand holding a smartphone in front of her face",
      "body": "slender feminine physique with natural realistic proportions"
    },
    "outfit": {
      "dress": "fitted ribbed midi dress with thin spaghetti straps",
      "pattern": "abstract black and off-white irregular pattern resembling organic brush strokes",
      "fit": "body-hugging silhouette",
      "accessories": [
        "small beige shoulder bag with thin silver chain strap",
        "delicate silver bracelet on left wrist",
        "delicate silver bracelet on right wrist"
      ]
    },
    "phone": {
      "type": "modern silver smartphone with three rear cameras",
      "case": "light gray/white case with a large circular MagSafe-style ring",
      "position": "held vertically in the right hand, partially covering the right side of the face"
    },
    "environment": {
      "location": "bedroom or apartment hallway",
      "mirror": "large full-length rectangular mirror with a simple light-colored frame",
      "background": "warm beige walls, partially visible dark wooden door or furniture, minimal lived-in interior",
      "lighting": "soft warm indoor ambient lighting with subtle natural light, gentle shadows",
      "mirror_condition": "slightly dusty mirror with small visible smudges and imperfections for authentic realism"
    },
    "composition": {
      "camera": "smartphone mirror selfie",
      "orientation": "vertical 4:5",
      "framing": "medium-full body portrait, subject centered slightly left, extending from head to below knees",
      "perspective": "natural smartphone perspective, eye-level mirror angle",
      "depth_of_field": "moderate, background slightly softer but still recognizable"
    },
    "photographic_quality": {
      "look": "authentic Instagram/Pinterest-style candid mirror selfie",
      "texture": "natural skin texture, subtle pores, realistic fabric texture",
      "processing": "minimal computational photography, slight phone-camera grain, no excessive HDR, no beauty filter",
      "color_grading": "warm neutral tones, slightly muted contrast, realistic skin tones"
    },
    "negative_prompt": [
      "professional studio photography",
      "heavy makeup",
      "plastic skin",
      "over-smoothed face",
      "excessive retouching",
      "unrealistic body proportions",
      "extra fingers",
      "deformed hands",
      "duplicate phone",
      "extra limbs",
      "text",
      "watermark",
      "oversaturated colors",
      "dramatic cinematic lighting"
    ]
  }
}
```

</details>

<a id="street-fashion-noodle-portrait"></a>
### 直闪街头时尚风吃面人像

近距离微倾斜的吃面人像结合同机直闪、硬阴影，以及面条和墨镜上的明亮反光。

Ryan Fox (@hardik_lut83675) · <a href="https://x.com/hardik_lut83675/status/2107577134919127195" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Street Fashion Noodle Portrait](https://media.reeldance.ai/galleries/assets/d9173a75d3c65ef729aeb79a894bc29174eac048fc322b71fc22a1a5ed244e66.webp)

<details>
<summary>完整原始提示词</summary>

```text
{
  "image_type": "candid editorial flash photograph, photorealistic",
  "aspect_ratio": "9:16 vertical",
  "camera": {
    "shot": "medium close-up from waist up, subject slightly right of center, plate cropped at the bottom edge",
    "angle": "slightly low, close angle with the camera just above table height, tilted a little",
    "lens": "35mm wide-ish lens, mild wide-angle perspective",
    "focus": "sharp throughout, deep depth of field",
    "style": "point-and-shoot direct flash, fashion-zine street food aesthetic"
  },
  "lighting": {
    "type": "harsh direct on-camera flash",
    "effects": "bright specular highlights on skin, noodles and sunglasses; hard dark shadow of her head and hair cast onto the tiled wall behind her to the right; slight falloff toward the corners",
    "color_grade": "warm, punchy, saturated, slightly yellow-orange tones, crisp contrast"
  },
  "subject": {
    "description": "young woman in her mid twenties with a South Asian appearance",
    "skin": "warm medium-tan skin, real and unretouched, visible pores, a few small blemishes and faint freckles on the cheeks and forehead, natural flash shine on the nose and cheekbones",
    "face_details": "small dark mole on the forehead just above one eyebrow, thick natural dark eyebrows slightly uneven with individual hairs visible",
    "hair": "long, dark brown-black, wavy and messy, loosely pulled half back with frizzy flyaways and fine stray strands around the crown and temples, the rest falling over her shoulder",
    "expression": "eyes half closed behind the lenses, lips puckered mid-slurp, absorbed in eating",
    "pose": "turned three-quarters to the left, head tilted slightly, slurping a mouthful of noodles; right hand raised at the left edge of the frame holding wooden chopsticks loaded with noodles that hang in long strands down to the plate"
  },
  "accessories": {
    "sunglasses": "chunky off-white wraparound sport sunglasses with amber-orange tinted lenses, her eyes faintly visible through them",
    "earrings": "small gold hoop earrings",
    "necklace": "thin silver chain with a small silver pendant",
    "nails": "glossy red nail polish"
  },
  "outfit": {
    "garment": "dark navy-charcoal cotton short-sleeve shirt dress",
    "details": "oversized rounded collar flaps with orange contrast topstitching along every seam, black crochet lace inserts at the neckline and shoulder, round brown wooden buttons, small colorful bead dangles and tiny charms hanging from the collar edges, pale shell buttons down the front placket"
  },
  "food_and_props": {
    "dish": "big pile of stir-fried wide flat wheat noodles with ground pork, bok choy and green scallion pieces, glossy with sauce",
    "plate": "white disposable plate with a scalloped embossed rim",
    "chopsticks": "plain light wooden chopsticks",
    "table": "dark varnished wooden table"
  },
  "background": {
    "setting": "small no-frills Chinese noodle shop interior",
    "walls": "white square ceramic wall tiles with grout lines and a horizontal band of small pink and mauve mosaic tiles at shoulder height",
    "signage": "a large glossy food poster on the wall behind her showing plates of raw sliced beef and hot pot ingredients with Chinese characters, a number and a red price tag; a red and white 'NO SMOKING' sign with a crossed-out cigarette icon on the right"
  },
  "realism": "real candid photograph, natural imperfections, visible skin texture, slight motion in the hanging noodles, no airbrushing, no beauty filter",
  "negative_prompt": "no text overlays, no emoji, no speech bubble, no watermark, no logo, no smooth plastic skin, no extra fingers, no distorted chopsticks, no cartoon look"
}
```

</details>

<a id="street-portrait-with-a-skull-skateboard"></a>
### 手持骷髅滑板的红衣街头女孩

红衣滑板女孩在城市街道竖持滑板，工装口袋、金属链与柔化背景构成街头造型。

dreamy digital arts (@dreamydigiarts) · <a href="https://x.com/dreamydigiarts/status/2107561535531016504" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Street Portrait with a Skull Skateboard](https://media.reeldance.ai/galleries/assets/2231336582b1fbf880a7d6ccc577c8b8e0a006219a4603b375fa48ccff53330d.webp)

<details>
<summary>完整原始提示词</summary>

```text
A young woman with reddish-blonde hair pulled back stands confidently on a city street holding a skateboard.

Subject: A fair-skinned young woman with straight reddish-blonde hair tied in a low ponytail, blue eyes, and a neutral expression looking directly at the camera. She has a visible belly button piercing.

Clothing: She wears a bright red ribbed tank crop top with black straps, loose-fitting black cargo pants featuring multiple pockets and silver chains hanging from the belt loops, and white sneakers. She wears a silver necklace with a pendant.

Action: She stands upright facing forward, holding a skateboard vertically in her right hand against her leg.

Environment: An urban street scene with brick buildings on either side, blurred background suggesting depth of field, and yellow road markings visible on the asphalt.

Camera: Eye-level medium shot with a shallow depth of field that keeps the subject sharp while blurring the background streetscape.

Lighting: Bright natural daylight casting soft shadows, highlighting the texture of her clothing and skin.

Objects: A skateboard with a large black and white skull graphic on the underside deck.

Style Details: High-resolution photography with vibrant colors and a modern streetwear aesthetic.
```

</details>

<a id="red-dress-on-an-autumn-sidewalk"></a>
### 秋日街道上的红裙红帽女性

红裙、宽檐帽与高跟鞋在阳光下的金色秋叶步道上形成鲜明色彩。

dreamy digital arts (@dreamydigiarts) · <a href="https://x.com/dreamydigiarts/status/2107547341851070950" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Red Dress on an Autumn Sidewalk](https://media.reeldance.ai/galleries/assets/4bca0f47899b2282247b8e33fee9a078ae203aac0a4909191d3fef67ed3175b8.webp)

<details>
<summary>完整原始提示词</summary>

```text
A photorealistic shot of a woman walking confidently along an autumn sidewalk in the sun

Subject: A young woman with long wavy brown hair, smiling broadly while looking at the camera

Clothing: She is wearing a vibrant red strapless mini dress and matching red heels

Accessories: She wears a large wide-brimmed red hat and carries a structured brown leather handbag on her shoulder

Action: Walking forward with one arm bent slightly in a relaxed gesture, exuding confidence and happiness

Environment: A sunlit urban park path lined with trees displaying yellow fall foliage and manicured green bushes

Lighting: Bright natural sunlight streaming from above through the branches creating dappled shadows on the ground;
```

</details>

<a id="four-friends-in-night-time-shibuya"></a>
### 夜间涩谷街头四人手机合照

两位女性和两位男性在涩谷路口并排，以方形构图和手机画质呈现夜间合影。

結パパ (@Yuupapa_free) · <a href="https://x.com/Yuupapa_free/status/2107644949730869493" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Four Friends in Night-Time Shibuya](https://media.reeldance.ai/galleries/assets/4c883faacda725605a90ce15cf8193dc68e58ff774a9e8deabdeb2a9a667970a.webp)

<details>
<summary>完整原始提示词</summary>

```text
実写で、iPhone で撮影したような画質の写真。

被写体は日本人の若い女性2人と若い男性2人。それぞれ見た目もバラバラで、並んで立っている構図。

画角・構図：
• アスペクト比：1:1
• ショット：ウエストアップ（腰から上を写す）

背景：
夜の渋谷の交差点。4人は歩道の道路側に立っている感じ。
```

</details>

<a id="neon-fashion-portrait-in-dotonbori"></a>
### 大阪道顿堀霓虹街头时尚人像

道顿堀时尚人像描绘整理脚链的瞬间，灯笼、霓虹散景与湿地反光建立夜市氛围。

DD.Cherry (@sdjn_wgc) · <a href="https://x.com/sdjn_wgc/status/2107610628592480468" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Neon Fashion Portrait in Dotonbori](https://media.reeldance.ai/galleries/assets/9a5499fc5a47381b8657e7ff06906c37bbaad93cd6428045479367527b4878f6.webp)

<details>
<summary>完整原始提示词</summary>

```text
绝美23岁东亚美女，身材匀称丰满，胸部明显自然丰满，视觉约 D 至 E 杯，具有自然重量感与柔和圆润轮廓，胸腰差明显，纤细腰部与丰满胸部形成清晰自然比例对比；气质时尚、自信、温柔。酒红色深 V 领细肩带吊带背心，领口深开至胸线，吊带与领口边缘均手工缝制黑色细密蕾丝花边增加设计感，修身剪裁紧密贴合身体曲线，下摆止于腰线上方完整露出腰腹；搭配黑色皮质 A 字超短裙，低腰设计裙腰落在胯骨，裙身采用柔软小羊皮材质，裙长仅至大腿上四分之一，右侧裙摆开有 5cm 高叉增加行动自由度。

成熟都市妆容，深色烟熏眼影，酒红色丝绒哑光唇与上装呼应，黑色长发侧分自然披散至肩，一侧夹在耳后露出银色几何长耳坠，佩戴多层细银项链与银色宽手镯。

蹲在大阪道顿堀夜市街边，双脚前后分开保持低蹲姿态，右膝抬起，左脚完全着地承重，上身前倾保持平衡，右手正在调整右脚踝处松脱的细银脚链，左手自然撑在右膝上稳住身体，在扣好脚链搭扣的瞬间抬起脸庞正面与镜头对视，神情专注又带一丝俏皮。身后是霓虹灯招牌林立的热闹夜市，红色灯笼、黄色暖帘与蓝色霓虹交织，地面湿润反射五彩光斑。

85mm人像镜头，大光圈f/1.8浅景深，背景霓虹与人群柔和虚化成梦幻光斑散景，真实皮肤质感呈现健康光泽，夜间多色霓虹灯从不同角度照亮面部与身体曲线，酒红与蓝色霓虹在皮肤上形成冷暖光影交错，地面湿润反射增强光线层次感，高级日本都市夜景时尚写真，电影感霓虹色调，ultra realistic, masterpiece, best quality。
```

</details>

<a id="casual-selfie-in-an-abandoned-house"></a>
### 废弃鬼屋里的随手自拍

废屋中的手机自拍强调随手构图和刻意保留的业余拍摄感。

BLITAST STUDIO (@blitast_studio) · <a href="https://x.com/blitast_studio/status/2107588543493329088" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Casual Selfie in an Abandoned House](https://media.reeldance.ai/galleries/assets/8bbbbba090dbca41868b46c92556332a18195e10b077a180cf49d2cf8554d6a3.webp)

<details>
<summary>完整原始提示词</summary>

```text
日本人のギャルが心霊スポットの廃屋で自撮りした写真。スマホで撮影された品質。加工や作られた感じではなく、現場でパッと撮影されたようなもの。敢えての素人感を強調。
```

</details>

<a id="fictional-adult-bathroom-mirror-selfie"></a>
### 浴室镜前随手自拍

虚构成年人的浴室自拍探索近距离手机构图、自然皮肤质感、衣料褶皱和略不均匀的白平衡。

Fav Prompt (@favprompt) · <a href="https://x.com/favprompt/status/2107393957327995297" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Fictional Adult Bathroom Mirror Selfie](https://media.reeldance.ai/galleries/assets/f7a6e5b444d3978e3188048ccdf7f6aa16f049334680960b7f7457401ded917c.webp)

<details>
<summary>完整原始提示词</summary>

```text
A hyper-realistic waist-up bathroom mirror selfie of one fictional young adult woman with the Hair And Makeup and Body Type. She wears the Top and stands naturally in the Bathroom Setting, holding a smartphone at arm's length in the mirror reflection. Use a front-camera wide-angle perspective with slightly close, imperfect framing, mild lens distortion and a casual off-center composition. Her very full, heavy bust should create a pronounced upper-body silhouette on a narrow torso while remaining anatomically natural and realistically supported by the top. Give her a relaxed soft pout, sleepy eyes and a direct gaze toward the phone lens. Use the Lighting as the only main source, with believable shadows and imperfect white balance. Preserve visible pores, fine skin texture, natural shine, flyaway hairs, realistic fabric tension and subtle smartphone sensor noise. Add gentle focus falloff and mild compression for an ordinary phone-photo feel, never a studio portrait. Show no other person, text, watermark, logo, username, interface overlay or border.

Use these details:
Hair And Makeup: "long, softly waved brunette hair with nude lipstick and minimal natural makeup"
Body Type: "curvy petite figure with a very full, heavy bust and narrow ribcage"
Top: "fitted black sweetheart-neck top"
Bathroom Setting: "a slightly lived-in bathroom with pale tile, a visible mirror and ordinary countertop details"
Lighting: "direct cool-white bathroom ceiling light"
```

</details>

<a id="fashion-portrait-by-a-petrol-station-cooler"></a>
### 夜间加油站冷柜旁的时尚人像

全身侧面时尚人像以深色穿搭和夜间停车场，对比明亮的饮料冷柜。

DANJI (@DanjiTosaka) · <a href="https://x.com/DanjiTosaka/status/2107551234366537916" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

<a href="https://x.com/DanjiTosaka/status/2107551262220685576" rel="nofollow noreferrer" referrerpolicy="no-referrer">Prompt source / 提示词原帖</a>

![Fashion Portrait by a Petrol-Station Cooler](https://media.reeldance.ai/galleries/assets/5f26c87c252a6f92bcd1cc5442c4c4998bbe586f48b77e9b675ab3d5bb6efec3.webp)

<details>
<summary>完整原始提示词</summary>

```text
A photorealistic full-length side profile of a tall young Korean woman with a slim athletic build and long legs, standing upright beside a brightly lit refrigerated beverage case in a gas station parking lot at night. Her black hair is cut in a sleek, glossy wolf cut with face-framing layers and soft curtain bangs, a few strands falling over one cheek. She wears a tight black satin crop top with thin straps that clings to her torso and leaves her midriff and abs bare, a short black leather mini skirt riding high on her thighs, and black strappy stiletto sandals with thin ankle straps. Accessories: a delicate gold chain necklace resting on her collarbone, small gold hoop earrings, a thin gold waist chain, and a slim gold bracelet on her left wrist. Her right hand holds a plain matcha-green paper cup with a straw at waist height; her left hand rests on her hip, fingers relaxed, dark nail polish visible. Her face is in clean profile toward the case, neutral expression, lips closed, eyebrows slightly arched, eyes directed at the drinks and snacks inside the glass. The refrigerator interior is the main light source, cool white and cyan spill lighting one side of her body, satin, and skin while the other side falls into deep shadow. Wet asphalt mirrors the case glow and the faint sodium streetlights; fuel pumps sit softly out of focus behind her. Shot on a Sony A7R V with an 85mm f/1.8 lens at eye level, shallow depth of field, subject sharp, background gently blurred. Cinestill 800T color, cool teal highlights, natural skin texture with visible pores, no text, no watermark. Vertical 2:3 frame.
```

</details>

<a id="the-danji-face-beanie-macro-portrait"></a>
### 黑色针织帽与定制字标的微距人像

横向近景人像把面部细节与黑色罗纹针织帽、白色 THE DANJI FACE 字标结合。

DANJI (@DanjiTosaka) · <a href="https://x.com/DanjiTosaka/status/2107534966561083882" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

<a href="https://x.com/DanjiTosaka/status/2107534996521017584" rel="nofollow noreferrer" referrerpolicy="no-referrer">Prompt source / 提示词原帖</a>

![THE DANJI FACE Beanie Macro Portrait](https://media.reeldance.ai/galleries/assets/5825ab9384d6c566d817360a7ad4d3df8616b40cbd5b17536aedd2f8054dcc4c.webp)

<details>
<summary>完整原始提示词</summary>

```text
A super close-up view of a young woman with blonde hair, wearing a black ribbed beanie featuring a prominent white "THE DANJI FACE" in the style of the north face logo patch. She has brown eyes, full lips, pink blush, and long false eyelashes, posed in a macro landscape portrait orientation.
```

</details>

<a id="terrace-palm-seated-lifestyle"></a>
### 棕榈旁的露台坐姿人像

棕榈旁的露台坐姿人像

Ryan Fox (@hardik_lut83675) · <a href="https://x.com/hardik_lut83675/status/2108031379770617941" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Seated Terrace Portrait beside a Fan Palm](https://media.reeldance.ai/galleries/assets/efd0b9b9cd7e0e90af1ec1a73a9797d381c9f2131f268e7686a572c7368fa59b.webp)

<details>
<summary>完整原始提示词</summary>

```text
{
  "prompt": {
    "style": "authentic outdoor lifestyle portrait, natural smartphone photography, candid vacation aesthetic, realistic and minimally retouched",
    "subject": {
      "gender": "young woman",
      "appearance": "young South Asian woman with a warm medium skin tone, dark brown eyes, naturally defined eyebrows, soft facial features",
      "hair": "long dark brown to black hair, center-parted, loose natural waves cascading over the shoulders",
      "expression": "calm, relaxed, slightly thoughtful expression",
      "gaze": "looking naturally toward the left side of the frame rather than directly at the camera",
      "pose": "seated comfortably on an outdoor cushioned lounge chair, upper body upright, left arm resting naturally beside her, right hand resting casually on her thigh"
    },
    "outfit": {
      "top": "fitted lavender-purple ribbed camisole crop top with thin spaghetti straps and a square neckline",
      "bottom": "flowy white high-waisted skirt with a lightweight semi-sheer fabric and a high side opening",
      "accessories": [
        "very thin delicate gold necklace",
        "simple slim gold bracelet on the left wrist"
      ]
    },
    "environment": {
      "location": "elevated outdoor terrace or balcony overlooking a scenic landscape",
      "seating": "large cushioned outdoor lounge chair with dark patterned floral upholstery",
      "plants": "large tropical fan palm plant positioned prominently on the right side of the frame",
      "background": "lush green trees, distant mountain peaks, glass or metal balcony railing, clear open sky",
      "architecture": "subtle upscale terrace setting with a large stone planter surrounding the palm",
      "time_of_day": "late afternoon or early evening",
      "lighting": "soft warm natural sunlight coming from the left/front, gentle highlights on the subject and natural soft shadows"
    },
    "composition": {
      "camera": "smartphone portrait photography",
      "orientation": "vertical 4:5",
      "framing": "medium-full seated portrait, subject occupying the central portion of the frame",
      "camera_angle": "eye-level or slightly above eye level",
      "perspective": "natural smartphone lens perspective without wide-angle distortion",
      "background_balance": "subject clearly separated from the lush greenery while mountains and palm leaves remain visible",
      "depth_of_field": "moderate natural depth of field, subject sharp with background slightly softened but still recognizable"
    },
    "photographic_quality": {
      "look": "authentic Instagram travel/lifestyle photograph",
      "camera_quality": "modern smartphone camera",
      "skin": "natural realistic skin texture with subtle pores and minor imperfections",
      "colors": "soft warm natural tones, pastel lavender top, bright white skirt, rich greens and pale blue sky",
      "contrast": "moderate natural contrast",
      "sharpness": "realistic smartphone sharpness without artificial oversharpening",
      "processing": "minimal computational photography, no beauty filter, no excessive HDR",
      "atmosphere": "peaceful upscale vacation terrace feeling"
    },
    "negative_prompt": [
      "studio photography",
      "professional fashion shoot",
      "heavy makeup",
      "beauty filter",
      "plastic skin",
      "over-smoothed skin",
      "unrealistic body proportions",
      "exaggerated curves",
      "extra fingers",
      "deformed hands",
      "extra limbs",
      "distorted face",
      "warped clothing",
      "duplicate jewelry",
      "artificial background",
      "fake mountains",
      "oversaturated colors",
      "extreme HDR",
      "dramatic cinematic lighting",
      "text",
      "watermark",
      "logo"
    ]
  }
}
```

</details>

<a id="overhead-crosswalk-street-fashion-geometry"></a>
### 俯拍斑马线街头时尚

俯拍斑马线街头时尚。

Ryan Fox (@hardik_lut83675) · <a href="https://x.com/hardik_lut83675/status/2108332864999661910" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Overhead Crosswalk Street Fashion](https://media.reeldance.ai/galleries/assets/cd916b3e652d01babbc1393c9bf2621a4acdcae9445e472a307e75ab419aacb9.webp)

<details>
<summary>完整原始提示词</summary>

```text
{
  "prompt": {
    "style": "authentic candid street-style photograph, early-2000s inspired fashion aesthetic, realistic smartphone photography, slightly grainy film-like texture",
    "subject": {
      "gender": "young woman",
      "appearance": "young South Asian woman with warm medium skin tone, long dark brown wavy hair parted near the center, naturally full eyebrows, soft facial features",
      "expression": "calm, confident, slightly serious expression while looking directly toward the camera",
      "pose": "standing on a pedestrian crossing, photographed from a high overhead angle, looking upward toward the camera, both hands casually placed near the front pockets of her jeans"
    },
    "outfit": {
      "top": "fitted white asymmetrical one-shoulder crop top with subtle ruched fabric",
      "bottom": "loose-fitting low-rise washed blue denim jeans with a relaxed baggy silhouette",
      "footwear": "white sneakers, partially visible",
      "accessories": [
        "small rectangular black sunglasses",
        "short pearl necklace",
        "multiple chunky silver bangles on both wrists",
        "silver rings",
        "layered silver chain belt hanging loosely around the waist"
      ]
    },
    "hair": {
      "style": "long, voluminous naturally wavy dark brown hair flowing over both shoulders",
      "texture": "slightly tousled with individual strands visible",
      "movement": "subtle natural movement from outdoor breeze"
    },
    "environment": {
      "location": "urban street intersection",
      "ground": "dark textured asphalt with broad white pedestrian crossing stripes",
      "background": "only the street surface and crosswalk visible due to the steep overhead camera angle",
      "lighting": "strong warm late-afternoon golden sunlight creating defined shadows across the asphalt",
      "shadows": "long diagonal architectural or environmental shadows crossing the pedestrian stripes"
    },
    "composition": {
      "camera_angle": "high-angle overhead shot looking downward at approximately 60–70 degrees",
      "framing": "vertical portrait composition, subject centered in the frame from head to below the knees",
      "perspective": "slightly wide smartphone lens perspective",
      "orientation": "vertical 4:5",
      "subject_position": "woman positioned slightly toward the center-left while looking directly upward into the lens"
    },
    "photographic_quality": {
      "camera": "modern smartphone camera",
      "look": "authentic Instagram street-fashion photograph",
      "color": "warm golden-hour tones with slightly muted blacks and natural skin tones",
      "texture": "visible fine film grain and realistic asphalt texture",
      "dynamic_range": "natural contrast with slightly blown warm highlights",
      "retouching": "minimal, natural skin texture preserved",
      "depth": "sharp subject with realistic environmental detail"
    },
    "negative_prompt": [
      "studio photography",
      "artificial posing",
      "heavy makeup",
      "beauty filter",
      "plastic skin",
      "excessive skin smoothing",
      "unrealistic body proportions",
      "extra fingers",
      "deformed hands",
      "extra limbs",
      "distorted sunglasses",
      "duplicate jewelry",
      "blurred face",
      "oversaturated colors",
      "extreme HDR",
      "cinematic bokeh",
      "text",
      "watermark",
      "logo"
    ]
  }
}
```

</details>

<a id="storyboards"></a>
## 角色设定与连续画面

<a id="headless-turnaround-character-sheet"></a>
### 单面部加无头三视图角色设定页

将一个面部特写与颈部以下的正、背、侧面服装视图并列，角色设定页只保留一张脸。

Wanderson Jackson (@jackson99ai) · <a href="https://x.com/jackson99ai/status/2107635724480610563" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Headless Turnaround Character Sheet](https://media.reeldance.ai/galleries/assets/6becaacba396df4419a0a37e98f994b7a92b914ea2823dd5e00257d9fa2124c2.webp)

<details>
<summary>完整原始提示词</summary>

```text
Wide 16:9 character model sheet in HEADLESS TURNAROUND layout. Left third: ONE large front-facing face close-up, neutral expression, even soft light, the only face on the sheet. Right two thirds: full-body turnaround of the same outfit, front, back and side views at identical scale in a neutral standing pose, every body view HEADLESS (cropped at the neck) so the sheet contains exactly one face. Flat neutral light-grey studio background, no text, no labels, no story action.
```

</details>

<a id="movie-collage-from-ending-to-beginning"></a>
### 从结局到开头的电影拼贴

用一句提示词把喜爱的电影做成拼贴，并从结局向开头倒叙。

K Group News (@AllTesterhag) · <a href="https://x.com/AllTesterhag/status/2107340674001715482" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Movie Collage from Ending to Beginning](https://media.reeldance.ai/galleries/assets/b658b906f7184ff632f3d9ec9b9505214fb51a910445f1b9b56d4bc6ddb30291.webp)

<details>
<summary>完整原始提示词</summary>

```text
make a collage of your favourite movie from end to start
```

</details>

<a id="imagined-google-ceo-childhood-timeline"></a>
### 谷歌 CEO 从童年到现在的时间线

生成时间线以同一张脸想象人物不同年龄。下方为 Nano Banana 2.1，童年场景是虚构重建画面。

Marcel (@marcthecreatorr) · <a href="https://x.com/marcthecreatorr/status/2107532275529273535" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Imagined Google CEO Childhood Timeline — Comparison image: Nano Banana 2.1 is the BOTTOM panel and GPT Image 2.5 is above. The childhood scenes are AI-imagined, not historical photographs.](https://media.reeldance.ai/galleries/assets/e6e664293c54e0ae2987d2a1f26bb488e52fd8bdfa3176d70ab7db37b25a3573.webp)

<details>
<summary>完整原始提示词</summary>

```text
create a realistic timeline of google’s ceo from childhood to now while keeping the same face throughout.
```

</details>

<a id="four-character-giant-banana-comic"></a>
### 四角色发现巨型香蕉的四格漫画

四位重复角色在四格漫画中发现巨型香蕉，通过一致服装和简短对白连接剧情。

Raza (@AIWithRaza) · <a href="https://x.com/AIWithRaza/status/2107534561685221433" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Four-Character Giant Banana Comic](https://media.reeldance.ai/galleries/assets/c3eda5aa4e30e300bc3ca5880844ce6476c20b924b780f7d486eeddd25c17ba2.webp)

<details>
<summary>完整原始提示词</summary>

```text
A 4-panel comic strip in a clean modern style. The same four characters appear in every panel with identical faces, hair and outfits: Ali, a tall man with a beard and a green hoodie; Sara, a woman with a red hijab and round glasses; Max, a small orange cat; and Rob, a silver robot with one blue eye. Panel 1: they find a giant banana in a park. Panel 2: Rob scans it, and his screen reads "2.1". Panel 3: Sara takes a photo while Max sniffs it. Panel 4: Ali says in a speech bubble, "Okay, this one actually gets the text right." Aspect ratio 1:1, 2K.
```

</details>

<a id="products"></a>
## 产品与物体研究

<a id="eight-object-spatial-instruction-test"></a>
### 八类物件数量和位置遵循测试

橡木桌俯拍场景对物体数量、位置和钟表指针提出精确要求，把静物平铺变成空间指令练习。

Dheepan Ratnam (@Dheepanratnam) · <a href="https://x.com/Dheepanratnam/status/2107534294927413696" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Eight-Object Spatial Instruction Test](https://media.reeldance.ai/galleries/assets/c26e895a037988a95dd56a71273e0e0e9a257b60a50ed9aef55749023129480a.webp)

<details>
<summary>完整原始提示词</summary>

```text
{
  "shot": "top-down flat lay, 90-degree overhead, photorealistic, sharp focus edge to edge",
  "surface": "weathered oak table",
  "lighting": "soft north-facing window light from the top edge of frame",
  "objects": [
    "exactly 3 red apples in the top-left corner",
    "exactly 7 silver paperclips in a straight horizontal line along the bottom edge",
    "a round analogue wall clock in the centre with hands clearly showing 10:42",
    "one blue ceramic mug, handle pointing right, in the top-right corner",
    "exactly 5 yellow pencils fanned out to the left of the clock",
    "a single green leaf resting on top of the mug rim",
    "2 white dice showing a 6 and a 3, bottom-right corner",
    "an open notebook on the right of the clock with the handwritten word 'ADHERENCE'"
  ],
  "rules": ["every count is exact", "every position is exact", "no other objects, no people, no hands, no extra fruit"]
}
```

</details>

<a id="left-hand-writing-and-seven-apples-test"></a>
### 左手书写、七颗苹果与 7:43 咖啡馆测试

咖啡馆场景把左手书写、手指与苹果数量、钟表时间和可读招牌组合成细节指令练习。

Raza (@AIWithRaza) · <a href="https://x.com/AIWithRaza/status/2107533432154964187" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Left-Hand Writing and Seven Apples Test](https://media.reeldance.ai/galleries/assets/f1f3fcabf47fb7e6814be5871308b93ce7d27194ea6d556268e8eaca707cdf80.webp)

<details>
<summary>完整原始提示词</summary>

```text
A photorealistic photo of a cozy café interior in soft afternoon window light, shot on a 35mm lens. A young woman sits at a wooden table writing in a notebook with her LEFT hand, while her right hand is raised showing exactly three fingers. On the table: a wine glass filled with red wine all the way to the very brim, the surface touching the rim; a white bowl holding exactly seven green apples; and a folded newspaper with the headline "NANO BANANA 2.1 IS HERE" and the date "OCTOBER 6, 2026". On the wall behind her: an analog clock showing exactly 7:43, and a chalkboard menu that reads "TODAY'S SPECIAL: PISTACHIO CROISSANT $4.50" with "NO WIFI. TALK TO EACH OTHER." written below it. A mirror on the side wall shows her reflection accurately, matching her pose. Natural skin texture, realistic reflections, sharp legible text. Aspect ratio 4:5, 4K.
```

</details>

<a id="numbered-fingers-watch-and-fabric-test"></a>
### 数字指尖、手表与织物微距压力测试

手部微距要求指尖数字、显示 3:15 的手表、水珠和清晰的绞花针织纤维。

Dheepan Ratnam (@Dheepanratnam) · <a href="https://x.com/Dheepanratnam/status/2107534303907225645" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Numbered Fingers, Watch and Fabric Test](https://media.reeldance.ai/galleries/assets/7da0912df783fe3453ba0c0b3d494e751d94a183b2fb6db4e4ae20c37bf1c290.webp)

<details>
<summary>完整原始提示词</summary>

```text
{
  "subject": "an adult's right hand, palm facing camera, all five fingers spread",
  "markings": "the numbers 1, 2, 3, 4, 5 written in black marker on the fingertips, thumb = 1 through little finger = 5",
  "accessory": "a vintage steel wristwatch on the wrist, dial facing camera, hands showing 3:15",
  "texture_1": "chunky cream cable-knit wool sleeve pushed up to mid-forearm, individual fibres visible",
  "texture_2": "small water droplets on the skin of the palm",
  "background": "dark slate grey seamless backdrop",
  "camera": "100mm macro lens, f/8, studio softbox from the left",
  "rules": ["exactly five fingers", "correct anatomy and knuckle creases", "numbers sharp and in the stated order", "watch time exactly as stated", "photoreal, no plastic skin"]
}
```

</details>

<a id="stradivarius-violin-in-a-display-case"></a>
### 世界最昂贵斯特拉迪瓦里小提琴展柜摄影

日文提示词要求以专业展览摄影风格描绘展示柜中的斯特拉迪瓦里小提琴。

Jayz(ジェイズ)＠AI音楽 (@PElfines71321) · <a href="https://x.com/PElfines71321/status/2107521814113263727" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

<a href="https://x.com/PElfines71321/status/2107522248508850395" rel="nofollow noreferrer" referrerpolicy="no-referrer">Prompt source / 提示词原帖</a>

![Stradivarius Violin in a Display Case](https://media.reeldance.ai/galleries/assets/c65831b5976abc69f5184daf9f49ee50e9b62d6fef168e481df5007d29e71943.webp)

<details>
<summary>完整原始提示词</summary>

```text
世界で一番高価なストラディヴァリのバイオリンをショーケースの中に入れた状態で展示している様子を、現地でプロカメラマンが撮影したスチル写真として作画して。
```

</details>

<a id="three-stage-tint-stick-ugc"></a>
### 三阶段腮红棒创作者广告

三阶段腮红棒创作者广告

Justin Lord (@Justin_lords) · <a href="https://x.com/Justin_lords/status/2107832260032606378" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Three-Stage Tint-Stick Creator Advertisement](https://media.reeldance.ai/galleries/assets/168d6a5db2155f839674e41ff95752bf6a45134d46f1867e0a10fbaa30ac3392.webp)

<details>
<summary>完整原始提示词</summary>

```text
Create a photorealistic first frame for a human-led beauty advertisement. An original fictional adult woman aged 28, warm medium-brown skin with visible natural pores and a few faint freckles, dark brown eyes, shoulder-length dark-brown wavy hair worn loose, simple small gold stud earrings, plain cream cotton crew-neck T-shirt. Friendly expressive face with normal asymmetry. Subtle natural makeup, not airbrushed.A believable modest apartment bathroom beside a window, soft morning daylight, cream painted wall, muted green tile detail, blurred ordinary towel in background. Casual premium creator UGC, recorded on a good smartphone, natural depth of field, mild phone-camera grain, realistic everyday exposure. Portrait framing. No studio glamour lighting, no cinematic teal-orange grade, no beauty filter.She stands facing the phone camera, framed from mid-chest to just above her head, eyes looking directly into the lens, with an engaged conversational expression and mouth gently closed. One small unbranded lip-and-cheek tint stick: short matte warm-ivory cylindrical barrel, muted terracotta band around its base, rounded dusty-rose cream tip exposed. Simple solid geometry, no text, no logo, no transparent packaging. A cosmetic concept product, not a real brand.She holds exactly one tint stick upright in her right hand at upper-chest height, clearly visible beside her face. Five anatomically correct fingers and a natural relaxed grip, product not touching her face. Her other hand is out of frame. Hair tucked away from her right cheek.Leave modest room above her head and below the product for small later captions. Single person. No writing, overlay, collage, inset, watermark or logos. Skin and hands must look like an ordinary unretouched phone photograph.

APPLICATION
Keep the same woman, clothes, hair, bathroom and light. Move to a slight three-quarter close-up. Put a tiny dusty-rose dot on her right cheek, with two fingertips beside it, ready to blend. Preserve natural skin texture.

FINISHED LOOK
Keep the same woman, room and tint stick. She holds it beside her shoulder. Add restrained rose colour to lips and cheeks. Keep her pores, freckles and face shape unchanged. Natural phone-camera portrait.
```

</details>

<a id="edits"></a>
## 照片编辑

<a id="glass-music-player-on-a-bus-window"></a>
### 公交车窗上的玻璃质感音乐播放器

把参考人物放入带忧郁氛围的公交车窗场景，再叠加半透明音乐播放器界面。需要提供人物参考照片。

Kaan (@kaanakz) · <a href="https://x.com/kaanakz/status/2107540710912033099" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

<a href="https://x.com/kaanakz/status/1986765997345271956" rel="nofollow noreferrer" referrerpolicy="no-referrer">Prompt source / 提示词原帖</a>

![Glass Music Player on a Bus Window](https://media.reeldance.ai/galleries/assets/000585d2af86fedc17dcff9394f7cefeeb60abaa411d2b22bb96b644cdbddc25.webp)

<details>
<summary>完整原始提示词</summary>

```text
{
    "promptDetails": {
        "description": "A prompt to *create a new scene* by placing a subject (based on a reference photo) into a new atmospheric background, then overlaying a music UI.",
        "styleTags": [
            "Aesthetic Edit",
            "Cinematic",
            "Scene Compositing",
            "Glassmorphism"
        ]
    },
    "subjectReference": {
        "source": "[UPLOADED IMAGE]",
        "description": "Use this image *only* as a reference for the subject's face, hair, and appearance. Do *not* use its original background."
    },
    "scene": {
        "background": {
            "setting": "the window on the bus is sad, troubled, sorrowful",
            "details": "This is the *new* environment the subject must be placed into, completely replacing the original background."
        },
        "subject": {
            "description": "The young man whose appearance is defined by the `[UPLOADED IMAGE]`.",
            "pose": "her head against the window on the bus",
            "focus": "Subject is in sharp focus, fully integrated into the new background."
        }
    },
    "overlayObject": {
        "type": "Floating Glassmorphism Music Player UI",
        "relationshipToEnvironment": "the UI is physically bonded to the same plane as the bus window glass, not screen-space overlay",
        "transform": "the UI matches the *exact same rotation and perspective* as the window glass surface. If the window is at a 45° angle, the UI also visually appears rotated 45° with light distortion consistent with that plane.",
        "surfaceInteraction": "slight reflection + subtle refraction through glass, extremely thin glassmorphism layer, physically plausible",
        "components": {
            "songTitle": "Bak",
            "artistName": "Pilli Bebek",
            "position": "mounted onto the window plane at the middle-left region of the frame; not floating in front"
        }
    },
    "technicalStyle": {
        "aspectRatio": "1:1",
        "photographyStyle": "Cinematic Portrait, Realistic Compositing",
        "camera": {
            "shotType": "Medium Shot or Medium Close-Up",
            "angle": "Eye-level",
            "depthOfField": "Shallow, to blur the new background (bokeh)."
        },
        "lighting": {
            "type": "Soft, Ambient, Moody",
            "description": "Lighting on the subject *must match* the lighting of the new background setting (e.g., neon reflections, soft cafe light)."
        },
        "color": {
            "palette": "Muted, cinematic color grading."
        }
    },
    "audioDevice": {
        "type": "subtle in-ear wireless earbuds",
        "fit": "naturally seated in both ears with correct realistic skin contact",
        "color": "matte black or dark neutral tone",
        "consistencyNote": "no cable, no bulky gaming headset"
    },
    "moodReinforcement": "earbuds imply the sad music 'Bak - Pilli Bebek' is what the subject is listening to."
}
```

</details>

<a id="dutch-angle-mecha-throw-with-two-references"></a>
### 角色抛掷机甲的荷兰角动作场面

以两张输入参考图构建倾斜镜头下的动态投掷场景，两张参考图在下方单独列出。

Nokosu (@Nokosu_kansoku) · <a href="https://x.com/Nokosu_kansoku/status/2107668460012802467" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Dutch-Angle Mecha Throw with Two References](https://media.reeldance.ai/galleries/assets/96e709ee655d81e1ab7852868d09abda747c8b9ce68833a3916698e2d187d7b9.webp)

参考输入（与输出分开）：

<a href="https://media.reeldance.ai/galleries/assets/1dcb0950ffebf8f7a89c5f401bc9cb1811d6f2ce98ae432a2629ad96aec2c11a.webp" rel="nofollow noreferrer" referrerpolicy="no-referrer">输入参考图 1</a> · <a href="https://x.com/Nokosu_kansoku/status/2107668460012802467" rel="nofollow noreferrer" referrerpolicy="no-referrer">Source / 原帖</a>

<a href="https://media.reeldance.ai/galleries/assets/6ad70eac677b1dae872c5653d2a6d1057ba9c74fb25f86414ee45b11a649e76c.webp" rel="nofollow noreferrer" referrerpolicy="no-referrer">输入参考图 2</a> · <a href="https://x.com/Nokosu_kansoku/status/2107668460012802467" rel="nofollow noreferrer" referrerpolicy="no-referrer">Source / 原帖</a>

<details>
<summary>完整原始提示词</summary>

```text
image1がimage2を持ち上げてダイナミックにぶん投げている画像。構図はダッチアングル
```

</details>

<a id="cobra-style-transfer-comparison"></a>
### 眼镜蛇的四种风格迁移

将一张图的主体迁移到另一张图的媒介与配色。右上输出为 Nano Banana 2.1，左侧是参考图，右下为 Nano Banana Pro。

Finn McKenty (@thefinnmckenty) · <a href="https://x.com/thefinnmckenty/status/2107574685433286858" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Cobra Style Transfer Comparison — Comparison composite: Nano Banana 2.1 is the UPPER-RIGHT output. Left panels are content/style references; lower-right is Nano Banana Pro. This is one prompt and one reviewed style example.](https://media.reeldance.ai/galleries/assets/6905862788946ef40c6238ccc376599a91fc57d7926e0e2ea2b75712369ebd3f.webp)

<details>
<summary>完整原始提示词</summary>

```text
Create an image of the content as shown in [image 1] but with the same medium, color palette, mood, rendering technique, saturation level, textures, and overall style of [image 2]. Objective: Style transfer from [image 1 to [image 2]
```

</details>

<a id="tank-top-necklace-and-ponytail-edit"></a>
### 更换背心、项链、发型与墙面

保留场景并改变衣服、首饰、发型和墙色。中间为 Nano Banana 2.1，左右分别为原图和 Flux 3 输出。

Ori Silver (@OriSilver) · <a href="https://x.com/OriSilver/status/2107521311685701663" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Tank Top, Necklace and Ponytail Edit — Editing comparison: Nano Banana 2.1 is the MIDDLE panel. The left panel is the original reference and the right panel is Flux 3.](https://media.reeldance.ai/galleries/assets/60ba7fad7df4a2265e5e110b1215c8d1051e877dbe61aff0c8630799824d0453.webp)

<details>
<summary>完整原始提示词</summary>

```text
Change that she is wearing a tanktop black sleevless and her necklece is now gold she also has her hair in a pony tail and the background behind her has dark blue walls instead of wood panels, everything else stays the same
```

</details>

<a id="playful-bali-monkey-forest-travel-selfie"></a>
### 巴厘岛猴林的搞怪旅行自拍

把参考人物置于猕猴旁，用墨镜与偶然的剪刀手形成巴厘岛旅行自拍的趣味瞬间。需要提供面部参考图。

lynn (@lynninchis) · <a href="https://x.com/lynninchis/status/2107569908624367740" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

<a href="https://x.com/lynninchis/status/2107570055709938040" rel="nofollow noreferrer" referrerpolicy="no-referrer">Prompt source / 提示词原帖</a>

![Playful Bali Monkey-Forest Travel Selfie](https://media.reeldance.ai/galleries/assets/58fe2232ffc8829f3cd3c85fb42e00cee09dc2c586f90de9f89057d4aa9c4359.webp)

<details>
<summary>完整原始提示词</summary>

```text
Fun travel selfie photo shot on a phone front camera, vertical 3:4, candid lighthearted Bali Instagram vibe. Use the attached
reference image as the identity lock for the face and preserve the exact facial features, bone structure and likeness. The
subject is taking a selfie with one arm stretched out toward the lens, tilting her head in close beside a long-talled macaque
monkey perched next to her, lips pushed into a playful exaggerated kiss pout, eyes hidden behind sunglasses, the whole
expression cheeky and amused, while behind her the monkey just happens to raise two fingers in a peace sign right beside
its head in a perfectly timed comedic accident. The mood is funny, carefree and full of travel joy, an authentic once-in-a-trip
moment. Wardrobe: oversized tortoiseshell butterfly sunglasses, a beige ruched halter crop top with a tie-front detail, a
flowing black sarong wrapped low on the hips. Environment deep lush tropical jungle with thick hanging banyan tree roots,
tangled vines and dense green foliage filling the background, the unmistakable look of the Ubud Monkey Forest. Lighting:
soft diffused daylight filtering down through the forest canopy, gentle, even and natural with no harsh shadows. Framing and
angle: arm-length selfie point of view with both faces close together in the upper frame, slightly tilted and informal, raw
authentic real-photo feel
```

</details>

<a id="secret-shadow-instant-film-edit"></a>
### 透露内心愿望的秘密影子

在即时成像相框内保留上传照片，让午后长影演出主体的隐秘愿望。需要提供照片。

Raza (@AIWithRaza) · <a href="https://x.com/AIWithRaza/status/2107548617687130522" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

<a href="https://x.com/AIWithRaza/status/2107548877629088059" rel="nofollow noreferrer" referrerpolicy="no-referrer">Prompt source / 提示词原帖</a>

![Secret Shadow Instant-Film Edit](https://media.reeldance.ai/galleries/assets/c3d87025ebdf602ffbc9a7bd2c13ef5cc91cae3348ca140a1b73dee26aecda75.webp)

<details>
<summary>完整原始提示词</summary>

```text
Create one "Secret Shadow" image per upload. Never combine photos.

Format: Vertical 16:9, presented as a single instant-film photo with a slightly thicker ivory bottom border.

Photo: Keep the uploaded photo faithful. Preserve the subject, pose, faces, colors and setting. Do not redesign, restyle or replace anything. Only adjust light and shading as much as the shadow requires.

Light: Add one low, warm, late-afternoon light source from the side, consistent with the scene, so the main subject casts a long, crisp shadow across the nearest wall, floor or ground.

Shadow Logic: Ask what this subject secretly wishes it were doing right now, based on what the photo shows. The shadow does exactly that. For example, a person at a laptop might cast the shadow of someone asleep in a hammock, a dog waiting by the door might cast the shadow of a dog driving a car, and a coffee cup might cast the shadow of a smoking volcano. Choose one clear, specific, surprising wish for each upload. Never fall back on the same idea.

Shadow Rules: The shadow must begin exactly where the subject touches the surface and match its outline at the base, then transform as it stretches away. It must behave like a real shadow: dark, soft-edged, flat on the surface it falls on, bending over steps and corners, with no color or inner detail. Only the main subject gets a secret shadow; everything else casts normal shadows.

Caption: Handwrite one short, dry, witty English caption in black ink on the bottom border, based on the shadow's wish. Under six words, understated, never inspirational.

Style: Real photography, warm golden light, subtle film grain, quiet and cinematic. It should feel like the shadow was always there and nobody noticed.

Negative: No extra subjects or props, no colored or detailed shadows, no glow or magic effects, no change to faces or identity, no text except the caption, no watermark, no logo, no UI.
```

</details>

<a id="banana-phone-banknote-editing-attempt"></a>
### 香蕉电话与新字样的迷宫纸币

雕版纸币编辑改变文字和符号，并要求香蕉电话姿态。输出仍把手留在下巴处，没有完成将香蕉移到耳边的要求。

ibexdream (@ibexdream) · <a href="https://x.com/ibexdream/status/2107520955153076621" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Banana Phone Banknote Editing Attempt — The author requested moving the banana to the ear, but the shown output still has the hand at the chin. This example preserves an unsuccessful editing attempt.](https://media.reeldance.ai/galleries/assets/26e88139b20895804e4790bb936afc6d79fb3e605d3baad4296629cd0e40de39.webp)

<details>
<summary>完整原始提示词</summary>

```text
Edit this image while preserving the antique engraved banknote style, the philosopher’s identity, and the overall composition. Change the philosopher so he is holding a banana to his ear as if he is speaking on a telephone. Replace the text "THE CURRENCY OF THOUGHT" with "THE CURRENCY OF NANOBANANA". Replace the text "THE LABYRINTH OF THOUGHT" with "THE LABYRINTH OF PROMPTS". Add the central motto "IN BANANA WE TRUST". Change the serial number to "NB-21098471". Redesign the corner symbols so they become banana-infinity icons. Keep the image elegant, surreal, intricate, and visually coherent, with all changes integrated naturally into the engraved banknote design.
```

</details>

<a id="labyrinth-banknote-to-oil-painting"></a>
### 迷宫纸币转化为超写实油画

将哲学家与迷宫的雕版设计改成戏剧感油画，同时保留文字与超现实构图。需要提供前序作品图。

ibexdream (@ibexdream) · <a href="https://x.com/ibexdream/status/2107520960370790593" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Labyrinth Banknote to Oil Painting](https://media.reeldance.ai/galleries/assets/e99b25fbcc69b1d2c91fad7071680070fc6f826c8841f1395ab111691a655e43.webp)

<details>
<summary>完整原始提示词</summary>

```text
Transform this image into an ultra-realistic oil painting while preserving the philosopher’s identity, the banana held to his ear like a telephone, the labyrinth concept, and the overall composition. Reinterpret the engraved banknote design as a richly painted fine-art scene with realistic skin, expressive brushwork, detailed robes, and a dramatic, museum-quality atmosphere. The labyrinth should become a painted architectural maze integrated into the composition. Preserve the text “THE CURRENCY OF NANOBANANA,” “THE LABYRINTH OF PROMPTS,” the motto “IN BANANA WE TRUST,” the serial number “NB-21098471,” and the banana-infinity corner icons, adapting them naturally into the painted design. The final result should feel grand, surreal, elegant, and visually impressive.
```

</details>

<a id="violin-exhibition-label-close-up-edit"></a>
### 小提琴展览说明牌特写编辑

在前序小提琴展览场景中拉近说明牌，属于使用该场景作为上下文的连续编辑。

Jayz(ジェイズ)＠AI音楽 (@PElfines71321) · <a href="https://x.com/PElfines71321/status/2107521814113263727" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

<a href="https://x.com/PElfines71321/status/2107522248508850395" rel="nofollow noreferrer" referrerpolicy="no-referrer">Prompt source / 提示词原帖</a>

![Violin Exhibition Label Close-Up Edit](https://media.reeldance.ai/galleries/assets/f95363f0b7e306d82871d3923a39f777a3e645704950337bf033356cc4080bbb.webp)

参考输入（与输出分开）：

<a href="https://media.reeldance.ai/galleries/assets/c65831b5976abc69f5184daf9f49ee50e9b62d6fef168e481df5007d29e71943.webp" rel="nofollow noreferrer" referrerpolicy="no-referrer">输入参考图 1</a> · <a href="https://x.com/PElfines71321/status/2107521814113263727" rel="nofollow noreferrer" referrerpolicy="no-referrer">Source / 原帖</a>

<details>
<summary>完整原始提示词</summary>

```text
説明プレートをクローズアップしたスチルを作って
```

</details>

<a id="styles"></a>
## 风格与场景

<a id="lone-figure-beneath-an-indigo-dusk-sky"></a>
### 靛蓝至杏色暮空与山脊孤影

靛蓝至杏色的暮空覆盖山脊孤影，以大面积留白和一行衬线文字形成安静构图。

Emilio (@EmilioSchwaiger) · <a href="https://x.com/EmilioSchwaiger/status/2107609368434754002" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Lone Figure beneath an Indigo Dusk Sky](https://media.reeldance.ai/galleries/assets/1daea6da25eaefd188141ec1ec5dde344e4400d26a12bf363108886a0c37b8c1.webp)

<details>
<summary>完整原始提示词</summary>

```text
A vast gradient sky from deep indigo to soft apricot at dusk, a tiny lone figure on a distant ridge, enormous empty space, film grain, small elegant serif text: "Where the quiet meets the vast."
```

</details>

<a id="fluffy-mothman-by-a-moonlit-lake"></a>
### 月夜湖畔的可爱毛茸茸蛾人

毛茸茸的大翼蛾人站在月光湖畔，萤火虫与午夜蓝色共同组成温柔奇幻场景。

Heather Green (@heathergreen) · <a href="https://x.com/heathergreen/status/2107591740647416041" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Fluffy Mothman by a Moonlit Lake](https://media.reeldance.ai/galleries/assets/93d41407df6b60faccc84b55a67d65903170ff6b99afebb742e0aad93aa6d7f3.webp)

<details>
<summary>完整原始提示词</summary>

```text
An adorably cute Mothman cryptid creature with soft, fluffy details and oversized wings stands beside a sparkling lake at night, gazing toward the viewer with a gentle, curious expression. Fireflies glow among the trees, while a luminous full moon casts a silvery path across the water; dreamy atmosphere, delicate moonlit rim lighting, rich midnight blues, whimsical cinematic composition.
```

</details>

<a id="christmas-dinosaur-tangled-in-lights"></a>
### 缠满圣诞彩灯的绿色小恐龙

戴圣诞帽的绿色小恐龙被彩灯缠住，礼盒、雪花和星星增添节日气氛。

Heather Green (@heathergreen) · <a href="https://x.com/heathergreen/status/2107577675304853789" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Christmas Dinosaur Tangled in Lights](https://media.reeldance.ai/galleries/assets/74dd5aa14f4adf7e98c6ea9b7c1e6481c9e1577e6b7449be9cd27bdc1b77989f.webp)

<details>
<summary>完整原始提示词</summary>

```text
A cute green dinosaur wearing a Santa hat is sitting and tangled in colorful Christmas lights. The dinosaur has a big smile and is holding the string of lights with its hands. Around the dinosaur are several snowflakes and stars. To the left of the dinosaur, there is a red gift box with a white ribbon.
```

</details>

<a id="earth-horizon-over-india"></a>
### 从太空俯瞰印度的地球地平线

以简短提示词描绘太空视角下的地球地平线，并让印度出现在画面中。

Ved Pratap Singh (@vedthinks) · <a href="https://x.com/vedthinks/status/2107556452651118988" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Earth Horizon over India](https://media.reeldance.ai/galleries/assets/f5d59d4cd561965631028469416f92987f2f1deafc780a347aaec230dc977614.webp)

<details>
<summary>完整原始提示词</summary>

```text
Create the high quality 4k res picture of a earth horizon short from the space and showing India.
```

</details>

<a id="bosphorus-night-time-food-caravan"></a>
### 博斯普鲁斯海峡夜间烤肉车

博斯普鲁斯海峡边的简易烤肉车结合炭火、手写招牌、蒸汽和湿地反光，描绘夜间烟火气。

Ozan Sihay (@ozansihay) · <a href="https://x.com/ozansihay/status/2107544398531637407" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Bosphorus Night-Time Food Caravan](https://media.reeldance.ai/galleries/assets/b4270a734f9021aa484e76886ea033078be46d902938db5e8b757a16dc021a90.webp)

<details>
<summary>完整原始提示词</summary>

```text
Ultra-realistic night street photograph on the Istanbul Bosphorus waterfront. A tiny makeshift caravan food stall, slightly battered metal sides, steam rising. Hand-painted neon-style rickety sign reading “Köfteci Buğra Usta” in Turkish, glowing uneven cyan and warm amber, wires and brackets visibly DIY. Inside the open caravan, the usta grilling köfte over charcoal, orange ember glow on his face and apron. One waiter in a simple dark shirt stands in front of the stall; the same “Köfteci Buğra Usta” lettering is printed on the back of his shirt. Plastic stools and small low tables outside, a few locals eating, soft conversation. A plastic water jug (damacana) near the counter. Behind them, dark Bosphorus water with distant city lights and a faint ferry silhouette. Wet asphalt reflections, streetlamp spill, shallow depth of field, natural film grain, shot on 35mm f/1.8, candid documentary look, no CGI look, no text errors on signs.
```

</details>

<a id="morning-flowers-at-an-indian-shrine"></a>
### 印度晨光中在神龛前献花的男孩

赤脚孩子在褪色神龛壁画下摆放花与面包，晨光薄雾和老街肌理营造纪实氛围。

BMX (@bmx_ai13) · <a href="https://x.com/bmx_ai13/status/2107528919838867531" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Morning Flowers at an Indian Shrine](https://media.reeldance.ai/galleries/assets/30e49d45df9fa0fbca8f15e59d1a86d17c306b3277b0798b9f7f0f9aa30e8dda.webp)

<details>
<summary>完整原始提示词</summary>

```text
At sunrise in an old Indian neighborhood, a young barefoot boy sits on a low stone step beneath a beautifully faded wall painting of a Hindu goddess. He carefully places a tiny flower and a small piece of bread beneath the mural, copying rituals he has seen adults perform. Soft morning light filters through the narrow lane, creating warm highlights, gentle haze and glowing dust particles. The child wears a faded brown shirt and loose trousers, with messy hair and a thoughtful expression. The surrounding architecture is aged, with cracked plaster, exposed brick, faded blue paint and weather stains. Quiet spiritual documentary scene, natural human emotion, visual poetry, authentic street photography, warm sunrise tones, soft cinematic contrast, realistic textures, 35mm lens, subtle grain, timeless atmosphere, highly detailed photorealism, no staged posing, no text, no watermark.
```

</details>

<a id="vintage-screen-print-lighthouse"></a>
### 复古丝网印刷风的夜海灯塔

彩色灯塔在深色海面投出弧形光束，采用带纹理的复古丝网印刷风格。四模型对比中左上为 Nano Banana 2.1。

Hakm (@hakmgpt) · <a href="https://x.com/hakmgpt/status/2107535382183387282" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Vintage Screen-Print Lighthouse — Four-model comparison: Nano Banana 2.1 is the UPPER-LEFT panel; the other three panels are different models.](https://media.reeldance.ai/galleries/assets/e579a5b03221dce074f1369228d968395ea821bb89b0fd7841743a1befbda694.webp)

<details>
<summary>完整原始提示词</summary>

```text
A spectacular vintage screen-print illustration of a tall colorful lighthouse standing alone on a dark rocky island in a vast nighttime ocean. The lighthouse has geometric blocks of cream, hot pink, yellow and cobalt blue, with a dark blue roof. Its powerful yellow beam sweeps across the sky in a huge curved arc. Deep blue ocean with stylized white waves fills the bottom of the image. Dense halftone dots cover every surface, with rough paper texture and imperfect ink registration. Limited retro CMYK palette, flat graphic shapes, 1970s children's storybook screen-print aesthetic, mysterious and magical atmosphere, no text, 16:9.
```

</details>

<a id="four-ai-assistants-as-anime-characters"></a>
### 四款 AI 助手拟人化动漫插画

将 ChatGPT、Claude、Gemini 与 Grok 拟人化为一组动漫角色。

IT navi (@itnavi2022) · <a href="https://x.com/itnavi2022/status/2107513221624270867" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Four AI Assistants as Anime Characters](https://media.reeldance.ai/galleries/assets/341bee8100ddbe362f2c36c5d7407825b0e0a3996d87ed11155b153da3ba0ad7.webp)

<details>
<summary>完整原始提示词</summary>

```text
ChatGPT、Claude、Gemini、Grokをかわいい女の子に擬人化したアニメイラストを描いて
```

</details>

<a id="skull-illusion-in-a-tulip-park"></a>
### 鸟瞰郁金香公园形成的骷髅幻象

鸟瞰郁金香节通过树篱、水池、花坛和遮阳伞形成骷髅轮廓，游人仍散布于彩色公园中。

Raza (@AIWithRaza) · <a href="https://x.com/AIWithRaza/status/2107541381153493327" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

<a href="https://x.com/AIWithRaza/status/2107541646686740941" rel="nofollow noreferrer" referrerpolicy="no-referrer">Prompt source / 提示词原帖</a>

![Skull Illusion in a Tulip Park](https://media.reeldance.ai/galleries/assets/76079cb085c9f7f3230f989495673c7e76be97ccd1f11f2ca65ff495255dc98d.webp)

<details>
<summary>完整原始提示词</summary>

```text
A breathtaking aerial drone photo, looking straight down, of a giant flower festival in a vibrant tulip park on a sunny spring day. The whole park is designed so that, seen from above, it forms a perfect human skull: an oval of tall dark-green hedges traces the outline of the skull and jaw; two large round ponds of deep black water form the eye sockets, each with a single white swan floating in it like a glint in the eye; a triangular bed of dark-red tulips forms the nose; and two curved rows of white beach umbrellas form the upper and lower teeth. Everywhere else, the park explodes with color: rainbow stripes of tulips in pink, orange, yellow, purple and red, hundreds of tiny people picnicking on blankets, kids flying kites, a carousel, food trucks and balloons. Up close it looks like pure joy; from a distance, the skull is unmistakable. Ultra-detailed, hyperreal, saturated colors, crisp midday light. Aspect ratio 4:5, 4K.
```

</details>

<a id="silver-haired-witch-with-a-glowing-orb"></a>
### 银发女巫与发光魔法球

动漫近景人像聚焦银发、发光眼睛与半透明魔法球，采用冷灰色配色。

Ark (@quimedesu) · <a href="https://x.com/quimedesu/status/2107529218758512739" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

<a href="https://x.com/quimedesu/status/2107529266581909593" rel="nofollow noreferrer" referrerpolicy="no-referrer">Prompt source / 提示词原帖</a>

![Silver-Haired Witch with a Glowing Orb](https://media.reeldance.ai/galleries/assets/793c075c5f8f08c322fd230ad18dc7da02ffec4ff52c0b2105dac6b245888b6a.webp)

<details>
<summary>完整原始提示词</summary>

```text
Hyper-detailed anime portrait in close-up, a woman tilting her head back with her lips parted and tongue extended toward a glowing translucent silver orb that has two wide vertical black rectangles that look etched into the orb as eyes, with no nose, or mouth on the orb, she holds delicately between her fingertips. She has long silver-gray hair streaked with vivid electric-silver inner strands, fine flyaways catching the light, falling across her face and shoulders. Her eyes are luminous and glassy, deep sapphire-silver with intricate sparkling iris detail, bright star-shaped catchlights, and long dark lashes, half-lidded in a sultry expression with a faint tear-gloss shimmer at the corners. Her skin is rendered in cool desaturated grayscale tones, smooth and pale, set against the intense silver accents throughout. Her fingernails are long, sharp, and glowing translucent silver like polished gems, glinting with light. The orb at the center is a perfect glassy sphere swirling with marbled blue-and-white energy, casting bright caustic light onto her lips, chin, and fingers. She drips with ornate jewelry, a delicate ring chain and gemstone rings on her fingers, layered chain bracelets with dangling silver crystal charms, a teardrop earring of glowing blue gems on fine silver chains, a choker, and stacked silver necklaces ending in a faceted blue heart-shaped pendant resting on her collarbone, every gem emitting its own soft glow. Sparkles and tiny light flares scatter across the frame. Deep shadowy background fading to near-black, dramatic moody lighting, glossy specular highlights, ultra detailed digital painting, painterly anime rendering, cinematic color grading dominated by silver, deep silver , and electric cyan, sharp focus, seductive and ethereal atmosphere. She is a witch and wear a hat.
```

</details>

<a id="human-history-inside-a-nautilus-shell"></a>
### 鹦鹉螺壳八个舱室中的人类历史

剖开的鹦鹉螺壳装入八个微缩历史场景，以金色光线连接，背景为黑色丝绒。

Raza (@AIWithRaza) · <a href="https://x.com/AIWithRaza/status/2107539621169016910" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

<a href="https://x.com/AIWithRaza/status/2107539688760222070" rel="nofollow noreferrer" referrerpolicy="no-referrer">Prompt source / 提示词原帖</a>

![Human History inside a Nautilus Shell](https://media.reeldance.ai/galleries/assets/c948eea1ed1c50384185446fdff9b89a65cf2bb49ac3d9f06e41111f5ea63811.webp)

<details>
<summary>完整原始提示词</summary>

```text
A breathtaking macro photograph of a chambered nautilus shell cut in half, resting on black velvet, its pearlescent nacre glowing with iridescent pink, gold and blue. Eight chambers along the spiral each hold a tiny, lit miniature world showing one era of human history, in order from the innermost chamber to the outermost: a cave with a campfire and handprint paintings; scribes carving hieroglyphs by oil lamp; an ancient library of scrolls; a medieval stained-glass workshop; a Renaissance artist's studio with sketches of flying machines; a steam-age workshop full of gears and a printing press; a 1960s mission control room with glowing screens; and, in the largest outer chamber, a child at a window looking up at a sky full of stars, holding a paper rocket. A thin thread of golden light passes through every chamber, connecting the eras like the shell's real siphuncle. Each miniature is warmly lit like a lantern, so the whole spiral glows from within. Cinematic studio lighting, ultra-fine detail, shallow depth of field, awe-inspiring and dreamlike, yet photographically real. Aspect ratio 4:5, 4K.
```

</details>

<a id="paint-tube-relief-art-grid"></a>
### 颜料管挤出四幅立体画

颜料管挤出四幅立体画

Gadgetify (@Gdgtify) · <a href="https://x.com/Gdgtify/status/2108132040474280332" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Paint Tubes Squeezing Four Relief Paintings](https://media.reeldance.ai/galleries/assets/30675b16dfb38cc2d281fa3804db8d488059ac14b1e48c2888c0cbe59e4a9e70.webp)

<details>
<summary>完整原始提示词</summary>

```text
Do this for Scream <instructions> I want you to act as a world class painting expert and visual artist. I want you to analyze the input by the user (painting name or artist), it style, subject, character, and come up with 4 paintings by artists past or present, no matter what country, who are less known but have a similar in style. 

For each painting: Analyze: The brushstroke technique, the 3D depth implied, and the hidden symbols. Goal: A "Paint Tube Squeeze." A giant, realistic oil paint tube sitting on a palette. Rules: Action: The tube is being squeezed, and the paint coming out is not just a blob, but it forms the 3D landscape of the painting. The main feature is emerging in 3D relief from the 2D smear of paint. Texture: Viscous, thick oil paint texture (impasto). Props: Paintbrushes, a dirty rag, a palette knife, plus culture appropriate tools and environment and tiny 3D printed version of the painter on the desk drawing it on a tiny easel and a newspaper headline covering the inspiration behind it. Lighting: North-light studio lighting, true color representation.  artistic process" aesthetic. 
Output: 2x2 grid, each grid with a different painting
</instruction>
```

</details>

<a id="six-styles-futuristic-night-market"></a>
### 六种角色画风共处未来夜市

六种角色画风共处未来夜市

Valora (@Valora_Lab) · <a href="https://x.com/Valora_Lab/status/2107848090304880976" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Six Character Art Styles in One Futuristic Night Market](https://media.reeldance.ai/galleries/assets/c1e6f040a5100a7dddbdd11e1cfdca9043f5a2fde4557bf4aebc00581b872158.webp)

<details>
<summary>完整原始提示词</summary>

```text

A bustling, visually stunning candid snapshot of a crowded night festival and street party set in a vibrant, multi-level futuristic sci-fi hyper realistic night market , packed with celebrations and bringing together completely different, highly contrasting animation and illustration styles in one rich scene.

In the foreground and midground, a group of unique, stylistically diverse characters socialize at outdoor makeshift metal and wooden tables on a busy street:
- On the left, a bulky, expressive stop-motion claymation creature (an alien mechanic/goblin) with tactile, uneven clay textures, wearing patchwork overalls and a goggles strap, is busy at a neon-lit snack and drink cart, happily serving colorful, bubbling exotic beverages in glowing cups.
- Seated at a street-side table in the center-left is a 2D futuristic anime-style young woman with vibrant cyan and purple hair, wearing an oversized glowing cybernetic jacket and a tech visor rested on her forehead. She is laughing and gesturing over a digital interactive menu, with glowing drinks, futuristic street food, and interactive gadgets scattered on the cluttered table.
- Sharing her table is a 1930s "rubber-hose" retro toon character (ink-black-and-white style) of a vintage robotic droid wearing a bowler hat and bow tie, gesturing animatedly with gloved hands and a giant toothy grin as it sits on a crate.
- Across from them is a 3D Pixar-style CGI explorer (an expressive young space voyager or elf-like creature) with big, glowing eyes and a decorated flight jacket, laughing and holding a holographic camera or gadget, utterly fascinated.
- On the right, a rugged, older cybernetic traveler rendered in gritty, cinematic realism sits at the table. He has a metallic prosthetic arm, a weathered face, a flat cap, and a worn-down leather pilot's coat. He is laughing heartily, holding a cup and interacting warmly with the group.
- Slightly behind him on the right, a stylized comic-book/webtoon-style cyberpunk with glasses and a graffiti-painted jacket is standing by a neon bar, holding a drink and looking out over the crowd.

Setting and Ambience:
The scene is set in a cluttered, sprawling futuristic alleyway and rooftop bazaar at night, overflowing with party decorations, paper lanterns, neon signs, and strings of colorful fairy lights. Multi-colored strobe and cybernetic lights (pink, cyan, violet, and gold) wash over the packed crowd. A DJ booth is visible in the background, set on an elevated, glowing stage where a performer plays for a dancing, densely packed crowd of varied species and styles \\ realistic). Sky-high futuristic buildings, flying vehicles with light trails, and towering holographic advertisements fill the dark night sky above. The ground is littered with festive confetti and debris, capturing the chaotic, joyful energy of a bustling street festival. Shot with a natural, crowded, and candid perspective, filled with layered details like wires, stalls, and people mingling.
```

</details>

<a id="eighties-witch-cauldron-film-scene"></a>
### 八十年代女巫坩埚电影场景

八十年代女巫坩埚电影场景。

nonameoasis (@nonameoasis) · <a href="https://x.com/nonameoasis/status/2108234166114341071" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![1980s Witch and Cauldron Film Scene](https://media.reeldance.ai/galleries/assets/d4596fdbfcc449db6b06b2f808ebf018cb62abe59ba13a2dea149c42c199ffb9.webp)

<details>
<summary>完整原始提示词</summary>

```text
hq quality film scene of a classic blonde witch. 1980s fantasy film, 35 mm film No text, letters, numbers, typography, logos or watermarks.
```

</details>

<a id="continuous-optical-line-field-topic-grid"></a>
### 连续光学线场主题网格

连续光学线场主题网格。

Gadgetify (@Gdgtify) · <a href="https://x.com/Gdgtify/status/2108231697171169618" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Optical Line-Field Topic Grid](https://media.reeldance.ai/galleries/assets/c249b14c5f6ac8a83167764bc47e1ac723724d387ac69229a327a0d1d91220f6.webp)

<details>
<summary>完整原始提示词</summary>

```text
2x2 grid, 16:9 Anchor: AI picks topics (e.g., human eye / sunflower / vinyl record / cat's face) 

SUBJECT            ::= infer_most_iconic_visual_form(TOPIC)
SILHOUETTE         ::= extract_primary_shape(SUBJECT)
FEATURES           ::= infer_recognition_critical_features(SUBJECT)
FIELD_TYPE         ::= choose(radial | concentric | wave | vortex | contour | hybrid)
LINE_DENSITY       ::= high
COLOR              ::= black_on_white
STYLE              ::= op_art + moiré + engraved contour illusion

BASE_FIELD ::=
generate_parallel_or_concentric_lines(
    spacing = uniform,
    thickness = constant_or_slightly_variable
)

DEFORMATION_FIELD(x,y) ::=
Σ influence(
    FEATURES,
    silhouette_boundary,
    depth_estimate,
    focal_points
)

FINAL_LINES :=
warp(
    BASE_FIELD,
    vector_field = DEFORMATION_FIELD
)

RULES ::=
- SUBJECT must emerge only through deformation of continuous black lines
- avoid conventional outlines wherever possible
- contours bend, compress, expand, spiral, or redirect to reveal form
- preserve uninterrupted optical rhythm across figure and background
- high-information regions receive denser curvature changes
- low-information regions remain smoother
- negative space may define eyes, highlights, holes, or focal voids
- all lines remain crisp monochrome vector-like marks
- no shading except line-frequency shading
- no gray fills
- no hardcoded subject

OBJECTIVE :=
maximize(
    topic_recognition
    × optical_illusion_strength
    × line_continuity
    × moire_energy
    × black_white_balance
)
```

</details>

<a id="woven-mushroom-moonlit-forest"></a>
### 月夜森林中的编织蘑菇

月夜森林中的编织蘑菇。

Shine by Nous ✨ (@Shinebynous) · <a href="https://x.com/Shinebynous/status/2108096230211412085" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Woven Mushrooms in a Moonlit Forest](https://media.reeldance.ai/galleries/assets/8c0a296992ec48a436466b8b28aed8aee63ad0d04e7ef61c68a0c3098a6b18cd.webp)

<details>
<summary>完整原始提示词</summary>

```text
Mysterious mushroom-shaped creatures, glowing pink spores, a fantasy forest setting at night with moonlight casting shadows, creating an otherworldly atmosphere. This digital painting, in the style of Ruth Asawa, uses vibrant colors and intricate details to capture the mystical ambiance of magic mushrooms in an enchanted woodland environment
```

</details>

<a id="orbital-gothic-fleet-versus-hive-battle"></a>
### 巢都世界上空的哥特舰队

巢都世界上空的哥特舰队。

Mainstream Madness (@HairnetNation) · <a href="https://x.com/HairnetNation/status/2107999025966330111" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Gothic Fleet above a Hive World](https://media.reeldance.ai/galleries/assets/3185ec117143c640b01e599cb97cac59fdd158236ce9cfbab679c35508c75628.webp)

<details>
<summary>完整原始提示词</summary>

```text
Imperial Navy battlegroup against a Tyranid hive fleet above a dark hive world.
```

</details>

<a id="gothic-street-infantry-versus-alien-swarm"></a>
### 哥特街道步兵最后防线

哥特街道步兵最后防线。

Mainstream Madness (@HairnetNation) · <a href="https://x.com/HairnetNation/status/2107992135031025750" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Infantry Last Stand on a Gothic Street](https://media.reeldance.ai/galleries/assets/a8a125dfbee02ae981bf116e11143a307c898105cb1ada3a50fc2407a18ffe6a.webp)

<details>
<summary>完整原始提示词</summary>

```text
Astra Militarum last stand against a Tyranid swarm on a ruined gothic street at dusk.
```

</details>

<a id="giant-origami-koi-flooded-shopping-arcade"></a>
### 商店街中的巨型折纸锦鲤

商店街中的巨型折纸锦鲤。

Aki | CuratorOfJoy (@Aki_LIG) · <a href="https://x.com/Aki_LIG/status/2107971985640956014" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Giant Origami Koi in a Shopping Arcade](https://media.reeldance.ai/galleries/assets/fda73aa5d23c81827a7bce7ceb24b56b84aad2f010b41697b7cc6afc54906fc9.webp)

<details>
<summary>完整原始提示词</summary>

```text
Photograph an extraordinary original art installation in an empty old Japanese shopping arcade at dawn. A gigantic red and ivory origami koi floats gracefully through the vaulted corridor above a shallow mirror of water. The folded paper scales and angular fins are unmistakably handmade, long rows of closed shop shutters recede into soft haze. Quiet documentary architectural photography, believable paper texture and reflections, striking sense of scale, no readable signs or text.
```

</details>

<a id="raised-thread-night-train-textile"></a>
### 刺绣夜行列车织物

刺绣夜行列车织物。

Aki | CuratorOfJoy (@Aki_LIG) · <a href="https://x.com/Aki_LIG/status/2107842447577321841" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Embroidered Night Train Textile](https://media.reeldance.ai/galleries/assets/c16580706e9ba50b2f5ea7e94a67328ed7581f2bccfa7e7c22394a32b58b8974.webp)

<details>
<summary>完整原始提示词</summary>

```text
An exquisite original hand-embroidered textile artwork photographed in rich macro detail: a tiny night train travels through snowy mountains beneath a sky of metallic-thread stars on deep indigo cloth. Satin stitches, raised wool snow, fine gold running stitches for windows, subtle silk-thread aurora; the landscape tells a quiet imaginative story. Warm directional craft-studio light reveals every fiber, sophisticated composition, no words or logos.
```

</details>

<a id="misty-lake-rowboat-stillness-print"></a>
### 雾湖木舟静谧画

雾湖木舟静谧画。

Emilio (@EmilioSchwaiger) · <a href="https://x.com/EmilioSchwaiger/status/2107790561126010965" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Misty Lake Rowboat Print](https://media.reeldance.ai/galleries/assets/435e18bf0262fe517d8e5bfcafb3befd85788d2d1450a8871885471341ddccb2.webp)

<details>
<summary>完整原始提示词</summary>

```text
A tiny wooden rowing boat on a perfectly still misty lake at blue hour, muted grey-green tones, the far shore barely visible, small serif caption: "stillness is a place"
```

</details>

<a id="galaxy-reflection-aurora-lotus-lake"></a>
### 银河倒影与极光莲花湖

银河倒影与极光莲花湖。

りょう@IT Consultant (@ryoiwa24) · <a href="https://x.com/ryoiwa24/status/2107776204766134593" rel="nofollow noreferrer" referrerpolicy="no-referrer">Original post / 原帖</a>

![Galaxy Reflection and Aurora Lotus Lake](https://media.reeldance.ai/galleries/assets/2d1ddfbbdf220dc5b3470b588156ef788a8165ef440d0542587953c8ef592927.webp)

<details>
<summary>完整原始提示词</summary>

```text
銀河が映る鏡のような湖面に佇む幻想的な少女、パステルカラーのオーロラ、浮かぶ玉虫色の蓮の花、シュルレアリスム、超高精細。
```

</details>

## 查看更多作品

在 <a href="https://reeldance.ai/nano-banana-2-1-prompts" rel="nofollow noreferrer" referrerpolicy="no-referrer">Nano Banana 2.1 在线作品库</a> 浏览与复制更多案例，或到 <a href="https://reeldance.ai/explore" rel="nofollow noreferrer" referrerpolicy="no-referrer">ReelDance Explore</a> 寻找新的创作方向。

| 其他模型合集 | 在线浏览 | GitHub |
| --- | --- | --- |
| GPT Image 2.5 | <a href="https://reeldance.ai/gpt-image-2-5-prompts" rel="nofollow noreferrer" referrerpolicy="no-referrer">作品库</a> | <a href="https://github.com/BravoNeo/awesome-gpt-image-2-5-prompts" rel="nofollow noreferrer" referrerpolicy="no-referrer">Repository</a> |
| Kling 4.0 Flash | <a href="https://reeldance.ai/kling-4-0-flash-prompts" rel="nofollow noreferrer" referrerpolicy="no-referrer">作品库</a> | <a href="https://github.com/BravoNeo/awesome-kling-4-0-flash-prompts" rel="nofollow noreferrer" referrerpolicy="no-referrer">Repository</a> |

## 分享你的作品

欢迎通过 <a href="https://github.com/BravoNeo/awesome-nano-banana-2-1-prompts/issues/new" rel="nofollow noreferrer" referrerpolicy="no-referrer">投稿 Issue</a>，附完整原始提示词、作者、准确原帖、模型名称和对应输出。若用到参考图片，请与输出分开标明。

## 归属与使用

提示词和作品归各自创作者所有。作者原帖保留在每个案例中；进一步使用请尊重原作者的授权与要求。模型署名沿用创作者声明。

[维护与数据说明](docs/maintaining.md)
