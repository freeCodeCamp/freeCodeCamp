---
id: 5e7b9f0d0b6c005b0e76f075
title: 'ネットワーキング: Python で urllib を使用する'
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

次のコードの出力はどのようになりますか？

```python
import urllib.request
fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
for line in fhand:
    print(line.decode().strip())
```

## --answers--

"romeo.txt" の内容のみ。

---

ヘッダーと "romeo.txt" の内容。

---

ヘッダー、フッター、および "romeo.txt" の内容。

## --video-solution--

1

