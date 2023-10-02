---
id: 5e9a0a8e09c5df3cc3600ed5
title: 初始化不同的数组
challengeType: 11
videoId: CEykdsKT4U4
bilibiliIds:
  aid: 718044756
  bvid: BV1MQ4y1k7BB
  cid: 409025638
dashedName: initializing-different-arrays
---

# --question--

## --text--

以下代码将打印出什么？

```py
a = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])

print(np.full_like(a, 100))
```

## --answers--

```py
[[100 100 100 100 100]]
```

---

```py
[[100 100 100 100 100]
[100 100 100 100 100]]
```

---

```py
[[ 1  2  3  4  5]
[ 6  7 20  9 10]]
```

## --video-solution--

2

