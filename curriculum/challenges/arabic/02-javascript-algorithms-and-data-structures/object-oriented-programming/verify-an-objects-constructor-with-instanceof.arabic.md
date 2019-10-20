---
id: 587d7dae367417b2b2512b7a
title: Verify an Object's Constructor with instanceof
challengeType: 1
videoUrl: ''
localeTitle: تحقق من Constructor كائن مع instanceof
---

## Description
<section id="description"> في أي وقت ، تقوم دالة منشئ بإنشاء كائن جديد ، ويقال أن هذا الكائن هو <code>instance</code> لمنشئه. تقدم JavaScript طريقة ملائمة للتحقق من ذلك باستخدام عامل التشغيل <code>instanceof</code> . يسمح لك <code>instanceof</code> بمقارنة كائن بمُنشئ ، وإرجاع <code>true</code> أو <code>false</code> استنادًا إلى ما إذا كان قد تم إنشاء ذلك الكائن باستخدام المُنشئ أم لا. إليك مثال على ذلك: <blockquote style=";text-align:right;direction:rtl"> اسمحوا بيرد = وظيفة (اسم ولون) { <br> this.name = name؛ <br> this.color = لون؛ <br> this.numLegs = 2 ، <br> } <br><br> دعونا الغراب = الطيور الجديدة (&quot;الكسيس&quot; ، &quot;الأسود&quot;) ؛ <br><br> غراب مثيله // =&gt; صحيح </blockquote> إذا تم إنشاء كائن دون استخدام منشئ، <code>instanceof</code> سوف تحقق من أنه لا مثيل لهذا المنشئ: <blockquote style=";text-align:right;direction:rtl"> دع الكناري = { <br> الاسم: &quot;ميلدريد&quot; ، <br> اللون الأصفر&quot;، <br> numLegs: 2 <br> }؛ <br><br> طائر كنارى // =&gt; خطأ </blockquote></section>

## Instructions
<section id="instructions"> قم بإنشاء مثيل جديد لمنشئ <code>House</code> ، واصفًا به <code>myHouse</code> واجتاز عددًا من غرف النوم. ثم ، استخدم <code>instanceof</code> للتحقق من أنه مثيل <code>House</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي <code>myHouse</code> على سمة <code>numBedrooms</code> مضبوطة على رقم.
    testString: 'assert(typeof myHouse.numBedrooms === "number", "<code>myHouse</code> should have a <code>numBedrooms</code> attribute set to a number.");'
  - text: تأكد من التحقق من أن <code>myHouse</code> هو مثال على <code>House</code> باستخدام عامل التشغيل <code>instanceof</code> .
    testString: 'assert(/myHouse\s*instanceof\s*House/.test(code), "Be sure to verify that <code>myHouse</code> is an instance of <code>House</code> using the <code>instanceof</code> operator.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

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
