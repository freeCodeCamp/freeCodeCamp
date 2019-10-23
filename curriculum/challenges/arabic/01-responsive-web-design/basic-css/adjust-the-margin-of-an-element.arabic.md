---
id: bad87fee1348bd9aedf08822
title: Adjust the Margin of an Element
challengeType: 0
videoUrl: ''
localeTitle: ضبط هامش عنصر
---

## Description
<section id="description"> عنصر في <code>margin</code> يتحكم في مقدار المسافة بين عنصر في <code>border</code> والعناصر المحيطة بها. هنا ، يمكننا ملاحظة أن الصندوق الأزرق والمربع الأحمر متداخلان داخل المربع الأصفر. لاحظ أن المربع الأحمر به <code>margin</code> أكبر من المربع الأزرق ، مما يجعله يبدو أصغر. عند زيادة <code>margin</code> الصندوق الأزرق ، سيزيد من المسافة بين حدوده والعناصر المحيطة به. </section>

## Instructions
<section id="instructions"> غيّر <code>margin</code> المربع الأزرق ليطابق ذلك المربع الأحمر. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
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
