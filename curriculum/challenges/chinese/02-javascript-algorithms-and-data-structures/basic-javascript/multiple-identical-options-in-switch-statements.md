---
id: 56533eb9ac21ba0edf2244df
title: 在 Switch 语句添加多个相同选项
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBKWCV'
forumTopicId: 18242
dashedName: multiple-identical-options-in-switch-statements
---

# --description--

如果你忘了给 `switch` 的每一条 `case` 添加 `break`，那么后续的 `case` 会一直执行，直到遇见 `break` 为止。 如果你想为 `switch` 中的多个不同的输入设置相同的结果，可以这样写：

```js
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

这样，1、2、3 都会有相同的结果。

# --instructions--

请写一个 switch 语句，按如下条件设置 `answer` ：  
`1-3` - `Low`  
`4-6` - `Mid`  
`7-9` - `High`

**提示：** 你的 `case` 应写全范围中的每一个数字。

# --hints--

`sequentialSizes(1)` 应该返回字符串 `Low`

```js
assert(sequentialSizes(1) === 'Low');
```

`sequentialSizes(2)` 应该返回字符串 `Low`

```js
assert(sequentialSizes(2) === 'Low');
```

`sequentialSizes(3)` 应该返回字符串 `Low`

```js
assert(sequentialSizes(3) === 'Low');
```

`sequentialSizes(4)` 应该返回字符串 `Mid`

```js
assert(sequentialSizes(4) === 'Mid');
```

`sequentialSizes(5)` 应该返回字符串 `Mid`

```js
assert(sequentialSizes(5) === 'Mid');
```

`sequentialSizes(6)` 应该返回字符串 `Mid`

```js
assert(sequentialSizes(6) === 'Mid');
```

`sequentialSizes(7)` 应该返回字符串 `High`

```js
assert(sequentialSizes(7) === 'High');
```

`sequentialSizes(8)` 应该返回字符串 `High`

```js
assert(sequentialSizes(8) === 'High');
```

`sequentialSizes(9)` 应该返回字符串 `High`

```js
assert(sequentialSizes(9) === 'High');
```

你不应使用 `if` 或 `else` 语句。

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

你应该编写 9 个`case`语句。

```js
assert(code.match(/case/g).length === 9);
```

# --seed--

## --seed-contents--

```js
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

sequentialSizes(1);
```

# --solutions--

```js
function sequentialSizes(val) {
  let answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }

  return answer;
}
```
