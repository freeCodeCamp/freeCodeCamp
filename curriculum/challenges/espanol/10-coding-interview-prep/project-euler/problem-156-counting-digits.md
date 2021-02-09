---
id: 5900f4091000cf542c50ff1b
title: 'Problem 156: Counting Digits'
challengeType: 5
forumTopicId: 301787
dashedName: problem-156-counting-digits
---

# --description--

Starting from zero the natural numbers are written down in base 10 like this:

0 1 2 3 4 5 6 7 8 9 10 11 12....

Consider the digit d=1. After we write down each number n, we will update the number of ones that have occurred and call this number f(n,1). The first values for f(n,1), then, are as follows:

nf(n,1) 00 11 21 31 41 51 61 71 81 91 102 114 125

Note that f(n,1) never equals 3.

So the first two solutions of the equation f(n,1)=n are n=0 and n=1. The next solution is n=199981. In the same manner the function f(n,d) gives the total number of digits d that have been written down after the number n has been written.

In fact, for every digit d ≠ 0, 0 is the first solution of the equation f(n,d)=n. Let s(d) be the sum of all the solutions for which f(n,d)=n.

You are given that s(1)=22786974071. Find ∑ s(d) for 1 ≤ d ≤ 9. Note: if, for some n, f(n,d)=n for more than one value of d this value of n is counted again for every value of d for which f(n,d)=n.

# --hints--

`euler156()` should return 21295121502550.

```js
assert.strictEqual(euler156(), 21295121502550);
```

# --seed--

## --seed-contents--

```js
function euler156() {

  return true;
}

euler156();
```

# --solutions--

```js
// solution required
```
