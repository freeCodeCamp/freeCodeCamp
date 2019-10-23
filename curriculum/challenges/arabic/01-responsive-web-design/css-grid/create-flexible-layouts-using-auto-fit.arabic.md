---
id: 5a94fe6269fb03452672e462
title: Create Flexible Layouts Using auto-fit
challengeType: 0
videoUrl: ''
localeTitle: إنشاء تصميمات مرنة باستخدام الملاءمة التلقائية
---

## Description
<section id="description"> تعمل <code>auto-fit</code> تقريبًا تمامًا <code>auto-fill</code> . والفرق الوحيد هو أنه عندما يتجاوز حجم الحاوية حجم جميع العناصر مجتمعة ، <code>auto-fill</code> تحافظ على إدخال صفوف أو أعمدة فارغة وتدفع عناصرك إلى الجانب ، بينما <code>auto-fill</code> <code>auto-fit</code> تصغير تلك الصفوف أو الأعمدة الفارغة وتمديد العناصر الخاصة بك إلى تناسب حجم الحاوية. <strong>ملحوظة</strong> <br> إذا لم تستطع الحاوية استيعاب جميع العناصر في صف واحد ، فسينقلها إلى آخر جديد. </section>

## Instructions
<section id="instructions"> في الشبكة الثانية ، استخدم <code>auto-fit</code> مع <code>repeat</code> لملء الشبكة بالأعمدة التي يبلغ عرضها <code>60px</code> <code>1fr</code> كحد أدنى والحد الأقصى <code>1fr</code> . ثم قم بتغيير حجم المعاينة لمعرفة الفرق. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container2</code> يجب أن يكون من الدرجة على <code>grid-template-columns</code> الملكية مع <code>repeat</code> و <code>auto-fit</code> من شأنها أن تملأ الشبكة مع الأعمدة التي لها الحد الأدنى من عرض <code>60px</code> والحد الأقصى من <code>1fr</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fit\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi), "<code>container2</code> class should have a <code>grid-template-columns</code> property with <code>repeat</code> and <code>auto-fit</code> that will fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>.");'

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
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    /* change the code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* change the code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
<div class="container2">
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
