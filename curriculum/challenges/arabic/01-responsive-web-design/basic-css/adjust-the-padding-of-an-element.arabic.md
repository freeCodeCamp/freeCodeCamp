---
id: bad88fee1348bd9aedf08825
title: Adjust the Padding of an Element
challengeType: 0
videoUrl: ''
localeTitle: ضبط الحشو من عنصر
---

## Description
لنضع برنامج صور القطط جانباً لبضع الوقت ولنتعلم المزيد عن تصميم الـ HTML. ربما سبق لك وان لاحظت، ان كل عناصر الـ HTML في الحقيقة هي عبارة عن مستطيلات. هناك ثلاث خصائص مهمة تتحكم في المساحة المحيطة بكل عنصر: <code>padding</code>، <code>margin</code> و <code>border</code>. هنا تستطيع أن ترى كيف أن الصندوق الأزرق والصندوق الأحمر داخل الصندوق الأصفر. لاحظ كيف أن الصندوق الأحمر لديه <code>padding</code> أكثر من الصندوق الأزرق.عندما تزيد من <code>padding</code> الصندوق الأزرق، تزداد المسافة (<code>padding</code>) بين النص والإطار المحيط به.

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تعطي فئة <code>blue-box</code> عناصر <code>20px</code> من <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-top") === "20px", "Your <code>blue-box</code> class should give elements <code>20px</code> of <code>padding</code>.");'

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
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
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
