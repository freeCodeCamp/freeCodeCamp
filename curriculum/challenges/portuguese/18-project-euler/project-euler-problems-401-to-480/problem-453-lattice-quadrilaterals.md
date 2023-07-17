---
id: 5900f5311000cf542c510044
title: 'Problema 453: Quadriláteros da rede'
challengeType: 1
forumTopicId: 302126
dashedName: problem-453-lattice-quadrilaterals
---

# --description--

Um quadrilátero simples é um polígono que tem quatro vértices distintos, não tem ângulos retos e não cruza a si mesmo.

Considere $Q(m, n)$ como o número de quadriláteros simples cujos vértices são pontos da rede com coordenadas ($x$, $y$) satisfazendo $0 ≤ x ≤ m$ e $0 ≤ y ≤ n$.

Por exemplo, $Q(2, 2) = 94$ pode ser visto abaixo:

<img class="img-responsive center-block" alt="94 quadriláteros cujos vértices são pontos da rede com coordenadas (x, y) satisfazendo 0 &le; x &le; m e 0 &le; y &le; n" src="https://cdn.freecodecamp.org/curriculum/project-euler/lattice-quadrilaterals.png" style="background-color: white; padding: 10px;" />

Também é possível verificar que $Q(3, 7) = 39.590$, $Q(12, 3) = 309.000$ e $Q(123, 45) = 70.542.215.894.646$.

Encontre $Q(12.345, 6.789)\bmod 135.707.531$.

# --hints--

`latticeQuadrilaterals()` deve retornar `104354107`.

```js
assert.strictEqual(latticeQuadrilaterals(), 104354107);
```

# --seed--

## --seed-contents--

```js
function latticeQuadrilaterals() {

  return true;
}

latticeQuadrilaterals();
```

# --solutions--

```js
// solution required
```
