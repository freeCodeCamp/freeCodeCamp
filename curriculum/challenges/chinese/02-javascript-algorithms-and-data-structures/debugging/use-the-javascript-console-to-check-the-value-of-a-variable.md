---
id: 587d7b83367417b2b2512b33
title: 使用控制台检查变量值
challengeType: 1
forumTopicId: 18372
dashedName: use-the-javascript-console-to-check-the-value-of-a-variable
---

# --description--

Chrome 和 Firefox 都有出色的 JavaScript 控制台（也称为 DevTools），可以用来调试 JavaScript 代码

可以在 Chrome 的菜单中找到“开发者工具”或 FireFox 的菜单中的 “Web 控制台”。 如果你使用其他浏览器或手机，我们强烈建议你切换到桌面版 Firefox 或 Chrome。

`console.log()` 方法可能是最有用的调试工具，它可以将括号中的内容输出到控制台。 将它放在代码中的关键点可以显示变量在当时的值。 在查看输出之前，最好先想清楚输出应该是什么。 在整个代码中使用检查点来查看计算状态将有助于缩小问题的范围。

下面是输出 `Hello world!` 字符串到控制台的示例：

```js
console.log('Hello world!');
```

# --instructions--

使用 `console.log()` 方法打印代码中记录的变量 `a` 的值。

# --hints--

应使用 `console.log()` 来检查变量 `a` 的值。

```js
assert(code.match(/console\.log\(a\)/g));
```

# --seed--

## --seed-contents--

```js
let a = 5;
let b = 1;
a++;
// Only change code below this line


let sumAB = a + b;
console.log(sumAB);
```

# --solutions--

```js
var a = 5; console.log(a);
```
