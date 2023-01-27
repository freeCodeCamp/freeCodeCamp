---
id: 5e7b9f0d0b6c005b0e76f075
title: 'Мережа: використання urllib у Python'
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

Як буде виглядати результат роботи даного коду?:

```python
import urllib.request
fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
for line in fhand:
    print(line.decode().strip())
```

## --answers--

Лише зміст "romeo.txt".

---

Верхній колонтитул і зміст "romeo.txt".

---

Верхній та нижній колонтитули, зміст "romeo.txt".

## --video-solution--

1

