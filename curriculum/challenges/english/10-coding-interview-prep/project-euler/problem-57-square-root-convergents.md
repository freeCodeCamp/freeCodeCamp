---
id: 5900f3a51000cf542c50feb8
title: 'Problem 57: Square root convergents'
challengeType: 5
forumTopicId: 302168
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

In the first one-thousand expansions, how many fractions contain a numerator with more digits than denominator?

# --hints--

`squareRootConvergents()` should return a number.

```js
assert(typeof squareRootConvergents() === 'number');
```

`squareRootConvergents()` should return 153.

```js
assert.strictEqual(squareRootConvergents(), 153);
```

# --seed--

## --seed-contents--

```js
function squareRootConvergents() {

  return true;
}

squareRootConvergents();
```

# --solutions--

```js
// solution required
```
