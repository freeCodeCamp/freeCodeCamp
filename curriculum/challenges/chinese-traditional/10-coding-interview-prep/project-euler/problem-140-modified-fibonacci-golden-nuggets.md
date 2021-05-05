---
id: 5900f3fa1000cf542c50ff0c
title: 'Problem 140: Modified Fibonacci golden nuggets'
challengeType: 5
forumTopicId: 301769
dashedName: problem-140-modified-fibonacci-golden-nuggets
---

# --description--

Consider the infinite polynomial series AG(x) = xG1 + x2G2 + x3G3 + ..., where Gk is the kth term of the second order recurrence relation Gk = Gk−1 + Gk−2, G1 = 1 and G2 = 4; that is, 1, 4, 5, 9, 14, 23, ... .

For this problem we shall be concerned with values of x for which AG(x) is a positive integer.

The corresponding values of x for the first five natural numbers are shown below.

xAG(x) (√5−1)/41 2/52 (√22−2)/63 (√137−5)/144 1/25

We shall call AG(x) a golden nugget if x is rational, because they become increasingly rarer; for example, the 20th golden nugget is 211345365. Find the sum of the first thirty golden nuggets.

# --hints--

`euler140()` should return 5673835352990.

```js
assert.strictEqual(euler140(), 5673835352990);
```

# --seed--

## --seed-contents--

```js
function euler140() {

  return true;
}

euler140();
```

# --solutions--

```js
// solution required
```
