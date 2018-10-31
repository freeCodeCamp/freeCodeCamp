---
id: 587d778f367417b2b2512aac
title: Avoid Colorblindness Issues by Using Sufficient Contrast
challengeType: 0
videoUrl: ''
localeTitle: 使用足够的对比度避免色盲问题
---

## Description
<section id="description">颜色是视觉设计的重要组成部分，但它的使用引入了两个可访问性问题。首先，不应仅仅使用颜色作为传达重要信息的唯一方式，因为屏幕阅读器用户不会看到它。其次，前景色和背景色需要足够的对比度，因此色盲用户可以区分它们。以前的挑战包括解决第一个问题的文本替代方案。最后一项挑战引入了对比度检查工具来帮助第二个。 WCAG建议的对比度为4.5：1适用于颜色使用以及灰度组合。色盲用户无法区分某些颜色与其他颜色 - 通常是色调，但有时也很轻。您可能会想起使用前景色和背景色的相对亮度（或亮度）值来计算对比度。在实践中，通过使用颜色对比度检查器使较暗的颜色变暗并使较浅的颜色变淡来达到4.5：1的比例。色轮上较暗的颜色被认为是蓝色，紫罗兰，洋红色和红色，而较浅的颜色是橙色，黄色，绿色和蓝绿色。 </section>

## Instructions
<section id="instructions"> Camper Cat正在尝试使用颜色作为他的博客文字和背景，但他目前的绿色<code>background-color</code>与栗色文字<code>color</code>具有2.5：1的对比度。您可以轻松调整颜色的亮度，因为他通过更改第三个参数使用CSS <code>hsl()</code>属性（代表色调，饱和度，亮度）来声明它们。将<code>background-color</code>亮度值从35％增加到55％，并将<code>color</code>亮度值从20％降低到15％。这将对比度提高到5.9：1。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码只应将文本<code>color</code>属性的亮度值更改为15％的值。
    testString: 'assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi), "Your code should only change the lightness value for the text <code>color</code> property to a value of 15%.");'
  - text: 您的代码应仅将<code>background-color</code>属性的亮度值更改为值55％。
    testString: 'assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi), "Your code should only change the lightness value for the <code>background-color</code> property to a value of 55%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 20%);
    background-color: hsl(120, 25%, 35%);
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
