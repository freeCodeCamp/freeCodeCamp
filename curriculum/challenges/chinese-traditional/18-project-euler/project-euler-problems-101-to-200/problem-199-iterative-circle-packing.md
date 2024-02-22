---
id: 5900f4341000cf542c50ff46
title: '問題199：迭代圓包裝'
challengeType: 1
forumTopicId: 301837
dashedName: problem-199-iterative-circle-packing
---

# --description--

Three circles of equal radius are placed inside a larger circle such that each pair of circles is tangent to one another and the inner circles do not overlap. There are four uncovered "gaps" which are to be filled iteratively with more tangent circles.

<img class="img-responsive center-block" alt="a diagram of non-overlapping circles" src="https://cdn-media-1.freecodecamp.org/project-euler/199-circles-in-circles.gif" style="background-color: white; padding: 10px;" />

在每次迭代中，在每個間隙中放置最大尺寸的圓，這爲下一次迭代創建了更多的間隙。 經過3次迭代（如圖）後，有108個間隙，未被圓圈覆蓋的區域部分爲0.06790342，四捨五入到小數點後8位。

What fraction of the area is not covered by circles after `n` iterations? 使用 x.xxxxxxxx 格式將答案四捨五入到小數點後八位。

# --hints--

`iterativeCirclePacking(10)` should return a number.

```js
assert(typeof iterativeCirclePacking(10) === 'number');
```

`iterativeCirclePacking(10)` should return `0.00396087`.

```js
assert.strictEqual(iterativeCirclePacking(10), 0.00396087);
```

`iterativeCirclePacking(3)` should return `0.06790342`.

```js
assert.strictEqual(iterativeCirclePacking(3), 0.06790342);
```

# --seed--

## --seed-contents--

```js
function iterativeCirclePacking(n) {

  return true;
}

iterativeCirclePacking(10);
```

# --solutions--

```js
function iterativeCirclePacking(n) {
  let k1 = 1;
  let k0 = k1 * (3 - 2 * Math.sqrt(3));
  let a0 = 1 / (k0 * k0);
  let a1 = 3 / (k1 * k1);
  a1 += 3 * getArea(k0, k1, k1, n);
  a1 += getArea(k1, k1, k1, n);
  let final = ((a0 - a1) / a0).toFixed(8);

  return parseFloat(final);
  function getArea(k1, k2, k3, depth) {
      if (depth == 0) return 0.0;
      let k4 = k1 + k2 + k3 + 2 * Math.sqrt(k1 * k2 + k2 * k3 + k3 * k1);
      let a = 1 / (k4 * k4);
      a += getArea(k1, k2, k4, depth - 1);
      a += getArea(k2, k3, k4, depth - 1);
      a += getArea(k3, k1, k4, depth - 1);
      return a;
  }
}
```
