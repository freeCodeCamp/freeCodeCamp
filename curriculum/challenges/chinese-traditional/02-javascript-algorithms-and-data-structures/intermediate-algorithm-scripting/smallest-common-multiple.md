---
id: ae9defd7acaf69703ab432ea
title: 找出數字範圍內的最小公倍數
challengeType: 1
forumTopicId: 16075
dashedName: smallest-common-multiple
---

# --description--

找到給定參數的最小公倍數，可以被這兩個參數整除，也可以被指定範圍內的所有整數整除。

注意，較小數不一定總是出現在數組的第一個元素。

例如，如果給定 1 和 3，找到 1 和 3 的最小公倍數，也可以被 1 到 3 *之間*的所有數字整除。 這裏的答案將是 6。

# --hints--

`smallestCommons([1, 5])` 應返回 a number。

```js
assert.deepEqual(typeof smallestCommons([1, 5]), 'number');
```

`smallestCommons([1, 5])` 應返回 60。

```js
assert.deepEqual(smallestCommons([1, 5]), 60);
```

`smallestCommons([5, 1])` 應返回 60。

```js
assert.deepEqual(smallestCommons([5, 1]), 60);
```

`smallestCommons([2, 10])` 應返回 2520。

```js
assert.deepEqual(smallestCommons([2, 10]), 2520);
```

`smallestCommons([1, 13])` 應返回 360360。

```js
assert.deepEqual(smallestCommons([1, 13]), 360360);
```

`smallestCommons([23, 18])` 應返回 6056820。

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
