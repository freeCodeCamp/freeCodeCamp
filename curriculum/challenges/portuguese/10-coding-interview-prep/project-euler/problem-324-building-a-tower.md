---
id: 5900f4b11000cf542c50ffc3
title: 'Problema 324: Construção de uma torre'
challengeType: 1
forumTopicId: 301981
dashedName: problem-324-building-a-tower
---

# --description--

Considere $f(n)$ como o número de maneiras que se pode preencher uma torre $3×3×n$ com blocos de $2×1×1$. Você tem permissão para girar os blocos da forma que quiser; no entanto, as rotações, reflexões etc. da própria torre serão contadas como distintas.

Por exemplo (com $q = 100.000.007$):

$$\begin{align}   & f(2) = 229, \\\\
  & f(4) = 117.805, \\\\   & f(10)\bmod q = 96.149.360, \\\\
  & f({10}^3)\bmod q = 24.806.056, \\\\ & f({10}^6)\bmod q = 30.808.124. \end{align}$$

Encontre $f({10}^{10000})\bmod 100.000.007$.

# --hints--

`buildingTower()` deve retornar `96972774`.

```js
assert.strictEqual(buildingTower(), 96972774);
```

# --seed--

## --seed-contents--

```js
function buildingTower() {

  return true;
}

buildingTower();
```

# --solutions--

```js
// solution required
```
