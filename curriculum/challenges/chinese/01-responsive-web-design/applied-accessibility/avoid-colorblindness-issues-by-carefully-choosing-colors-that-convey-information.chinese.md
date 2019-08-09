---
id: 587d778f367417b2b2512aad
title: Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information
challengeType: 0
videoUrl: ''
localeTitle: Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information
---

## Description
<section id='description'>
色盲的形式有很多种，它的表现可以从对特定波长光波的感知度较低，到几乎无法看到颜色。最常见的形式是对绿色的低感知度。
例如：如果内容的前景色与背景色是两种相近的绿色，那么色盲用户可能会无法识别它们。可以将色轮上相邻的颜色认为是相近的，我们不应用这些颜色来表示重要的信息。
<strong>注意：</strong><br>一些在线颜色拾取器有色盲模拟功能，可以模拟颜色在不同形式色盲的视觉中的呈现结果，它们和在线对比度检查器一样，都是很好的工具。
</section>

## Instructions
<section id='instructions'>
Camper Cat 正在用不同样式测试一个重要按钮。在色轮上，黄色（<code>#FFFF33</code>）的<code>background-color</code>和绿色（<code>#33FF33</code>）的文本<code>color</code>是相邻的色调，一些色盲用户几乎无法区分它们，而它们相近的亮度会使对比度测试失败。为了解决这两个问题，请将文本的<code>color</code>修改为深蓝色（<code>#003366</code>）。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>button</code>的文本<code>color</code>应该是深蓝色。
    testString: assert($('button').css('color') == 'rgb(0, 51, 102)', '<code>button</code>的文本<code>color</code>应该是深蓝色。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>
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





</div>





</section>

              