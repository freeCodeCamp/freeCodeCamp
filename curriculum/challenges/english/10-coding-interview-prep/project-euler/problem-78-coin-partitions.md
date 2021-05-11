---
id: 5900f3ba1000cf542c50fecd
title: 'Problem 78: Coin partitions'
challengeType: 5
forumTopicId: 302191
dashedName: problem-78-coin-partitions
---

# --description--

Let p(n) represent the number of different ways in which n coins can be separated into piles. For example, five coins can be separated into piles in exactly seven different ways, so p(5)=7.

<div style='text-align: center;'>

| Coin piles        |
| ----------------- |
| OOOOO             |
| OOOO   O          |
| OOO   OO          |
| OOO   O   O       |
| OO   OO   O       |
| OO   O   O   O    |
| O   O   O   O   O |

</div>

Find the least value of `n` for which ${p}(n)$ is divisible by `divisor`.

# --hints--

`coinPartitions(7)` should return a number.

```js
assert(typeof coinPartitions(7) === 'number');
```

`coinPartitions(7)` should return `5`.

```js
assert.strictEqual(coinPartitions(7), 5);
```

`coinPartitions(10000)` should return `599`.

```js
assert.strictEqual(coinPartitions(10000), 599);
```

`coinPartitions(100000)` should return `11224`.

```js
assert.strictEqual(coinPartitions(100000), 11224);
```

`coinPartitions(1000000)` should return `55374`.

```js
assert.strictEqual(coinPartitions(1000000), 55374);
```

# --seed--

## --seed-contents--

```js
function coinPartitions(divisor) {

  return true;
}

coinPartitions(7);
```

# --solutions--

```js
// solution required
```
