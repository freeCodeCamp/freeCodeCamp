---
id: 587d778e367417b2b2512aab
title: Improve Readability with High Contrast Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/cKb3nCq'
forumTopicId: 301017
localeTitle: 使用高对比度文本提高可读性
---

## Description
<section id='description'>
低对比度的前景色与背景色会使文本难以阅读。足够的对比度可以提高内容的可读性，但是怎样的对比度才算是 “足够” 的？
Web 内容无障碍指南（WCAG）建议正常文本的对比度至少为 4.5 : 1。对比度是通过比较两种颜色的相对亮度值来计算的，其范围是从相同颜色的 1 : 1（无对比度）到白色与黑色的最高对比度 21 : 1。网上有很多可以帮助你计算对比度的工具。
</section>

## Instructions
<section id='instructions'>
Camper Cat 为他的博客选择了白色背景，浅灰色文字，对比度为 1.5 : 1，这使博客文章难以阅读。请将文字的<code>color</code>从当前的浅灰色（<code>#D3D3D3</code>）修改为深灰色（<code>#636363</code>），以使对比度提升到 6 : 1。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该将<code>body</code>的<code>color</code>修改为深灰色。'
    testString: assert($('body').css('color') == 'rgb(99, 99, 99)');
  - text: '你不应该修改<code>body</code>的<code>background-color</code>。'
    testString: assert($('body').css('background-color') == 'rgb(255, 255, 255)');

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

```html
// solution required
```

</section>
              