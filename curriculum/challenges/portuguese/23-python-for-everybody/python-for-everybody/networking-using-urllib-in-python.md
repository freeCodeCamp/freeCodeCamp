---
id: 5e7b9f0d0b6c005b0e76f075
title: 'Rede: usando urllib em Python'
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

Como será a saída do seguinte código?:

```python
import urllib.request
fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
for line in fhand:
    print(line.decode().strip())
```

## --answers--

Apenas o conteúdo de "romeo.txt".

---

Um header e o conteúdo de "romeo.txt".

---

Um header, um footer e o conteúdo de "romeo.txt".

## --video-solution--

1

