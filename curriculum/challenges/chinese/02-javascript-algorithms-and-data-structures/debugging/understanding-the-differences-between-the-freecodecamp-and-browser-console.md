---
id: 587d7b83367417b2b2512b37
title: 了解 freeCodeCamp 和浏览器控制台之间的差异
challengeType: 1
forumTopicId: 301193
---

# --description--

你可能已经注意到一些 freeCodeCamp JavaScript 的挑战有自己的控制台。这些控制台的行为与上一次挑战中使用的浏览器控制台略有不同。

以下挑战旨在强调 freeCodeCamp 控制台与浏览器控制台之间的一些差异。

对于浏览器控制台。当在浏览器中加载并运行 JavaScript 文件时，`console.log()`语句会在控制台中按照调用的次数准确地打印出要求的内容。然而，在 freeCodeCamp 的代码编辑器中使用`console.log()`会略有不同，一开始可能会让你感到困惑。

在 freeCodeCamp 代码编辑器中，传给`console.log()`的值会在每组测试执行的时候输出。另外，如果在代码中还手动调用过挑战题目的函数，调用几次就会增加几次传入值的输出。

这就产生了一些有趣的行为，并可能在一开始就让你感到困惑，因为你觉得只会输出一次的值可能会输出多次，具体次数取决于挑战题目本身测试的数量以及这些测试调用挑战函数的方式。

如果你不打算执行挑战的测试，而只想查看自己调用`console.log()`的输出，可以使用`console.clear()`。

# --instructions--

首先，使用 `console.clear()` 清空浏览器控制台。然后使用`console.log()`在代码中指定的位置打印 `output` 变量。

# --hints--

应该使用 `console.clear()` 来清空浏览器控制台。

```js
const removeJSComments = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
const noSpaces = removeJSComments.replace(/\s/g, '');
assert(noSpaces.match(/console.clear\(\)/));
```

使用`console.log()`输出变量`output`的值。

```js
const noSpaces = code.replace(/\s/g, '');
assert(noSpaces.match(/console\.log\(output\)/));
```

# --solutions--

