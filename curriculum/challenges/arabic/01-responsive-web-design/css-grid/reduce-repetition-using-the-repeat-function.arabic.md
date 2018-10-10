---
id: 5a94fe3669fb03452672e45f
title: Reduce Repetition Using the repeat Function
challengeType: 0
videoUrl: ''
localeTitle: تقليل التكرار باستخدام تكرار الوظيفة
---

## Description
<section id="description"> عند استخدام <code>grid-template-columns</code> <code>grid-template-rows</code> و <code>grid-template-rows</code> لتعريف بنية الشبكة ، فإنك تقوم بإدخال قيمة لكل صف أو عمود قمت بإنشائه. لنفترض أنك تريد شبكة ذات 100 صف من نفس الارتفاع. ليس عمليًا إدراج قيم 100 بشكل فردي. لحسن الحظ ، هناك طريقة أفضل - باستخدام وظيفة <code>repeat</code> لتحديد عدد المرات التي تريد تكرار عمودك أو صفك ، متبوعة بفاصلة والقيمة التي تريد تكرارها. في ما يلي مثال على ذلك من شأنه إنشاء شبكة الصف 100 ، كل صف بطول 50 بكسل. <blockquote style=";text-align:right;direction:rtl"> صفوف قالب الشبكة: كرر (100 ، 50 بكسل) ؛ </blockquote> يمكنك أيضًا تكرار عدة قيم باستخدام وظيفة التكرار ، وإدراج الدالة بين القيم الأخرى عند تعريف بنية الشبكة. إليك ما أعنيه: <blockquote style=";text-align:right;direction:rtl"> أعمدة قالب الشبكة: كرر (2 ، 1fr 50px) 20 بكسل ؛ </blockquote> هذا يترجم إلى: <blockquote style=";text-align:right;direction:rtl"> أعمدة قالب الشبكة: 1fr 50px 1fr 50px 20px؛ </blockquote> <strong>ملحوظة</strong> <br> <code>1fr 50px</code> يتكرر مرتين يليه <code>1fr 50px</code> . </section>

## Instructions
<section id="instructions"> استخدم <code>repeat</code> لإزالة التكرار من خاصية <code>grid-template-columns</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن <code>container</code> فئة <code>container</code> <code>grid-template-columns</code> خاصية <code>grid-template-columns</code> التي تم تعيينها لتكرار 3 أعمدة بعرض <code>1fr</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property that is set to repeat 3 columns with the width of <code>1fr</code>.");'

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
    /* change the code below this line */

    grid-template-columns: 1fr 1fr 1fr;

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

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
