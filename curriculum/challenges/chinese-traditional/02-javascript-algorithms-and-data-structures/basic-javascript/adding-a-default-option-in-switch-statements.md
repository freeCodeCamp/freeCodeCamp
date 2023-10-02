---
id: 56533eb9ac21ba0edf2244de
title: 在 switch 語句中添加默認選項
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
dashedName: adding-a-default-option-in-switch-statements
---

# --description--

在 `switch` 語句中，你可能無法用 `case` 枚舉出所有可能的值。 相反，你可以添加 `default` 語句，它會在找不到相匹配的 `case` 語句之後執行。 你可以把它看作是 `if/else` 鏈中最後的那個 `else` 語句。

`default` 語句應該被放到最後。

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

# --instructions--

寫一個 switch 語句，設置以下條件設置 `answer`：  
`a` - `apple`  
`b` - `bird`  
`c` - `cat`  
`default` - `stuff`

# --hints--

`switchOfStuff("a")` 應該返回字符串 `apple`

```js
assert(switchOfStuff('a') === 'apple');
```

`switchOfStuff("b")` 應該返回字符串 `bird`

```js
assert(switchOfStuff('b') === 'bird');
```

`switchOfStuff("c")` 應該返回字符串 `cat`

```js
assert(switchOfStuff('c') === 'cat');
```

`switchOfStuff("d")` 應該返回字符串 `stuff`

```js
assert(switchOfStuff('d') === 'stuff');
```

`switchOfStuff(4)` 應該返回字符串 `stuff`

```js
assert(switchOfStuff(4) === 'stuff');
```

不能使用 `if` 或 `else` 語句。

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

你應該使用 `default` 語句。

```js
assert(switchOfStuff('string-to-trigger-default-case') === 'stuff');
```

你至少應該寫 3 個 `break` 語句。

```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);
```

# --solutions--

```js
function switchOfStuff(val) {
  let answer = "";

  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;
}
```
