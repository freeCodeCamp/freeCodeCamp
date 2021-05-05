---
id: 5900f3cc1000cf542c50fede
title: 'Problem 95: Amicable chains'
challengeType: 5
forumTopicId: 302212
dashedName: problem-95-amicable-chains
---

# --description--

The proper divisors of a number are all the divisors excluding the number itself. For example, the proper divisors of 28 are 1, 2, 4, 7, and 14. As the sum of these divisors is equal to 28, we call it a perfect number.

Interestingly the sum of the proper divisors of 220 is 284 and the sum of the proper divisors of 284 is 220, forming a chain of two numbers. For this reason, 220 and 284 are called an amicable pair.

Perhaps less well known are longer chains. For example, starting with 12496, we form a chain of five numbers:

<div style="text-align: center;">
  12496 → 14288 → 15472 → 14536 → 14264 (→ 12496 → ...)
</div>

Since this chain returns to its starting point, it is called an amicable chain.

Find the smallest member of the longest amicable chain with no element exceeding one million.

# --hints--

`amicableChains()` should return a number.

```js
assert(typeof amicableChains() === 'number');
```

`amicableChains()` should return 14316.

```js
assert.strictEqual(amicableChains(), 14316);
```

# --seed--

## --seed-contents--

```js
function amicableChains() {

  return true;
}

amicableChains();
```

# --solutions--

```js
// solution required
```
