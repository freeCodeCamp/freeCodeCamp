---
id: 5900f4091000cf542c50ff1b
title: 'Problem 156: Counting Digits'
challengeType: 1
forumTopicId: 301787
dashedName: problem-156-counting-digits
---

# --description--

Starting from zero the natural numbers are written down in base 10 like this:

0 1 2 3 4 5 6 7 8 9 10 11 12....

Consider the digit $d = 1$. After we write down each number n, we will update the number of ones that have occurred and call this number $f(n, 1)$. The first values for $f(n, 1)$, then, are as follows:

| $n$ | $f(n, 1)$ |
| --- | --------- |
| 0   | 0         |
| 1   | 1         |
| 2   | 1         |
| 3   | 1         |
| 4   | 1         |
| 5   | 1         |
| 6   | 1         |
| 7   | 1         |
| 8   | 1         |
| 9   | 1         |
| 10  | 2         |
| 11  | 4         |
| 12  | 5         |

Note that $f(n, 1)$ never equals 3.

So the first two solutions of the equation $f(n, 1) = n$ are $n = 0$ and $n = 1$. The next solution is $n = 199981$. In the same manner the function $f(n, d)$ gives the total number of digits d that have been written down after the number $n$ has been written.

In fact, for every digit $d ≠ 0$, 0 is the first solution of the equation $f(n, d) = n$. Let $s(d)$ be the sum of all the solutions for which $f(n, d) = n$.

You are given that $s(1) = 22786974071$. Find $\sum{s(d)}$ for $1 ≤ d ≤ 9$.

Note: if, for some $n$, $f(n, d) = n$ for more than one value of $d$ this value of $n$ is counted again for every value of $d$ for which $f(n, d) = n$.

# --hints--

`countingDigits()` should return `21295121502550`.

```js
assert.strictEqual(countingDigits(), 21295121502550);
```

# --seed--

## --seed-contents--

```js
function countingDigits() {

  return true;
}

countingDigits();
```

# --solutions--

```js
// solution required
```
