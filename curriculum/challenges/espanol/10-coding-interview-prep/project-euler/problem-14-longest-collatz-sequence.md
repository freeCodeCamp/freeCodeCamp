---
id: 5900f37a1000cf542c50fe8d
title: 'Problema 14: Secuencia de Collatz más larga'
challengeType: 1
forumTopicId: 301768
dashedName: problem-14-longest-collatz-sequence
---

# --description--

Para el conjunto de los enteros positivos, se define la siguiente secuencia iterativa:

<div style='padding-left: 4em;'><var>n</var> → <var>n</var>/2 (<var>n</var> es par)</div>

<div style='padding-left: 4em;'><var>n</var> → 3<var>n</var> + 1 (<var>n</var> es impar)</div>

Usando la regla anterior y comenzando por 13, generamos la siguiente secuencia:

<div style='text-align: center;'>13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1</div>

Se puede comprobar que esta secuencia (comenzando en 13 y terminando en 1) contiene 10 términos. Aunque no haya sido demostrado todavía (Conjetura de Collatz), se cree que con cualquier número con el que se empiece, finalmente se acaba en 1.

¿Con qué número habrá que empezar, por debajo del `limit` dado, para producir la secuencia más larga?

**Nota:** una vez que la secuencia ha comenzado, se permiten términos por encima del `limit`.

# --hints--

`longestCollatzSequence(14)` debe devolver un número.

```js
assert(typeof longestCollatzSequence(14) === 'number');
```

`longestCollatzSequence(14)` debe devolver 9.

```js
assert.strictEqual(longestCollatzSequence(14), 9);
```

`longestCollatzSequence(5847)` debe devolver 3711.

```js
assert.strictEqual(longestCollatzSequence(5847), 3711);
```

`longestCollatzSequence(46500)` debe devolver 35655.

```js
assert.strictEqual(longestCollatzSequence(46500), 35655);
```

`longestCollatzSequence(54512)` debe devolver 52527.

```js
assert.strictEqual(longestCollatzSequence(54512), 52527);
```

`longestCollatzSequence(100000)` debe devolver 77031.

```js
assert.strictEqual(longestCollatzSequence(100000), 77031);
```

`longestCollatzSequence(1000000)` debe devolver 837799.

```js
assert.strictEqual(longestCollatzSequence(1000000), 837799);
```

# --seed--

## --seed-contents--

```js
function longestCollatzSequence(limit) {

  return true;
}

longestCollatzSequence(14);
```

# --solutions--

```js
function longestCollatzSequence(limit) {
  let longest = 1;
  let maxLength = 1;
  for (let i = Math.floor(limit / 2); i < limit; i++) {
    let len = colLen(i);
    if (len > maxLength) {
      longest = i;
      maxLength = len;
    }
  }
  return longest;
}

const knownSequence = { '1': 1 };

function colLen(n) {
  if (knownSequence[n]) {
    return knownSequence[n];
  } else {
    const len = n % 2 === 0 ? colLen(n / 2) + 1 : colLen((3 * n + 1) / 2) + 2;
    knownSequence[n] = len;
    return len;
  }
}
```
