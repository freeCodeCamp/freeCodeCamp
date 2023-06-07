---
id: 5900f3911000cf542c50fea4
title: 'Problem 37: Truncatable primes'
challengeType: 1
forumTopicId: 302031
dashedName: problem-37-truncatable-primes
---

# --description--

The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only `n` (8 ≤ `n` ≤ 11) primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

# --hints--

`truncatablePrimes(8)` має повернути число.

```js
assert(typeof truncatablePrimes(8) === 'number');
```

`truncatablePrimes(8)` має повернути 1986.

```js
assert(truncatablePrimes(8) == 1986);
```

`truncatablePrimes(9)` має повернути 5123.

```js
assert(truncatablePrimes(9) == 5123);
```

`truncatablePrimes(10)` має повернути 8920.

```js
assert(truncatablePrimes(10) == 8920);
```

`truncatablePrimes(11)` має повернути 748317.

```js
assert(truncatablePrimes(11) == 748317);
```

# --seed--

## --seed-contents--

```js
function truncatablePrimes(n) {

  return n;
}

truncatablePrimes(11);
```

# --solutions--

```js
// solution required
```
