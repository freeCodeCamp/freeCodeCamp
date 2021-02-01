---
id: 5900f4ee1000cf542c510000
title: 问题385：三角形内的椭圆
challengeType: 5
videoUrl: ''
dashedName: problem-385-ellipses-inside-triangles
---

# --description--

对于平面中的任何三角形T，可以显示存在唯一的椭圆，其中最大区域完全在T内。

对于给定的n，考虑三角形T，使得：

-   T的顶点具有绝对值≤n的整数坐标，和
-   T内最大面积椭圆的焦点是（√13,0）和（-√13,0）。设A（n）为所有这些三角形的面积之和。

例如，如果n = 8，则存在两个这样的三角形。它们的顶点是（-4，-3），（ - 4,3），（8,0）和（4,3），（4，-3），（ - 8,0），每个三角形的面积因此A（8）= 36 + 36 = 72。

可以证实A（10）= 252，A（100）= 34632和A（1000）= 3529008。

找A（1 000 000 000）。

1椭圆的焦点（多个焦点）是两个点A和B，使得对于椭圆边界上​​的每个点P，AP + PB是恒定的。

# --hints--

`euler385()`应该返回3776957309612154000。

```js
assert.strictEqual(euler385(), 3776957309612154000);
```

# --seed--

## --seed-contents--

```js
function euler385() {

  return true;
}

euler385();
```

# --solutions--

```js
// solution required
```
