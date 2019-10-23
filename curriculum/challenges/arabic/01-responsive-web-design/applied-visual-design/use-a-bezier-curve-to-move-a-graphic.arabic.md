---
id: 587d78a9367417b2b2512ae9
title: Use a Bezier Curve to Move a Graphic
challengeType: 0
videoUrl: ''
localeTitle: استخدم منحنى Bezier لتحريك رسم
---

## Description
<section id="description"> ناقش تحدٍّ سابق الكلمة الرئيسية <code>ease-out</code> التي تصف تغييرًا في الرسوم المتحركة يُسرع أولاً ثم يتباطأ في نهاية الرسم المتحرك. على اليمين ، يظهر الفرق بين الكلمة الرئيسية <code>ease-out</code> (للعنصر الأزرق) والكلمة الرئيسية <code>linear</code> (للعنصر الأحمر). يمكن تحقيق تقدم الرسوم المتحركة مماثلة للكلمة الرئيسية <code>ease-out</code> خلال استخدام وظيفة منحنى بيزييه مكعب مخصصة. بشكل عام ، يؤدي تغيير نقاط ربط <code>p1</code> و <code>p2</code> إلى إنشاء منحنيات Bezier مختلفة ، والتي تتحكم في كيفية تقدم الحركة عبر الزمن. في ما يلي مثال لمنحنى بيزيير باستخدام قيم لتقليد نمط التخفيف: <code>animation-timing-function: cubic-bezier(0, 0, 0.58, 1);</code> تذكر أن جميع دالات <code>cubic-bezier</code> تبدأ بـ <code>p0</code> في (0، 0) وتنتهي بـ <code>p3</code> عند (1، 1). في هذا المثال ، يتحرك المنحنى بشكل أسرع خلال المحور ص (يبدأ عند 0 ، وينتقل إلى قيمة <code>p1</code> y من 0 ، ثم ينتقل إلى قيمة <code>p2</code> y 1) من تحركه عبر المحور X (0 إلى البداية ، ثم 0 لـ <code>p1</code> ، حتى 0.58 لـ <code>p2</code> ). نتيجة لذلك ، يتقدم التغيير في العنصر المتحرك بشكل أسرع من وقت الرسوم المتحركة لتلك الشريحة. باتجاه نهاية المنحنى ، تنعكس العلاقة بين التغير في قيم x و y ، حيث تتحرك قيمة y من 1 إلى 1 (بدون تغيير) ، وتتحرك قيم x من 0.58 إلى 1 ، مما يجعل تغيرات الرسوم المتحركة تقدمًا أبطأ مقارنة مدة الرسوم المتحركة. </section>

## Instructions
<section id="instructions"> لمعرفة تأثير هذا المنحنى Bezier أثناء العمل ، قم بتغيير <code>animation-timing-function</code> للعنصر ذي <code>red</code> إلى وظيفة <code>cubic-bezier</code> مع تعيين قيم x1 و y1 و x2 و y2 على التوالي إلى 0 ، 0 ، 0.58 ، 1 هذا سيجعل كلا العناصر يتقدمان من خلال الرسوم المتحركة بالمثل. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تكون قيمة خاصية <code>animation-timing-function</code> العنصر مع معرف <code>red</code> دالة <code>cubic-bezier</code> مع تعيين قيم x1 و y1 و x2 و y2 على التوالي إلى 0 ، 0 ، 0.58 ، 1.
    testString: 'assert($("#red").css("animation-timing-function") == "cubic-bezier(0, 0, 0.58, 1)", "The value of the <code>animation-timing-function</code> property of the element with the id <code>red</code> should be a <code>cubic-bezier</code> function with x1, y1, x2, y2 values set respectively to 0, 0, 0.58, 1 .");'
  - text: يجب ألا يحتوي العنصر ذو معرف <code>red</code> <code>animation-timing-function</code> خاصية <code>animation-timing-function</code> الخطية.
    testString: 'assert($("#red").css("animation-timing-function") !== "linear", "The element with the id <code>red</code> should no longer have the <code>animation-timing-function</code> property of linear.");'
  - text: يجب ألا تتغير قيمة خاصية <code>animation-timing-function</code> للعنصر ذي المعرف <code>blue</code> .
    testString: 'assert($("#blue").css("animation-timing-function") == "ease-out", "The value of the <code>animation-timing-function</code> property for the element with the id <code>blue</code> should not change.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .balls{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
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
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
