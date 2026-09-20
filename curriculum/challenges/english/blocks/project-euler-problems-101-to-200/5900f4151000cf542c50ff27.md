---
id: 5900f4151000cf542c50ff27
title: 'Problem 168: Number Rotations'
challengeType: 1
forumTopicId: 301802
dashedName: problem-168-number-rotations
---

# --description--

Consider the number 142857. We can right-rotate this number by moving the last digit (7) to the front of it, giving us 714285.

It can be verified that $714285 = 5 × 142857$.

This demonstrates an unusual property of 142857: it is a divisor of its right-rotation.

For integer number of digits $a$ and $b$, find the last 5 digits of the sum of all integers $n$, $10^a &lt; n &lt; 10^b$, that have this property.

# --hints--

`numberRotations(2, 10)` should return `98311`.

```js
assert.strictEqual(numberRotations(2, 10), 98311);
```

`numberRotations(2, 100)` should return `59206`.

```js
assert.strictEqual(numberRotations(2, 100), 59206);
```

# --seed--

## --seed-contents--

```js
function numberRotations(a, b) {

  return 0;
}

numberRotations();
```

# --solutions--

```js
function numberRotations(minDigits, maxDigits) {
  const DIGITS_TO_KEEP = 100000n;
  const powersOfTen = Array(maxDigits).fill(0);
  powersOfTen[0] = 1n;
  for (let i = 1; i < maxDigits; i++) {
    powersOfTen[i] = powersOfTen[i - 1] * 10n;
  }

  // We want numbers of the form xd * m = dx
  // Or more precisely:
  //   (x * 10 + d) * m = d*10^(n-1) + x
  // Solving for x:
  //   x = d (10^(n-1) - m) / (10 * m - 1)
  let total = 0n;
  for (let numDigits = minDigits; numDigits <= maxDigits; numDigits++) {
    // Check all multiplier - digit pairs to see if a candidate can be built
    //  with the correct number of digits
    for (let multiplier = 1n; multiplier < 10n; multiplier++) {
      for (let lastDigit = 1n; lastDigit < 10n; lastDigit++) {
        const numerator   = lastDigit * (powersOfTen[numDigits - 1] - multiplier);
        const denominator = (powersOfTen[1] * multiplier - 1n);
        if (numerator % denominator === 0n) {
          const candidate = (numerator / denominator) * 10n + lastDigit;
          if (candidate.toString().length === numDigits) {
            total = (total + candidate) % DIGITS_TO_KEEP;
          }
        }
      }
    }
  }

  return parseInt(total);
}
```
