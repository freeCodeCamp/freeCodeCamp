---
id: 5900f5351000cf542c510047
title: '问题456：包含原点的三角形 2'
challengeType: 1
forumTopicId: 302130
dashedName: problem-456-triangles-containing-the-origin-ii
---

# --description--

Define:

$$\begin{align}   & x_n = ({1248}^n\bmod 32323) - 16161 \\\\
  & y_n = ({8421}^n\bmod 30103) - 15051 \\\\ & P_n = \\{(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)\\} \end{align}$$

例如， $$P_8 = \\{(-14913, -6630), (-10161, 5625), (5226, 11896), (8340, -10778), (15852, -5203), (-15165, 11295), (-1427, -14495), (12407, 1060)\\}$$

设 $C(n)$ 为顶点位于 $P_n$ 中的三角形的数量，这些三角形内包含原点。

示例：

$$\begin{align}   & C(8) = 20 \\\\
  & C(600) = 8\\,950\\,634 \\\\ & C(40\\,000) = 2\\,666\\,610\\,948\\,988 \end{align}$$

请计算 $C(2\\,000\\,000)$。

# --hints--

`trianglesContainingOriginTwo()` 应该返回 `333333208685971500`。

```js
assert.strictEqual(trianglesContainingOriginTwo(), 333333208685971500);
```

# --seed--

## --seed-contents--

```js
function trianglesContainingOriginTwo() {

  return true;
}

trianglesContainingOriginTwo();
```

# --solutions--

```js
// solution required
```
