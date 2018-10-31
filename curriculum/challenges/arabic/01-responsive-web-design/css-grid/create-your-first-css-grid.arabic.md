---
id: 5a858944d96184f06fd60d61
title: Create Your First CSS Grid
challengeType: 0
videoUrl: ''
localeTitle: إنشاء أول شبكة CSS
---

## Description
<section id="description"> قم بتحويل أي عنصر HTML إلى حاوية شبكة عن طريق تعيين خاصية <code>display</code> الخاصة بها إلى <code>grid</code> . يمنحك ذلك القدرة على استخدام جميع الخصائص الأخرى المرتبطة بـ CSS Grid. <strong>ملحوظة</strong> <br> في CSS Grid ، تتم الإشارة إلى العنصر الرئيسي على أنه <dfn>الحاوية</dfn> ويطلق على أطفاله <dfn>العناصر</dfn> . </section>

## Instructions
<section id="instructions"> تغيير عرض div مع فئة <code>container</code> إلى <code>grid</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون لفئة <code>container</code> خاصية <code>display</code> بقيمة <code>grid</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>display</code> property with a value of <code>grid</code>.");'

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
