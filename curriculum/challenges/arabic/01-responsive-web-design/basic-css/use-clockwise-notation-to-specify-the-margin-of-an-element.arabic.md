---
id: bad87fee1348bd9afdf08726
title: Use Clockwise Notation to Specify the Margin of an Element
challengeType: 0
videoUrl: ''
localeTitle: استخدم "Clockwise Notation" لتحديد "هامش العنصر"
---

## Description
<section id="description"> دعونا نحاول مرة أخرى ، ولكن مع <code>margin</code> هذه المرة. بدلا من تحديد عنصر في <code>margin-top</code> ، <code>margin-right</code> ، <code>margin-bottom</code> ، و <code>margin-left</code> خصائص فردية، يمكنك تحديد كل منهم في سطر واحد، مثل هذا: <code>margin: 10px 20px 10px 20px;</code> تعمل هذه القيم الأربعة مثل الساعة: أعلى ، يمين ، سفلي ، يسار ، وستنتج نفس النتيجة تمامًا مثل استخدام إرشادات الهامش الخاصة بالجانب. </section>

## Instructions
<section id="instructions"> استخدام <code>Clockwise Notation</code> لإعطاء عنصر مع <code>blue-box</code> الطبقة هامش <code>40px</code> على جانبها العلوي والأيسر، ولكن فقط <code>20px</code> على القاع والجانب الأيمن. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: لديك <code>blue-box</code> الطبقة يجب أن تعطي الجزء العلوي من عناصر <code>40px</code> من <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-top") === "40px", "Your <code>blue-box</code> class should give the top of elements <code>40px</code> of <code>margin</code>.");'
  - text: يجب أن تعطي فئة <code>blue-box</code> حق العناصر 20 <code>20px</code> من <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-right") === "20px", "Your <code>blue-box</code> class should give the right of elements <code>20px</code> of <code>margin</code>.");'
  - text: يجب أن تعطي صفحتك <code>blue-box</code> أسفل العناصر 20 <code>20px</code> من <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-bottom") === "20px", "Your <code>blue-box</code> class should give the bottom of elements <code>20px</code> of <code>margin</code>.");'
  - text: يجب أن تعطيك فئة <code>blue-box</code> يمين العناصر <code>40px</code> من <code>margin</code> .
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
