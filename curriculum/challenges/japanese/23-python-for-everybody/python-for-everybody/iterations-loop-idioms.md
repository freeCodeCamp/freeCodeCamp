---
id: 5e7b9f070b6c005b0e76f05e
title: '繰り返し: ループの用法'
challengeType: 11
videoId: AelGAcoMXbI
bilibiliIds:
  aid: 334491369
  bvid: BV1tw411R7Mm
  cid: 376530765
dashedName: iterations-loop-idioms
---

# --question--

## --text--

次のコードでは、値のリストから最小値を見つけようとしています。 この中の 1 行に誤りがあり、コードが期待どおりに動作しません。 どの行ですか？

```python
smallest = None
print("Before:", smallest)
for itervar in [3, 41, 12, 9, 74, 15]:
    if smallest is None or itervar < smallest:
        smallest = itervar
        break
    print("Loop:", itervar, smallest)
print("Smallest:", smallest)
```

## --answers--

3

---

4

---

6

---

7

## --video-solution--

3

