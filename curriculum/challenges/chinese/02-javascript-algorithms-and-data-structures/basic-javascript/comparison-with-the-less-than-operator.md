---
id: 56533eb9ac21ba0edf2244d6
title: 小于运算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVRWtB'
forumTopicId: 16789
dashedName: comparison-with-the-less-than-operator
---

# --description--

使用<dfn>小于</dfn>运算符（`<`）比较两个数字的大小。如果小于运算符左边的数字比右边的数字小，它会返回`true`。否则会返回`false`。与相等运算符类似，<dfn>小于</dfn> 运算符在做比较的时候会转换值的数据类型。

**例如**

```js
2   < 5  // true
'3' < 7  // true
5   < 5  // false
3   < 2  // false
'8' < 4  // false
```

# --instructions--

添加`小于`运算符到指定行，使得函数的返回语句有意义。

# --hints--

`testLessThan(0)`应该返回 "Under 25"。

```js
assert(testLessThan(0) === 'Under 25');
```

`testLessThan(24)`应该返回 "Under 25"。

```js
assert(testLessThan(24) === 'Under 25');
```

`testLessThan(25)`应该返回 "Under 55"。

```js
assert(testLessThan(25) === 'Under 55');
```

`testLessThan(54)`应该返回 "Under 55"。

```js
assert(testLessThan(54) === 'Under 55');
```

`testLessThan(55)`应该返回 "55 or Over"。

```js
assert(testLessThan(55) === '55 or Over');
```

`testLessThan(99)`应该返回 "55 or Over"。

```js
assert(testLessThan(99) === '55 or Over');
```

你应该使用`<`运算符至少两次。

```js
assert(code.match(/val\s*<\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
```

# --solutions--

```js
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}
```
