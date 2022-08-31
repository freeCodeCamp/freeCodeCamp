---
id: ae9defd7acaf69703ab432ea
title: 找出数字范围内的最小公倍数
challengeType: 1
forumTopicId: 16075
dashedName: smallest-common-multiple
---

# --description--

找到给定参数的最小公倍数，可以被这两个参数整除，也可以被指定范围内的所有整数整除。

注意，较小数不一定总是出现在数组的第一个元素。

例如，如果给定 1 和 3，找到 1 和 3 的最小公倍数，也可以被 1 到 3 *之间*的所有数字整除。 这里的答案将是 6。

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
