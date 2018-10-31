---
id: bad87fee1348bd9aedf08824
title: Add Different Padding to Each Side of an Element
challengeType: 0
guideUrl: 'https://chinese.freecodecamp.org/guide/certificates/add-different-padding-to-each-side-of-an-element'
videoUrl: ''
localeTitle: 在元素的每一侧添加不同的填充
---

## Description
<section id="description">有时您会想要自定义一个元素，使其每边都有不同数量的<code>padding</code> 。 CSS允许您控制的<code>padding</code>与元素的所有四个单项两侧<code>padding-top</code> ， <code>padding-right</code> ， <code>padding-bottom</code> ，并<code>padding-left</code>属性。 </section>

## Instructions
<section id="instructions">在蓝色框的顶部和左侧给出<code>40px</code>的<code>padding</code> ，但在其底部和右侧只有<code>20px</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>blue-box</code>类应该给出<code>40px</code> <code>padding</code>元素的顶部。
    testString: 'assert($(".blue-box").css("padding-top") === "40px", "Your <code>blue-box</code> class should give the top of the elements <code>40px</code> of <code>padding</code>.");'
  - text: 你的<code>blue-box</code>类应该给出<code>20px</code> <code>padding</code>元素的权利。
    testString: 'assert($(".blue-box").css("padding-right") === "20px", "Your <code>blue-box</code> class should give the right of the elements <code>20px</code> of <code>padding</code>.");'
  - text: 你的<code>blue-box</code>类应该给出<code>20px</code> <code>padding</code>元素的底部。
    testString: 'assert($(".blue-box").css("padding-bottom") === "20px", "Your <code>blue-box</code> class should give the bottom of the elements <code>20px</code> of <code>padding</code>.");'
  - text: 你的<code>blue-box</code>类应该给元素左边<code>padding</code> <code>40px</code> 。
    testString: 'assert($(".blue-box").css("padding-left") === "40px", "Your <code>blue-box</code> class should give the left of the elements <code>40px</code> of <code>padding</code>.");'

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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
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
