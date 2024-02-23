---
id: 56533eb9ac21ba0edf2244d3
title: 严格不等运算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKekkUy'
forumTopicId: 16791
dashedName: comparison-with-the-strict-inequality-operator
---

# --description--

严格不相等运算符（`!==`）与全等运算符是相反的。 这意味着严格不相等并返回 `false` 的地方，用严格相等运算符会返回 `true`，*反之亦然*。 严格不相等运算符不会转换值的数据类型。

**示例**

```js
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
```

# --instructions--

在 `if` 语句中，添加严格不相等运算符，这样函数在当 `val` 不严格等于 `17` 的时候，会返回 `Not Equal`。

# --hints--

`testStrictNotEqual(17)` 应该返回字符串 `Equal`

```js
assert(testStrictNotEqual(17) === 'Equal');
```

`testStrictNotEqual("17")` 应该返回字符串 `Not Equal`

```js
assert(testStrictNotEqual('17') === 'Not Equal');
```

`testStrictNotEqual(12)` 应该返回字符串 `Not Equal`

```js
assert(testStrictNotEqual(12) === 'Not Equal');
```

`testStrictNotEqual("bob")` 应该返回字符串 `Not Equal`

```js
assert(testStrictNotEqual('bob') === 'Not Equal');
```

应该使用 `!==` 运算符

```js
assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
```

# --solutions--

```js
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
```
