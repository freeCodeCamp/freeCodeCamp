---
id: 5a9036d038fddaf9a66b5d32
title: Add Columns with grid-template-columns
challengeType: 0
videoUrl: ''
localeTitle: إضافة أعمدة بأعمدة قالب الشبكة
---

## Description
<section id="description"> ببساطة إنشاء عنصر الشبكة لا يجعلك بعيدا جدا. تحتاج إلى تحديد هيكل الشبكة كذلك. لإضافة بعض الأعمدة إلى الشبكة ، استخدم الخاصية <code>grid-template-columns</code> الشبكة على حاوية شبكة كما هو موضح أدناه: <blockquote style=";text-align:right;direction:rtl"> .حاوية { <br> عرض: الشبكة ؛ <br> أعمدة قالب الشبكة: 50 بكسل 50 بكسل ؛ <br> } </blockquote> سيعطي هذا شبكتك عمودين بعرض 50 بكسل لكل منهما. يشير عدد المعلمات إلى خاصية <code>grid-template-columns</code> إلى عدد الأعمدة في الشبكة ، وتشير قيمة كل معلمة إلى عرض كل عمود. </section>

## Instructions
<section id="instructions"> امنح حاوية الشبكة ثلاثة أعمدة عرضها <code>100px</code> لكل منها. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن <code>container</code> فئة <code>container</code> <code>grid-template-columns</code> خاصية <code>grid-template-columns</code> بثلاث وحدات <code>100px</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?100px\s*?100px\s*?100px\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property with three units of <code>100px</code>.");'

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
    width: 100%;
    background: LightGray;
    display: grid;
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
