---
id: 56533eb9ac21ba0edf2244d1
title: 嚴格相等運算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87atr'
forumTopicId: 16790
dashedName: comparison-with-the-strict-equality-operator
---

# --description--

嚴格相等運算符（`===`）是相對相等操作符（`==`）的另一種比較操作符。 與相等操作符轉換數據兩類型不同，嚴格相等運算符不會做類型轉換。

如果比較的值類型不同，那麼在嚴格相等運算符比較下它們是不相等的，會返回 false 。

**示例**

```js
3 ===  3  // true
3 === '3' // false
```

在第二個例子中，`3` 是一個 `Number` 類型，而 `'3'` 是一個 `String` 類型。

# --instructions--

在 `if` 語句中使用嚴格相等運算符，這樣函數將在 `val` 嚴格等於 `7` 時返回字符串 `Equal`。

# --hints--

`testStrict(10)` 應該返回字符串 `Not Equal`

```js
assert(testStrict(10) === 'Not Equal');
```

`testStrict(7)` 應該返回字符串 `Equal`

```js
assert(testStrict(7) === 'Equal');
```

`testStrict("7")` 應該返回字符串 `Not Equal`

```js
assert(testStrict('7') === 'Not Equal');
```

應該使用 `===` 運算符

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
