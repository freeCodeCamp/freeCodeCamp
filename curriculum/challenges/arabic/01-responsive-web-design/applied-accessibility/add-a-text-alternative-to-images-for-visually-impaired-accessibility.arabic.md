---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: ''
localeTitle: إضافة نص بديل للصور لذوي ضعاف البصر
---

## Description
<section id="description"> من المحتمل أنك رأيت سمة alt على علامة img في تحديات أخرى. يصف النص Alt محتوى الصورة ويوفر بديلًا نصيًا. يساعد ذلك في حالة فشل تحميل أو عدم تمكن المستخدم من رؤية الصورة. ويستخدم أيضًا من قِبل محركات البحث لفهم ما تحتويه الصورة لتضمينها في نتائج البحث. في ما يلي مثال: <img src="importantLogo.jpeg" alt="Company logo"> يعتمد الأشخاص الذين يعانون من إعاقات بصرية على قارئ الشاشة لتحويل محتوى الويب إلى واجهة صوتية. لن يحصلوا على المعلومات إذا تم تقديمها فقط بصريًا. بالنسبة للصور، يمكن لقارئ الشاشة الوصول إلى سمة alt وقراءة محتوياتها لتقديم المعلومات الأساسية. النص alt الجيد قصير ولكن وصفي، ويقصد به أن ينقل بإيجاز معنى الصورة. يجب عليك دائمًا تضمين سمة alt على صورتك. وفقًا لمواصفات HTML5، يعتبر هذا الآن إلزاميًا. </section>

## Instructions
<section id="instructions"> صادف أن يكون Camper Cat بمثابة مبرمج نينجا ونينجا فعلي، يقوم ببناء موقع على شبكة الإنترنت لتبادل معرفته. تظهر صورة الملف الشخصي التي يريد استخدامها مهاراته ويجب أن تكون موضع تقدير من قبل جميع زوار الموقع. أضف سمة بديلة في علامة img، والتي توضح أن Camper Cat يقوم بالكاراتيه. (لترى النص البديل في الشاشة، لا ترتبط الصورة src بملف حقيقي.)
 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي علامة <code>img</code> سمة <code>alt</code> ، ويجب ألا تكون فارغة.
    testString: 'assert($("img").attr("alt"), "Your <code>img</code> tag should have an <code>alt</code> attribute, and it should not be empty.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<img src="doingKarateWow.jpeg">

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
