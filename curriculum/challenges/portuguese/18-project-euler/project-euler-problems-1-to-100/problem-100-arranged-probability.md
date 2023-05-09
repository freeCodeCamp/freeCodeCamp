---
id: 5900f3d01000cf542c50fee3
title: 'Problema 100: Probabilidade com arranjo'
challengeType: 1
forumTopicId: 301724
dashedName: problem-100-arranged-probability
---

# --description--

Suponha que uma caixa tem vinte e um discos coloridos, quinze discos azuis e seis discos vermelhos. Se dois discos forem escolhidos aleatoriamente, é possível ver a probabilidade de receber dois discos azuis.

$${P(BB)} = \frac{15}{21}×\frac{14}{20} = \frac{1}{2}$$

O arranjo seguinte, para o qual há exatamente 50% de chance de pegar dois discos azuis ao acaso, é uma caixa contendo oitenta e cinco discos azuis e trinta e cinco discos vermelhos.

Ao encontrar o primeiro arranjo contendo `limit` discos no total, determine o número de discos azuis que a caixa contém.

# --hints--

`arrangedProbability(20)` deve retornar um número.

```js
assert(typeof arrangedProbability(10) === 'number');
```

`arrangedProbability(20)` deve retornar `15`.

```js
assert.strictEqual(arrangedProbability(20), 15);
```

`arrangedProbability(100)` deve retornar `85`.

```js
assert.strictEqual(arrangedProbability(100), 85);
```

`arrangedProbability(100000)` deve retornar `97513`.

```js
assert.strictEqual(arrangedProbability(100000), 97513);
```

`arrangedProbability(1000000000)` deve retornar `3822685023`.

```js
assert.strictEqual(arrangedProbability(1000000000), 3822685023);
```

`arrangedProbability(1000000000000)` deve retornar `756872327473`.

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
