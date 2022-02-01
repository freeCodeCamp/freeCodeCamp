---
id: 5e7b9f170b6c005b0e76f087
title: オブジェクトのライフサイクル
challengeType: 11
videoId: p1r3h_AMMIM
bilibiliIds:
  aid: 461998717
  bvid: BV1JL411n7Hr
  cid: 377529681
dashedName: object-lifecycle
---

# --question--

## --text--

次のプログラムは何を出力しますか？

```python
class PartyAnimal:
    x = 0
    name = ''
    def __init__(self, nam):
        self.name = nam
        print(self.name,'constructed')
    def party(self):
        self.x = self.x + 1
        print(self.name,'party count',self.x)

q = PartyAnimal('Quincy')
m = PartyAnimal('Miya')

q.party()
m.party()
q.party()
```

## --answers--

<pre>
Quincy constructed
Miya constructed
Quincy party count 1
Miya party count 2
Quincy party count 3
</pre>

---

<pre>
Quincy constructed
Miya constructed
Quincy party count 1
Miya party count 1
Quincy party count 2
</pre>

---

<pre>
Quincy constructed
Quincy party count 1
Quincy party count 2
Miya constructed
Miya party count 1
</pre>

## --video-solution--

2

