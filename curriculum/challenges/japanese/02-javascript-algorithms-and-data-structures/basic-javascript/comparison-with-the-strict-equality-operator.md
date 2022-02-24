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

In the second example, `3` is a `Number` type and `'3'` is a `String` type.

# --instructions--

Use the strict equality operator in the `if` statement so the function will return the string `Equal` when `val` is strictly equal to `7`.

# --hints--

`testStrict(10)` should return the string `Not Equal`

```js
assert(testStrict(10) === 'Not Equal');
```

`testStrict(7)` should return the string `Equal`

```js
assert(testStrict(7) === 'Equal');
```

`testStrict("7")` should return the string `Not Equal`

```js
assert(testStrict('7') === 'Not Equal');
```

You should use the `===` operator

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
