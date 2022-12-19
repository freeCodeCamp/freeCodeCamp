---
id: 5900f3d01000cf542c50fee3
title: 'Problem 100: Arranged probability'
challengeType: 1
forumTopicId: 301724
dashedName: problem-100-arranged-probability
---

# --description--

Si una caja contiene veintiún discos de colores, compuestos por quince discos azules y seis discos rojos, si dos discos son tomados al azar, podemos ver la probabilidad de tomar dos discos azules.

$${P(BB)} = \frac{15}{21}×\frac{14}{20} = \frac{1}{2}$$

The next such arrangement, for which there is exactly a 50% chance of taking two blue discs at random, is a box containing eighty-five blue discs and thirty-five red discs.

By finding the first arrangement to contain over `limit` discs in total, determine the number of blue discs that the box would contain.

# --hints--

`arrangedProbability(20)` should return a number.

```js
assert(typeof arrangedProbability(10) === 'number');
```

`arrangedProbability(20)` should return `15`.

```js
assert.strictEqual(arrangedProbability(20), 15);
```

`arrangedProbability(100)` should return `85`.

```js
assert.strictEqual(arrangedProbability(100), 85);
```

`arrangedProbability(100000)` should return `97513`.

```js
assert.strictEqual(arrangedProbability(100000), 97513);
```

`arrangedProbability(1000000000)` should return `3822685023`.

```js
assert.strictEqual(arrangedProbability(1000000000), 3822685023);
```

`arrangedProbability(1000000000000)` should return `756872327473`.

```js
assert.strictEqual(arrangedProbability(1000000000000), 756872327473);
```

# --seed--

## --seed-contents--

```js
function arrangedProbability(limit) {

  return true;
}

arrangedProbability(20);
```

# --solutions--

```js
function arrangedProbability(limit) {
  // Based on https://www.mathblog.dk/project-euler-100-blue-discs-two-blue/
  let blue = 15;
  let discs = 21;

  while (discs < limit) {
    const nextBlue = 3 * blue + 2 * discs - 2;
    const nextDiscs = 4 * blue + 3 * discs - 3;

    blue = nextBlue;
    discs = nextDiscs;
  }
  return blue;
}
```
