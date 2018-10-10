---
id: 587d78a5367417b2b2512ad6
title: Create a Gradual CSS Linear Gradient
challengeType: 0
videoUrl: ''
localeTitle: 创建渐进的CSS线性渐变
---

## Description
<section id="description">在HTML元素上应用颜色不仅限于一个平面色调。 CSS提供了在元素上使用颜色过渡（也称为渐变）的功能。这可以通过<code>background</code>属性的<code>linear-gradient()</code>函数访问。这是一般语法： <code>background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);</code>第一个参数指定颜色过渡开始的方向 - 它可以表示为度，其中90deg为垂直渐变，45deg的角度为反斜杠。以下参数指定渐变中使用的颜色顺序。示例： <code>background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));</code> </section>

## Instructions
<section id="instructions">对<code>div</code>元素的<code>background</code>使用<code>linear-gradient()</code> ，并从35度的方向设置它以将颜色从<code>#CCFFFF</code>更改为<code>#FFCCCC</code> 。 <strong>注意</strong> <br>虽然还有其他方法可以指定颜色值，例如<code>rgb()</code>或<code>hsl()</code> ，但请为此挑战使用十六进制值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>div</code>元素应具有指定方向和颜色的<code>linear-gradient</code> <code>background</code> 。
    testString: 'assert(code.match(/background:\s*?linear-gradient\(35deg,\s*?(#CCFFFF|#CFF),\s*?(#FFCCCC|#FCC)\);/gi), "The <code>div</code> element should have a <code>linear-gradient</code> <code>background</code> with the specified direction and colors.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;

  }

</style>

<div></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
