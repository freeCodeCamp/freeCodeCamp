---
id: 5900f4291000cf542c50ff3c
title: 问题189：三角网格三色
challengeType: 5
videoUrl: ''
dashedName: problem-189-tri-colouring-a-triangular-grid
---

# --description--

考虑以下64个三角形的配置：

我们希望用三种颜色中的一种为每个三角形的内部着色：红色，绿色或蓝色，这样就不会有两个相邻的三角形具有相同的颜色。这种着色应称为有效。这里，如果两个三角形共享边缘，则称它们是相邻的。注意：如果它们只共享一个顶点，那么它们不是邻居。

例如，以下是上面网格的有效着色：

通过旋转或反射从着色C获得的着色C'被认为与C不同，除非两者相同。

上述配置有多少种不同的有效着色？

# --hints--

`euler189()`应该返回10834893628237824。

```js
assert.strictEqual(euler189(), 10834893628237824);
```

# --seed--

## --seed-contents--

```js
function euler189() {

  return true;
}

euler189();
```

# --solutions--

```js
// solution required
```
