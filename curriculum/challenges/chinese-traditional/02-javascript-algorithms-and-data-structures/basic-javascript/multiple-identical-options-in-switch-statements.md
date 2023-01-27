---
id: 56533eb9ac21ba0edf2244df
title: 在 Switch 語句添加多個相同選項
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBKWCV'
forumTopicId: 18242
dashedName: multiple-identical-options-in-switch-statements
---

# --description--

如果你忘了給 `switch` 的每一條 `case` 添加 `break`，那麼後續的 `case` 會一直執行，直到遇見 `break` 爲止。 如果你想爲 `switch` 中的多個不同的輸入設置相同的結果，可以這樣寫：

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

這樣，1、2、3 都會有相同的結果。

# --instructions--

請寫一個 switch 語句，按如下條件設置 `answer` ：  
`1-3` - `Low`  
`4-6` - `Mid`  
`7-9` - `High`

**提示：** 你的 `case` 應寫全範圍中的每一個數字。

# --hints--

`sequentialSizes(1)` 應該返回字符串 `Low`

```js
assert(sequentialSizes(1) === 'Low');
```

`sequentialSizes(2)` 應該返回字符串 `Low`

```js
assert(sequentialSizes(2) === 'Low');
```

`sequentialSizes(3)` 應該返回字符串 `Low`

```js
assert(sequentialSizes(3) === 'Low');
```

`sequentialSizes(4)` 應該返回字符串 `Mid`

```js
assert(sequentialSizes(4) === 'Mid');
```

`sequentialSizes(5)` 應該返回字符串 `Mid`

```js
assert(sequentialSizes(5) === 'Mid');
```

`sequentialSizes(6)` 應該返回字符串 `Mid`

```js
assert(sequentialSizes(6) === 'Mid');
```

`sequentialSizes(7)` 應該返回字符串 `High`

```js
assert(sequentialSizes(7) === 'High');
```

`sequentialSizes(8)` 應該返回字符串 `High`

```js
assert(sequentialSizes(8) === 'High');
```

`sequentialSizes(9)` 應該返回字符串 `High`

```js
assert(sequentialSizes(9) === 'High');
```

你不應使用 `if` 或 `else` 語句。

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

你應該編寫 9 個`case`語句。

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
