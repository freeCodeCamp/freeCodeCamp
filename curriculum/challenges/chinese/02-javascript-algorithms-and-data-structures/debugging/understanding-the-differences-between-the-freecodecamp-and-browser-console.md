---
id: 587d7b83367417b2b2512b37
title: 了解 freeCodeCamp 和浏览器控制台之间的差异
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

你可能已经注意到一些 freeCodeCamp 的挑战有自己的控制台。 这个控制台的行为与浏览器控制台有些不同。

有许多方法可以与 `console` 一起使用来输出消息。 `log`、`warn` 和 `clear` 就是几个例子。 freeCodeCamp 控制台只会输出 `log` 消息，而浏览器控制台会输出所有消息。 当你对你的代码进行修改时，它将自动运行并显示日志。 每次代码运行时，freeCodeCamp 控制台都会被清除。

# --instructions--

首先，打开浏览器控制台，以便查看日志。 要做到这一点，在大多数浏览器上，你可以右击顶部的 freeCodeCamp 导航栏，并点击 `inspect`。 然后在打开的窗口中找到 `console` 选项卡。

之后，使用 `console.log` 记录 `output` 变量。 查看这两个控制台，可以看到日志。 最后，在你的日志后面使用 `console.clear` 清除浏览器控制台。 查看两个控制台的差异。

# --hints--

你应该使用 `console.log()` 来打印 `output` 变量。

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

你应该使用 `console.clear()` 来清除浏览器控制台。

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console.clear\(\)/)
);
```

你应该在你的日志之后清除控制台。

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console\.log\(output\)[\s\S]*console.clear\(\)/)
);
```

# --seed--

## --seed-contents--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

```

# --solutions--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear();
```
