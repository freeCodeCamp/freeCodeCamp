---
id: 587d7fb0367417b2b2512bed
title: Meet the Node console
localeTitle: تعرف على وحدة التحكم في العقدة
challengeType: 2
---

## Description
<section id='description'> 
أثناء عملية التطوير ، من المهم أن تكون قادراً على التحقق من ما يجري في التعليمات البرمجية. العقدة هي مجرد بيئة جافا سكريبت. مثل جافا سكريبت من جانب العميل ، يمكنك استخدام وحدة التحكم لعرض معلومات تصحيح الأخطاء المفيدة. على جهازك المحلي ، سترى إخراج وحدة التحكم في جهاز طرفي. على خلل ، يمكنك فتح السجلات في الجزء السفلي من الشاشة. يمكنك تبديل لوحة السجل بزر "سجلات" الزر (أعلى اليسار ، تحت اسم التطبيق). 
للبدء ، ما عليك سوى طباعة "Hello World" الكلاسيكية في وحدة التحكم. نوصي بإبقاء لوحة السجلات مفتوحة أثناء العمل على مواجهة هذه التحديات. قراءة السجلات يمكنك أن تكون على علم بطبيعة الأخطاء التي قد تحدث. 
</section>

## Instructions
<section id='instructions'> 
قم بتعديل الملف <code>myApp.js</code> لتسجيل "Hello World" إلى وحدة التحكم. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>"Hello World"</code> في وحدة التحكم
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/hello-console'').then(data => { assert.isTrue(data.passed, ''"Hello World" is not in the server console''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
