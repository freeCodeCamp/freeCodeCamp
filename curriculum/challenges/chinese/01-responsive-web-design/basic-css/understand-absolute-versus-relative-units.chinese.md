---
id: bad82fee1322bd9aedf08721
title: Understand Absolute versus Relative Units
challengeType: 0
videoUrl: ''
localeTitle: 了解绝对与相对单位
---

## Description
<section id="description">最后几个挑战都设置元素的边距或填充像素（ <code>px</code> ）。像素是一种长度单位，它告诉浏览器如何调整项目的大小或空间。除了<code>px</code> ，CSS还有许多不同的长度单位选项供您使用。两种主要类型的长度单位是绝对的和相对的。绝对单位与长度的物理单位相关联。例如， <code>in</code>和<code>mm</code>表示英寸和毫米。绝对长度单位接近屏幕上的实际测量值，但根据屏幕的分辨率存在一些差异。相对单位，例如<code>em</code>或<code>rem</code> ，相对于另一个长度值。例如， <code>em</code>基于元素字体的大小。如果您使用它来设置<code>font-size</code>属性本身，则它相对于父级的<code>font-size</code> 。 <strong>注意</strong> <br>有几个相对单位选项与视口的大小相关联。它们包含在响应式Web设计原则部分中。 </section>

## Instructions
<section id="instructions">使用类<code>red-box</code>向元素添加<code>padding</code>属性并将其设置为<code>1.5em</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>red-box</code>类应该有一个<code>padding</code>属性。
    testString: 'assert($(".red-box").css("padding-top") != "0px" && $(".red-box").css("padding-right") != "0px" && $(".red-box").css("padding-bottom") != "0px" && $(".red-box").css("padding-left") != "0px", "Your <code>red-box</code> class should have a <code>padding</code> property.");'
  - text: 你的<code>red-box</code>类应该给出1.5em的<code>padding</code>元素。
    testString: 'assert(code.match(/\.red-box\s*?{\s*?.*?\s*?.*?\s*?padding:\s*?1\.5em/gi), "Your <code>red-box</code> class should give elements 1.5em of <code>padding</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;

  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
