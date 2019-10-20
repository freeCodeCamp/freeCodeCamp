---
id: 587d7fb7367417b2b2512c0d
title: Use model.findById() to Search Your Database By _id
localeTitle: استخدم model.findById () للبحث في قاعدة البيانات الخاصة بك بواسطة _id
challengeType: 2
---

## Description
<section id='description'> 
عند حفظ مستند ، يقوم mongodb تلقائيًا بإضافة حقل _id ، وتعيينه إلى مفتاح أبجدي رقمي فريد. البحث عن طريق _id هو عملية متكررة للغاية ، لذلك يوفر النمس طريقة مخصصة لذلك. ابحث عن الشخص (فقط !!) الذي لديه _id محدد ، باستخدام Model.findById () -> الشخص. استخدم الوسيطة function personId كمفتاح البحث. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: العثور على عنصر من خلال معرف يجب أن تنجح
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/find-by-id'').then(data => { assert.equal(data.name, ''test'', ''item.name is not what expected''); assert.equal(data.age, 0, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''none''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
