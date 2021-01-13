---
id: 5900f3e81000cf542c50fefb
title: 'Problem 124: Ordered radicals'
challengeType: 5
forumTopicId: 301751
dashedName: problem-124-ordered-radicals
---

# --description--

The radical of n, rad(n), is the product of the distinct prime factors of n. For example, 504 = 23 × 32 × 7, so rad(504) = 2 × 3 × 7 = 42.

If we calculate rad(n) for 1 ≤ n ≤ 10, then sort them on rad(n), and sorting on n if the radical values are equal, we get:

Unsorted

Sorted n rad(n)

n rad(n) k 11

111 22

222 33

423 42

824 55

335 66

936 77

557 82

668 93

779 1010

101010 Let E(k) be the kth element in the sorted n column; for example, E(4) = 8 and E(6) = 9. If rad(n) is sorted for 1 ≤ n ≤ 100000, find E(10000).

# --hints--

`euler124()` should return 21417.

```js
assert.strictEqual(euler124(), 21417);
```

# --seed--

## --seed-contents--

```js
function euler124() {

  return true;
}

euler124();
```

# --solutions--

```js
// solution required
```
