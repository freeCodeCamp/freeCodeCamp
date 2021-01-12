---
id: 5900f53d1000cf542c51004f
title: 问题464：莫比乌斯函数和区间
challengeType: 5
videoUrl: ''
dashedName: problem-464-mbius-function-and-intervals
---

# --description--

Möbius函数，表示为μ（n），定义为：μ（n）=（ - 1）ω（n），如果n是无平方（其中ω（n）是n的不同素因子的数量）μ（n） ）如果n不是无平方，则= 0。

令P（a，b）为区间\[a，b]中的整数n，使得μ（n）= 1.设N（a，b）为区间\[a，b]中的整数n这样μ（n）= -1。例如，P（2,10）= 2且N（2,10）= 4。

令C（n）为整数对（a，b）的数目，使得：1≤a≤b≤n，99·N（a，b）≤100·P（a，b），和99·P（ a，b）≤100·N（a，b）。

例如，C（10）= 13，C（500）= 16676和C（10000）= 20155319。

找C（2 000 000）。

# --hints--

`euler464()`应返回198775297232878。

```js
assert.strictEqual(euler464(), 198775297232878);
```

# --seed--

## --seed-contents--

```js
function euler464() {

  return true;
}

euler464();
```

# --solutions--

```js
// solution required
```
