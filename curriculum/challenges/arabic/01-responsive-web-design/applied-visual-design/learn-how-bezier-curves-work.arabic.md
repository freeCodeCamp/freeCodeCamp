---
id: 587d78a9367417b2b2512ae8
title: Learn How Bezier Curves Work
challengeType: 0
videoUrl: ''
localeTitle: تعلم كيف بيجر المنحنيات العمل
---

## Description
<section id="description"> قدم التحدي الأخير خاصية عرض <code>animation-timing-function</code> وبعض الكلمات الرئيسية التي تغير سرعة الرسوم المتحركة على مدار مدتها. تقدم CSS خيارًا بخلاف الكلمات الرئيسية التي توفر تحكمًا أكثر دقة في كيفية تشغيل الرسم المتحرك ، من خلال استخدام منحنيات Bezier. في الرسوم المتحركة CSS ، يتم استخدام منحنيات Bezier مع وظيفة <code>cubic-bezier</code> . شكل المنحنى يمثل كيفية تشغيل الرسوم المتحركة. يعيش المنحنى على نظام إحداثي 1 في 1. المحور السيني لنظام الإحداثيات هذا هو مدة الرسم المتحرك (فكر فيه كمقياس زمني) ، والمحور الصادي هو التغيير في الرسوم المتحركة. تتكون الدالة <code>cubic-bezier</code> من أربع نقاط رئيسية على هذه الشبكة 1: 1: <code>p0</code> ، <code>p1</code> ، <code>p2</code> ، <code>p3</code> . يتم تعيين <code>p0</code> و <code>p3</code> لك - وهما نقطة البداية والنهاية التي تقع دائما على التوالي في الأصل (0 ، 0) و (1 ، 1). يمكنك تعيين قيم x و y للنقطتين الأخريين ، وحيث تضعها في الشبكة تملي شكل المنحنى الذي سيتبعه الرسم المتحرك. يتم ذلك في CSS عن طريق تعريف قيمتي x و y لنقاط  <code>p1</code> و <code>p2</code> في النموذج: <code>(x1, y1, x2, y2)</code> . سحب كل ذلك معا ، وهنا مثال لمنحنى بيزير في رمز CSS: <code>animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);</code> في المثال أعلاه ، تكون قيم x و y مكافئة لكل نقطة (x1 = 0.25 = y1 و x2 = 0.75 = y2) ، والتي إذا تذكرت من فئة الهندسة ، ينتج عنها خط يمتد من الأصل إلى النقطة (1) ، 1). هذا الرسم المتحرك هو تغيير خطي لعنصر خلال طول الرسم المتحرك ، وهو مماثل لاستخدام الكلمة الرئيسية <code>linear</code> . وبعبارة أخرى ، يتغير بسرعة ثابتة. </section>

## Instructions
<section id="instructions"> بالنسبة للعنصر الذي له معرف <code>ball1</code> ، قم بتغيير قيمة خاصية <code>animation-timing-function</code> من <code>linear</code> إلى قيمة الدالة المكافئة <code>cubic-bezier</code> المكافئة لها. استخدم قيم النقاط الواردة في المثال أعلاه. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تكون قيمة خاصية <code>animation-timing-function</code> للعنصر مع معرف <code>ball1</code> الخطية المكافئة.
    testString: 'assert($("#ball1").css("animation-timing-function") == "cubic-bezier(0.25, 0.25, 0.75, 0.75)", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball1</code> should be the linear-equivalent cubic-bezier function.");'
  - text: يجب ألا تتغير قيمة خاصية <code>animation-timing-function</code> للعنصر مع معرف <code>ball2</code> .
    testString: 'assert($("#ball2").css("animation-timing-function") == "ease-out", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball2</code> should not change.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: linear;
  }
  #ball2 {
    left: 56%;
    animation-timing-function: ease-out;
  }

@keyframes bounce {
  0% {
    top: 0px;
  }
  100% {
    top: 249px;
  }
}

</style>

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
