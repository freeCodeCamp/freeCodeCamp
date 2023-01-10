---
id: 599d15309e88c813a40baf58
title: Entropia
challengeType: 1
forumTopicId: 302254
dashedName: entropy
---

# --description--

Calcola l'entropia H di Shannon di una data stringa.

Data la variabile casuale discreta $X$ che è una stringa di $N$ "simboli" (caratteri totali) composta da $n$ caratteri diversi (n=2 per il binario), l'entropia di Shannon di X in bit/simbolo è:

$H_2(X) = -\\sum\_{i=1}^n \\frac{count_i}{N} \\log_2 \\left(\\frac{count_i}{N}\\right)$

dove $count_i$ è il conteggio dei caratteri $n_i$.

# --hints--

`entropy` dovrebbe essere una funzione.

```js
assert(typeof entropy === 'function');
```

`entropy("0")` dovrebbe restituire `0`

```js
assert.equal(entropy('0'), 0);
```

`entropy("01")` dovrebbe restituire `1`

```js
assert.equal(entropy('01'), 1);
```

`entropy("0123")` dovrebbe restituire `2`

```js
assert.equal(entropy('0123'), 2);
```

`entropy("01234567")` dovrebbe restituire `3`

```js
assert.equal(entropy('01234567'), 3);
```

`entropy("0123456789abcdef")` dovrebbe restituire `4`

```js
assert.equal(entropy('0123456789abcdef'), 4);
```

`entropy("1223334444")` dovrebbe restituire `1.8464393446710154`

```js
assert.equal(entropy('1223334444'), 1.8464393446710154);
```

# --seed--

## --seed-contents--

```js
function entropy(s) {

}
```

# --solutions--

```js
function entropy(s) {
    // Create a dictionary of character frequencies and iterate over it.
  function process(s, evaluator) {
    let h = Object.create(null),
      k;
    s.split('').forEach(c => {
      h[c] && h[c]++ || (h[c] = 1); });
    if (evaluator) for (k in h) evaluator(k, h[k]);
    return h;
  }
    // Measure the entropy of a string in bits per symbol.

  let sum = 0,
    len = s.length;
  process(s, (k, f) => {
    const p = f / len;
    sum -= p * Math.log(p) / Math.log(2);
  });
  return sum;
}
```
