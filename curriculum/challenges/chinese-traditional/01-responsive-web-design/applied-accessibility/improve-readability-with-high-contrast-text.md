---
id: 587d778e367417b2b2512aab
title: 使用高對比度文本提高可讀性
challengeType: 0
videoUrl: 'https://scrimba.com/c/cKb3nCq'
forumTopicId: 301017
dashedName: improve-readability-with-high-contrast-text
---

# --description--

低對比度的前景色與背景色會使文本難以閱讀。 足夠的對比度可以提高內容的可讀性，但是怎樣的對比度纔算是“足夠”的？

Web 內容無障礙指南（WCAG）建議正常文本的對比度至少爲 4.5 : 1。 對比度是通過比較兩種顏色的相對亮度值來計算的。 對比度的範圍是從相同顏色的 1:1（無對比度）到白色與黑色的最高對比度 21:1。 在線可用的對比檢查工具很多，可以計算這個比率。

# --instructions--

Camper Cat 爲他的博客選擇了白色背景和淺灰色文字，對比度爲 1.5:1，這使博客文章難以閱讀。 請將文字的 `color` 從當前的淺灰色（`#D3D3D3`）修改爲深灰色（`#636363`），以使對比度提升到 6:1。

# --hints--

應該將 `body` 的 `color` 修改爲深灰色。

```js
assert($('body').css('color') == 'rgb(99, 99, 99)');
```

不應修改 `body` 的 `background-color`。

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
