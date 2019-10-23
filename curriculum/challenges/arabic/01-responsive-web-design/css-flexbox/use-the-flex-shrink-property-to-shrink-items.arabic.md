---
id: 587d78ad367417b2b2512afb
title: Use the flex-shrink Property to Shrink Items
challengeType: 0
videoUrl: ''
localeTitle: استخدم خاصية الانكماش المرن لتقليص العناصر
---

## Description
<section id="description"> حتى الآن ، تنطبق جميع الخصائص في التحديات على الحاوية المرنة (أصل العناصر المرنة). ومع ذلك ، هناك العديد من الخصائص المفيدة للعناصر المرنة. الأول هو خاصية <code>flex-shrink</code> . عندما يتم استخدامه ، فإنه يسمح بتقليص عنصر إذا كانت الحاوية المرن صغيرة جدًا. تنكمش العناصر عندما يكون عرض الحاوية الأصل أصغر من عرض جميع العناصر المرن الموجودة بها. تأخذ خاصية <code>flex-shrink</code> الأعداد كقيم. كلما زاد العدد ، كلما تنكمش أكثر مقارنة بالعناصر الأخرى في الحاوية. على سبيل المثال ، إذا كان عنصر واحد يحتوي على قيمة <code>flex-shrink</code> 1 والآخر يحتوي على قيمة <code>flex-shrink</code> 3 ، فإن القيمة التي تحتوي على 3 سوف تتقلص ثلاثة أضعاف نفس الأخرى. </section>

## Instructions
<section id="instructions"> أضف خاصية CSS <code>flex-shrink</code> إلى كل من <code>#box-1</code> و <code>#box-2</code> . Give <code>#box-1</code> a value of 1 and <code>#box-2</code> a value of 2. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن يحتوي عنصر <code>#box-1</code> على خاصية <code>flex-shrink</code> تعيينها إلى قيمة 1.'
    testString: 'assert($("#box-1").css("flex-shrink") == "1", "The <code>#box-1</code> element should have the <code>flex-shrink</code> property set to a value of 1.");'
  - text: 'يجب أن يحتوي عنصر <code>#box-2</code> على الخاصية <code>flex-shrink</code> تعيينها إلى قيمة 2.'
    testString: 'assert($("#box-2").css("flex-shrink") == "2", "The <code>#box-2</code> element should have the <code>flex-shrink</code> property set to a value of 2.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;

  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
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
