---
id: a3566b1109230028080c9345
title: 范围内的数字求和
challengeType: 1
forumTopicId: 16083
dashedName: sum-all-numbers-in-a-range
---

# --description--

我们会传入一个由两个数字组成的数组。 给出一个含有两个数字的数组，我们需要写一个函数，让它返回这两个数字间所有数字（包含这两个数字）的总和。 最低的数字并不总是第一位。

例如，`sumAll([4,1])` 应返回 `10`，因为从 1 到 4（包含 1、4）的所有数字的和是 `10`。

# --hints--

`sumAll([1, 4])` 应返回一个数字。

```js
assert(typeof sumAll([1, 4]) === 'number');
```

`sumAll([1, 4])` 应返回 10。

```js
assert.deepEqual(sumAll([1, 4]), 10);
```

`sumAll([4, 1])` 应返回 10。

```js
assert.deepEqual(sumAll([4, 1]), 10);
```

`sumAll([5, 10])` 应返回 45。

```js
assert.deepEqual(sumAll([5, 10]), 45);
```

`sumAll([10, 5])` 应返回 45。

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
