---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: ''
guideUrl: 'https://arabic.freecodecamp.org/guide/certificates/add-alt-text-to-an-image-for-accessibility'
localeTitle: إضافة بديل نص إلى الصور لإعاقة الوصول بصريًا
---

## Description
<section id="description"> من المحتمل أنك رأيت سمة <code>alt</code> على علامة <code>img</code> في تحديات أخرى. يصف النص <code>Alt</code> محتوى الصورة ويوفر بديلًا نصيًا. يساعد ذلك في حالة فشل تحميل أو عدم تمكن المستخدم من رؤية الصورة. ويستخدم أيضًا من قِبل محركات البحث لفهم ما تحتويه الصورة لتضمينها في نتائج البحث. في ما يلي مثال: <code>&lt;img src=&quot;importantLogo.jpeg&quot; alt=&quot;Company logo&quot;&gt;</code> يعتمد الأشخاص الذين يعانون من إعاقات بصرية على قارئي الشاشة لتحويل محتوى الويب إلى واجهة صوتية. لن يحصلوا على المعلومات إذا تم تقديمها فقط بصريًا. بالنسبة للصور ، يمكن لقارئي الشاشة الوصول إلى سمة <code>alt</code> وقراءة محتوياتها لتقديم المعلومات الأساسية. النص <code>alt</code> الجيد قصير ولكن وصفي ، ويقصد به أن ينقل بإيجاز معنى الصورة. يجب عليك دائمًا تضمين سمة <code>alt</code> على صورتك. وفقًا لمواصفات HTML5 ، يعتبر هذا الآن إلزاميًا. </section>

## Instructions
<section id="instructions"> كامبر كات هو عبارة عن نينجا مشفر ونينجا فعليين ، ويقوم ببناء موقع ويب لتبادل معرفته. تظهر صورة الملف الشخصي التي يريد استخدامها مهاراته ، ويجب أن تحظى بتقدير جميع زائري الموقع. إضافة سمة <code>alt</code> في علامة <code>img</code> ، التي تشرح كامبر كات تقوم بالكاراتيه. (لا ترتبط الصورة <code>src</code> بملف فعلي ، لذلك يجب أن ترى النص <code>alt</code> في الشاشة.) </section>

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
