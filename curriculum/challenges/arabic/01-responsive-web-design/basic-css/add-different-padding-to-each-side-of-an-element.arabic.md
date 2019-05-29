---
id: bad87fee1348bd9aedf08824
title: Add Different Padding to Each Side of an Element
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تعطي <code>40px</code> في <code>blue-box</code> أعلى العناصر <code>40px</code> من <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-top") === "40px", "Your <code>blue-box</code> class should give the top of the elements <code>40px</code> of <code>padding</code>.");'
  - text: يجب أن تعطي صفحتك <code>blue-box</code> حق العناصر المكوّنة من 20 <code>20px</code> من <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-right") === "20px", "Your <code>blue-box</code> class should give the right of the elements <code>20px</code> of <code>padding</code>.");'
  - text: يجب أن تعطي صفحتك <code>blue-box</code> الجزء السفلي من العناصر 20 <code>20px</code> من <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-bottom") === "20px", "Your <code>blue-box</code> class should give the bottom of the elements <code>20px</code> of <code>padding</code>.");'
  - text: ''
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
