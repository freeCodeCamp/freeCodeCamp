---
id: bad87fee1248bd9aedf08824
title: Add Different Margins to Each Side of an Element
challengeType: 0
videoUrl: ''
localeTitle: 在元素的每一侧添加不同的边距
---

## Description
<section id="description">有时您会想要自定义元素，使其每边都有不同的<code>margin</code> 。 CSS允许您控制的<code>margin</code>与元素的所有四个单项两侧<code>margin-top</code> ， <code>margin-right</code> ， <code>margin-bottom</code> ，和<code>margin-left</code>属性。 </section>

## Instructions
<section id="instructions">蓝色框的顶部和左侧<code>margin</code>为<code>40px</code> ，底部和右侧仅为<code>20px</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

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
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
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
