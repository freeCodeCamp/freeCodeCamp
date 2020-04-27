---
id: 587d778f367417b2b2512aac
title: Avoid Colorblindness Issues by Using Sufficient Contrast
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMEUw'
forumTopicId: 301012
localeTitle: 考虑色盲用户的需求设置合适的对比度
---

## Description
<section id='description'>
颜色是可视化设计的重要组成部分，但是使用颜色也引入了两个可访问性问题。首先，不能仅仅使用颜色作为传达重要信息的唯一方式，因为屏幕阅读器无法获取这些信息。其次，前景色与背景色需要有足够的对比度，这样色盲用户才可以识别它们。
在之前的挑战中，我们用文本备用方案解决了第一个问题。在上一个挑战中，我们使用对比度检测工具解决了第二问题。WCAG 建议为颜色及灰度组合使用 4.5 : 1 的对比度。
色盲用户无法将一些颜色与另一些颜色区分出来——通常是因为色调，也有时候是因为亮度。你可能想起对比度是用前景色与背景色的相对亮度计算的。
实践中，在对比度检测工具的帮助下，我们可以通过将较暗的颜色变暗、将较淡的颜色变淡的方法来使对比度达到 4.5 : 1。在色轮中，较暗的颜色通常是蓝色、紫色、洋红和红色，而较淡的颜色通常是橙色、黄色、绿色和蓝绿色。
</section>

## Instructions
<section id='instructions'>
Camper Cat 正在尝试为他的博客文本与背景使用颜色，但是他目前使用的组合是绿色的<code>background-color</code>与栗色的<code>color</code>，它们的对比度为 2.5 : 1。Camper Cat 使用了 CSS 的<code>hsl()</code>（hsl 为 hue, saturation, lightness 的缩写）属性来设置颜色，所以通过修改<code>hsl()</code>属性的第三个参数，可以很容易地调整颜色的亮度。请将<code>background-color</code>的亮度从 35% 增加到 55%，<code>color</code>的亮度从 20% 减少到 15%，这样可以使对比度达到 5.9 : 1。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该将<code>color</code>属性的亮度值设置为 15%。'
    testString: assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi));
  - text: '你应该将<code>background-color</code>属性的亮度值设置为 55%。'
    testString: assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi));

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

```html
// solution required
```

</section>
              