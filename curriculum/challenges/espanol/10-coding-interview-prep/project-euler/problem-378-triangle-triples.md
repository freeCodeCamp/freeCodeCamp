---
id: 5900f4e61000cf542c50fff9
title: 'Problema 378: Triángulos Triples'
challengeType: 1
forumTopicId: 302040
dashedName: problem-378-triangle-triples
---

# --description--

Que $T(n)$ sea el $n^{\text{th}}$ número del triangulo, asi que: $T(n) = \frac{n(n + 1)}{2}$.

Let $dT(n)$ be the number of divisors of $T(n)$. E.g.: $T(7) = 28$ and $dT(7) = 6$.

Que $Tr(n)$ sea un numero de triples ($i$, $j$, $k$) como de se siguiente manera $1 ≤ i &lt; j &lt; k ≤ n$ and $dT(i) > dT(j) > dT(k)$. $Tr(20) = 14$, $Tr(100) = 5\\,772$ and $Tr(1000) = 11\\,174\\,776$.

Encuentra $Tr(60\\,000\\,000)$. Proporcione los ultimos 18 digitos como respuesta.

# --hints--

`triangleTriples()` debe retornar `147534623725724700`.

```js
assert.strictEqual(triangleTriples(), 147534623725724700);
```

# --seed--

## --seed-contents--

```js
function triangleTriples() {

  return true;
}

triangleTriples();
```

# --solutions--

```js
// solution required
```
