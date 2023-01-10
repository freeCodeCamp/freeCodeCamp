---
id: 5900f5331000cf542c510046
title: 'Problem 455: Powers With Trailing Digits'
challengeType: 1
forumTopicId: 302129
dashedName: problem-455-powers-with-trailing-digits
---

# --description--

Let $f(n)$ be the largest positive integer $x$ less than ${10}^9$ such that the last 9 digits of $n^x$ form the number $x$ (including leading zeros), or zero if no such integer exists.

Por ejemplo:

$$\begin{align}   & f(4) = 411\\,728\\,896 (4^{411\\,728\\,896} = ...490\underline{411728896}) \\\\
  & f(10) = 0 \\\\   & f(157) = 743\\,757 (157^{743\\,757} = ...567\underline{000743757}) \\\\
  & Σf(n), 2 ≤ n ≤ 103 = 442\\,530\\,011\\,399 \end{align}$$

Find $\sum f(n)$, $2 ≤ n ≤ {10}^6$.

# --hints--

`powersWithTrailingDigits()` should return `450186511399999`.

```js
assert.strictEqual(powersWithTrailingDigits(), 450186511399999);
```

# --seed--

## --seed-contents--

```js
function powersWithTrailingDigits() {

  return true;
}

powersWithTrailingDigits();
```

# --solutions--

```js
// solution required
```
