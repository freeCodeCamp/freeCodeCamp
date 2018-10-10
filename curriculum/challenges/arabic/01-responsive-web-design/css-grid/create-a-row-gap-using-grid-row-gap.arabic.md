---
id: 5a9036ee38fddaf9a66b5d36
title: Create a Row Gap using grid-row-gap
challengeType: 0
videoUrl: ''
localeTitle: إنشاء فجوة صف باستخدام الفجوة بين الشبكة
---

## Description
<section id="description"> يمكنك إضافة الفجوة بين الصفوف من الشبكة باستخدام <code>grid-row-gap</code> في بنفس الطريقة التي قمت بإضافتها وجود فجوة بين الأعمدة في التحدي السابق. </section>

## Instructions
<section id="instructions"> أنشئ فجوة للصفوف التي يبلغ طولها 5 <code>5px</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن <code>container</code> فئة <code>container</code> على خاصية <code>grid-row-gap</code> لها قيمة <code>5px</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-row-gap\s*?:\s*?5px\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-row-gap</code> property that has the value of <code>5px</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* add your code below this line */


    /* add your code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
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
