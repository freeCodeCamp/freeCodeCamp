---
id: 587d7fb4367417b2b2512bfe
title: Add a License to Your package.json
localeTitle: إضافة ترخيص إلى الحزمة الخاصة بك
challengeType: 2
---

## Description
<section id='description'> 
حقل الترخيص هو المكان الذي تبلغ المستخدمين فيه بمشروعك المسموح لهم القيام به. 
بعض التراخيص المشتركة لمشاريع مفتوحة المصدر تشمل MIT و BSD. يعد http://choosealicense.com موردًا رائعًا إذا كنت تريد معرفة المزيد حول الترخيص الذي يمكن أن يناسب مشروعك. 
معلومات الترخيص غير مطلوبة. ستمنحك قوانين حقوق الطبع والنشر في معظم البلدان ملكية ما تنشئه افتراضيًا. ومع ذلك ، فمن الأفضل دائمًا تحديد ما يمكن للمستخدمين فعله وما لا يمكنهم فعله. 
مثال 
<code>"license": "MIT",</code> 
تعليمات 
قم بتعبئة حقل الترخيص في الحزمة. json من مشروع Glitch الخاص بك كما تجد مناسبة. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json يجب أن يكون مفتاح "ترخيص" صالح
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.license, ''"license" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
