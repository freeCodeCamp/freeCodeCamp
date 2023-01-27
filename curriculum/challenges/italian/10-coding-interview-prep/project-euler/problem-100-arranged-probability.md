---
id: 5900f3d01000cf542c50fee3
title: 'Problema 100: Probabilità degli arrangiamenti'
challengeType: 1
forumTopicId: 301724
dashedName: problem-100-arranged-probability
---

# --description--

Se una scatola contiene ventuno dischi colorati, composti da quindici dischi blu e sei dischi rossi, e due dischi sono stati prelevati a caso, si può vedere la probabilità di prendere due dischi blu.

$$${P(BB)} = \frac{15}{21}×\frac{14}{20} = \frac{1}{2}$$

Il prossimo arrangiamento, per il quale vi è esattamente una probabilità del 50% di prendere due dischi blu a caso, è una scatola contenente ottantacinque dischi blu e trentacinque dischi rossi.

Trovando la prima disposizione che contiene più di `limit` dischi in totale, determina il numero di dischi blu che la scatola contiene.

# --hints--

`arrangedProbability(20)` dovrebbe restituire un numero.

```js
assert(typeof arrangedProbability(10) === 'number');
```

`arrangedProbability(20)` dovrebbe restituire `15`.

```js
assert.strictEqual(arrangedProbability(20), 15);
```

`arrangedProbability(100)` dovrebbe restituire `85`.

```js
assert.strictEqual(arrangedProbability(100), 85);
```

`arrangedProbability(100000)` dovrebbe restituire `97513`.

```js
assert.strictEqual(arrangedProbability(100000), 97513);
```

`arrangedProbability(1000000000)` dovrebbe restituire `3822685023`.

```js
assert.strictEqual(arrangedProbability(1000000000), 3822685023);
```

`arrangedProbability(1000000000000)` dovrebbe restituire `756872327473`.

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
