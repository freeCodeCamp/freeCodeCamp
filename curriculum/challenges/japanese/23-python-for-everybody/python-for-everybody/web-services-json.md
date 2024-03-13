---
id: 5e7b9f140b6c005b0e76f07d
title: 'ウェブサービス: JSON'
challengeType: 11
videoId: ZJE-U56BppM
bilibiliIds:
  aid: 419491911
  bvid: BV1r3411672w
  cid: 377332928
dashedName: web-services-json
---

# --question--

## --text--

次のコードは何を表示しますか？

```python
import json
data = '''
  [
    { "id" : "001",
      "x" : "2",
     "name" : "Quincy"
    } ,
    { "id" : "009",
      "x" : "7",
      "name" : "Mrugesh"
    }
  ]
'''
info = json.loads(data)
print(info[1]['name'])
```

## --answers--

Quincy

---

Mrugesh

---

001

---

009

---

[エラー]

## --video-solution--

2

