---
id: 587d7fb8367417b2b2512c11
title: Delete Many Documents with model.remove()
localeTitle: حذف العديد من المستندات باستخدام model.remove ()
challengeType: 2
---

## Description
<section id='description'> 
Model.remove () مفيد لحذف جميع الوثائق التي تطابق معايير محددة. احذف جميع الأشخاص الذين يكون اسمهم "Mary" ، باستخدام Model.remove (). قم بنقله إلى مستند استعلام باستخدام مجموعة حقول "الاسم" ، وبالطبع رد اتصال. 
ملاحظة: لا يقوم Model.remove () بإرجاع المستند المحذوف ، ولكن كائن JSON يحتوي على نتيجة العملية وعدد العناصر المتأثرة. لا تنسَ تمريرها إلى معاودة الاتصال () ، لأننا نستخدمها في الاختبارات. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن ينجح حذف العديد من العناصر في وقت واحد
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/remove-many-people'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''Mary'', age: 16, favoriteFoods: [''lollipop'']}, {name: ''Mary'', age: 21, favoriteFoods: [''steak'']}])}).then(data => { assert.isTrue(!!data.ok, ''The mongo stats are not what expected''); assert.equal(data.n, 2, ''The number of items affected is not what expected''); assert.equal(data.count, 0, ''the db items count is not what expected''); }, xhr => { throw new Error(xhr.responseText); })'

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
