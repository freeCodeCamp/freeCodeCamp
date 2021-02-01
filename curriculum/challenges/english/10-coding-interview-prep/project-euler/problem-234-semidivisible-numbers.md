---
id: 5900f4571000cf542c50ff69
title: 'Problem 234: Semidivisible numbers'
challengeType: 5
forumTopicId: 301878
dashedName: problem-234-semidivisible-numbers
---

# --description--

For an integer n ≥ 4, we define the lower prime square root of n, denoted by lps(n), as the largest prime ≤ √n and the upper prime square root of n, ups(n), as the smallest prime ≥ √n.

So, for example, lps(4) = 2 = ups(4), lps(1000) = 31, ups(1000) = 37.

Let us call an integer n ≥ 4 semidivisible, if one of lps(n) and ups(n) divides n, but not both.

The sum of the semidivisible numbers not exceeding 15 is 30, the numbers are 8, 10 and 12. 15 is not semidivisible because it is a multiple of both lps(15) = 3 and ups(15) = 5. As a further example, the sum of the 92 semidivisible numbers up to 1000 is 34825.

What is the sum of all semidivisible numbers not exceeding 999966663333 ?

# --hints--

`euler234()` should return 1259187438574927000.

```js
assert.strictEqual(euler234(), 1259187438574927000);
```

# --seed--

## --seed-contents--

```js
function euler234() {

  return true;
}

euler234();
```

# --solutions--

```js
// solution required
```
