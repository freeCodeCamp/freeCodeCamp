---
id: 56533eb9ac21ba0edf2244d3
title: 厳密不等価演算子による比較
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKekkUy'
forumTopicId: 16791
dashedName: comparison-with-the-strict-inequality-operator
---

# --description--

厳密不等価演算子 (`!==`) は論理的な意味で厳密等価演算子の逆です。 つまり、「厳密に等しくない」 場合に厳密等価演算子が `false` を返す場面で、`true` を返します。*逆の場合も同様です*。 厳密不等価演算子はデータ型の変換を行いません。

**例**

```js
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
```

# --instructions--

`val` が `17` と厳密に等しくない場合に関数が文字列 `Not Equal` を返すように、`if` ステートメントに厳密不等価演算子を追加してください。

# --hints--

`testStrictNotEqual(17)` は文字列 `Equal` を返す必要があります。

```js
assert(testStrictNotEqual(17) === 'Equal');
```

`testStrictNotEqual("17")` は文字列 `Not Equal` を返す必要があります。

```js
assert(testStrictNotEqual('17') === 'Not Equal');
```

`testStrictNotEqual(12)` は文字列 `Not Equal` を返す必要があります。

```js
assert(testStrictNotEqual(12) === 'Not Equal');
```

`testStrictNotEqual("bob")` は文字列 `Not Equal` を返す必要があります。

```js
assert(testStrictNotEqual('bob') === 'Not Equal');
```

`!==` 演算子を使用してください。

```js
assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
```

# --solutions--

```js
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
```
