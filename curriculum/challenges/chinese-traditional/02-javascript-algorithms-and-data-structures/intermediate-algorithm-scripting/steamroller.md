---
id: ab306dbdcc907c7ddfc30830
title: 數組扁平化
challengeType: 1
forumTopicId: 16079
dashedName: steamroller
---

# --description--

嵌套數組扁平化成一維數組。 必須考慮到各種深度的嵌套層級。

# --hints--

`steamrollArray([[["a"]], [["b"]]])` 應返回 `["a", "b"]`。

```js
assert.deepEqual(steamrollArray([[['a']], [['b']]]), ['a', 'b']);
```

`steamrollArray([1, [2], [3, [[4]]]])` 應返回 `[1, 2, 3, 4]`。

```js
assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
```

`steamrollArray([1, [], [3, [[4]]]])` 應返回 `[1, 3, 4]`。

```js
assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
```

`steamrollArray([1, {}, [3, [[4]]]])` 應返回 `[1, {}, 3, 4]`。

```js
assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);
```

代碼中不應使用 `Array.prototype.flat()` 或 `Array.prototype.flatMap()` 方法。

```js
assert(!code.match(/\.\s*flat\s*\(/) && !code.match(/\.\s*flatMap\s*\(/));
```

不應使用全局變量。

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
