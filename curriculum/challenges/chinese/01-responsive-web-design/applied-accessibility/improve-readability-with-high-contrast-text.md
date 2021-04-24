---
id: 587d778e367417b2b2512aab
title: 使用高对比度文本提高可读性
challengeType: 0
videoUrl: 'https://scrimba.com/c/cKb3nCq'
forumTopicId: 301017
dashedName: improve-readability-with-high-contrast-text
---

# --description--

低对比度的前景色与背景色会使文本难以阅读。 足够的对比度可以提高内容的可读性，但是怎样的对比度才算是“足够”的？

Web 内容无障碍指南（WCAG）建议正常文本的对比度至少为 4.5 : 1。 对比度是通过比较两种颜色的相对亮度值来计算的。 对比度的范围是从相同颜色的 1:1（无对比度）到白色与黑色的最高对比度 21:1。 在线可用的对比检查工具很多，可以计算这个比率。

# --instructions--

Camper Cat 为他的博客选择了白色背景和浅灰色文字，对比度为 1.5:1，这使博客文章难以阅读。 请将文字的 `color` 从当前的浅灰色（`#D3D3D3`）修改为深灰色（`#636363`），以使对比度提升到 6:1。

# --hints--

应该将 `body` 的 `color` 修改为深灰色。

```js
assert($('body').css('color') == 'rgb(99, 99, 99)');
```

不应修改 `body` 的 `background-color`。

```js
assert($('body').css('background-color') == 'rgb(255, 255, 255)');
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<head>
  <style>
  body {
    color: #636363;
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
