---
id: 5900f46b1000cf542c50ff7d
title: 'Problem 254: Sums of Digit Factorials'
challengeType: 1
forumTopicId: 301902
dashedName: problem-254-sums-of-digit-factorials
---

# --description--

Define $f(n)$ as the sum of the factorials of the digits of $n$. For example, $f(342) = 3! + 4! + 2! = 32$.

Define $sf(n)$ as the sum of the digits of $f(n)$. So $sf(342) = 3 + 2 = 5$.

Define $g(i)$ to be the smallest positive integer $n$ such that $sf(n) = i$. Though $sf(342)$ is 5, $sf(25)$ is also 5, and it can be verified that $g(5)$ is 25.

Define $sg(i)$ as the sum of the digits of $g(i)$. So $sg(5) = 2 + 5 = 7$.

Further, it can be verified that $g(20)$ is 267 and $\sum sg(i)$ for $1 ≤ i ≤ 20$ is 156.

What is $\sum sg(i)$ for $1 ≤ i ≤ 150$?

# --hints--

`sumsOfDigitFactorials()` should return `8184523820510`.

```js
assert.strictEqual(sumsOfDigitFactorials(), 8184523820510);
```

# --seed--

## --seed-contents--

```js
function sumsOfDigitFactorials() {

  return true;
}

sumsOfDigitFactorials();
```

# --solutions--

```js
// solution required
```
