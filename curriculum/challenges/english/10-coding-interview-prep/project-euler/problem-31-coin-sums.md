---
id: 5900f38b1000cf542c50fe9e
title: 'Problem 31: Coin sums'
challengeType: 5
forumTopicId: 301965
dashedName: problem-31-coin-sums
---

# --description--

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

<div style='margin-left: 4em;'>1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).</div>

It is possible to make £2 in the following way:

<div style='margin-left: 4em;'>1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p</div>

How many different ways can `n` pence be made using any number of coins?

# --hints--

`coinSums(50)` should return a number.

```js
assert(typeof coinSums(50) === 'number');
```

`coinSums(50)` should return 451.

```js
assert(coinSums(50) == 451);
```

`coinSums(100)` should return 4563.

```js
assert(coinSums(100) == 4563);
```

`coinSums(150)` should return 21873.

```js
assert(coinSums(150) == 21873);
```

`coinSums(200)` should return 73682.

```js
assert(coinSums(200) == 73682);
```

# --seed--

## --seed-contents--

```js
function coinSums(n) {

  return n;
}

coinSums(200);
```

# --solutions--

```js
const coinSums = (n) => {
  const getWays = (n, m=8, c=[1, 2, 5, 10, 20, 50, 100, 200]) => {
    if (n === 0) return 1;
    if (m === 0 || n < 0) return 0;
    return getWays(n - c[m - 1], m, c) + getWays(n, m - 1, c);
  };
  return getWays(n);
};
```
