---
id: 5900f53a1000cf542c51004c
title: 'Problem 461: Almost Pi'
challengeType: 1
forumTopicId: 302136
dashedName: problem-461-almost-pi
---

# --description--

Let `f(k, n)` = $e^\frac{k}{n} - 1$, for all non-negative integers `k`.

Remarkably, `f(6, 200) + f(75, 200) + f(89, 200) + f(226, 200)` = 3.1415926… ≈ π.

In fact, it is the best approximation of π of the form `f(a, 200) + f(b, 200) + f(c, 200) + f(d, 200)`.

Let `almostPi(n)` = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> + d<sup>2</sup> for a, b, c, d that minimize the error: $\lvert f(a,n) + f(b,n) + f(c,n) + f(d,n) - \Pi\rvert$

You are given `almostPi(200)` = 6<sup>2</sup> + 75<sup>2</sup> + 89<sup>2</sup> + 226<sup>2</sup> = 64658.

# --hints--

`almostPi` should be a function.

```js
assert(typeof almostPi === 'function')
```

`almostPi` should return a number.

```js
assert.strictEqual(typeof almostPi(10), 'number');
```

`almostPi(29)` should return `1208`.

```js
assert.strictEqual(almostPi(29), 1208);
```

`almostPi(50)` should return `4152`.

```js
assert.strictEqual(almostPi(50), 4152);
```

`almostPi(200)` should return `64658`.

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
  const max_k = Math.ceil(n * Math.log(Math.PI + 1)) + 1;
  const     f = Array(max_k)
                  .fill(0)
                  .map((_, i) => Math.exp(i / n) - 1);

  // Pairs of values
  const pairs     = Array(max_k * (max_k - 1) / 2);
  let   num_pairs = 0;

  for (let b = 1; b < max_k; b++) {
    for (let a = 0; a < b; a++) {
      const value = f[a] + f[b];

      if (value > Math.PI) break;
      pairs[num_pairs] = {a, b, value};
      num_pairs++;
    }
  }
  pairs.sort((a, b) => a.value - b.value);

  // Find lowest matching pair for each pair
  let min_error = Math.PI;
  let min_abcd  = -1;

  for (let i = 0; i < num_pairs; i++) {
    const error = Math.PI - pairs[i].value;
    let start   = i;
    let stop    = num_pairs - 1;

    // Find best match
    while (stop - start > 1) {
      let mid = start + Math.floor((stop - start) / 2);

      if (pairs[mid].value > error) stop = mid - 1;
      else start = mid + 1;
    }

    // Compute new best error
    for (const j of [start, stop]) {
      const new_error = Math.abs(error - pairs[j].value);

      if (new_error < min_error) {
        min_error = new_error;
        min_abcd  = pairs[i].a * pairs[i].a + pairs[i].b * pairs[i].b +
                    pairs[j].a * pairs[j].a + pairs[j].b * pairs[j].b;
      }
    }
  }
  return min_abcd;
}
```
