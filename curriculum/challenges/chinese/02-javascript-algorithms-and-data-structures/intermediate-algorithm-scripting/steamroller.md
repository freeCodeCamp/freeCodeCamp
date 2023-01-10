---
id: ab306dbdcc907c7ddfc30830
title: 数组扁平化
challengeType: 1
forumTopicId: 16079
dashedName: steamroller
---

# --description--

嵌套数组扁平化成一维数组。 必须考虑到各种深度的嵌套层级。

# --hints--

`steamrollArray([[["a"]], [["b"]]])` 应返回 `["a", "b"]`。

```js
assert.deepEqual(steamrollArray([[['a']], [['b']]]), ['a', 'b']);
```

`steamrollArray([1, [2], [3, [[4]]]])` 应返回 `[1, 2, 3, 4]`。

```js
assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
```

`steamrollArray([1, [], [3, [[4]]]])` 应返回 `[1, 3, 4]`。

```js
assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
```

`steamrollArray([1, {}, [3, [[4]]]])` 应返回 `[1, {}, 3, 4]`。

```js
assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);
```

代码中不应使用 `Array.prototype.flat()` 或 `Array.prototype.flatMap()` 方法。

```js
assert(!code.match(/\.\s*flat\s*\(/) && !code.match(/\.\s*flatMap\s*\(/));
```

不应使用全局变量。

```js
steamrollArray([1, {}, [3, [[4]]]])
assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4])
```

# --seed--

## --seed-contents--

```js
function steamrollArray(arr) {
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
```

# --solutions--

```js
function steamrollArray(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  var out = [];
  arr.forEach(function(e) {
    steamrollArray(e).forEach(function(v) {
      out.push(v);
    });
  });
  return out;
}
```
