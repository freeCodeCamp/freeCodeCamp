---
id: 587d7b83367417b2b2512b33
challengeType: 1
forumTopicId: 18372
title: 使用控制台检查变量值
---

## Description
<section id='description'>
Chrome 和 Firefox 都有出色的 JavaScript 控制台（也称为 DevTools），可以用来调试 JavaScript 代码
可以在 Chrome 的菜单中找到“开发者工具”或 FireFox 的菜单中的 “Web 控制台”。如果你使用其他浏览器或手机，我们强烈建议你切换到桌面版 Firefox 或 Chrome。
<code>console.log()</code>方法可能是最有用的调试工具，它可以将括号中的内容输出到控制台，将它放在代码中的关键点可以显示变量在当时的值。在查看输出之前，最好先想清楚输出应该是什么。在代码的合适位置打点来查看变量状态有助于定位问题。
下面是输出 'Hello world!' 到控制台的示例：
<code>console.log('Hello world!');</code>
</section>

## Instructions
<section id='instructions'>
请使用<code>console.log()</code>方法在代码中注明的地方输出变量<code>a</code>的值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应使用<code>console.log()</code>来检查变量<code>a</code>的值。
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
var a = 5; console.log(a);
```

</section>

