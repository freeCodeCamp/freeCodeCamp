---
id: 5e9a0a8e09c5df3cc3600ed9
title: Реорганізація масивів
challengeType: 11
videoId: VNWAQbEM-C8
bilibiliIds:
  aid: 548035655
  bvid: BV1fq4y1N7aC
  cid: 409026755
dashedName: reorganizing-arrays
---

# --question--

## --text--

Який код створить наступний масив?

```py
[[1. 1.]
[1. 1.]
[1. 1.]
[1. 1.]]
```

## --answers--

```py
a = np.ones((2, 4))
b = a.reshape((4, 2))
print(b)
```

---

```py
a = np.ones((2, 4))
b = a.reshape((2, 4))
print(b)
```

---

```py
a = np.ones((2, 4))
b = a.reshape((8, 1))
print(b)
```

## --video-solution--

1

