---
id: 5900f3a51000cf542c50feb8
title: 'Problem 57: Square root convergents'
challengeType: 5
forumTopicId: 302168
dashedName: problem-57-square-root-convergents
---

# --description--

It is possible to show that the square root of two can be expressed as an infinite continued fraction.

<div style='text-align: center;'>$\sqrt 2 =1+ \frac 1 {2+ \frac 1 {2 +\frac 1 {2+ \dots}}}$</div>

By expanding this for the first four iterations, we get:

$1 + \\frac 1 2 = \\frac 32 = 1.5$

$1 + \\frac 1 {2 + \\frac 1 2} = \\frac 7 5 = 1.4$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 2}} = \\frac {17}{12} = 1.41666 \\dots$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 {2+\\frac 1 2}}} = \\frac {41}{29} = 1.41379 \\dots$

The next three expansions are $\\frac {99}{70}$, $\\frac {239}{169}$, and $\\frac {577}{408}$, but the eighth expansion, $\\frac {1393}{985}$, is the first example where the number of digits in the numerator exceeds the number of digits in the denominator.

In the first `n` expansions, how many fractions contain a numerator with more digits than denominator?

# --hints--

`squareRootConvergents(10)` should return a number.

```js
assert(typeof squareRootConvergents(10) === 'number');
```

`squareRootConvergents(10)` should return 1.

```js
assert.strictEqual(squareRootConvergents(10), 1);
```

`squareRootConvergents(100)` should return 15.

```js
assert.strictEqual(squareRootConvergents(100), 15);
```

`squareRootConvergents(1000)` should return 153.

```js
assert.strictEqual(squareRootConvergents(1000), 153);
```

# --seed--

## --seed-contents--

```js
function squareRootConvergents(n) {

  return true;
}

squareRootConvergents(1000);
```

# --solutions--

```js
function squareRootConvergents(n) {
  function countDigits(number) {
    let counter = 0;
    while (number > 0) {
      counter++;
      number = number / 10n;
    }
    return counter;
  }

  // Use BigInt as integer won't handle all cases
  let numerator = 3n;
  let denominator = 2n;
  let moreDigitsInNumerator = 0;

  for (let i = 2; i <= n; i++) {
    [numerator, denominator] = [
      numerator + 2n * denominator,
      denominator + numerator
    ];

    if (countDigits(numerator) > countDigits(denominator)) {
      moreDigitsInNumerator++;
    }
  }
  return moreDigitsInNumerator;
}
```
