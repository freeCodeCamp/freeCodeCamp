---
id: 587d778e367417b2b2512aab
title: Improve Readability with High Contrast Text
challengeType: 0
videoUrl: ''
localeTitle: 使用高对比度文本提高可读性
---

## Description
<section id="description">前景色和背景色之间的低对比度会使文本难以阅读。充足的对比度可以提高内容的可读性，但“足够”究竟意味着什么呢？ Web内容可访问性指南（WCAG）建议正常文本的对比度至少为4.5：1。通过比较两种颜色的相对亮度值来计算该比率。对于相同的颜色，或者没有对比度，其范围从1：1到白色与黑色的21：1，最强的对比度。网上有许多对比度检查工具可以为您计算这个比率。 </section>

## Instructions
<section id="instructions"> Camper Cat在他最近的博客文章中选择浅灰色文本在白色背景上具有1.5：1的对比度，使其难以阅读。将文本<code>color</code>从当前灰色（ <code>#D3D3D3</code> ）更改为深灰色（ <code>#636363</code> ），将对比度提高到6：1。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该改变文字<code>color</code>为<code>body</code>的深灰色。
    testString: 'assert($("body").css("color") == "rgb(99, 99, 99)", "Your code should change the text <code>color</code> for the <code>body</code> to the darker gray.");'
  - text: 您的代码不应更改<code>body</code>的<code>background-color</code> 。
    testString: 'assert($("body").css("background-color") == "rgb(255, 255, 255)", "Your code should not change the <code>background-color</code> for the <code>body</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  body {
    color: #D3D3D3;
    background-color: #FFF;
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
