---
id: 587d7b84367417b2b2512b36
title: 'Catch Unclosed Parentheses, Brackets, Braces and Quotes'
challengeType: 1
videoUrl: ''
localeTitle: 抓住未封闭的圆括号，括号，括号和引号
---

## Description
<section id="description">要注意的另一个语法错误是所有左括号，括号，花括号和引号都有一个结束对。当您编辑现有代码并使用其中一种类型插入项目时，会忘记忘记一件事。此外，在将代码块嵌套到其他代码块时要小心，例如将回调函数作为参数添加到方法中。避免这种错误的一种方法是，只要输入开头字符，立即包括结束匹配，然后将光标移回它们之间并继续编码。幸运的是，大多数现代代码编辑器会自动生成对的后半部分。 </section>

## Instructions
<section id="instructions">修复代码中的两对错误。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该修复数组中缺少的部分。
    testString: assert(code.match(/myArray\s*?=\s*?\[\s*?1\s*?,\s*?2\s*?,\s*?3\s*?\];/g));
  - text: 您的代码应该修复<code>.reduce()</code>方法的缺失部分。控制台输出应显示“数组值的总和为：6”。
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
// solution required
```

/section>
