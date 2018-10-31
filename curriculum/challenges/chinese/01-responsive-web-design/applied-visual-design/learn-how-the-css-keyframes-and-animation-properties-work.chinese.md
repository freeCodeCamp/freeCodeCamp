---
id: 587d78a7367417b2b2512adf
title: Learn How the CSS @keyframes and animation Properties Work
challengeType: 0
videoUrl: ''
localeTitle: 了解CSS @keyframes和动画属性的工作原理
---

## Description
<section id="description">要为元素设置动画，您需要了解动画属性和<code>@keyframes</code>规则。动画属性控制动画的行为方式， <code>@keyframes</code>规则控制动画期间发生的事情。总共有八个动画属性。这个挑战将保持简单，并首先覆盖两个最重要的： <code>animation-name</code>设置<code>animation-name</code> ，后来<code>@keyframes</code>使用<code>@keyframes</code>来告诉CSS哪些规则与哪些动画一起使用。 <code>animation-duration</code>设置<code>animation-duration</code>长度。 <code>@keyframes</code>是如何准确指定动画在整个持续时间内发生的事情。这是通过在动画期间为特定“帧”提供CSS属性来完成的，百分比范围为0％到100％。如果将其与电影进行比较，则0％的CSS属性是元素在开场场景中的显示方式。 100％的CSS属性是元素在信用点滚动之前的结尾显示的方式。然后CSS应用魔法在给定的持续时间内转换元素以执行场景。这是一个例子来说明<code>@keyframes</code>和动画属性的用法： <blockquote> #anim { <br>动画名称：多彩; <br>动画持续时间：3s; <br> } <br> @keyframes colorful { <br> 0％{ <br>背景颜色：蓝色; <br> } <br> 100％{ <br>背景颜色：黄色; <br> } <br> } </blockquote>对于具有<code>anim</code> ID的元素，上面的代码片段将<code>animation-name</code>为<code>colorful</code> ，并将<code>animation-duration</code>为3秒。然后<code>@keyframes</code>规则链接到名称为<code>colorful</code>的动画属性。它在动画开始时将颜色设置为蓝色（0％），在动画结束时将其转换为黄色（100％）。您不仅限于开始 - 结束转换，您可以为0％和100％之间的任何百分比设置元素的属性。 </section>

## Instructions
<section id="instructions">通过将<code>animation-name</code>设置为rainbow并将<code>animation-duration</code>为4秒，为id为<code>rect</code>的元素创建动画。接下来，声明一个<code>@keyframes</code>规则，并将动画开头的<code>background-color</code> （ <code>0%</code> ）设置为蓝色，将动画的中间（ <code>50%</code> ）设置为绿色，将动画的结尾（ <code>100%</code> ）设置为黄色。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: id为<code>rect</code>的元素应该有一个<code>animation-name</code>属性，其值为rainbow。
    testString: 'assert($("#rect").css("animation-name") == "rainbow", "The element with id of <code>rect</code> should have an <code>animation-name</code> property with a value of rainbow.");'
  - text: id为<code>rect</code>的元素应该具有值为4s的<code>animation-duration</code>属性。
    testString: 'assert($("#rect").css("animation-duration") == "4s", "The element with id of <code>rect</code> should have an <code>animation-duration</code> property with a value of 4s.");'
  - text: <code>@keyframes</code>规则应该使用rainbow的<code>animation-name</code> 。
    testString: 'assert(code.match(/@keyframes\s+?rainbow\s*?{/g), "The <code>@keyframes</code> rule should use the <code>animation-name</code> of rainbow.");'
  - text: 彩虹的<code>@keyframes</code>规则应使用0％的蓝色<code>background-color</code> 。
    testString: 'assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi), "The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of blue at 0%.");'
  - text: 彩虹的<code>@keyframes</code>规则应使用50％的绿色<code>background-color</code> 。
    testString: 'assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi), "The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of green at 50%.");'
  - text: 彩虹的<code>@keyframes</code>规则应使用100％的黄色<code>background-color</code> 。
    testString: 'assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi), "The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of yellow at 100%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {


  }




</style>
<div id="rect"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
