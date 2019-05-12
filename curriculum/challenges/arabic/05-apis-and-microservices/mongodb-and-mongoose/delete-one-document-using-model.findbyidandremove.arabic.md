---
id: 587d7fb8367417b2b2512c10
title: Delete One Document Using model.findByIdAndRemove
localeTitle: حذف مستند واحد باستخدام model.findByIdAndRemove
challengeType: 2
---

## Description
<section id='description'> 
احذف شخصًا واحدًا من _id. يجب استخدام أحد الأساليب findByIdAndRemove () أو findOneAndRemove (). هم مثل أساليب التحديث السابقة. يمرر المستند الذي تمت إزالته إلى cb. كالعادة ، استخدم الدالة argument personId كمفتاح بحث. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن ينجح حذف عنصر
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/remove-one-person'', {name:''Jason Bourne'', age: 36, favoriteFoods:[''apples'']}).then(data => { assert.equal(data.name, ''Jason Bourne'', ''item.name is not what expected''); assert.equal(data.age, 36, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''apples''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0); assert.equal(data.count, 0, ''the db items count is not what expected''); }, xhr => { throw new Error(xhr.responseText); })'

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
