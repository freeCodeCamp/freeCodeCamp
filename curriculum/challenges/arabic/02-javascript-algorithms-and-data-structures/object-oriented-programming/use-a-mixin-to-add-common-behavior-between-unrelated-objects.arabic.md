---
id: 587d7db2367417b2b2512b89
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
challengeType: 1
videoUrl: ''
localeTitle: استخدم Mixin لإضافة سلوك شائع بين الكائنات غير المرتبطة
---

## Description
<section id="description"> كما رأيت ، يتم تقاسم السلوك من خلال الوراثة. ومع ذلك ، هناك حالات عندما لا يكون الوراثة هو الحل الأفضل. لا يعمل الميراث بشكل جيد مع الكائنات غير المرتبطة مثل <code>Bird</code> و <code>Airplane</code> . يستطيع كلاهما الطيران ، لكن <code>Bird</code> ليست نوعًا من <code>Airplane</code> والعكس صحيح. بالنسبة للكائنات غير المرتبطة ، من الأفضل استخدام <code>mixins</code> . يسمح <code>mixin</code> للكائنات الأخرى باستخدام مجموعة من الوظائف. <blockquote style=";text-align:right;direction:rtl"> let flyMixin = function (obj) { <br> obj.fly = function () { <br> console.log (&quot;الطائر ، wooosh!&quot;) ؛ <br> } <br> }؛ </blockquote> يأخذ <code>flyMixin</code> أي كائن ويعطيه طريقة <code>fly</code> . <blockquote style=";text-align:right;direction:rtl"> دع الطائر = { <br> الاسم: &quot;دونالد&quot; ، <br> numLegs: 2 <br> }؛ <br><br> واسمحوا الطائرة = { <br> model: &quot;777&quot; ، <br> num بالمرشحين: 524 <br> }؛ <br><br> flyMixin (الطيور)؛ <br> flyMixin (طائرة)؛ </blockquote> هنا يتم تمرير <code>bird</code> <code>plane</code> في <code>flyMixin</code> ، والذي يقوم بتعيين وظيفة <code>fly</code> لكل كائن. الآن يمكن <code>bird</code> <code>plane</code> الطيران: <blockquote style=";text-align:right;direction:rtl"> طائر يطير()؛ // prints &quot;Flying، wooosh!&quot; <br> plane.fly ()؛ // prints &quot;Flying، wooosh!&quot; </blockquote> لاحظ كيف يسمح هذا <code>mixin</code> بإعادة استخدام نفس طريقة <code>fly</code> بواسطة كائنات لا علاقة لها <code>bird</code> <code>plane</code> . </section>

## Instructions
<section id="instructions"> إنشاء <code>mixin</code> المسمى <code>glideMixin</code> الذي يحدد طريقة تسمى <code>glide</code> . ثم استخدم <code>glideMixin</code> لإعطاء كل من <code>bird</code> <code>boat</code> القدرة على الانزلاق. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تقوم التعليمات البرمجية بتعريف متغير <code>glideMixin</code> الذي يعد دالة.
    testString: 'assert(typeof glideMixin === "function", "Your code should declare a <code>glideMixin</code> variable that is a function.");'
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك <code>glideMixin</code> على كائن <code>bird</code> لإعطائه طريقة <code>glide</code> .
    testString: 'assert(typeof bird.glide === "function", "Your code should use the <code>glideMixin</code> on the <code>bird</code> object to give it the <code>glide</code> method.");'
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك <code>glideMixin</code> على كائن <code>boat</code> لإعطائه طريقة <code>glide</code> .
    testString: 'assert(typeof boat.glide === "function", "Your code should use the <code>glideMixin</code> on the <code>boat</code> object to give it the <code>glide</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
