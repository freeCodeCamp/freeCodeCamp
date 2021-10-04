---
id: 5e7b9f070b6c005b0e76f05e
title: '迭代：循环成语'
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

以下是一个如何在一串数值中找到最小的数值的代码。 一行代码有错误，导致整个代码无法和预期一样的运行。 那么是哪一行？

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

