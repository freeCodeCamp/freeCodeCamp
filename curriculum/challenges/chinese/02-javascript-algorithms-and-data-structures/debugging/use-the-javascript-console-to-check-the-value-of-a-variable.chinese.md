---
id: 587d7b83367417b2b2512b33
title: Use the JavaScript Console to Check the Value of a Variable
challengeType: 1
videoUrl: ''
localeTitle: 使用JavaScript控制台检查变量的值
---

## Description
<section id="description"> Chrome和Firefox都有出色的JavaScript控制台，也称为DevTools，用于调试JavaScript。您可以在Chrome的菜单或FireFox菜单中的Web控制台中找到开发人员工具。如果您使用的是其他浏览器或手机，我们强烈建议您使用桌面版Firefox或Chrome。 <code>console.log()</code>方法将打印其括号内的输出“打印”到控制台，这可能是最有用的调试工具。将它放在代码中的关键点可以显示变量的中间值。在查看输出之前，最好先了解输出应该是什么。在整个代码中使用检查点来查看计算状态将有助于缩小问题所在。这是打印&#39;Hello world！&#39;的示例到控制台： <code>console.log(&#39;Hello world!&#39;);</code> </section>

## Instructions
<section id="instructions">使用<code>console.log()</code>方法打印代码中记录的变量<code>a</code>的值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用<code>console.log()</code>来检查变量<code>a</code>的值。
    testString: assert(code.match(/console\.log\(a\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let a = 5;
let b = 1;
a++;
// Add your code below this line


let sumAB = a + b;
console.log(sumAB);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
