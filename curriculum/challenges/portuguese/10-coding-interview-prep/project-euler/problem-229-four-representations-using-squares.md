---
id: 5900f4521000cf542c50ff64
title: 'Problem 229: Four Representations using Squares'
challengeType: 5
forumTopicId: 301872
dashedName: problem-229-four-representations-using-squares
---

# --description--

Consider the number 3600. It is very special, because

3600 = 482 + 362 3600 = 202 + 2×402 3600 = 302 + 3×302 3600 = 452 + 7×152

Similarly, we find that 88201 = 992 + 2802 = 2872 + 2×542 = 2832 + 3×522 = 1972 + 7×842.

In 1747, Euler proved which numbers are representable as a sum of two squares. We are interested in the numbers n which admit representations of all of the following four types:

n = a12 + b12n = a22 + 2 b22n = a32 + 3 b32n = a72 + 7 b72,

where the ak and bk are positive integers.

There are 75373 such numbers that do not exceed 107.

How many such numbers are there that do not exceed 2×109?

# --hints--

`euler229()` should return 11325263.

```js
assert.strictEqual(euler229(), 11325263);
```

# --seed--

## --seed-contents--

```js
function euler229() {

  return true;
}

euler229();
```

# --solutions--

```js
// solution required
```
