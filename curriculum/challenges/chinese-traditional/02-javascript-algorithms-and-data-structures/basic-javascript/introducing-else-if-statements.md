---
id: 56533eb9ac21ba0edf2244db
title: 介紹 else if 語句
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJ2hm'
forumTopicId: 18206
dashedName: introducing-else-if-statements
---

# --description--

如果你有多個條件語句，你可以通過 `else if` 語句把 `if` 語句鏈起來。

```js
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```

# --instructions--

使用 `else if` 實現同樣的效果。

# --hints--

你應該至少有兩個 `else` 表達式。

```js
assert(code.match(/else/g).length > 1);
```

你應該至少有兩個 `if` 表達式。

```js
assert(code.match(/if/g).length > 1);
```

應該關閉每一個 `if else` 代碼塊。

```js
assert(
  code.match(
    /if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s+if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s*\{[\s\S]+\s*\}/
  )
);
```

`testElseIf(0)` 應該返回字符串 `Smaller than 5`

```js
assert(testElseIf(0) === 'Smaller than 5');
```

`testElseIf(5)` 應該返回字符串 `Between 5 and 10`

```js
assert(testElseIf(5) === 'Between 5 and 10');
```

`testElseIf(7)` 應該返回字符串 `Between 5 and 10`

```js
assert(testElseIf(7) === 'Between 5 and 10');
```

`testElseIf(10)` 應該返回字符串 `Between 5 and 10`

```js
assert(testElseIf(10) === 'Between 5 and 10');
```

`testElseIf(12)` 應該返回字符串 `Greater than 10`

```js
assert(testElseIf(12) === 'Greater than 10');
```

# --seed--

## --seed-contents--

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

testElseIf(7);
```

# --solutions--

```js
function testElseIf(val) {
  if(val > 10) {
    return "Greater than 10";
  } else if(val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
```
