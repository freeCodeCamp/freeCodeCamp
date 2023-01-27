---
id: 56533eb9ac21ba0edf2244d5
title: 大于或等于运算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KBqtV'
forumTopicId: 16785
dashedName: comparison-with-the-greater-than-or-equal-to-operator
---

# --description--

使用大于等于运算符（`>=`）来比较两个数字的大小。 如果大于等于运算符左边的数字比右边的数字大或者相等，会返回 `true`。 否则，会返回 `false`。

与相等运算符相似，大于等于运算符在比较的时候会转换值的数据类型。

**例如：**

```js
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
```

# --instructions--

添加大于等于运算符到指定行，使得函数的返回语句有意义。

# --hints--

`testGreaterOrEqual(0)` 应该返回字符串 `Less than 10`

```js
assert(testGreaterOrEqual(0) === 'Less than 10');
```

`testGreaterOrEqual(9)` 应该返回字符串 `Less than 10`

```js
assert(testGreaterOrEqual(9) === 'Less than 10');
```

`testGreaterOrEqual(10)` 应该返回字符串 `10 or Over`

```js
assert(testGreaterOrEqual(10) === '10 or Over');
```

`testGreaterOrEqual(11)` 应该返回字符串 `10 or Over`

```js
assert(testGreaterOrEqual(11) === '10 or Over');
```

`testGreaterOrEqual(19)` 应该返回字符串 `10 or Over`

```js
assert(testGreaterOrEqual(19) === '10 or Over');
```

`testGreaterOrEqual(100)` 应该返回字符串 `20 or Over`

```js
assert(testGreaterOrEqual(100) === '20 or Over');
```

`testGreaterOrEqual(21)` 应该返回字符串 `20 or Over`

```js
assert(testGreaterOrEqual(21) === '20 or Over');
```

你应该使用 `>=` 运算符至少两次。

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
