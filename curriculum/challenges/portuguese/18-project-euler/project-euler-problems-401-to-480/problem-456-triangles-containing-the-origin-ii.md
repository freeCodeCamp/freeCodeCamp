---
id: 5900f5351000cf542c510047
title: 'Problema 456: Triângulos contendo a origem II'
challengeType: 1
forumTopicId: 302130
dashedName: problem-456-triangles-containing-the-origin-ii
---

# --description--

Definição:

$$\start{align}   & x_n = ({1248}^n\bmod 32323) - 16161 \\\\
  & y_n = ({8421}^n\bmod 30103) - 15051 \\\\ & P_n = \\{(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)\\} \end{align}$$

Por exemplo, $$P_8 = \\{(-14913, -6630), (-10161, 5625), (5226, 11896), (8340, -10778), (15852, -5203), (-15165, 11295), (-1427, -14495), (12407, 1060)\\}$$

Considere $C(n)$ o número de triângulos cujos vértices estão em $P_n$ e que contêm a origem em seu interior.

Exemplos:

$$\start{align}   & C(8) = 20 \\\\
  & C(600) = 8.950.634 \\\\ & C(40.000) = 266.610.948.988 \end{align}$$

Encontre $C(2.000.000)$.

# --hints--

`trianglesContainingOriginTwo()` deve retornar `333333208685971500`.

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
