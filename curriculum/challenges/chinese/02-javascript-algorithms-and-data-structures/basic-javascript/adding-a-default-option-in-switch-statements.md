---
id: 56533eb9ac21ba0edf2244de
title: 在 Switch 语句中添加默认选项
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
dashedName: adding-a-default-option-in-switch-statements
---

# --description--

在 `switch` 语句中你可能无法用 case 来指明所有情况，这时我们可以添加 default 语句来解决这个问题。在无法找到匹配的 case 时，default 语句就会执行。这非常类似于 if/else 语句中的 else 语句。

注意，`default` 语句应该在所有的 `case` 之后。

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

请实现根据下面的条件来设置 `answer` 的 `switch` 语句：  
`"a"` - "apple"  
`"b"` - "bird"  
`"c"` - "cat"  
`default` - "stuff"

# --hints--

`switchOfStuff("a")` 的值应为 "apple"。

```js
assert(switchOfStuff('a') === 'apple');
```

`switchOfStuff("b")` 的值应为 "bird"。

```js
assert(switchOfStuff('b') === 'bird');
```

`switchOfStuff("c")` 的值应为 "cat"。

```js
assert(switchOfStuff('c') === 'cat');
```

`switchOfStuff("d")` 的值应为 "stuff"。

```js
assert(switchOfStuff('d') === 'stuff');
```

`switchOfStuff("4")` 的值应为 "stuff"。

```js
assert(switchOfStuff(4) === 'stuff');
```

不应使用 `if` 或 `else` 语句。

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

应有一个 `default` 语句。

```js
assert(switchOfStuff('string-to-trigger-default-case') === 'stuff');
```

应至少有 3 个 `break` 语句。

```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);
```

# --solutions--

```js
function switchOfStuff(val) {
  var answer = "";

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
