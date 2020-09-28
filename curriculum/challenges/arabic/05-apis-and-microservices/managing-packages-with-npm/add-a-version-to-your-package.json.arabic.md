---
id: 587d7fb4367417b2b2512bff
title: Add a Version to Your package.json
localeTitle: أضف إصدارًا إلى الحزمة الخاصة بك. json
challengeType: 2
---

## Description
<section id='description'> 
الإصدار مع اسم واحد من الحقول المطلوبة في package.json. يصف هذا الحقل الإصدار الحالي لمشروعك. 
مثال 
<code>"version": "1.2",</code> 
Instruction 
بإضافة نسخة إلى package.json في مشروع Glitch الخاص بك. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json يجب أن يكون لديك مفتاح "إصدار" صالح
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.version, ''"version" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
