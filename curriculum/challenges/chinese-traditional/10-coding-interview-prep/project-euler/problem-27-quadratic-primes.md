---
id: 5900f3871000cf542c50fe9a
title: 'Problem 27: Quadratic primes'
challengeType: 5
forumTopicId: 301919
dashedName: problem-27-quadratic-primes
---

# --description--

Euler discovered the remarkable quadratic formula:

<div style='margin-left: 4em;'>$n^2 + n + 41$</div>

It turns out that the formula will produce 40 primes for the consecutive integer values $0 \\le n \\le 39$. However, when $n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41$ is divisible by 41, and certainly when $n = 41, 41^2 + 41 + 41$ is clearly divisible by 41.

The incredible formula $n^2 - 79n + 1601$ was discovered, which produces 80 primes for the consecutive values $0 \\le n \\le 79$. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

<div style='margin-left: 4em;'>
  $n^2 + an + b$, where $|a| < range$ and $|b| \le range$<br>
  where $|n|$ is the modulus/absolute value of $n$<br>
  e.g. $|11| = 11$ and $|-4| = 4$<br>
</div>

Find the product of the coefficients, $a$ and $b$, for the quadratic expression that produces the maximum number of primes for consecutive values of $n$, starting with $n = 0$.

# --hints--

`quadraticPrimes(200)` should return a number.

```js
assert(typeof quadraticPrimes(200) === 'number');
```

`quadraticPrimes(200)` should return -4925.

```js
assert(quadraticPrimes(200) == -4925);
```

`quadraticPrimes(500)` should return -18901.

```js
assert(quadraticPrimes(500) == -18901);
```

`quadraticPrimes(800)` should return -43835.

```js
assert(quadraticPrimes(800) == -43835);
```

`quadraticPrimes(1000)` should return -59231.

```js
assert(quadraticPrimes(1000) == -59231);
```

# --seed--

## --seed-contents--

```js
function quadraticPrimes(range) {

  return range;
}

quadraticPrimes(1000);
```

# --solutions--

```js
// solution required
```
