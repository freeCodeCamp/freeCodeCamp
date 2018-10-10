---
id: 587d78a6367417b2b2512ade
title: Create a More Complex Shape Using CSS and HTML
challengeType: 0
videoUrl: ''
localeTitle: إنشاء شكل أكثر تعقيدًا باستخدام CSS و HTML
---

## Description
<section id="description"> واحدة من أكثر الأشكال شعبية في العالم هي شكل القلب ، وفي هذا التحدي عليك إنشاء واحد باستخدام CSS النقي. ولكن أولا ، تحتاج إلى فهم <code>::before</code> و <code>::after</code> pseudo-elements. يتم استخدام هذه العناصر الزائفة لإضافة شيء ما قبل أو بعد عنصر محدد. في المثال التالي ، يتم استخدام العنصر <code>::before</code> pseudo-element لإضافة مستطيل إلى عنصر به <code>heart</code> الفئة: <blockquote style=";text-align:right;direction:rtl"> .heart :: before { <br> يحتوى: &quot;&quot;؛ <br> لون الخلفية: أصفر. <br> نصف قطر الحدود: 25٪ ؛ <br> الموقع: مطلقة <br> الارتفاع: 50 بكسل ؛ <br> العرض: 70 بكسل <br> أعلى: - 50 بكسل <br> اليسار: 5 بكسل ؛ <br> } </blockquote> بالنسبة لـ <code>::before</code> و <code>::after</code> pseudo-elements لتعمل بشكل صحيح ، يجب أن يكون لها خاصية <code>content</code> محددة. يتم استخدام هذه الخاصية عادةً لإضافة أشياء مثل صورة أو نص إلى العنصر المحدد. عندما يتم استخدام الـ <code>::before</code> و <code>::after</code> pseudo-elements لجعل الأشكال ، فإن خاصية <code>content</code> لا تزال مطلوبة ، لكن يتم ضبطها على سلسلة فارغة. في المثال أعلاه، عنصر مع فئة من <code>heart</code> لديه <code>::before</code> الزائفة العنصر الذي ينتج مستطيل أصفر مع <code>height</code> و <code>width</code> من 50px 70px و، على التوالي. يحتوي هذا المستطيل على زوايا دائرية نظرًا لنصف قطره 25٪ ويتم وضعه تمامًا عند 5 بكسل من <code>left</code> و 50 بكسل فوق الجزء <code>top</code> من العنصر. </section>

## Instructions
<section id="instructions"> تحويل العنصر على الشاشة إلى القلب. في <code>heart::after</code> الاختيار ، قم بتغيير <code>background-color</code> الوردي و <code>border-radius</code> إلى 50٪. بعد ذلك ، استهدف العنصر <code>heart</code> الطبقة ( <code>heart</code> فقط) واملأ خاصية <code>transform</code> . استخدم وظيفة <code>rotate()</code> مع -45 درجة. (يعمل <code>rotate()</code> بنفس الطريقة التي يعمل بها <code>skewX()</code> و <code>skewY()</code> ). وأخيراً ، في <code>heart::before</code> selector ، قم بتعيين خاصية <code>content</code> الخاصة به إلى سلسلة فارغة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن تكون الخاصية <code>background-color</code> <code>heart::after</code> محدد الوردي.'
    testString: 'assert(code.match(/\.heart::after\s*?{\s*?background-color\s*?:\s*?pink\s*?;/gi), "The <code>background-color</code> property of the <code>heart::after</code> selector should be pink.");'
  - text: 'يجب أن يكون <code>border-radius</code> الحد <code>heart::after</code> محدد 50 ٪.'
    testString: 'assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2, "The <code>border-radius</code> of the <code>heart::after</code> selector should be 50%.");'
  - text: يجب أن تستخدم خاصية <code>transform</code> لفئة <code>heart</code> الدالة <code>rotate()</code> إلى -45 درجة.
    testString: 'assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi), "The <code>transform</code> property for the <code>heart</code> class should use a <code>rotate()</code> function set to -45 degrees.");'
  - text: 'يجب أن يكون <code>content</code> <code>heart::before</code> محدد سلسلة فارغة.'
    testString: 'assert(code.match(/\.heart::before\s*?{\s*?content\s*?:\s*?("|")\1\s*?;/gi), "The <code>content</code> of the <code>heart::before</code> selector should be an empty string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
.heart {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: pink;
  height: 50px;
  width: 50px;
  transform: ;
}
.heart::after {
  background-color: blue;
  content: "";
  border-radius: 25%;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0px;
  left: 25px;
}
.heart::before {
  content: ;
  background-color: pink;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  top: -25px;
  left: 0px;
}
</style>
<div class = "heart"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
