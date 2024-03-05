---
id: 595608ff8bcd7a50bd490181
title: Sequência de granizo
challengeType: 1
forumTopicId: 302279
dashedName: hailstone-sequence
---

# --description--

A sequência de números de granizo (hailstone) pode ser gerada a partir de um inteiro inicial positivo, `n` da seguinte forma:

- Se `n` for `1`, a sequência termina
- Se `n` for `even` (par), o próximo `n` da sequência será `= n/2`
- Se `n` for `odd` (ímpar), o próximo `n` da sequência será `= (3 * n) + 1`

A conjetura de Collatz (não comprovada) é que a sequência de granizo (hailstone) para qualquer número inicial termina sempre.

A sequência de granizo também é conhecida como números granizo (porque os valores geralmente estão sujeitos a múltiplas descidas e subidas, como granizo - hailstone, em inglês - em uma nuvem), ou como a sequência de Collatz.

# --instructions--

1. Crie uma rotina para gerar a sequência de Hailstone para um número
2. A função deve retornar um array com o número menor que `limit` que tenha a maior sequência de hailstone e o tamanho da sequência. (Mas não mostrar a sequência real!)

# --hints--

`hailstoneSequence` deve ser uma função.

```js
assert(typeof hailstoneSequence === 'function');
```

`hailstoneSequence(30)` deve retornar um array.

```js
assert(Array.isArray(hailstoneSequence(30)));
```

`hailstoneSequence(30)` deve retornar `[27, 112]`.

```js
assert.deepEqual(hailstoneSequence(30), [27, 112]);
```

`hailstoneSequence(50000)` deve retornar `[35655, 324]`.

```js
assert.deepEqual(hailstoneSequence(50000), [35655, 324]);
```

`hailstoneSequence(100000)` deve retornar `[77031, 351]`.

```js
assert.deepEqual(hailstoneSequence(100000), [77031, 351]);
```

# --seed--

## --seed-contents--

```js
function hailstoneSequence(limit) {
  const res = [];


  return res;
}
```

# --solutions--

```js
function hailstoneSequence (limit) {
  function hailstone(n) {
    const seq = [n];
    while (n > 1) {
      n = n % 2 ? 3 * n + 1 : n / 2;
      seq.push(n);
    }
    return seq;
  }

  let n = 0;
  let max = 0;
  for (let i = limit; --i;) {
    const seq = hailstone(i);
    const sLen = seq.length;

    if (sLen > max) {
      n = i;
      max = sLen;
    }
  }

  return [n, max];
}
```
