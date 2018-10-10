---
id: 587d7db2367417b2b2512b8c
title: Use an IIFE to Create a Module
challengeType: 1
videoUrl: ''
localeTitle: استخدم IIFE لإنشاء وحدة نمطية
---

## Description
<section id="description"> غالبا ما يتم استخدام <code>immediately invoked function expression</code> <code>IIFE</code> <code>immediately invoked function expression</code> ( <code>IIFE</code> ) لتجميع الوظائف ذات الصلة في كائن واحد أو <code>module</code> واحدة. على سبيل المثال ، حدد تحدٍ سابق اثنين من المزيج: <blockquote style=";text-align:right;direction:rtl"> وظيفة glideMixin (obj) { <br> obj.glide = function () { <br> console.log (&quot;الانزلاق على الماء&quot;) ؛ <br> }؛ <br> } <br> وظيفة flyMixin (obj) { <br> obj.fly = function () { <br> console.log (&quot;الطائر ، wooosh!&quot;) ؛ <br> }؛ <br> } </blockquote> يمكننا تجميع هذه <code>mixins</code> في وحدة نمطية على النحو التالي: <blockquote style=";text-align:right;direction:rtl"> let motionModule = (function () { <br> إرجاع { <br> glideMixin: function (obj) { <br> obj.glide = function () { <br> console.log (&quot;الانزلاق على الماء&quot;) ؛ <br> }؛ <br> }، <br> flyMixin: وظيفة (obj) { <br> obj.fly = function () { <br> console.log (&quot;الطائر ، wooosh!&quot;) ؛ <br> }؛ <br> } <br> } <br> }) ()؛ // يتسبب هذان القوسان في استدعاء الدالة على الفور </blockquote> لاحظ أن لديك <code>immediately invoked function expression</code> ( <code>IIFE</code> ) تقوم بإرجاع كائن <code>motionModule</code> . يحتوي هذا الكائن الذي تم إرجاعه على كافة سلوكيات <code>mixin</code> كخصائص للكائن. وتتمثل ميزة نمط <code>module</code> في إمكانية تجميع كل سلوكيات الحركة في كائن واحد يمكن استخدامه بعد ذلك بواسطة أجزاء أخرى من شفرتك. هنا مثال على ذلك استخدامه: <blockquote style=";text-align:right;direction:rtl"> motionModule.glideMixin (بطة)؛ <br> duck.glide ()؛ </blockquote></section>

## Instructions
<section id="instructions"> إنشاء <code>module</code> اسمه <code>funModule</code> التفاف اثنين من <code>mixins</code> <code>isCuteMixin</code> و <code>singMixin</code> . يجب أن ترجع <code>funModule</code> كائن. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب تعريف <code>funModule</code> وإرجاع كائن.
    testString: 'assert(typeof funModule === "object", "<code>funModule</code> should be defined and return an object.");'
  - text: <code>funModule.isCuteMixin</code> يجب الوصول إلى وظيفة.
    testString: 'assert(typeof funModule.isCuteMixin === "function", "<code>funModule.isCuteMixin</code> should access a function.");'
  - text: <code>funModule.singMixin</code> يجب الوصول إلى وظيفة.
    testString: 'assert(typeof funModule.singMixin === "function", "<code>funModule.singMixin</code> should access a function.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
