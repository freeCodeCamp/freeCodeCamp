---
id: 587d778f367417b2b2512aad
title: Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437as3'
forumTopicId: 301011
localeTitle: 考虑色盲用户的需求仔细选择传达信息的颜色
---

## Description
<section id='description'>
色盲的形式有很多种，它的表现可以从对特定波长光波的感知度较低，到几乎无法看到颜色。最常见的形式是对绿色的低感知度。
例如：如果内容的前景色与背景色是两种相近的绿色，那么色盲用户可能会无法识别它们。可以认为色轮上相邻的颜色是相近的，在表示重要信息的时候应避免使用这些颜色的组合。
<strong>注意：</strong><br>一些在线颜色拾取器有色盲模拟功能，可以模拟颜色在不同形式色盲的视觉中的呈现结果，它们和在线对比度检查器一样，都是很好的工具。
</section>

## Instructions
<section id='instructions'>
Camper Cat 正在测试一个重要按钮的不同样式。在色轮上，黄色（<code>#FFFF33</code>）的<code>background-color</code>和绿色（<code>#33FF33</code>）的文本<code>color</code>是相邻的色调，一些色盲用户几乎无法区分它们，而且这两个颜色的亮度相近，对比度太小。为了解决这两个问题，请将文本的<code>color</code>修改为深蓝色（<code>#003366</code>）。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>button</code>的文本<code>color</code>应该是深蓝色。'
    testString: assert($('button').css('color') == 'rgb(0, 51, 102)');

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

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              