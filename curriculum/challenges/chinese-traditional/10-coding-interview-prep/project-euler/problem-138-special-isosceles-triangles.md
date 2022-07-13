---
id: 5900f3f61000cf542c50ff09
title: '問題 138：特殊的等腰三角形'
challengeType: 1
forumTopicId: 301766
dashedName: problem-138-special-isosceles-triangles
---

# --description--

考慮一個底邊長爲 $b = 16$，腰長爲 $L = 17$ 的等腰三角形。

<img class="img-responsive center-block" alt="等腰三角形有兩條長度相等記爲 L 的腰，和一條記爲 b 底；則該三角形的高 h 爲從底邊作高至兩條腰的夾角。" src="https://cdn.freecodecamp.org/curriculum/project-euler/special-isosceles-triangles.png" style="background-color: white; padding: 10px;" />

使用畢達哥拉斯定理，可以求出三角形的高爲 $h = \sqrt{{17}^2 − 8^2} = 15$，恰好比底邊長度小 1。

當等腰三角形底邊長爲 $b = 272$，腰長爲 $L = 305$ 時，計算可得高爲 $h = 273$，恰好比底邊長度大 1，並且這是第二小的滿足性質 $h = b ± 1$ 的等腰三角形。

找到最小的 12 個滿足 $h = b ± 1$ 且 $b$，$L$ 均爲正整數的等腰三角形，求 $\sum{L}$。

# --hints--

`isoscelesTriangles()` 應該返回 `1118049290473932`。

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
