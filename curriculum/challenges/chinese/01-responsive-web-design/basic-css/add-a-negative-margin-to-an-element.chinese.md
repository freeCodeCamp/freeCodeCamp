---
id: bad87fee1348bd9aedf08823
title: Add a Negative Margin to an Element
challengeType: 0
guideUrl: 'https://chinese.freecodecamp.org/guide/certificates/add-a-negative-margin-to-an-element'
videoUrl: ''
localeTitle: 向元素添加负边距
---

## Description
<section id="description">元素的<code>margin</code>控制元素<code>border</code>与周围元素之间的空间量。如果将元素的<code>margin</code>设置为负值，则元素将变大。 </section>

## Instructions
<section id="instructions">尝试将<code>margin</code>设置为负值，如红色框的值。将蓝色框的<code>margin</code>更改为<code>-15px</code> ，因此它会填充其周围黄色框的整个水平宽度。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>blue-box</code>类应该给出<code>-15px</code>的<code>margin</code>元素。
    testString: 'assert($(".blue-box").css("margin-top") === "-15px", "Your <code>blue-box</code> class should give elements <code>-15px</code> of <code>margin</code>.");'

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
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>

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
