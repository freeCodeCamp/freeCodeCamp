---
id: 587d778f367417b2b2512aad
title: >-
  考慮色盲用戶的需求仔細選擇傳達信息的顏色
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437as3'
forumTopicId: 301011
dashedName: >-
  avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information
---

# --description--

色盲的形式有很多種， 它的表現可以從對特定波長光波的感知度較低，到完全無法看到顏色。 最常見的形式是對綠色的低感知度。

例如，如果內容的前景色與背景色是兩種相近的綠色，那麼色盲用戶可能會無法區分它們。 色輪上距離較近的顏色，特別是相鄰的顏色，看起來都會很難區分。 在表示重要信息的時候應避免使用這類相近顏色的組合。

**注意：** 一些在線顏色選擇器有色盲模擬功能，可以模擬顏色在不同形式的色盲中所呈現的效果。 它們和在線對比度檢查器一樣，都是很好的工具。

# --instructions--

Camper Cat 正在測試一個重要按鈕的不同樣式。 在色輪上，用於 `background-color` 的黃色（`#FFFF33`）和用於 `color` 的綠色（`#33FF33`）是相鄰的色調，一些色盲用戶幾乎無法區分它們 （而且這兩個顏色的亮度相近，對比度太小。） 爲了解決這兩個問題，請將文本的 `color` 修改爲深藍色（`#003366`）。

# --hints--

`button` 內容文本的 `color` 屬性值應爲深藍色。

```js
assert($('button').css('color') == 'rgb(0, 51, 102)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  button {
    color: #33FF33;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```

# --solutions--

```html
<head>
  <style>
    button {
      color: #003366;
      background-color: #FFFF33;
      font-size: 14px;
      padding: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```
