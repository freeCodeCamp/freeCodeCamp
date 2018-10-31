---
id: 5a94fe1369fb03452672e45d
title: Place Items in Grid Areas Using the grid-area Property
challengeType: 0
videoUrl: ''
localeTitle: ضع العناصر في مناطق الشبكة باستخدام الخاصية area-area
---

## Description
<section id="description"> بعد إنشاء قالب المناطق لحاوية الشبكة الخاصة بك ، كما هو موضح في التحدي السابق ، يمكنك وضع عنصر في منطقة مخصصة من خلال الرجوع إلى الاسم الذي قدمته. للقيام بذلك ، يمكنك استخدام الخاصية <code>grid-area</code> على عنصر مثل هذا: <blockquote style=";text-align:right;direction:rtl"> .item1 {grid-area: header؛ } </blockquote> هذا يتيح الشبكة معرفة أنك تريد الفئة <code>item1</code> للانتقال في المنطقة المسمى <code>header</code> . في هذه الحالة ، سيستخدم العنصر الصف العلوي بأكمله لأن هذا الصف بأكمله يدعى منطقة الرأس. </section>

## Instructions
<section id="instructions"> ضع عنصرًا مع فئة <code>item5</code> في منطقة <code>footer</code> باستخدام خاصية <code>grid-area</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون فئة <code>item5</code> خاصية <code>grid-area</code> له قيمة <code>footer</code> .
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi), "<code>item5</code> class should have a <code>grid-area</code> property that has the value of <code>footer</code>.");'

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

  .item5 {
    background: PaleGreen;
    /* add your code below this line */


    /* add your code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
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
