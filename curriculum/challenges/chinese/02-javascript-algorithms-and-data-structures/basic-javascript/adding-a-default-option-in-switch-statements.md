---
id: 56533eb9ac21ba0edf2244de
title: 在 switch 语句中添加默认选项
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
dashedName: adding-a-default-option-in-switch-statements
---

# --description--

在 `switch` 语句中，你可能无法用 `case` 枚举出所有可能的值。 相反，你可以添加 `default` 语句，它会在找不到相匹配的 `case` 语句之后执行。 你可以把它看作是 `if/else` 链中最后的那个 `else` 语句。

`default` 语句应该被放到最后。

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

写一个 switch 语句，设置以下条件设置 `answer`：  
`a` - `apple`  
`b` - `bird`  
`c` - `cat`  
`default` - `stuff`

# --hints--

`switchOfStuff("a")` 应该返回字符串 `apple`

```js
assert(switchOfStuff('a') === 'apple');
```

`switchOfStuff("b")` 应该返回字符串 `bird`

```js
assert(switchOfStuff('b') === 'bird');
```

`switchOfStuff("c")` 应该返回字符串 `cat`

```js
assert(switchOfStuff('c') === 'cat');
```

`switchOfStuff("d")` 应该返回字符串 `stuff`

```js
assert(switchOfStuff('d') === 'stuff');
```

`switchOfStuff(4)` 应该返回字符串 `stuff`

```js
assert(switchOfStuff(4) === 'stuff');
```

不能使用 `if` 或 `else` 语句。

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

你应该使用 `default` 语句。

```js
assert(switchOfStuff('string-to-trigger-default-case') === 'stuff');
```

你至少应该写 3 个 `break` 语句。

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
