---
id: 595668ca4cfe1af2fb9818d4
title: Harshad or Niven series
challengeType: 5
forumTopicId: 302281
dashedName: harshad-or-niven-series
---

# --description--

The Harshad or Niven numbers are positive integers ≥ 1 that are divisible by the sum of their digits.

For example, `42` is a [Harshad number](https://rosettacode.org/wiki/Harshad_or_Niven_series "Harshad or Niven series") as `42` is divisible by `(4 + 2)` without remainder.

Assume that the series is defined as the numbers in increasing order.

# --instructions--

Implement a function to generate successive members of the Harshad sequence.

Use it to list the first twenty members of the sequence and list the first Harshad number greater than 1000.

# --hints--

`isHarshadOrNiven` should be a function.

```js
assert(typeof isHarshadOrNiven === 'function');
```

`isHarshadOrNiven()` should return `{"firstTwenty": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],"firstOver1000": 1002}`

```js
assert.deepEqual(isHarshadOrNiven(), res);
```

# --seed--

## --after-user-code--

```js
const res = {
  firstTwenty: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],
  firstOver1000: 1002
};
```

## --seed-contents--

```js
function isHarshadOrNiven() {
  const res = {
    firstTwenty: [],
    firstOver1000: undefined
  };
  // Only change code below this line

  return res;
}
```

# --solutions--

```js
function isHarshadOrNiven() {
  const res = {
    firstTwenty: [],
    firstOver1000: undefined
  };

  function isHarshad(n) {
    let s = 0;
    const nStr = n.toString();
    for (let i = 0; i < nStr.length; ++i) {
      s += parseInt(nStr.charAt(i), 10);
    }
    return n % s === 0;
  }

  let count = 0;
  const harshads = [];

  for (let n = 1; count < 20; ++n) {
    if (isHarshad(n)) {
      count++;
      harshads.push(n);
    }
  }

  res.firstTwenty = harshads;

  let h = 1000;
  while (!isHarshad(++h));
  res.firstOver1000 = h;

  return res;
}
```
