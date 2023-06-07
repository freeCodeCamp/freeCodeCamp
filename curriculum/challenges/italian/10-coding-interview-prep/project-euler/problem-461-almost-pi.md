---
id: 5900f53a1000cf542c51004c
title: 'Problema 461: Quasi Pi'
challengeType: 1
forumTopicId: 302136
dashedName: problem-461-almost-pi
---

# --description--

Sia `f(k, n)` = $e^\frac{k}{n} - 1$, per tutti gli interi non negativi `k`.

Notevolmente, `f(6, 200) + f(75, 200) + f(89, 200) + f(226, 200)` = 3.1415926… ≈ π.

In effetti, è la migliore approssimazione della forma `f(a, 200) + f(b, 200) + f(c, 200) + f(d, 200)`.

Sia `almostPi(n)` = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> + d<sup>2</sup> per a, b, c, d che minimizza l'errore: $\lvert f(a,n) + f(b,n) + f(c,n) + f(d,n) - \Pi\rvert$

Ti viene dato `almostPi(200)` = 6<sup>2</sup> + 75<sup>2</sup> + 89<sup>2</sup> + 226<sup>2</sup> = 64658.

# --hints--

`almostPi` dovrebbe essere una funzione.

```js
assert(typeof almostPi === 'function')
```

`almostPi` dovrebbe restituire un numero.

```js
assert.strictEqual(typeof almostPi(10), 'number');
```

`almostPi(29)` dovrebbe restituire `1208`.

```js
assert.strictEqual(almostPi(29), 1208);
```

`almostPi(50)` dovrebbe restituire `4152`.

```js
assert.strictEqual(almostPi(50), 4152);
```

`almostPi(200)` dovrebbe restituire `64658`.

```js
assert.strictEqual(almostPi(200), 64658);
```

# --seed--

## --seed-contents--

```js
function almostPi(n) {

  return true;
}
```

# --solutions--

```js
function almostPi(n) {

  // Find all possible values where f(k, n) <= PI
  const f = [];
  let max = 0;
  while (1) {
    let current = Math.exp(max / n) - 1;

    if (current > Math.PI) break;

    f.push(current);
    ++max;
  }

  // Get all pairs where f[i] + f[j] <= PI
  const pairs = [];
  for (let i = 0; i < max; ++i) {
    for (let j = 0; j < max; ++j) {
      if (f[i] + f[j] > Math.PI) break;
      pairs.push(f[i] + f[j]);
    }
  }

  // Sort all values
  pairs.sort((a, b) => a - b);

  // Optimal Value for (a + b)
  let left = 0;
  // Optimal Value for (c + d)
  let right = 0;
  // minimum error with Math.abs(a + b - Math.PI)
  let minError = Math.PI;

  // Binary Search for the best match
  for (let i = 0; i < pairs.length; ++i) {
    let current = pairs[i];
    let need = Math.PI - current;

    if (need < current) break;

    let match;
    for (let i = 1; i < pairs.length; ++i) {
      if (pairs[i] > need) {
        match = i;
        break;
      }
    }

    let error = Math.abs(need - pairs[match]);
    if (error < minError)
    {
      minError = error;
      left = i;
      right = match;
    }

    --match;
    error = Math.abs(need - pairs[match]);
    if (error < minError) {
      minError = error;
      left = i;
      right = match;
    }
  }

  let a, b, c, d;

  OuterLoop1:
  for (a = 0; a < max; ++a) {
    for (b = a; b < max; ++b) {
      if (pairs[left] == f[a] + f[b]) {
        break OuterLoop1;
      }
    }
  }

  OuterLoop2:
  for (c = 0; c < max; ++c) {
    for (d = c; d < max; ++d) {
      if (pairs[right] == f[c] + f[d]) {
        break OuterLoop2;
      }
    }
  }
  return a*a + b*b + c*c + d*d;
}
```
