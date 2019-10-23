---
id: 587d778f367417b2b2512aad
title: Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information
challengeType: 0
videoUrl: ''
localeTitle: 通过仔细选择传达信息的颜色来避免色盲问题
---

## Description
<section id="description">有各种形式的色盲。这些范围可以从对特定波长的光的灵敏度降低到根本无法看到颜色。最常见的形式是检测果岭的灵敏度降低。例如，如果两个相似的绿色是内容的前景色和背景色，则色盲用户可能无法区分它们。关闭颜色可以被认为是色轮上的邻居，并且在传达重要信息时应该避免这些组合。 <strong>注意</strong> <br>一些在线颜色挑选工具包括颜色如何针对不同类型的颜色盲目出现的视觉模拟。除在线对比度检查计算器外，这些都是很好的资源。 </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应将<code>button</code>的文本<code>color</code>更改为深蓝色。
    testString: 'assert($("button").css("color") == "rgb(0, 51, 102)", "Your code should change the text <code>color</code> for the <code>button</code> to the dark blue.");'

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

```js
// solution required
```
</section>
