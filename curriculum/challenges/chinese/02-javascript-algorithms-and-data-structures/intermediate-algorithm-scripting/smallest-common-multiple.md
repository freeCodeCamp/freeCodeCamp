---
id: ae9defd7acaf69703ab432ea
title: 找出数字范围内的最小公倍数
challengeType: 5
forumTopicId: 16075
dashedName: smallest-common-multiple
---

# --description--

在这道题目中，我们需要写一个函数，它接收一个包含两个数字的数组参数 `arr`；它的返回值为这两个数字范围内所有数字（包含这两个数字）的最小公倍数。

注意，较小数不一定总是出现在数组的第一个元素。

比如，传入 `[1, 3]`，那么函数的返回结果应为 1、2、3 的最小公倍数，即为 6。

# --hints--

`smallestCommons([1, 5])` 应返回 a number。

```js
assert.deepEqual(typeof smallestCommons([1, 5]), 'number');
```

`smallestCommons([1, 5])` 应返回 60。

```js
assert.deepEqual(smallestCommons([1, 5]), 60);
```

`smallestCommons([5, 1])` 应返回 60。

```js
assert.deepEqual(smallestCommons([5, 1]), 60);
```

`smallestCommons([2, 10])` 应返回 2520。

```js
assert.deepEqual(smallestCommons([2, 10]), 2520);
```

`smallestCommons([1, 13])` 应返回 360360。

```js
assert.deepEqual(smallestCommons([1, 13]), 360360);
```

`smallestCommons([23, 18])` 应返回 6056820。

```js
assert.deepEqual(smallestCommons([23, 18]), 6056820);
```

# --seed--

## --seed-contents--

```js
function smallestCommons(arr) {
  return arr;
}


smallestCommons([1,5]);
```

# --solutions--

```js
function gcd(a, b) {
    while (b !== 0) {
        a = [b, b = a % b][0];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort(function(a,b) {return a-b;});
  var rng = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    rng.push(i);
  }
  return rng.reduce(lcm);
}
```
