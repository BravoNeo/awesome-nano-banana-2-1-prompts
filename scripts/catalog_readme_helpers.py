import re

def fenced(value):
    fence = '`' * (1 + max([2] + [len(x.group()) for x in re.finditer(r'`+', value)]))
    return fence + 'text\n' + value + '\n' + fence
