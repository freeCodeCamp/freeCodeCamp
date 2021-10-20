---
id: 5e7b9f0d0b6c005b0e76f075
title: '网络：在 Python 中使用 urllib'
challengeType: 11
videoId: 7lFM1T_CxBs
bilibiliIds:
  aid: 546908270
  bvid: BV1Xq4y1H7e6
  cid: 377331524
dashedName: networking-using-urllib-in-python
---

# --question--

## --text--

以下代码的输出将是什么样的？

```python
import urllib.request
fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
for line in fhand:
    print(line.decode().strip())
```

## --answers--

只有 “romeo.txt” 的内容。

---

“romeo.txt” 的 header 和内容。

---

“romeo.txt” 的 header、footer 和内容。

## --video-solution--

1

