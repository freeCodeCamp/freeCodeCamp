---
id: 587d7db2367417b2b2512b8b
title: Understand the Immediately Invoked Function Expression (IIFE)
challengeType: 1
videoUrl: ''
localeTitle: 理解立即调用的函数表达式（IIFE）
---

## Description
<section id="description"> JavaScript中的一个常见模式是在声明函数后立即执行： <blockquote> （function（）{ <br> console.log（“Chirp，chirp！”）; <br> }）（）; //这是一个立即执行的匿名函数表达式<br> //输出“Chirp，chirp！”立即</blockquote>请注意，该函数没有名称，也没有存储在变量中。函数表达式末尾的两个括号（）会立即执行或调用它。此模式称为<code>immediately invoked function expression</code>或<code>IIFE</code> 。 </section>

## Instructions
<section id="instructions">重写函数<code>makeNest</code>并删除它的调用，所以它是一个匿名的<code>immediately invoked function expression</code> （ <code>IIFE</code> ）。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 该功能应该是匿名的。
    testString: assert(/\((function|\(\))(=>|\(\)){/.test(code.replace(/\s/g, "")));
  - text: 您的函数应在表达式的末尾加上括号以立即调用它。
    testString: assert(/}\)\(\)/.test(code.replace(/\s/g, "")));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
