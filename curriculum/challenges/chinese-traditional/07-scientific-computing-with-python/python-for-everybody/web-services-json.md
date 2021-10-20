---
id: 5e7b9f140b6c005b0e76f07d
title: 'Web 服務：JSON'
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

這些代碼會打印出什麼？

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

[Error]（錯誤）

## --video-solution--

2

