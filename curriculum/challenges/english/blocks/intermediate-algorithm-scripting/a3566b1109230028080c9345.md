---
id: a3566b1109230028080c9345
title: Sum All Numbers in a Range
challengeType: 1
forumTopicId: 16083
dashedName: sum-all-numbers-in-a-range
---

# --description--

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, `sumAll([4,1])` should return `10` because sum of all the numbers between 1 and 4 (both inclusive) is `10`.

# --hints--

`sumAll([1, 4])` should return a number.

```js
assert(typeof sumAll([1, 4]) === 'number');
```

`sumAll([1, 4])` should return 10.

```js
assert.deepEqual(sumAll([1, 4]), 10);
```

`sumAll([4, 1])` should return 10.

```js
assert.deepEqual(sumAll([4, 1]), 10);
```

`sumAll([5, 10])` should return 45.

```js
assert.deepEqual(sumAll([5, 10]), 45);
```

`sumAll([10, 5])` should return 45.

```js
assert.deepEqual(sumAll([10, 5]), 45);
```

# --seed--

## --seed-contents--

```js
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
```

# --solutions--

```js
function sumAll(arr) {
  var sum = 0;
  arr.sort(function(a,b) {return a-b;});
  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}
```
