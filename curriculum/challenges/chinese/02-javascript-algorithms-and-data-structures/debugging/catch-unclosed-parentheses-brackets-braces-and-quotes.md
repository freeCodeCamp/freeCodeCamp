---
id: 587d7b84367417b2b2512b36
challengeType: 1
forumTopicId: 301190
title: 捕获未闭合的括号、方括号、大括号和引号
---

## Description
<section id='description'>
要注意的另一个语法错误是所有的小括号、方括号、花括号和引号都必须配对。当你编辑代码并插入新代码其中带有括号时，很容易忘记括号闭合。 此外，在将代码块嵌套到其他代码块时要小心，例如将回调函数作为参数添加到方法中。
避免这种错误的一种方法是，一次性输入完这些符号，然后将光标移回它们之间继续编写。好在，现在大部分编辑器都会帮你自动补全。
</section>

## Instructions
<section id='instructions'>
修复代码中的两个符号配对错误。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该修复数组缺少的部分。
    testString: assert(code.match(/myArray\s*?=\s*?\[\s*?1\s*?,\s*?2\s*?,\s*?3\s*?\];/g));
  - text: '你应该修复<code>.reduce()</code>方法缺少的部分。控制台应输出 "Sum of array values is: 6"。'
    testString: 'assert(arraySum === 6);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```

</section>
