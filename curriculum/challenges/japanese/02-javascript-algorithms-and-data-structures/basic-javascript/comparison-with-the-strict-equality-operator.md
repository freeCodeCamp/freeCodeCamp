---
id: 56533eb9ac21ba0edf2244d1
title: 厳密等価演算子による比較
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87atr'
forumTopicId: 16790
dashedName: comparison-with-the-strict-equality-operator
---

# --description--

厳密等価演算子 (`===`) は等価演算子 (`==`) の相棒です。 しかし、比較する値を共通の型に変換しようとする等価演算子とは異なり、厳密等価演算子は型変換を行いません。

比較する値の型が異なる場合は等しくないとみなし、厳密等価演算子は false を返します。

**例**

```js
3 ===  3  // true
3 === '3' // false
```

2 番目の例では、 `3` は `Number` 型で、 `'3'` は `String` 型です。

# --instructions--

`if` ステートメントで厳密等価演算子を使用して、`val` が `7` と厳密に等しい場合に関数が文字列 `Equal` を返すようにしてください。

# --hints--

`testStrict(10)` は文字列 `Not Equal` を返す必要があります。

```js
assert(testStrict(10) === 'Not Equal');
```

`testStrict(7)` は文字列 `Equal` を返す必要があります。

```js
assert(testStrict(7) === 'Equal');
```

`testStrict("7")` は文字列 `Not Equal` を返す必要があります。

```js
assert(testStrict('7') === 'Not Equal');
```

`===` 演算子を使用してください

```js
assert(code.match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
```

# --solutions--

```js
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
```
