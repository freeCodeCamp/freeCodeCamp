---
id: 587d78a3367417b2b2512ad1
title: Learn about Complementary Colors
challengeType: 0
videoUrl: ''
localeTitle: تعرف على الألوان التكميلية
---

## Description
<section id="description"> تعتبر نظرية اللون وتأثيرها على التصميم موضوعًا عميقًا ولا تغطي سوى التحديات الأساسية فقط. على موقع الويب ، يمكن للون جذب الانتباه إلى المحتوى أو إثارة المشاعر أو خلق تناغم بصري. يمكن أن يؤدي استخدام مجموعات مختلفة من الألوان إلى تغيير مظهر موقع الويب ، ويمكن أن يوضع الكثير من التفكير في اختيار لوحة ألوان تعمل مع المحتوى الخاص بك. تعد عجلة الألوان أداة مفيدة لتصور كيف ترتبط الألوان ببعضها - إنها دائرة حيث تكون درجات متشابهة من الجيران والألوان المختلفة متباعدة. عندما يكون هناك لونان في مواجهة بعضهما بعضا على عجلة القيادة ، يطلق عليهما ألوان تكميلية. لديهم ميزة أنه إذا تم دمجها ، فإنها &quot;تلغي&quot; بعضها البعض وتخلق لونًا رماديًا. ومع ذلك ، عند وضعها جنبًا إلى جنب ، تظهر هذه الألوان أكثر حيوية وتنتج تباينًا بصريًا قويًا. بعض الأمثلة من الألوان التكميلية مع رموزها السداسية: <blockquote style=";text-align:right;direction:rtl"> الأحمر (# FF0000) والأزرق (# 00FFFF) <br> أخضر (# 00FF00) وأرجواني (# FF00FF) <br> الأزرق (# 0000FF) والأصفر (# FFFF00) </blockquote> يختلف هذا عن نموذج ألوان RYB القديم الذي تم تدريسه في المدرسة ، والذي يحتوي على ألوان أساسية ومتكاملة مختلفة. تستخدم نظرية الألوان الحديثة نموذج RGB المضاف (مثل على شاشة الكمبيوتر) والطراز CMY (K) subtractive (كما في الطباعة). اقرأ <a href="https://en.wikipedia.org/wiki/Color_model" target="_blank">هنا</a> لمزيد من المعلومات حول هذا الموضوع المعقد. هناك العديد من أدوات اختيار الألوان المتاحة عبر الإنترنت التي لديها خيار للعثور على مجموعة مكملة للون. <strong>ملحوظة</strong> <br> بالنسبة إلى جميع تحديات الألوان: يمكن أن يكون استخدام اللون طريقة فعالة لإضافة الاهتمام المرئي إلى الصفحة. ومع ذلك ، لا ينبغي استخدام اللون وحده باعتباره الطريقة الوحيدة لنقل المعلومات المهمة لأن المستخدمين الذين يعانون من إعاقات بصرية قد لا يفهمون هذا المحتوى. ستتم تغطية هذه المشكلة بمزيد من التفصيل في تحديات إمكانية الوصول التطبيقية. </section>

## Instructions
<section id="instructions"> قم بتغيير خاصية <code>background-color</code> للفئات <code>blue</code> <code>yellow</code> إلى ألوانها الخاصة. لاحظ كيف تبدو الألوان مختلفة إلى جانب بعضها البعض مقارنة باللون الأبيض. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: و <code>div</code> عنصر مع الطبقة <code>blue</code> يجب أن يكون <code>background-color</code> من اللون الأزرق.
    testString: 'assert($(".blue").css("background-color") == "rgb(0, 0, 255)", "The <code>div</code> element with class <code>blue</code> should have a <code>background-color</code> of blue.");'
  - text: يجب أن يكون لعنصر <code>div</code> <code>yellow</code> <code>background-color</code> أصفر.
    testString: 'assert($(".yellow").css("background-color") == "rgb(255, 255, 0)", "The <code>div</code> element with class <code>yellow</code> should have a <code>background-color</code> of yellow.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: #000000;
  }
  .yellow {
    background-color: #000000;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
