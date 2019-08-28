---
id: 587d7fb8367417b2b2512c10
title: Delete One Document Using model.findByIdAndRemove
challengeType: 2
forumTopicId: 301539
localeTitle: Удалить один документ с помощью model.findByIdAndRemove
---

## Description
<section id='description'>
Удалить одного человека по ее _id. Вы должны использовать один из методов findByIdAndRemove () или findOneAndRemove (). Они похожи на предыдущие методы обновления. Они передают удаленный документ в cb. Как обычно, используйте аргумент функции personId в качестве ключа поиска.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Deleting an item should succeed
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/remove-one-person'', {name:''Jason Bourne'', age: 36, favoriteFoods:[''apples'']}).then(data => { assert.equal(data.name, ''Jason Bourne'', ''item.name is not what expected''); assert.equal(data.age, 36, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''apples''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0); assert.equal(data.count, 0, ''the db items count is not what expected''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>
