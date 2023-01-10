---
id: 5900f5351000cf542c510047
title: '問題 456: 原点を内包する三角形 (2)'
challengeType: 1
forumTopicId: 302130
dashedName: problem-456-triangles-containing-the-origin-ii
---

# --description--

以下のように定義します。

$$\begin{align}   & x_n = ({1248}^n\bmod 32323) - 16161 \\\\
  & y_n = ({8421}^n\bmod 30103) - 15051 \\\\ & P_n = \\{(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)\\} \end{align}$$

例: $$P_8 = \\{(-14913, -6630), (-10161, 5625), (5226, 11896), (8340, -10778), (15852, -5203), (-15165, 11295), (-1427, -14495), (12407, 1060)\\}$$

$P_n$ に含まれる点を頂点とし、かつ原点を内包するような三角形の個数を $C(n)$ とします。

例:

$$\begin{align}   & C(8) = 20 \\\\
  & C(600) = 8\\,950\\,634 \\\\ & C(40\\,000) = 2\\,666\\,610\\,948\\,988 \end{align}$$

$C(2\\,000\\,000)$ を求めなさい。

# --hints--

`trianglesContainingOriginTwo()` は `333333208685971500` を返す必要があります。

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
