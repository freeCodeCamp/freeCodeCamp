---
id: 5c3dda8b4d8df89bea71600f
title: 检查混合字符组
challengeType: 1
forumTopicId: 301339
dashedName: check-for-mixed-grouping-of-characters
---

# --description--

有时候我们想使用正则表达式里的括号 `()` 来检查字符组。

如果想在字符串找到 `Penguin` 或 `Pumpkin`，可以用这个正则表达式：`/P(engu|umpk)in/g`。

然后使用 `test()` 方法检查 test 字符串里面是否包含字符组。

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
```

`test` 方法会返回 `true`。

# --instructions--

完善正则表达式，使其以区分大小写的方式检查 `Franklin Roosevelt` 或 `Eleanor Roosevelt` 的名字，并且应该忽略 middle names。

然后完善代码，使创建的正则检查 `myString`，根据正则是否匹配返回 `true` 或 `false`。

# --hints--

正则 `myRegex` 测试 `Franklin D. Roosevelt` 应该返回 `true`。

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Franklin D. Roosevelt'));
```

正则 `myRegex` 测试 `Eleanor Roosevelt` 应该返回 `true`。

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Eleanor Roosevelt'));
```

正则 `myRegex` 测试 `Franklin Rosevelt` 应该返回 `false`。

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Franklin Rosevelt'));
```

正则 `myRegex` 测试 `Frank Roosevelt` 应该返回 `false`。

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Frank Roosevelt'));
```

你的正则 `myRegex` 测试 `FranklinRoosevelt` 应该返回 `false`。

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('FranklinRoosevelt'));
```

你的正则 `myRegex` 测试 `EleanorRoosevelt` 应该返回 `false`。

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('EleanorRoosevelt'));
```

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
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

# --solutions--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);
```
