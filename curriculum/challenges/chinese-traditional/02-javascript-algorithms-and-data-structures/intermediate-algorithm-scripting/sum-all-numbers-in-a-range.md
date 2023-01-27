---
id: a3566b1109230028080c9345
title: 範圍內的數字求和
challengeType: 1
forumTopicId: 16083
dashedName: sum-all-numbers-in-a-range
---

# --description--

我們會傳入一個由兩個數字組成的數組。 給出一個含有兩個數字的數組，我們需要寫一個函數，讓它返回這兩個數字間所有數字（包含這兩個數字）的總和。 最低的數字並不總是第一位。

例如，`sumAll([4,1])` 應返回 `10`，因爲從 1 到 4（包含 1、4）的所有數字的和是 `10`。

# --hints--

`sumAll([1, 4])` 應返回一個數字。

```js
assert(typeof sumAll([1, 4]) === 'number');
```

`sumAll([1, 4])` 應返回 10。

```js
assert.deepEqual(sumAll([1, 4]), 10);
```

`sumAll([4, 1])` 應返回 10。

```js
assert.deepEqual(sumAll([4, 1]), 10);
```

`sumAll([5, 10])` 應返回 45。

```js
assert.deepEqual(sumAll([5, 10]), 45);
```

`sumAll([10, 5])` 應返回 45。

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
