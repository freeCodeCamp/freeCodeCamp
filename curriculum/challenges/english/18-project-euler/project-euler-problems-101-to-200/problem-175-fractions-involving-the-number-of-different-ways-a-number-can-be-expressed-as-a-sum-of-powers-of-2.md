---
id: 5900f41c1000cf542c50ff2e
title: >-
  Problem 175: Fractions involving the number of different ways a number can be
  expressed as a sum of powers of 2
challengeType: 1
forumTopicId: 301810
dashedName: >-
  problem-175-fractions-involving-the-number-of-different-ways-a-number-can-be-expressed-as-a-sum-of-powers-of-2
---

# --description--

Define $f(0) = 1$ and $f(n)$ to be the number of ways to write $n$ as a sum of powers of 2 where no power occurs more than twice.

For example, $f(10) = 5$ since there are five different ways to express 10:

$$10 = 8 + 2 = 8 + 1 + 1 = 4 + 4 + 2 = 4 + 2 + 2 + 1 + 1 = 4 + 4 + 1 + 1$$

It can be shown that for every fraction $\frac{p}{q}\\; (p>0, q>0)$ there exists at least one integer $n$ such that $\frac{f(n)}{f(n - 1)} = \frac{p}{q}$.

For instance, the smallest $n$ for which $\frac{f(n)}{f(n - 1)} = \frac{13}{17}$ is 241. The binary expansion of 241 is 11110001.

Reading this binary number from the most significant bit to the least significant bit there are 4 one's, 3 zeroes and 1 one. We shall call the string 4,3,1 the Shortened Binary Expansion of 241.

Find the Shortened Binary Expansion of the smallest $n$ for which

$$\frac{f(n)}{f(n - 1)} = \frac{123456789}{987654321}$$

Give your answer as a string with comma separated integers, without any whitespaces.

# --hints--

`shortenedBinaryExpansionOfNumber()` should return a string.

```js
assert(typeof shortenedBinaryExpansionOfNumber() === 'string');
```

`shortenedBinaryExpansionOfNumber()` should return the string `1,13717420,8`.

```js
assert.strictEqual(shortenedBinaryExpansionOfNumber(), '1,13717420,8');
```

# --seed--

## --seed-contents--

```js
function shortenedBinaryExpansionOfNumber() {

  return true;
}

shortenedBinaryExpansionOfNumber();
```

# --solutions--

```js
// solution required
```
