---
id: 595668ca4cfe1af2fb9818d4
title: Harshad or Niven series
challengeType: 1
forumTopicId: 302281
dashedName: harshad-or-niven-series
---

# --description--

The Harshad or Niven numbers are positive integers ≥ 1 that are divisible by the sum of their digits.

For example, `42` is a Harshad number as `42` is divisible by `(4 + 2)` without remainder.

Assume that the series is defined as the numbers in increasing order.

# --instructions--

Implement a function to generate successive members of the Harshad sequence.

Use it to return an array with ten members of the sequence, starting with first Harshad number greater than `n`.

# --hints--

`isHarshadOrNiven` should be a function.

```js
assert(typeof isHarshadOrNiven === 'function');
```

`isHarshadOrNiven(10)` should return `[12, 18, 20, 21, 24, 27, 30, 36, 40, 42]`

```js
assert.deepEqual(isHarshadOrNiven(10), [12, 18, 20, 21, 24, 27, 30, 36, 40, 42]);
```

`isHarshadOrNiven(400)` should return `[402, 405, 407, 408, 410, 414, 420, 423, 432, 440]`

```js
assert.deepEqual(isHarshadOrNiven(400), [402, 405, 407, 408, 410, 414, 420, 423, 432, 440]);
```

`isHarshadOrNiven(1000)` should return `[1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]`

```js
assert.deepEqual(isHarshadOrNiven(1000), [1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]);
```

# --seed--

## --seed-contents--

```js
function isHarshadOrNiven(n) {
  const res = [];

  return res;
}
```

# --solutions--

```js
function isHarshadOrNiven(n) {
  function isHarshad(num) {
    let s = 0;
    const nStr = num.toString();
    for (let i = 0; i < nStr.length; ++i) {
      s += parseInt(nStr.charAt(i), 10);
    }
    return n % s === 0;
  }

  const res = [];
  let count = 0;

  while (count < 10) {
    n++;
    if (isHarshad(n)) {
      count++;
      res.push(n);
    }
  }

  return res;
}
```
