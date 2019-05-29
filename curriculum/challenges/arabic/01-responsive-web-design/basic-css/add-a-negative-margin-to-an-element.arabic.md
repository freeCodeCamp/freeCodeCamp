---
id: bad87fee1348bd9aedf08823
title: Add a Negative Margin to an Element
challengeType: 0
videoUrl: ''
localeTitle: أضف هامشًا سلبيًا إلى عنصر
---

## Description
<section id="description"> عنصر في <code>margin</code> يتحكم في مقدار المسافة بين عنصر في <code>border</code> والعناصر المحيطة بها. إذا قمت بتعيين <code>margin</code> العنصر إلى قيمة سالبة ، فسيزداد حجم العنصر. </section>

## Instructions
<section id="instructions"> حاول تعيين <code>margin</code> إلى قيمة سالبة مثل القيمة للمربع الأحمر. غيّر <code>margin</code> المربع الأزرق إلى <code>-15px</code> ، حتى يملأ العرض الأفقي الكامل للمربع الأصفر حوله. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تعطي فئة <code>blue-box</code> عناصر - <code>-15px</code> من <code>margin</code> .
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
