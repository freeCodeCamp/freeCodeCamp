---
id: 56533eb9ac21ba0edf2244d4
title: 大なり演算子による比較
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp6GbH4'
forumTopicId: 16786
dashedName: comparison-with-the-greater-than-operator
---

# --description--

大なり演算子 (`>`) は、2 つの数値の値を比較します。 左の数値が右の数値よりも大きい場合は、`true` を返します。 それ以外の場合は、`false` を返します。

等価演算子と同様に、大なり演算子でも比較時に値のデータ型が変換されます。

**例**

```js
5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
```

# --instructions--

return ステートメントの意味が正しくなるように、指定された行に大なり演算子を追加してください。

# --hints--

`testGreaterThan(0)` は文字列 `10 or Under` を返す必要があります。

```js
assert(testGreaterThan(0) === '10 or Under');
```

`testGreaterThan(10)` は文字列 `10 or Under` を返す必要があります。

```js
assert(testGreaterThan(10) === '10 or Under');
```

`testGreaterThan(11)` は文字列 `Over 10` を返す必要があります。

```js
assert(testGreaterThan(11) === 'Over 10');
```

`testGreaterThan(99)` は文字列 `Over 10` を返す必要があります。

```js
assert(testGreaterThan(99) === 'Over 10');
```

`testGreaterThan(100)` は文字列 `Over 10` を返す必要があります。

```js
assert(testGreaterThan(100) === 'Over 10');
```

`testGreaterThan(101)` は文字列 `Over 100` を返す必要があります。

```js
assert(testGreaterThan(101) === 'Over 100');
```

`testGreaterThan(150)` は文字列 `Over 100` を返す必要があります。

```js
assert(testGreaterThan(150) === 'Over 100');
```

`>` 演算子を 2 回以上使用してください。

```js
assert(code.match(/val\s*>\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
```

# --solutions--

```js
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
```
