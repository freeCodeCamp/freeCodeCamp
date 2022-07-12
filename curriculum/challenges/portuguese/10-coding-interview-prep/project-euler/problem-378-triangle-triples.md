---
id: 5900f4e61000cf542c50fff9
title: 'Problema 378: Trios de triângulos'
challengeType: 1
forumTopicId: 302040
dashedName: problem-378-triangle-triples
---

# --description--

Considere $T(n)$ como o $n^{\text{º}}$ número triangular. Assim, $T(n) = \frac{n(n + 1)}{2}$.

Considere $dT(n)$ como o número de divisores de $T(n)$. Ex.: $T(7) = 28$ e $dT(7) = 6$.

Considere $Tr(n)$ como o número de trios ($i$, $j$, $k$), tal que $1 ≤ i &lt; j &lt; k ≤ n$ e $dT(i) > dT(j) > dT(k)$. $Tr(20) = 14$, $Tr(100) = 5.772$ e $Tr(1000) = 11.174.776$.

Encontre $Tr(60.000.000)$. Dê os últimos 18 algarismos da sua resposta.

# --hints--

`triangleTriples()` deve retornar `147534623725724700`.

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
