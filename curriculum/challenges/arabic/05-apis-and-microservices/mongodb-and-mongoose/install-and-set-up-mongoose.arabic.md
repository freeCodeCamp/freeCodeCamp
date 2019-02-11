---
id: 587d7fb6367417b2b2512c06
title: Install and Set Up Mongoose
localeTitle: تثبيت وإعداد النمس
challengeType: 2
---

## Description
<section id='description'> 
إضافة mongodb والنمس إلى package.json المشروع. ثم تتطلب النمس. قم بتخزين URI قاعدة بيانات قاعدة البيانات الخاصة بك في ملف .env الخاص كـ MONGO_URI. الاتصال بقاعدة البيانات باستخدام mongoose.connect ( <Your URI> ) 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تكون "" mongodb "التبعية في package.json"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/file/package.json'').then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, ''mongodb''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: يجب أن يكون التبعية "النمس" في package.json "
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/file/package.json'').then(data => { var packJson = JSON.parse(data);     assert.property(packJson.dependencies, ''mongoose''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: يجب ربط "النمس" بقاعدة بيانات "
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/is-mongoose-ok'').then(data => {assert.isTrue(data.isMongooseOk, ''mongoose is not connected'')}, xhr => { throw new Error(xhr.responseText); })'

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
