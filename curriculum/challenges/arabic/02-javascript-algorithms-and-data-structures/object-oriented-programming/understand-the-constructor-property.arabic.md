---
id: 587d7daf367417b2b2512b7e
title: Understand the Constructor Property
challengeType: 1
videoUrl: ''
localeTitle: فهم خاصية منشئ
---

## Description
<section id="description"> هناك خاصية <code>constructor</code> خاص تقع على كائنات الكائن <code>duck</code> <code>beagle</code> التي تم إنشاؤها في التحديات السابقة: <blockquote style=";text-align:right;direction:rtl"> السماح بطة = الطيور الجديدة () ؛ <br> دع بيغل = كلب جديد ()؛ <br><br> console.log (duck.constructor === Bird)؛ // يطبع صحيح <br> console.log (beagle.constructor === Dog)؛ // يطبع صحيح </blockquote> لاحظ أن الخاصية <code>constructor</code> مرجع إلى الدالة منشئ الذي أنشأ المثيل. ميزة الخاصية <code>constructor</code> أنه من الممكن التحقق من هذه الخاصية لمعرفة نوع الكائن. في ما يلي مثال لكيفية استخدام هذا: <blockquote style=";text-align:right;direction:rtl"> وظيفة joinBirdFraternity (مرشح) { <br> if (candidate.constructor === Bird) { <br> عاد صحيح <br> } آخر { <br> عودة كاذبة؛ <br> } <br> } </blockquote> <strong>ملحوظة</strong> <br> نظرًا لأنه يمكن الكتابة فوق خاصية <code>constructor</code> (والتي سيتم تغطيتها في التحديين التاليين) ، فمن الأفضل عمومًا استخدام أسلوب <code>instanceof</code> للتحقق من نوع الكائن. </section>

## Instructions
<section id="instructions"> اكتب دالة <code>joinDogFraternity</code> تأخذ معلمة <code>candidate</code> ، وتعود باستخدام خاصية <code>constructor</code> ، <code>true</code> إذا كان المرشح <code>Dog</code> ، وإلا تعيد <code>false</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب تعريف <code>joinDogFraternity</code> كدالة.
    testString: 'assert(typeof(joinDogFraternity) === "function", "<code>joinDogFraternity</code> should be defined as a function.");'
  - text: يجب أن تعود <code>joinDogFraternity</code> true إذا كان <code>candidate</code> مثالًا لـ <code>Dog</code> .
    testString: 'assert(joinDogFraternity(new Dog("")) === true, "<code>joinDogFraternity</code> should return true if<code>candidate</code> is an instance of <code>Dog</code>.");'
  - text: <code>joinDogFraternity</code> يجب استخدام الخاصية <code>constructor</code> .
    testString: 'assert(/\.constructor/.test(code) && !/instanceof/.test(code), "<code>joinDogFraternity</code> should use the <code>constructor</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {

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
