---
id: 587d778f367417b2b2512aac
title: 考慮色盲用戶的需求設置合適的對比度
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMEUw'
forumTopicId: 301012
dashedName: avoid-colorblindness-issues-by-using-sufficient-contrast
---

# --description--

顏色是可視化設計的重要組成部分，但是使用顏色也引入了兩個可訪問性問題。 首先，不能僅僅使用顏色作爲傳達重要信息的唯一方式，因爲屏幕閱讀器無法獲取這些信息。 其次，前景色與背景色需要有足夠的對比度，這樣色盲用戶纔可以區分它們。

在之前的挑戰中，我們用文本備用方案解決了第一個問題。 在上一個挑戰中，我們使用對比度檢測工具解決了第二個問題。 WCAG 建議爲顏色及灰度組合使用 4.5:1 的對比度。

色盲用戶無法將一些顏色與另一些顏色區分出來，這通常是因爲色調，有時候是因爲亮度。 你可能還記得，對比度是用前景色與背景色的相對亮度計算的。

實踐中，在對比度檢測工具的幫助下，我們可以通過將較暗的顏色變暗、將較淡的顏色變淡的方法來使對比度達到 4.5:1。 在色輪中，較暗的顏色通常是藍色、紫色、洋紅和紅色，而較淡的顏色通常是橙色、黃色、綠色和藍綠色。

# --instructions--

Camper Cat 正在嘗試爲他的博客文本與背景配置顏色。 他目前使用的組合是綠色的 `background-color` 與栗色的 `color`，它們的對比度爲 2.5:1。 這樣，通過修改 `hsl()` 屬性的第三個參數，我們可以很輕鬆地調整顏色的亮度。 請將 `background-color` 的亮度從 35% 增加到 55%，將 `color` 的亮度從 20% 減少到 15%， 這樣可以使對比度達到 5.9:1。

# --hints--

應將 `color` 屬性的亮度值設置爲 15%。

```js
assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi));
```

應將 `background-color` 屬性的亮度值設置爲 55%。

```js
assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi));
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 15%);
    background-color: hsl(120, 25%, 55%);
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
