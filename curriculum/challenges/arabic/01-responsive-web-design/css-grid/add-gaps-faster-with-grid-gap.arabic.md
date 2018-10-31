---
id: 5a9036ee38fddaf9a66b5d37
title: Add Gaps Faster with grid-gap
challengeType: 0
videoUrl: ''
localeTitle: أضف فجوات أسرع مع الفجوة الشبكية
---

## Description
<section id="description"> <code>grid-gap</code> هي خاصية مختزلة <code>grid-row-gap</code> <code>grid-column-gap</code> ، <code>grid-row-gap</code> <code>grid-column-gap</code> من التحديين السابقتين الأكثر ملاءمة للاستخدام. إذا كانت قيمة <code>grid-gap</code> لها قيمة واحدة ، فسوف تنشئ فجوة بين جميع الصفوف والأعمدة. ومع ذلك ، إذا كان هناك قيمتين ، فسيستخدم الأول منها لتعيين الفجوة بين الصفوف والقيمة الثانية للأعمدة. </section>

## Instructions
<section id="instructions"> استخدم <code>grid-gap</code> لإدخال فجوة 10 <code>10px</code> بين الصفوف والفجوة 20 <code>20px</code> بين الأعمدة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن <code>container</code> فئة <code>container</code> على خاصية <code>grid-gap</code> تقدم فجوة 10 <code>10px</code> بين الصفوف والفجوة 20 <code>20px</code> بين الأعمدة.
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-gap</code> property that introduces <code>10px</code> gap between the rows and <code>20px</code> gap between the columns.");'

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
