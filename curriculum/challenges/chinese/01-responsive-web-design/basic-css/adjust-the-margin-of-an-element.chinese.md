---
id: bad87fee1348bd9aedf08822
title: Adjust the Margin of an Element
challengeType: 0
guideUrl: 'https://chinese.freecodecamp.org/guide/certificates/adjust-the-margin-of-an-element'
videoUrl: ''
localeTitle: 调整元素的边距
---

## Description
<section id="description">元素的<code>margin</code>控制元素<code>border</code>与周围元素之间的空间量。在这里，我们可以看到蓝色框和红色框嵌套在黄色框中。请注意，红色框的<code>margin</code>大于蓝色框，使其看起来更小。当您增加蓝框的<code>margin</code> ，它将增加其边框与周围元素之间的距离。 </section>

## Instructions
<section id="instructions">更改蓝色框的<code>margin</code>以匹配红色框的<code>margin</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>blue-box</code>类应该给出<code>20px</code>的<code>margin</code>元素。
    testString: 'assert($(".blue-box").css("margin-top") === "20px", "Your <code>blue-box</code> class should give elements <code>20px</code> of <code>margin</code>.");'

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
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 10px;
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
