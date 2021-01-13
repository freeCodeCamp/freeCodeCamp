---
id: 5900f4d21000cf542c50ffe5
title: 'Problem 358: Cyclic numbers'
challengeType: 5
forumTopicId: 302018
dashedName: problem-358-cyclic-numbers
---

# --description--

A cyclic number with n digits has a very interesting property:

When it is multiplied by 1, 2, 3, 4, ... n, all the products have exactly the same digits, in the same order, but rotated in a circular fashion!

The smallest cyclic number is the 6-digit number 142857 : 142857 × 1 = 142857 142857 × 2 = 285714 142857 × 3 = 428571 142857 × 4 = 571428 142857 × 5 = 714285 142857 × 6 = 857142

The next cyclic number is 0588235294117647 with 16 digits : 0588235294117647 × 1 = 0588235294117647 0588235294117647 × 2 = 1176470588235294 0588235294117647 × 3 = 1764705882352941 ... 0588235294117647 × 16 = 9411764705882352

Note that for cyclic numbers, leading zeros are important.

There is only one cyclic number for which, the eleven leftmost digits are 00000000137 and the five rightmost digits are 56789 (i.e., it has the form 00000000137...56789 with an unknown number of digits in the middle). Find the sum of all its digits.

# --hints--

`euler358()` should return 3284144505.

```js
assert.strictEqual(euler358(), 3284144505);
```

# --seed--

## --seed-contents--

```js
function euler358() {

  return true;
}

euler358();
```

# --solutions--

```js
// solution required
```
