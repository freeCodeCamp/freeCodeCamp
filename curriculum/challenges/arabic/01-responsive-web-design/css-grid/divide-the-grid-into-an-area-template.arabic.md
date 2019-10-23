---
id: 5a94fe0569fb03452672e45c
title: Divide the Grid Into an Area Template
challengeType: 0
videoUrl: ''
localeTitle: تقسيم الشبكة في قالب المنطقة
---

## Description
<section id="description"> يمكنك تجميع خلايا الشبكة الخاصة بك معًا في <dfn>منطقة</dfn> وإعطاء المنطقة اسمًا مخصصًا. القيام بذلك عن طريق استخدام <code>grid-template-areas</code> على الحاوية مثل هذا: <blockquote style=";text-align:right;direction:rtl"> شبكة قالب والمناطق: <br> &quot;رأس الصفحة الرأسية&quot; <br> &quot;advert content content&quot; <br> &quot;footer footer footer&quot; ؛ </blockquote> يدمج الرمز أعلاه الخلايا الثلاث العليا معًا في منطقة مسماة <code>header</code> ، والخلايا الثلاثة السفلية في منطقة <code>footer</code> ، ويجعل منطقتين في الصف الأوسط ؛ <code>advert</code> <code>content</code> . <strong>ملحوظة</strong> <br> تمثل كل كلمة في التعليمة البرمجية خلية ويمثل كل زوج من علامات الاقتباس صفًا. بالإضافة إلى التصنيفات المخصصة ، يمكنك استخدام نقطة ( <code>.</code> ) لتعيين خلية فارغة في الشبكة. </section>

## Instructions
<section id="instructions"> ضع قالب المنطقة بحيث تصبح الخلية المسمى <code>advert</code> عبارة عن خلية فارغة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?.\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-areas</code> propertiy similar to the preview but has <code>.</code> instead of the <code>advert</code> area.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    /* change code below this line */

    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
    /* change code above this line */
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
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
