---
id: 56533eb9ac21ba0edf2244dd
title: 使用 Switch 語句從許多選項中進行選擇
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mv4fm'
forumTopicId: 18277
dashedName: selecting-from-many-options-with-switch-statements
---

# --description--

如果你有非常多的選項需要選擇，可以使用 <dfn>switch</dfn> 語句。 `switch` 評估一個表達式，將表達式的值與 <dfn>case</dfn> 子句匹配。 從第一個匹配的 `case` 值執行語句，直到遇到 `break`。

這是 `switch` 語句的示例：

```js
switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
```

測試 `case` 值使用嚴格相等（`===`）運算符進行比較。 `break` 告訴 JavaScript 停止執行 switch 語句。 如果遺漏了 `break` ，下一個語句將會被執行。

# --instructions--

寫一個測試 `val` 的 switch 語句，並且根據下面的條件來設置不同的 `answer`：  
`1` - `alpha`  
`2` - `beta`  
`3` - `gamma`  
`4` - `delta`

# --hints--

`caseInSwitch(1)` 值應該爲字符串 `alpha`

```js
assert(caseInSwitch(1) === 'alpha');
```

`caseInSwitch(2)` 值應該爲字符串 `beta`

```js
assert(caseInSwitch(2) === 'beta');
```

`caseInSwitch(3)` 值應該爲字符串 `gamma`

```js
assert(caseInSwitch(3) === 'gamma');
```

`caseInSwitch(4)` 值應該爲字符串 `delta`

```js
assert(caseInSwitch(4) === 'delta');
```

不能使用任何 `if` 或 `else` 表達式

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

你應該有至少 3 個 `break` 表達式

```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

caseInSwitch(1);
```

# --solutions--

```js
function caseInSwitch(val) {
  let answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }
  return answer;
}
```
