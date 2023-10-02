---
id: 595608ff8bcd7a50bd490181
title: Numeri di Hailstone
challengeType: 1
forumTopicId: 302279
dashedName: hailstone-sequence
---

# --description--

I numeri di Hailstone possono essere generati da un numero intero positivo iniziale, `n` in questo modo:

- Se `n` è `1` allora la sequenza termina
- Se `n` è `pari` allora il successivo `n` della sequenza `= n/2`
- Se `n` è `dispari` allora il successivo `n` della sequenza `= (3 * n) + 1`

La congettura di Collatz (non dimostrata) è che i numeri di Hailstone per qualsiasi numero iniziale arrivano sempre a 1.

I numeri di Hailstone (detti così perché i valori sono di solito soggetti a più discese e salite come la grandine in una nuvola), sono anche noti come sequenza di Collatz.

# --instructions--

1. Crea una routine per generare la sequenza di Collatz per un numero
2. La tua funzione dovrebbe restituire un array con il numero sotto `limit` che ha la più lunga sequenza di collatz e la lunghezza della sequenza. (Ma non mostrare la sequenza effettiva!)

# --hints--

`hailstoneSequence` dovrebbe essere una funzione.

```js
assert(typeof hailstoneSequence === 'function');
```

`hailstoneSequence(30)` dovrebbe restituire un array.

```js
assert(Array.isArray(hailstoneSequence(30)));
```

`hailstoneSequence(30)` dovrebbe restituire `[27, 112]`.

```js
assert.deepEqual(hailstoneSequence(30), [27, 112]);
```

`hailstoneSequence(50000)` dovrebbe restituire `[35655, 324]`.

```js
assert.deepEqual(hailstoneSequence(50000), [35655, 324]);
```

`hailstoneSequence(100000)` dovrebbe restituire `[77031, 351]`.

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
