---
id: 599d15309e88c813a40baf58
title: Ентропія
challengeType: 1
forumTopicId: 302254
dashedName: entropy
---

# --description--

Обчислити інформаційну ентропію заданого вхідного рядка.

Зважаючи на дискретну випадкову змінну $X$, яка є рядком для $N$ "символів" (всіх символів), що складається з $n$ різних символів (n=2 для бінарних), інформаційна ентропія для X в бітах/символах є:

$H_2(X) = -\\sum\_{i=1}^n \\frac{count_i}{N} \\log_2 \\left(\\frac{count_i}{N}\\right)$

де $count_i$ - це підрахунок символу $n_i$.

# --hints--

`entropy` має бути функцією.

```js
assert(typeof entropy === 'function');
```

`entropy("0")` має повернути `0`

```js
assert.equal(entropy('0'), 0);
```

`entropy("01")` має повернути `1`

```js
assert.equal(entropy('01'), 1);
```

`entropy("0123")` має повернути `2`

```js
assert.equal(entropy('0123'), 2);
```

`entropy("01234567")` має повернути `3`

```js
assert.equal(entropy('01234567'), 3);
```

`entropy("0123456789abcdef")` має повернути `4`

```js
assert.equal(entropy('0123456789abcdef'), 4);
```

`entropy("1223334444")` має повернути `1.8464393446710154`

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
