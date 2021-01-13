---
id: 5900f4341000cf542c50ff46
title: 问题199：迭代圆包装
challengeType: 5
videoUrl: ''
dashedName: problem-199-iterative-circle-packing
---

# --description--

三个相等半径的圆放置在较大的圆内，使得每对圆彼此相切并且内圆不重叠。有四个未覆盖的“间隙”，它们将用更多的切圆迭代地填充。

在每次迭代中，在每个间隙中放置最大尺寸的圆，这为下一次迭代创建了更多的间隙。经过3次迭代（如图）后，有108个间隙，未被圆圈覆盖的区域部分为0.06790342，四舍五入到小数点后8位。

10次​​迭代后，圆圈没有覆盖哪一部分区域？使用格式x.xxxxxxxx将您的答案四舍五入到小数点后八位。

# --hints--

`euler199()`应该返回0.00396087。

```js
assert.strictEqual(euler199(), 0.00396087);
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
