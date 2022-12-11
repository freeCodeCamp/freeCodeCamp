---
id: ab306dbdcc907c7ddfc30830
title: ローラーで押し潰せ！
challengeType: 1
forumTopicId: 16079
dashedName: steamroller
---

# --description--

ネストされた配列を平坦化してください。 さまざまなレベルのネストを考慮する必要があります。

# --hints--

`steamrollArray([[["a"]], [["b"]]])` は `["a", "b"]` を返す必要があります。

```js
assert.deepEqual(steamrollArray([[['a']], [['b']]]), ['a', 'b']);
```

`steamrollArray([1, [2], [3, [[4]]]])` は `[1, 2, 3, 4]` を返す必要があります。

```js
assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
```

`steamrollArray([1, [], [3, [[4]]]])` は `[1, 3, 4]` を返す必要があります。

```js
assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
```

`steamrollArray([1, {}, [3, [[4]]]])` は `[1, {}, 3, 4]` を返す必要があります。

```js
assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);
```

解答には `Array.prototype.flat()` メソッドや `Array.prototype.flatMap()` メソッドを使用しないでください。

```js
assert(!code.match(/\.\s*flat\s*\(/) && !code.match(/\.\s*flatMap\s*\(/));
```

グローバル変数は使用しないでください。

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
