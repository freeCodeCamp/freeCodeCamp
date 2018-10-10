---
id: 587d7db2367417b2b2512b8a
title: Use Closure to Protect Properties Within an Object from Being Modified Externally
challengeType: 1
videoUrl: ''
localeTitle: استخدم Closure لحماية الخصائص داخل كائن من التعديل الخارجي
---

## Description
<section id="description"> في التحدي السابق ، كان <code>bird</code> <code>name</code> ملكية عامة. ويعتبر الجمهور لأنه يمكن الوصول إليها وتغييرها خارج تعريف <code>bird</code> . <blockquote style=";text-align:right;direction:rtl"> bird.name = &quot;Duffy&quot; ؛ </blockquote> لذلك ، يمكن لأي جزء من التعليمات البرمجية بسهولة تغيير اسم <code>bird</code> إلى أي قيمة. فكر في أشياء مثل كلمات المرور والحسابات المصرفية التي يمكن تغييرها بسهولة عن طريق أي جزء من تعليمات البرمجة لديك. يمكن أن يسبب الكثير من القضايا. إن أبسط طريقة لجعل الخصائص خاصة هي عن طريق إنشاء متغير داخل دالة المنشئ. هذا يغير نطاق هذا المتغير ليكون داخل دالة المنشئ مقابل المتاحة عالمياً. بهذه الطريقة ، يمكن الوصول إلى الخاصية وتغييرها فقط بالطرق داخل دالة المنشئ أيضًا. <blockquote style=";text-align:right;direction:rtl"> وظيفة الطيور () { <br> واسمحوا hatchedEgg = 10 ؛ // ملكية خاصة <br><br> this.getHatchedEggCount = function () {/ / / يمكن للجمهور أن يستخدم طريقة الطيور <br> العودة مع الفقس. <br> }؛ <br> } <br> دع الحبيب = طائر جديد () ؛ <br> ducky.getHatchedEggCount ()؛ // returns 10 </blockquote> هنا ، يعد <code>getHachedEggCount</code> طريقة مميزة ، لأنه يمتلك إمكانية الوصول إلى المتغير <code>hatchedEgg</code> . هذا ممكن لأنه يتم الإعلان عن <code>hatchedEgg</code> في نفس السياق مثل <code>getHachedEggCount</code> . في جافا سكريبت ، يمكن لأي وظيفة دائمًا الوصول إلى السياق الذي تم إنشاؤه فيه. وهذا ما يسمى <code>closure</code> . </section>

## Instructions
<section id="instructions"> تغيير كيفية تحديد <code>weight</code> في وظيفة <code>Bird</code> لذا فهو متغير خاص. ثم قم بإنشاء أسلوب <code>getWeight</code> بإرجاع قيمة <code>weight</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تكون خاصية <code>weight</code> متغيرًا خاصًا.
    testString: 'assert(!code.match(/this\.weight/g), "The <code>weight</code> property should be a private variable.");'
  - text: يجب أن تقوم التعليمات البرمجية بإنشاء طريقة في <code>Bird</code> تسمى <code>getWeight</code> تقوم بإرجاع <code>weight</code> .
    testString: 'assert((new Bird()).getWeight() === 15, "Your code should create a method in <code>Bird</code> called <code>getWeight</code> that returns the <code>weight</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird() {
  this.weight = 15;


}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
