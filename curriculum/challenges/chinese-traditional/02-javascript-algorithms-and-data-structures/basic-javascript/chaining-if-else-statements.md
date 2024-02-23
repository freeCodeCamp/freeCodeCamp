---
id: 56533eb9ac21ba0edf2244dc
title: 多個 if else 語句
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJgsw'
forumTopicId: 16772
dashedName: chaining-if-else-statements
---

# --description--

`if/else` 語句串聯在一起可以實現複雜的邏輯。 這是多個 `if` / `else if` 語句串聯在一起的<dfn>僞代碼</dfn>：

```js
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
```

# --instructions--

請將 `if`/`else if` 語句串聯起來，實現下面的邏輯：

`num < 5` - 返回 `Tiny`  
`num < 10` - 返回 `Small`  
`num < 15` - 返回 `Medium`  
`num < 20` - 返回 `Large`  
`num >= 20` - 返回 `Huge`

# --hints--

應至少有 4 個 `else` 語句。

```js
assert(code.match(/else/g).length > 3);
```

應至少有 4 個 `if` 語句。

```js
assert(code.match(/if/g).length > 3);
```

應至少有 1 個 `return` 語句。

```js
assert(code.match(/return/g).length >= 1);
```

`testSize(0)` 應該返回字符串 `Tiny`

```js
assert(testSize(0) === 'Tiny');
```

`testSize(4)` 應該返回字符串 `Tiny`

```js
assert(testSize(4) === 'Tiny');
```

`testSize(5)` 應該返回字符串 `Small`

```js
assert(testSize(5) === 'Small');
```

`testSize(8)` 應該返回字符串 `Small`

```js
assert(testSize(8) === 'Small');
```

`testSize(10)` 應該返回字符串 `Medium`

```js
assert(testSize(10) === 'Medium');
```

`testSize(14)` 應該返回字符串 `Medium`

```js
assert(testSize(14) === 'Medium');
```

`testSize(15)` 應該返回字符串 `Large`

```js
assert(testSize(15) === 'Large');
```

`testSize(17)` 應該返回字符串 `Large`

```js
assert(testSize(17) === 'Large');
```

`testSize(20)` 應該返回字符串 `Huge`

```js
assert(testSize(20) === 'Huge');
```

`testSize(25)` 應該返回字符串 `Huge`

```js
assert(testSize(25) === 'Huge');
```

# --seed--

## --seed-contents--

```js
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

testSize(7);
```

# --solutions--

```js
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
```
