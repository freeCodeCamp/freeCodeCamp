---
id: 587d7fb7367417b2b2512c0a
title: Create Many Records with model.create()
localeTitle: إنشاء العديد من السجلات باستخدام model.create ()
challengeType: 2
---

## Description
<section id='description'> 
بعض الأحيان تحتاج إلى إنشاء العديد من الأمثلة من النماذج الخاصة بك ، على سبيل المثال عند إنشاء قاعدة بيانات بالبيانات الأولية. تأخذ مجموعة Model.create () مصفوفة من الكائنات مثل [{name: 'John'، ...}، {...}، ...] باعتبارها أول وسيطة ، وحفظها كلها في db. قم بإنشاء العديد من الأشخاص باستخدام Model.create () ، باستخدام الدالة arrayOfPeople. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن ينجح إنشاء العديد من عناصر db في وقت واحد
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/create-many-people'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''John'', age: 24, favoriteFoods: [''pizza'', ''salad'']}, {name: ''Mary'', age: 21, favoriteFoods: [''onions'', ''chicken'']}])}).then(data => { assert.isArray(data, ''the response should be an array''); assert.equal(data.length, 2, ''the response does not contain the expected number of items''); assert.equal(data[0].name, ''John'', ''The first item is not correct''); assert.equal(data[0].__v, 0, ''The first item should be not previously edited''); assert.equal(data[1].name, ''Mary'', ''The second item is not correct''); assert.equal(data[1].__v, 0, ''The second item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
