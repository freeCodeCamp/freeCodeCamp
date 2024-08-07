---
id: 5900f3cc1000cf542c50fede
title: 'Problem 95: Amicable chains'
challengeType: 1
forumTopicId: 302212
dashedName: problem-95-amicable-chains
---

# --description--

The proper divisors of a number are all the divisors excluding the number itself. For example, the proper divisors of 28 are 1, 2, 4, 7, and 14. As the sum of these divisors is equal to 28, we call it a perfect number.

Interestingly the sum of the proper divisors of 220 is 284 and the sum of the proper divisors of 284 is 220, forming a chain of two numbers. For this reason, 220 and 284 are called an amicable pair.

Perhaps less well known are longer chains. For example, starting with 12496, we form a chain of five numbers:

$$
  12496 → 14288 → 15472 → 14536 → 14264 \\,(→ 12496 → \cdots)
$$

Since this chain returns to its starting point, it is called an amicable chain.

Find the smallest member of the longest amicable chain with no element exceeding `limit`.

# --hints--

`amicableChains(300)` should return a number.

```js
assert(typeof amicableChains(300) === 'number');
```

`amicableChains(300)` should return `220`.

```js
assert.strictEqual(amicableChains(300), 220);
```

`amicableChains(15000)` should return `220`.

```js
assert.strictEqual(amicableChains(15000), 220);
```

`amicableChains(100000)` should return `12496`.

```js
assert.strictEqual(amicableChains(100000), 12496);
```

`amicableChains(1000000)` should return `14316`.

```js
assert.strictEqual(amicableChains(1000000), 14316);
```

# --seed--

## --seed-contents--

```js
function amicableChains(limit) {

  return true;
}

amicableChains(300);
```

# --solutions--

```js
function amicableChains(limit) {
  function getSmallestMember(chain) {
    let smallest = chain[0];
    for (let i = 1; i < chain.length; i++) {
      if (smallest > chain[i]) {
        smallest = chain[i];
      }
    }
    return smallest;
  }

  function getFactorsSums(limit) {
    const factorsSums = new Array(limit + 1).fill(1);
    for (let i = 2; i <= limit / 2; i++) {
      for (let j = 2 * i; j <= limit; j += i) {
        factorsSums[j] += i;
      }
    }
    return factorsSums;
  }

  const factorsSums = getFactorsSums(limit);
  const checkedNumbers = new Set();

  let longestChain = 0;
  let smallestMember = 0;
  for (let i = 0; i <= limit; i++) {
    const curChain = [];
    let curNumber = i;
    while (!checkedNumbers.has(curNumber) && factorsSums[curNumber] <= limit) {
      curNumber = factorsSums[curNumber];

      const chainStart = curChain.indexOf(curNumber);
      if (chainStart === -1) {
        curChain.push(curNumber);
        continue;
      }

      const chainLength = curChain.length - chainStart;
      if (chainLength > longestChain) {
        longestChain = chainLength;
        smallestMember = getSmallestMember(curChain.slice(chainStart));
      }
      break;
    }

    for (let j = 0; j < curChain.length; j++) {
      checkedNumbers.add(curChain[j]);
    }
  }

  return smallestMember;
}
```
