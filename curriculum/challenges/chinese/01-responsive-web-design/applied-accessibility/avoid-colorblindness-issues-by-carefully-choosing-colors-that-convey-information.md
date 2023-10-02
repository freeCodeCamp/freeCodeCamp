---
id: 587d778f367417b2b2512aad
title: >-
  考虑色盲用户的需求仔细选择传达信息的颜色
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437as3'
forumTopicId: 301011
dashedName: >-
  avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information
---

# --description--

色盲的形式有很多种， 它的表现可以从对特定波长光波的感知度较低，到完全无法看到颜色。 最常见的形式是对绿色的低感知度。

例如，如果内容的前景色与背景色是两种相近的绿色，那么色盲用户可能会无法区分它们。 色轮上距离较近的颜色，特别是相邻的颜色，看起来都会很难区分。 在表示重要信息的时候应避免使用这类相近颜色的组合。

**注意：** 一些在线颜色选择器有色盲模拟功能，可以模拟颜色在不同形式的色盲中所呈现的效果。 它们和在线对比度检查器一样，都是很好的工具。

# --instructions--

Camper Cat 正在测试一个重要按钮的不同样式。 在色轮上，用于 `background-color` 的黄色（`#FFFF33`）和用于 `color` 的绿色（`#33FF33`）是相邻的色调，一些色盲用户几乎无法区分它们 （而且这两个颜色的亮度相近，对比度太小。） 为了解决这两个问题，请将文本的 `color` 修改为深蓝色（`#003366`）。

# --hints--

`button` 内容文本的 `color` 属性值应为深蓝色。

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
