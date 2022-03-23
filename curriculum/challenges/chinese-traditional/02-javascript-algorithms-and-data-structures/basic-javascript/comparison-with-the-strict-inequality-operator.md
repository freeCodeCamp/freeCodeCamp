---
id: 56533eb9ac21ba0edf2244d3
title: 嚴格不等運算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKekkUy'
forumTopicId: 16791
dashedName: comparison-with-the-strict-inequality-operator
---

# --description--

嚴格不相等運算符（`!==`）與全等運算符是相反的。 這意味着嚴格不相等並返回 `false` 的地方，用嚴格相等運算符會返回 `true`，*反之亦然*。 嚴格不相等運算符不會轉換值的數據類型。

**示例**

```js
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
```

# --instructions--

在 `if` 語句中，添加嚴格不相等運算符，這樣函數在當 `val` 不嚴格等於 `17` 的時候，會返回 `Not Equal`。

# --hints--

`testStrictNotEqual(17)` 應該返回字符串 `Equal`

```js
assert(testStrictNotEqual(17) === 'Equal');
```

`testStrictNotEqual("17")` 應該返回字符串 `Not Equal`

```js
assert(testStrictNotEqual('17') === 'Not Equal');
```

`testStrictNotEqual(12)` 應該返回字符串 `Not Equal`

```js
assert(testStrictNotEqual(12) === 'Not Equal');
```

`testStrictNotEqual("bob")` 應該返回字符串 `Not Equal`

```js
assert(testStrictNotEqual('bob') === 'Not Equal');
```

應該使用 `!==` 運算符

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
