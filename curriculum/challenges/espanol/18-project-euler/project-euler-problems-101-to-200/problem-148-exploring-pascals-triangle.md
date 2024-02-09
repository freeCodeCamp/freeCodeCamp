---
id: 5900f4021000cf542c50ff14
title: 'Problema 148: Explorando el triángulo de Pascal'
challengeType: 1
forumTopicId: 301777
dashedName: problem-148-exploring-pascals-triangle
---

# --description--

We can easily verify that none of the entries in the first seven rows of Pascal's triangle are divisible by 7:

```markup
            1
          1   1
        1   2   1
      1   3   3   1
    1   4   6   4   1
  1   5   10  10  5   1
1   6   15  20  15  6   1
```

Sin embargo, si comprobamos las primeras cien filas, encontramos que solo 2361 de las 5050 entradas no son divisibles para 7.

# --instructions--

Encuentra el número de entradas cuales no son divisibles para 7 en los primeros mil millones (${10}^9$) de filas del triángulo de Pascal.

# --hints--

`entriesOfPascalsTriangle()` debería devolver `2129970655314432`.

```js
assert.strictEqual(entriesOfPascalsTriangle(), 2129970655314432);
```

# --seed--

## --seed-contents--

```js
function entriesOfPascalsTriangle() {

  return true;
}

entriesOfPascalsTriangle();
```

# --solutions--

```js
// solution required
```
