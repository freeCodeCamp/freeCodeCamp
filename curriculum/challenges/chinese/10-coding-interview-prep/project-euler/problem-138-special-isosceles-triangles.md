---
id: 5900f3f61000cf542c50ff09
title: '问题 138：特殊的等腰三角形'
challengeType: 1
forumTopicId: 301766
dashedName: problem-138-special-isosceles-triangles
---

# --description--

考虑一个底边长为 $b = 16$，腰长为 $L = 17$ 的等腰三角形。

<img class="img-responsive center-block" alt="等腰三角形有两条长度相等记为 L 的腰，和一条记为 b 底；则该三角形的高 h 为从底边作高至两条腰的夹角。" src="https://cdn.freecodecamp.org/curriculum/project-euler/special-isosceles-triangles.png" style="background-color: white; padding: 10px;" />

使用毕达哥拉斯定理，可以求出三角形的高为 $h = \sqrt{{17}^2 − 8^2} = 15$，恰好比底边长度小 1。

当等腰三角形底边长为 $b = 272$，腰长为 $L = 305$ 时，计算可得高为 $h = 273$，恰好比底边长度大 1，并且这是第二小的满足性质 $h = b ± 1$ 的等腰三角形。

找到最小的 12 个满足 $h = b ± 1$ 且 $b$，$L$ 均为正整数的等腰三角形，求 $\sum{L}$。

# --hints--

`isoscelesTriangles()` 应该返回 `1118049290473932`。

```js
assert.strictEqual(isoscelesTriangles(), 1118049290473932);
```

# --seed--

## --seed-contents--

```js
function isoscelesTriangles() {

  return true;
}

isoscelesTriangles();
```

# --solutions--

```js
// solution required
```
