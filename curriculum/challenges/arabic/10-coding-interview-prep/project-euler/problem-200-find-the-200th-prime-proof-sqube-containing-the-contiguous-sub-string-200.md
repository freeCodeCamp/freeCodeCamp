---
id: 5900f4351000cf542c50ff47
title: >-
  Problem 200: Find the 200th prime-proof sqube containing the contiguous sub-string "200"
challengeType: 1
forumTopicId: 301840
dashedName: >-
  problem-200-find-the-200th-prime-proof-sqube-containing-the-contiguous-sub-string-200
---

# --description--

We shall define a sqube to be a number of the form, ${p^2}{q^3}$, where $p$ and $q$ are distinct primes.

For example, $200 = {5^2}{2^3}$ or $120072949 = {{23}^2}{{61}^3}$.

The first five squbes are 72, 108, 200, 392, and 500.

Interestingly, 200 is also the first number for which you cannot change any single digit to make a prime; we shall call such numbers, prime-proof. The next prime-proof sqube which contains the contiguous sub-string `200` is 1992008.

Find the 200th prime-proof sqube containing the contiguous sub-string `200`.

# --hints--

`primeProofSqubeWithSubString()` should return `229161792008`.

```js
assert.strictEqual(primeProofSqubeWithSubString(), 229161792008);
```

# --seed--

## --seed-contents--

```js
function primeProofSqubeWithSubString() {

  return true;
}

primeProofSqubeWithSubString();
```

# --solutions--

```js
// solution required
```
