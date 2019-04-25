---
id: 587d7fb9367417b2b2512c12
title: Chain Search Query Helpers to Narrow Search Results
localeTitle: سلسلة بحث مساعدة المساعدين لضيق نتائج البحث
challengeType: 2
---

## Description
<section id='description'> 
إذا لم تقم بتمرير معاودة الاتصال كالوسيطة الأخيرة إلى Model.find () (أو إلى طرق البحث الأخرى) ، فلن يتم تنفيذ الاستعلام. يمكنك تخزين الاستعلام في متغير للاستخدام في وقت لاحق. يمكّنك هذا النوع من الكائنات من إنشاء استعلام باستخدام بناء جملة تسلسل. يتم تنفيذ البحث الفعلي db عندما تقوم بسلسلة الأسلوب .exec () أخيراً. تمرير رد الاتصال الخاص بك لهذه الطريقة الأخيرة. هناك العديد من مساعدي الاستعلام ، هنا سنستخدم الأكثر شيوعًا. 
العثور على الناس الذين يحبون "بوريتو". وفرزها حسب الاسم ، وحصر النتائج في مستندين ، وإخفاء عمرهم. سلسلة .find () ، .sort () ، .limit () ، .select () ، ثم .exec (). تمرير الاستدعاء (err، data) المنفذة exec (). 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تنجح مساعدين الاستعلام تسلسل
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/query-tools'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''Pablo'', age: 26, favoriteFoods: [''burrito'', ''hot-dog'']}, {name: ''Bob'', age: 23, favoriteFoods: [''pizza'', ''nachos'']}, {name: ''Ashley'', age: 32, favoriteFoods: [''steak'', ''burrito'']}, {name: ''Mario'', age: 51, favoriteFoods: [''burrito'', ''prosciutto'']} ]) }).then(data => { assert.isArray(data, ''the response should be an Array''); assert.equal(data.length, 2, ''the data array length is not what expected''); assert.notProperty(data[0], ''age'', ''The returned first item has too many properties''); assert.equal(data[0].name, ''Ashley'', ''The returned first item name is not what expected''); assert.notProperty(data[1], ''age'', ''The returned second item has too many properties''); assert.equal(data[1].name, ''Mario'', ''The returned second item name is not what expected'');}, xhr => { throw new Error(xhr.responseText); })'

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
