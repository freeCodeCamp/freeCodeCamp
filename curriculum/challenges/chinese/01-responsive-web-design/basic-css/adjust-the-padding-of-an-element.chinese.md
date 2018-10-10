---
id: bad88fee1348bd9aedf08825
title: Adjust the Padding of an Element
challengeType: 0
guideUrl: 'https://chinese.freecodecamp.org/guide/certificates/adjust-the-padding-of-an-element'
videoUrl: ''
localeTitle: 调整元素的填充
---

## Description
<section id="description">现在让我们将我们的Cat Photo App放一段时间，了解更多关于样式HTML的信息。您可能已经注意到了这一点，但所有HTML元素基本上都是小矩形。三个重要属性控制每个HTML元素周围的空间： <code>padding</code> ， <code>margin</code>和<code>border</code> 。元素的<code>padding</code>控制元素内容与其<code>border</code>之间的空间量。在这里，我们可以看到蓝色框和红色框嵌套在黄色框中。请注意，红色框具有比蓝色框更多的<code>padding</code> 。当您增加蓝框的<code>padding</code> ，它将增加文本与其周围边框之间的距离（ <code>padding</code> ）。 </section>

## Instructions
<section id="instructions">更改蓝色框的<code>padding</code>以匹配红色框的<code>padding</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>blue-box</code>类应该给出<code>20px</code>的<code>padding</code>元素。
    testString: 'assert($(".blue-box").css("padding-top") === "20px", "Your <code>blue-box</code> class should give elements <code>20px</code> of <code>padding</code>.");'

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
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
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
