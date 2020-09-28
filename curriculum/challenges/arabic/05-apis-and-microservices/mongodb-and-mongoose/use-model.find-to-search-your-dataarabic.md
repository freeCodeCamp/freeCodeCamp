---
id: 587d7fb7367417b2b2512c0b
title: Use model.find() to Search Your Database
localeTitle: استخدم model.find () للبحث في قاعدة البيانات الخاصة بك
challengeType: 2
---

## Description
<section id='description'> 
البحث عن جميع الأشخاص الذين لديهم اسم معين ، باستخدام Model.find () -> [شخص] 
في أبسط استخدام له ، يقبل Model.find () مستند استعلام (كائن JSON) كالوسيطة الأولى ، ثم رد اتصال. تقوم بإرجاع مجموعة من التطابقات. وهو يدعم مجموعة واسعة للغاية من خيارات البحث. التحقق من ذلك في المستندات. استخدم الوسيطة function personName كمفتاح البحث. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: البحث عن العناصر المقابلة لمعايير يجب أن تنجح
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-all-by-name'', {name: ''r@nd0mN4m3'', age: 24, favoriteFoods: [''pizza'']}).then(data => { assert.isArray(data, ''the response should be an Array'');  assert.equal(data[0].name, ''r@nd0mN4m3'', ''item.name is not what expected''); assert.equal(data[0].__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
