---
id: 587d7fb7367417b2b2512c0c
title: Use model.findOne() to Return a Single Matching Document from Your Database
localeTitle: استخدم model.findOne () لإرجاع مستند مطابقة مفردة من قاعدة البيانات الخاصة بك
challengeType: 2
---

## Description
<section id='description'> 
يتصرف model.findOne () مثل .find () ، ولكنه يقوم بإرجاع مستند واحد فقط (وليس صفيف) ، حتى إذا كان هناك عدة عناصر. من المفيد بشكل خاص عند البحث عن طريق الخصائص التي أعلنت أنها فريدة من نوعها. البحث عن شخص واحد فقط لديه طعام معين في المفضلة لها ، وذلك باستخدام Model.findOne () -> شخص. استخدم الوسيطة الدالة الغذائية كمفتاح بحث. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: العثور على عنصر واحد يجب أن تنجح
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-one-by-food'', {name: ''Gary'', age: 46, favoriteFoods: [''chicken salad'']}).then(data => { assert.equal(data.name, ''Gary'', ''item.name is not what expected''); assert.deepEqual(data.favoriteFoods, [''chicken salad''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
