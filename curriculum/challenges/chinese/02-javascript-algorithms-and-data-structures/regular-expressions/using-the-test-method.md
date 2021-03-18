---
id: 587d7db3367417b2b2512b8e
title: 使用测试方法
challengeType: 1
forumTopicId: 301369
dashedName: using-the-test-method
---

# --description--

在编程语言中，正则表达式用于匹配指定的字符串。 通过正则表达式创建匹配模式（规则）可以帮你完成指定匹配。

如果想要在字符串 `The dog chased the cat` 中匹配到 `the` 这个单词，可以使用如下正则表达式：`/the/`。 注意，正则表达式中不需要引号。

JavaScript 中有多种使用正则表达式的方法。 测试正则表达式的一种方法是使用 `.test()` 方法。 `.test()` 方法会把编写的正则表达式和字符串（即括号内的内容）匹配，如果成功匹配到字符，则返回 `true`，反之，返回 `false`。

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

`test` 方法会返回 `true`。

# --instructions--

使用 `.test()` 方法，检测字符串 `myString` 是否符合正则表达式 `myRegex` 定义的规则。

# --hints--

你应该使用 `.test()` 方法来检测正则表达式。

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

你的返回结果应该为 `true`。

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line
```

# --solutions--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
```
