---
id: a5229172f011153519423690
title: Sum All Odd Fibonacci Numbers
challengeType: 5
forumTopicId: 16084
dashedName: sum-all-odd-fibonacci-numbers
---

# --description--

Given a positive integer `num`, return the sum of all odd Fibonacci numbers that are less than or equal to `num`.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, `sumFibs(10)` should return `10` because all odd Fibonacci numbers less than or equal to `10` are 1, 1, 3, and 5.

# --hints--

`sumFibs(1)` should return a number.

```js
assert(typeof sumFibs(1) === 'number');
```

`sumFibs(1000)` should return 1785.

```js
assert(sumFibs(1000) === 1785);
```

`sumFibs(4000000)` should return 4613732.

```js
assert(sumFibs(4000000) === 4613732);
```

`sumFibs(4)` should return 5.

```js
assert(sumFibs(4) === 5);
```

`sumFibs(75024)` should return 60696.

```js
assert(sumFibs(75024) === 60696);
```

`sumFibs(75025)` should return 135721.

```js
assert(sumFibs(75025) === 135721);
```

# --seed--

## --seed-contents--

```js
function sumFibs(num) {
  return num;
}

sumFibs(4);
```

# --solutions--

```js
function sumFibs(num) {
  var a = 1;
  var b = 1;
  var s = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      s += a;
    }
    a = [b, b=b+a][0];
  }
  return s;
}
```
