---
id: 587d7dad367417b2b2512b75
title: Create a Method on an Object
challengeType: 1
videoUrl: ''
localeTitle: إنشاء طريقة على كائن
---

## Description
<section id="description"> يمكن أن تحتوي <code>Objects</code> على نوع خاص من <code>property</code> ، تسمى <code>method</code> . <code>Methods</code> هي <code>properties</code> التي هي وظائف. هذا يضيف سلوك مختلف إلى <code>object</code> . إليك مثال <code>duck</code> مع طريقة: <blockquote style=";text-align:right;direction:rtl"> دع بطة = { <br> الاسم: &quot;Aflac&quot; ، <br> numLegs: 2 ، <br> sayName: function () {return &quot;اسم هذه البط هو&quot; + duck.name + &quot;.&quot;؛} <br> }؛ <br> duck.sayName ()؛ <br> // Returns &quot;اسم هذه البط هو Aflac&quot;. </blockquote> يقوم المثال <code>sayName</code> <code>method</code> <code>sayName</code> ، وهي عبارة تقوم بارجاع جملة تعطي اسم <code>duck</code> . لاحظ أن <code>method</code> الوصول إلى خاصية <code>name</code> في العبارة الإرجاع باستخدام <code>duck.name</code> . سيغطي التحدي التالي طريقة أخرى للقيام بذلك. </section>

## Instructions
<section id="instructions"> باستخدام <code>object</code> <code>dog</code> ، أعطه طريقة تسمى <code>sayLegs</code> . يجب أن ترجع الطريقة الجملة &quot;يحتوي هذا الكلب على 4 أرجل&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>dog.sayLegs()</code> دالة.
    testString: 'assert(typeof(dog.sayLegs) === "function", "<code>dog.sayLegs()</code> should be a function.");'
  - text: يجب أن يعيد <code>dog.sayLegs()</code> السلسلة المعطاة - لاحظ أن علامات الترقيم ومسألة التباعد.
    testString: 'assert(dog.sayLegs() === "This dog has 4 legs.", "<code>dog.sayLegs()</code> should return the given string - note that punctuation and spacing matter.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
