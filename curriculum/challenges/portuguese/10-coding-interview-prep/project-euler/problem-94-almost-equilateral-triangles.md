---
id: 5900f3ca1000cf542c50fedd
title: 'Problema 94: Triângulos quase equiláteros'
challengeType: 1
forumTopicId: 302211
dashedName: problem-94-almost-equilateral-triangles
---

# --description--

Pode-se provar facilmente que não existe nenhum triângulo equilátero com lados de comprimento de números inteiros e área de números inteiros. No entanto, o triângulo quase equilátero 5-5-6 tem uma área de 12 unidades quadradas.

Devemos definir um <dfn>triângulo quase equilátero</dfn> seja um triângulo para os quais dois lados são iguais e o terceiro é, no máximo, uma unidade maior ou menor.

Encontre a soma dos perímetros de todos os triângulos quase equiláteros com comprimento dos lados e área compostos de números inteiros e cujos perímetros não excedam `limit`.

# --hints--

`almostEquilateralTriangles(50)` deve retornar um número.

```js
assert(typeof almostEquilateralTriangles(50) === 'number');
```

`almostEquilateralTriangles(50)` deve retornar `66`.

```js
assert.strictEqual(almostEquilateralTriangles(50), 66);
```

`almostEquilateralTriangles(10000)` deve retornar `3688`.

```js
assert.strictEqual(almostEquilateralTriangles(10000), 3688);
```

`almostEquilateralTriangles(10000000)` deve retornar `9973078`.

```js
assert.strictEqual(almostEquilateralTriangles(10000000), 9973078);
```

`almostEquilateralTriangles(1000000000)` deve retornar `518408346`.

```js
assert.strictEqual(almostEquilateralTriangles(1000000000), 518408346);
```

# --seed--

## --seed-contents--

```js
function almostEquilateralTriangles(limit) {

  return true;
}

almostEquilateralTriangles(50);
```

# --solutions--

```js
function almostEquilateralTriangles(limit) {
  // Based on https://blog.dreamshire.com/project-euler-94-solution/
  let perimetersSum = 0;

  let sidesAB = 1;
  let sideC = 1;
  let perimeter = 0;
  let perimeterOffset = 1;

  while (perimeter <= limit) {
    [sidesAB, sideC] = [4 * sidesAB - sideC + 2 * perimeterOffset, sidesAB];
    perimeterOffset = -perimeterOffset;

    perimetersSum += perimeter;
    perimeter = 3 * sidesAB - perimeterOffset;
  }

  return perimetersSum;
}
```
