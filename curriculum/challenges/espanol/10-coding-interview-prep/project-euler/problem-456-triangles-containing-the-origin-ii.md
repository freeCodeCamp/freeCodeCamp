---
id: 5900f5351000cf542c510047
title: 'Problema 456: Triángulos que contienen el origen II'
challengeType: 1
forumTopicId: 302130
dashedName: problem-456-triangles-containing-the-origin-ii
---

# --description--

Definiendo:

$$\begin{align}   & x_n = ({1248}^n\bmod 32323) - 16161 \\\\
  & y_n = ({8421}^n\bmod 30103) - 15051 \\\\ & P_n = \\{(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)\\} \end{align}$$

Por ejemplo, $$P_8 = \\{(-14913, -6630), (-10161, 5625), (5226, 11896), (8340, -10778), (15852, -5203), (-15165, 11295), (-1427, -14495), (12407, 1060)\\}$$

Sea $C(n)$ el número de triángulos cuyos vértices están en $P_n$ que contiene el origen en el interior.

Ejemplos:

$$\begin{align}   & C(8) = 20 \\\\
  & C(600) = 8\\,950\\,634 \\\\ & C(40\\,000) = 2\\,666\\,610\\,948\\,988 \end{align}$$

Calcular $C(2\\,000\\,000)$.

# --hints--

`trianglesContainingOriginTwo()` debería retornar `333333208685971500`.

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
