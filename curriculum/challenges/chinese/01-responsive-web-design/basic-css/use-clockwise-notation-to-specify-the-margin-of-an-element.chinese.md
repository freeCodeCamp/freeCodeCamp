---
id: bad87fee1348bd9afdf08726
title: Use Clockwise Notation to Specify the Margin of an Element
challengeType: 0
videoUrl: ''
localeTitle: 使用顺时针符号指定元素的边距
---

## Description
<section id="description">让我们再试一次，但这次有<code>margin</code> 。不是单独指定元素的<code>margin-top</code> ， <code>margin-right</code> ， <code>margin-bottom</code>和<code>margin-left</code>属性，而是可以在一行中指定它们，如下所示： <code>margin: 10px 20px 10px 20px;</code>这四个值的工作方式类似于时钟：top，right，bottom，left，并且将产生与使用边特定边距指令完全相同的结果。 </section>

## Instructions
<section id="instructions">使用<code>Clockwise Notation</code>为<code>blue-box</code>的元素在其顶部和左侧提供<code>40px</code>的边距，但在其底部和右侧仅为<code>20px</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>blue-box</code>类应该给元素顶部<code>40px</code>的<code>margin</code> 。
    testString: 'assert($(".blue-box").css("margin-top") === "40px", "Your <code>blue-box</code> class should give the top of elements <code>40px</code> of <code>margin</code>.");'
  - text: 您的<code>blue-box</code>类应该赋予元素<code>20px</code> <code>margin</code>的权利。
    testString: 'assert($(".blue-box").css("margin-right") === "20px", "Your <code>blue-box</code> class should give the right of elements <code>20px</code> of <code>margin</code>.");'
  - text: 你的<code>blue-box</code>类应该给元素的底部提供<code>20px</code>的<code>margin</code> 。
    testString: 'assert($(".blue-box").css("margin-bottom") === "20px", "Your <code>blue-box</code> class should give the bottom of elements <code>20px</code> of <code>margin</code>.");'
  - text: 你的<code>blue-box</code>类应该给元素左边<code>40px</code>的<code>margin</code> 。
    testString: 'assert($(".blue-box").css("margin-left") === "40px", "Your <code>blue-box</code> class should give the left of elements <code>40px</code> of <code>margin</code>.");'

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
    margin: 20px 40px 20px 40px;
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
