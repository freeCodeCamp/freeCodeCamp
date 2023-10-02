---
id: 56533eb9ac21ba0edf2244d7
title: 小于或等于运算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVR7Am'
forumTopicId: 16788
dashedName: comparison-with-the-less-than-or-equal-to-operator
---

# --description--

使用小于等于运算符（`<=`）比较两个数字的大小。 如果在小于等于运算符左边的数字小于或者等于右边的数字，它会返回 `true`。 如果在小于等于运算符左边的数字大于右边的数字，它会返回 `false`。 与相等运算符类似，小于或等于运算符会转换数据类型。

**例如**

```js
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
```

# --instructions--

将小于或等于运算符添加到指示的行，以便返回语句有意义。

# --hints--

`testLessOrEqual(0)` 应该返回 `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(0) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(11)` 应该返回 `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(11) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(12)` 应该返回 `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(12) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(23)` 应该返回 `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(23) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(24)` 应该返回 `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(24) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(25)` 应该返回 `More Than 24`

```js
assert(testLessOrEqual(25) === 'More Than 24');
```

`testLessOrEqual(55)` 应该返回 `More Than 24`

```js
assert(testLessOrEqual(55) === 'More Than 24');
```

应该使用 `<=` 运算符至少两次

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
