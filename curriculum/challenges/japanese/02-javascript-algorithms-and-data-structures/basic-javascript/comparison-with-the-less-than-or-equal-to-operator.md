---
id: 56533eb9ac21ba0edf2244d7
title: 小なりイコール演算子による比較
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVR7Am'
forumTopicId: 16788
dashedName: comparison-with-the-less-than-or-equal-to-operator
---

# --description--

小なりイコール演算子 (`<=`) は、2 つの数値の値を比較します。 左の数値が右の数値よりも小さいか等しい場合は、`true` を返します。 左の数値が右の数値よりも大きい場合は、`false` を返します。 等価演算子と同様に、小なりイコール演算子でもデータ型が変換されます。

**例**

```js
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
```

# --instructions--

return ステートメントの意味が正しくなるように、指定された行に小なりイコール演算子を追加してください。

# --hints--

`testLessOrEqual(0)` は文字列 `Smaller Than or Equal to 12` を返す必要があります。

```js
assert(testLessOrEqual(0) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(11)` は文字列 `Smaller Than or Equal to 12` を返す必要があります。

```js
assert(testLessOrEqual(11) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(12)` は文字列 `Smaller Than or Equal to 12` を返す必要があります。

```js
assert(testLessOrEqual(12) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(23)` は文字列 `Smaller Than or Equal to 24` を返す必要があります。

```js
assert(testLessOrEqual(23) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(24)` は文字列 `Smaller Than or Equal to 24` を返す必要があります。

```js
assert(testLessOrEqual(24) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(25)` は文字列 `More Than 24` を返す必要があります。

```js
assert(testLessOrEqual(25) === 'More Than 24');
```

`testLessOrEqual(55)` は文字列 `More Than 24` を返す必要があります。

```js
assert(testLessOrEqual(55) === 'More Than 24');
```

`<=` 演算子を 2 回以上使用してください。

```js
assert(code.match(/val\s*<=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
```

# --solutions--

```js
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
```
