---
id: bad87fee1348bd9aedf08826
title: Use Clockwise Notation to Specify the Padding of an Element
challengeType: 0
videoUrl: ''
localeTitle: 'استخدم علامة Clockwise لتحديد Padding of Alement'
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($(".blue-box").css("padding-top") === "40px", "Your <code>blue-box</code> class should give the top of elements <code>40px</code> of <code>padding</code>.");'
  - text: يجب أن تعطي صفحتك <code>blue-box</code> حق العناصر <code>20px</code> من <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-right") === "20px", "Your <code>blue-box</code> class should give the right of elements <code>20px</code> of <code>padding</code>.");'
  - text: يجب أن تعطي صفحتك <code>blue-box</code> الجزء السفلي من العناصر 20 <code>20px</code> من <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-bottom") === "20px", "Your <code>blue-box</code> class should give the bottom of elements <code>20px</code> of <code>padding</code>.");'
  - text: ''
    testString: 'assert($(".blue-box").css("padding-left") === "40px", "Your <code>blue-box</code> class should give the left of elements <code>40px</code> of <code>padding</code>.");'
  - text: ''
    testString: 'assert(!/padding-top|padding-right|padding-bottom|padding-left/.test(code), "You should use the clockwise notation to set the padding of <code>blue-box</code> class.");'

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
