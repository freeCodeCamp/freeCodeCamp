---
id: 5e7b9f0b0b6c005b0e76f06f
title: '正则表达式：匹配和提取数据'
challengeType: 11
videoId: LaCZnTbQGkE
bilibiliIds:
  aid: 975629041
  bvid: BV1i44y1b7hE
  cid: 414167130
dashedName: regular-expressions-matching-and-extracting-data
---

# --question--

## --text--

该程序会打印出什么？

```python
import re
s = 'A message from csev@umich.edu to cwen@iupui.edu about meeting @2PM'
lst = re.findall('\\S+@\\S+', s)
print(lst)
```

## --answers--

['csev@umich.edu', 'cwen@iupui.edu']

---

['csev@umich.edu']

---

['umich.edu', 'iupui.edu']

---

['csev@', 'cwen@']

## --video-solution--

1

