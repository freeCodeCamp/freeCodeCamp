---
id: 587d7b83367417b2b2512b37
title: 了解 freeCodeCamp 和浏览器控制台之间的差异
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

你可能已经注意到一些 freeCodeCamp JavaScript 的挑战有自己的控制台。 这些控制台的行为与上一次挑战中使用的浏览器控制台略有不同。

以下挑战旨在强调 freeCodeCamp 控制台与浏览器控制台之间的一些差异。

当在浏览器中加载并运行 JavaScript 文件时，`console.log()` 语句会在控制台中按照调用的次数准确地打印出要求的内容。

在编辑器检测到脚本中的更改之后，以及测试期间，freeCodeCamp 控制台将打印 `console.log()` 语句。

在运行测试之前，将清除 freeCodeCamp 控制台，为避免破坏，仅在第一次测试期间打印日志（请参见下面的注释）。

如果你想看到每次测试的日志，运行测试，并打开浏览器控制台。 如果你喜欢使用浏览器控制台，想要它模仿 freeCodeCamp 控制台，请在其他 `console` 调用前加上 `console.clear()`，以清除浏览器控制台。

**注意：** 每次调用函数时，函数内的 `console.log` 都会被打印到 freeCodeCamp 控制台。 这样可以帮助在测试期间调试函数。

# --instructions--

首先，使用 `console.log` 打印 `output` 变量。 然后使用 `console.clear` 清除浏览器控制台。

# --hints--

应该使用 `console.clear()` 清除浏览器控制台。

```js
assert(
  __helpers
    .removeWhiteSpace(__helpers.removeJSComments(code))
    .match(/console.clear\(\)/)
);
```

应该使用 `console.log()` 打印 `output` 变量。

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

# --seed--

## --seed-contents--

```js
// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.

// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
```

# --solutions--

```js
// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.
console.clear();
console.log(output);

// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
```
