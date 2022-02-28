---
id: 56533eb9ac21ba0edf2244d5
title: 大なりイコール演算子による比較
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KBqtV'
forumTopicId: 16785
dashedName: comparison-with-the-greater-than-or-equal-to-operator
---

# --description--

大なりイコール演算子 (`>=`) は、2 つの数値の値を比較します。 左の数値が右の数値よりも大きいか等しい場合は、`true` を返します。 それ以外の場合は、`false` を返します。

等価演算子と同様に、大なりイコール演算子でも比較時にデータ型が変換されます。

**例**

```js
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
```

# --instructions--

return ステートメントの意味が正しくなるように、指定された行に大なりイコール演算子を追加してください。

# --hints--

`testGreaterOrEqual(0)` は文字列 `Less than 10` を返す必要があります。

```js
assert(testGreaterOrEqual(0) === 'Less than 10');
```

`testGreaterOrEqual(9)` は文字列 `Less than 10` を返す必要があります。

```js
assert(testGreaterOrEqual(9) === 'Less than 10');
```

`testGreaterOrEqual(10)` は文字列 `10 or Over` を返す必要があります。

```js
assert(testGreaterOrEqual(10) === '10 or Over');
```

`testGreaterOrEqual(11)` は文字列 `10 or Over` を返す必要があります。

```js
assert(testGreaterOrEqual(11) === '10 or Over');
```

`testGreaterOrEqual(19)` は文字列 `10 or Over` を返す必要があります。

```js
assert(testGreaterOrEqual(19) === '10 or Over');
```

`testGreaterOrEqual(100)` は文字列 `20 or Over` を返す必要があります。

```js
assert(testGreaterOrEqual(100) === '20 or Over');
```

`testGreaterOrEqual(21)` は文字列 `20 or Over` を返す必要があります。

```js
assert(testGreaterOrEqual(21) === '20 or Over');
```

`>=` 演算子を 2 回以上使用してください。

```js
assert(code.match(/val\s*>=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
```

# --solutions--

```js
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
```
