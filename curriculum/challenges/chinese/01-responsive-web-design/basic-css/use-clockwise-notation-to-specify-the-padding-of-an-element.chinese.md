---
id: bad87fee1348bd9aedf08826
title: Use Clockwise Notation to Specify the Padding of an Element
challengeType: 0
videoUrl: ''
localeTitle: 使用顺时针符号指定元素的填充
---

## Description
<section id="description">不是单独指定元素的<code>padding-top</code> ， <code>padding-right</code> ， <code>padding-bottom</code>和<code>padding-left</code>属性，而是可以在一行中指定它们，如下所示： <code>padding: 10px 20px 10px 20px;</code>这四个值的工作方式类似于时钟：顶部，右侧，底部，左侧，并且将产生与使用侧面特定填充指令完全相同的结果。 </section>

## Instructions
<section id="instructions">使用顺时针符号为“.blue-box”类在其顶部和左侧提供<code>40px</code>的<code>padding</code> ，但在其底部和右侧仅为<code>20px</code> 。 </section>

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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px 40px 20px 40px;
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
