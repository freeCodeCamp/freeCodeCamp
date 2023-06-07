---
id: 5900f3ca1000cf542c50fedd
title: 'Problema 94: Triangoli quasi equilateri'
challengeType: 1
forumTopicId: 302211
dashedName: problem-94-almost-equilateral-triangles
---

# --description--

È facilmente dimostrato che non esiste un triangolo equilatero con i lati di lunghezza intera e l'area intera. Tuttavia, il triangolo quasi equilatero 5-5-6 ha una superficie di 12 unità quadrate.

Definiremo un <dfn>triangolo quasi equilatero</dfn> come un triangolo per il quale due latri sono uguali e il terzo differisce per non più di un'unità.

Trovare la somma dei perimetri di tutti i triangoli quasi equilateri con lunghezze dei lati e area interi e i cui perimetri non superano `limit`.

# --hints--

`almostEquilateralTriangles(50)` dovrebbe restituire un numero.

```js
assert(typeof almostEquilateralTriangles(50) === 'number');
```

`almostEquilateralTriangles(50)` dovrebbe restituire `66`.

```js
assert.strictEqual(almostEquilateralTriangles(50), 66);
```

`almostEquilateralTriangles(10000)` dovrebbe restituire `3688`.

```js
assert.strictEqual(almostEquilateralTriangles(10000), 3688);
```

`almostEquilateralTriangles(10000000)` dovrebbe restituire `9973078`.

```js
assert.strictEqual(almostEquilateralTriangles(10000000), 9973078);
```

`almostEquilateralTriangles(1000000000)` dovrebbe restituire `518408346`.

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
