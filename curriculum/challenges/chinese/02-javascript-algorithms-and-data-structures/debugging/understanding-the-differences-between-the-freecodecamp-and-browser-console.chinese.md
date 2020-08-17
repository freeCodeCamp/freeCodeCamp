---
id: 587d7b83367417b2b2512b37
title: Understanding the Differences between the freeCodeCamp and Browser Console
challengeType: 1
videoUrl: ''
localeTitle: 了解freeCodeCamp和浏览器控制台之间的差异
---

## Description
<section id="description">您可能已经注意到一些freeCodeCamp JavaScript挑战包括他们自己的控制台。此控制台的行为与您在上一次挑战中使用的浏览器控制台略有不同。以下挑战旨在强调freeCodeCamp控制台与浏览器控制台之间的一些差异。首先，浏览器控制台。当您在浏览器中加载并运行普通JavaScript文件时， <code>console.log()</code>语句将准确打印您告诉他们打印到浏览器控制台的确切次数。在浏览器中的文本编辑器中，过程略有不同，最初可能会让人感到困惑。传递给文本编辑器块中的<code>console.log()</code>值运行每组测试以及您在代码中进行的任何函数调用的一次。这有助于一些有趣的行为，并且可能会在开始时将您绊倒，因为您希望只看到一次的记录值可能会打印出更多次，具体取决于测试次数和传递给这些测试的值。如果您只想查看单个输出而不必担心运行测试周期，可以使用<code>console.clear()</code> 。 </section>

## Instructions
<section id="instructions">使用<code>console.log()</code>在指示的代码中打印变量。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 使用<code>console.log()</code>打印<code>outputTwo</code>变量。在浏览器控制台中，这应该打印出变量的值两次。
    testString: 'assert(code.match(/console\.log\(outputTwo\)/g), "Use <code>console.log()</code> to print the <code>outputTwo</code> variable.  In your Browser Console this should print out the value of the variable two times.");'
  - text: 使用<code>console.log()</code>打印<code>outputOne</code>变量。
    testString: 'assert(code.match(/console\.log\(outputOne\)/g), "Use <code>console.log()</code> to print the <code>outputOne</code> variable.");'
  - text: 使用<code>console.clear()</code>修改输出，以便<code>outputOne</code>变量只输出一次。
    testString: 'assert(code.match(/^(\s*console.clear\(\);?\s*)$/gm), "Use <code>console.clear()</code> to modify your output so that <code>outputOne</code> variable only outputs once.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Open your browser console
let outputTwo = "This will print to the browser console 2 times";
// Use console.log() to print the outputTwo variable


let outputOne = "Try to get this to log only once to the browser console";
// Use console.clear() in the next line to print the outputOne only once


// Use console.log() to print the outputOne variable

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
