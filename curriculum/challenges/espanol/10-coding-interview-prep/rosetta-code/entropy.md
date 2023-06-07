---
id: 599d15309e88c813a40baf58
title: Entropy
challengeType: 1
forumTopicId: 302254
dashedName: entropy
---

# --description--

Calcula la Shannon entropy H de la entrada de una string dada.

Dada la variable aleatoria discreta $X$ que es un string de $N$ "símbolos" (caracteres totales) constando de $n$ caracteres diferentes (n=2 para binario), la Shannon entropy de X en bits/symbol es:

$H_2(X) = -\\sum\_{i=1}^n \\frac{count_i}{N} \\log_2 \\left(\\frac{count_i}{N}\\right)$

donde $count_i$ es el conteo de caracteres $n_i$.

# --hints--

`entropy` debiera ser una función.

```js
assert(typeof entropy === 'function');
```

`entropy("0")` debería regresar `0`

```js
assert.equal(entropy('0'), 0);
```

`entropy("01")` debería regresar `1`

```js
assert.equal(entropy('01'), 1);
```

`entropy("0123")` debería regresar `2`

```js
assert.equal(entropy('0123'), 2);
```

`entropy("01234567")` debería regresar `3`

```js
assert.equal(entropy('01234567'), 3);
```

`entropy("0123456789abcdef")` debería regresar `4`

```js
assert.equal(entropy('0123456789abcdef'), 4);
```

`entropy("1223334444")` debería regresar `1.8464393446710154`

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
