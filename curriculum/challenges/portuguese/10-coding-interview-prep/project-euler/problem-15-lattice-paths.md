---
id: 5900f37b1000cf542c50fe8e
title: 'Problema 15: Caminhos em uma grade'
challengeType: 1
forumTopicId: 301780
dashedName: problem-15-lattice-paths
---

# --description--

Começando no canto superior esquerdo de uma grade 2×2, e sendo capaz de se mover para a direita e para baixo, existem exatamente 6 caminhos até o canto inferior direito.

<img class="img-responsive center-block" alt="um diagrama de 6 grades de 2x2 mostrando todas as rotas para o canto inferior direito" src="https://cdn-media-1.freecodecamp.org/project-euler/1Atixoj.gif" style="background-color: white; padding: 10px;" />

Quantas rotas existem no parâmetro `gridSize` fornecido à sua função?

# --hints--

`latticePaths(4)` deve retornar um número.

```js
assert(typeof latticePaths(4) === 'number');
```

`latticePaths(4)` deve retornar 70.

```js
assert.strictEqual(latticePaths(4), 70);
```

`latticePaths(9)` deve retornar 48620.

```js
assert.strictEqual(latticePaths(9), 48620);
```

`latticePaths(20)` deve retornar 137846528820.

```js
assert.strictEqual(latticePaths(20), 137846528820);
```

# --seed--

## --seed-contents--

```js
function latticePaths(gridSize) {

  return true;
}

latticePaths(4);
```

# --solutions--

```js
function latticePaths(gridSize) {
  let paths = 1;

  for (let i = 0; i < gridSize; i++) {
    paths *= (2 * gridSize) - i;
    paths /= i + 1;
  }
  return paths;
}
```
