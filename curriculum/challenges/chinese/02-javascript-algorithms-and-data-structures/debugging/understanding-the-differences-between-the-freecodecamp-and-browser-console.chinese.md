---
id: 587d7b83367417b2b2512b37
title: Understanding the Differences between the freeCodeCamp and Browser Console
challengeType: 1

videoUrl: ''
localeTitle: Understanding the Differences between the freeCodeCamp and Browser Console
---

## Description
<section id='description'>
你可能已经注意到一些 freeCodeCamp JavaScript 的挑战有自己的控制台。这些控制台的行为与你在上一次挑战中使用的浏览器控制台略有不同。
以下挑战旨在强调 freeCodeCamp 控制台与浏览器控制台之间的一些差异。
对于浏览器控制台。当你在浏览器中加载并运行 JavaScript 文件时，<code>console.log()</code>语句会在控制台中按照你调用的次数准确地打印出你要求的内容。然而，在 freeCodeCamp 的代码编辑器中使用<code>console.log()</code>会略有不同，一开始可能会让你感到困惑。
在 freeCodeCamp 代码编辑器中，传给<code>console.log()</code>的值会在每组测试执行的时候输出。另外，如果你在代码中还手动调用过挑战题目的函数，调用几次就会增加几次传入值的输出。
这就产生了一些有趣的行为，并可能在一开始就让你感到困惑，因为你觉得只会输出一次的值可能会输出多次，具体次数取决于挑战题目本身测试的数量以及这些测试调用挑战函数的方式。
如果你不打算执行挑战的测试，而只想查看自己调用<code>console.log()</code>的输出，可以使用<code>console.clear()</code>。
</section>

## Instructions
<section id='instructions'>
使用<code>console.log()</code>在代码中指定的位置打印变量。

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 使用<code>console.log()</code>输出变量<code>outputTwice</code>的值。在浏览器控制台中，应该输出两次变量的值。
    testString: assert(code.match(/console\.log\(outputTwo\)/g), '使用<code>console.log()</code>输出变量<code>outputTwice</code>的值。在浏览器控制台中，应该输出两次变量的值。');
  - text: 使用<code>console.log()</code>输出变量<code>outputOne</code>的值。
    testString: assert(code.match(/console\.log\(outputOne\)/g), '使用<code>console.log()</code>输出变量<code>outputOne</code>的值。');
  - text: 使用<code>console.clear()</code>修改输出，以便<code>outputOne</code>变量只输出一次。
    testString: assert(code.match(/^(\s*console.clear\(\);?\s*)$/gm), '使用<code>console.clear()</code>修改输出，以便<code>outputOne</code>变量只输出一次。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              