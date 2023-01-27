---
id: 56533eb9ac21ba0edf2244d5
title: 大於或等於運算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KBqtV'
forumTopicId: 16785
dashedName: comparison-with-the-greater-than-or-equal-to-operator
---

# --description--

使用大於等於運算符（`>=`）來比較兩個數字的大小。 如果大於等於運算符左邊的數字比右邊的數字大或者相等，會返回 `true`。 否則，會返回 `false`。

與相等運算符相似，大於等於運算符在比較的時候會轉換值的數據類型。

**例如：**

```js
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
```

# --instructions--

添加大於等於運算符到指定行，使得函數的返回語句有意義。

# --hints--

`testGreaterOrEqual(0)` 應該返回字符串 `Less than 10`

```js
assert(testGreaterOrEqual(0) === 'Less than 10');
```

`testGreaterOrEqual(9)` 應該返回字符串 `Less than 10`

```js
assert(testGreaterOrEqual(9) === 'Less than 10');
```

`testGreaterOrEqual(10)` 應該返回字符串 `10 or Over`

```js
assert(testGreaterOrEqual(10) === '10 or Over');
```

`testGreaterOrEqual(11)` 應該返回字符串 `10 or Over`

```js
assert(testGreaterOrEqual(11) === '10 or Over');
```

`testGreaterOrEqual(19)` 應該返回字符串 `10 or Over`

```js
assert(testGreaterOrEqual(19) === '10 or Over');
```

`testGreaterOrEqual(100)` 應該返回字符串 `20 or Over`

```js
assert(testGreaterOrEqual(100) === '20 or Over');
```

`testGreaterOrEqual(21)` 應該返回字符串 `20 or Over`

```js
assert(testGreaterOrEqual(21) === '20 or Over');
```

你應該使用 `>=` 運算符至少兩次。

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
