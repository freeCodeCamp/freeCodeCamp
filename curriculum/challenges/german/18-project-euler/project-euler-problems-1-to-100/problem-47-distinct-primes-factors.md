---
id: 5900f39c1000cf542c50feae
title: 'Problem 47: Eindeutige Primzahlfaktoren'
challengeType: 1
forumTopicId: 302145
dashedName: problem-47-distinct-primes-factors
---

# --description--

Die ersten beiden aufeinanderfolgenden Zahlen, die zwei verschiedene Primfaktoren haben, sind:

<div style='padding-left: 4em;'>
  14 = 2 × 7<br>
  15 = 3 × 5
</div>

Die ersten drei aufeinanderfolgenden Zahlen, die drei verschiedene Primfaktoren haben, sind:

<div style='padding-left: 4em;'>
  644 = 2<sup>2</sup> × 7 × 23<br>
  645 = 3 × 5 × 43<br>
  646 = 2 × 17 × 19
</div>

Finde die ersten vier aufeinanderfolgenden ganzen Zahlen, die jeweils vier verschiedene Primfaktoren haben. Was ist die erste dieser Zahlen?

# --hints--

`distinctPrimeFactors(2, 2)` sollte eine Zahl zurückgeben.

```js
assert(typeof distinctPrimeFactors(2, 2) === 'number');
```

`distinctPrimeFactors(2, 2)` sollte 14 zurückgeben.

```js
assert.strictEqual(distinctPrimeFactors(2, 2), 14);
```

`distinctPrimeFactors(3, 3)` sollte 644 zurückgeben.

```js
assert.strictEqual(distinctPrimeFactors(3, 3), 644);
```

`distinctPrimeFactors(4, 4)` sollte 134043 zurückgeben.

```js
assert.strictEqual(distinctPrimeFactors(4, 4), 134043);
```

# --seed--

## --seed-contents--

```js
function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {

  return true;
}

distinctPrimeFactors(4, 4);
```

# --solutions--

```js
function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  const primeLimit = targetNumPrimes * targetConsecutive * 10000;
  const numFactors = Array(primeLimit).fill(0);

  let numConsecutive = 0;
  for (let i = 2; i < primeLimit; i++) {
    if (numFactors[i] === targetNumPrimes) {
      // Current number is composite with target num factors
      numConsecutive++;
      if (numConsecutive === targetConsecutive) {
        return i - numConsecutive + 1;
      }
    } else {
      // Current number is not matching composite
      numConsecutive = 0;
      if (numFactors[i] === 0) {
        // Current number is prime
        for (let j = i; j < primeLimit; j += i) {
          numFactors[j]++;
        }
      }
    }
  }
}
```
