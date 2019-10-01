---
id: bd7123c8c441eddfaeb5bdef
title: Say Hello to HTML Elements
challengeType: 0
videoUrl: ''
localeTitle: 'قل مرحبا لعناصر HTML'
---

## الوصف
<section id="description"> مرحبًا بك في تحديات الـ HTML  البرمجية الخاصة بـ freeCodeCamp . من خلال هذه التحديات ستتعلم تطوير الويب خطوة بخطوة. أولاً ، ستبدأ ببناء صفحة ويب بسيطة باستخدام HTML. 
يمكنك تحرير <code>الكود</code> في <code>محرر الأكواد</code> الخاص بك ، والذي تم تضمينه في صفحة الويب هذه. 
هل ترى الكود <code>&#60;h1&#62;Hello&#60;/h1&#62;</code> الموجودة في محرر الأكواد ؟ هذا هو <code>العنصر</code>  في لغة الـ HTML. 

تحتوي معظم عناصر لغة الـ HTML على <code>وسم الفتح</code> و <code>وسم الإغلاق</code>.

 تبدو علامات الفتح بالشكل التالي: 
<code>&#60;h1&#62;</code> ، 
اما علامات الإغلاق فهي كما يلي: 
<code>&#60;/h1&#62;</code>. 

الفرق الوحيد بين علامتي الفتح والإغلاق هو علامة الشَرطة المائلة للأمام بعد قوس الفتح، لوسم الإغلاق. لكل تحدٍ اختبارات يمكنك تنفيذها في أي وقت بالنقر على زر "تشغيل الاختبارات". عندما تجتاز جميع الاختبارات ، سيطلب منك إرسال الحل والانتقال للتحدي البرمجي التالي. </section>

## التعليمات
<section id="instructions"> لاجتياز في هذا التحدي، قم بتغيير نص العنصر <code>h1</code> لإخراج الجملة "Hello World". </section>

## الاختبارات
<section id='tests'>

```yml
tests:
  - text: 'العنصر <code>h1</code> يجب ان يحتوي على النص  "Hello World".'
    testString: 'assert.isTrue((/hello(\s)+world/gi).test($("h1").text()), "Your <code>h1</code> element should have the text "Hello World".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
