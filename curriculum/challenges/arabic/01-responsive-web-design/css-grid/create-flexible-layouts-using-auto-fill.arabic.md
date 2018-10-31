---
id: 5a94fe5469fb03452672e461
title: Create Flexible Layouts Using auto-fill
challengeType: 0
videoUrl: ''
localeTitle: إنشاء تنسيقات مرنة باستخدام الملء التلقائي
---

## Description
<section id="description"> تأتي وظيفة التكرار مع خيار يطلق عليه <dfn>الملء التلقائي</dfn> . يسمح لك هذا بإدراج عدد من الصفوف أو الأعمدة ذات الحجم المرغوب فيه تلقائيًا قدر الإمكان اعتمادًا على حجم الحاوية. يمكنك إنشاء تخطيطات مرنة عند الجمع بين <code>auto-fill</code> مع <code>minmax</code> . في المعاينة ، يتم ضبط <code>grid-template-columns</code> على <blockquote style=";text-align:right;direction:rtl"> تكرار (الملء التلقائي ، minmax (60px ، 1fr)) ؛ </blockquote> عندما يتغير حجم الحاوية ، يستمر هذا الإعداد في إدخال أعمدة 60 بكسل ويطيلها حتى تتمكن من إدراج عمود آخر. <strong>ملحوظة</strong> <br> إذا لم تستطع الحاوية استيعاب جميع العناصر في صف واحد ، فسينقلها إلى آخر جديد. </section>

## Instructions
<section id="instructions"> في الشبكة الأولى ، استخدم <code>auto-fill</code> مع <code>repeat</code> لملء الشبكة بالأعمدة التي يبلغ عرضها <code>60px</code> <code>1fr</code> كحد أدنى والحد الأقصى <code>1fr</code> . ثم قم بتغيير حجم المعاينة لتشاهد الملء التلقائي للعمل. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن <code>container</code> فئة <code>container</code> <code>grid-template-columns</code> خاصية <code>grid-template-columns</code> <code>repeat</code> <code>auto-fill</code> التي تملأ الشبكة بأعمدة ذات عرض <code>60px</code> <code>1fr</code> كحد أدنى والحد الأقصى <code>1fr</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fill\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property with <code>repeat</code> and <code>auto-fill</code> that will fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>.");'

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
    /* change the code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* change the code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
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
