---
id: 56533eb9ac21ba0edf2244d1
title: 严格相等运算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87atr'
forumTopicId: 16790
dashedName: comparison-with-the-strict-equality-operator
---

# --description--

严格相等运算符（`===`）是相对相等操作符（`==`）的另一种比较操作符。 与相等操作符转换数据两类型不同，严格相等运算符不会做类型转换。

如果比较的值类型不同，那么在严格相等运算符比较下它们是不相等的，会返回 false 。

**示例**

```js
3 ===  3  // true
3 === '3' // false
```

在第二个例子中，`3` 是一个 `Number` 类型，而 `'3'` 是一个 `String` 类型。

# --instructions--

在 `if` 语句中使用严格相等运算符，这样函数将在 `val` 严格等于 `7` 时返回字符串 `Equal`。

# --hints--

`testStrict(10)` 应该返回字符串 `Not Equal`

```js
assert(testStrict(10) === 'Not Equal');
```

`testStrict(7)` 应该返回字符串 `Equal`

```js
assert(testStrict(7) === 'Equal');
```

`testStrict("7")` 应该返回字符串 `Not Equal`

```js
assert(testStrict('7') === 'Not Equal');
```

应该使用 `===` 运算符

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
