---
id: 5e7b9f0d0b6c005b0e76f075
title: 'Vernetzungen: Verwendung von urllib in Python'
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

Was wird die Ausgabe des folgenden Codes sein?:

```python
import urllib.request
fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
for line in fhand:
    print(line.decode().strip())
```

## --answers--

Nur der Inhalt von "romeo.txt".

---

Ein Header und der Inhalt von "romeo.txt".

---

Ein Header, eine Fußzeile und der Inhalt von "romeo.txt".

## --video-solution--

1

