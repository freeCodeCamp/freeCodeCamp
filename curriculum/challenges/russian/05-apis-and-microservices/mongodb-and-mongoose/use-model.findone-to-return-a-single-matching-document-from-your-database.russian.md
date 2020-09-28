---
id: 587d7fb7367417b2b2512c0c
title: Use model.findOne() to Return a Single Matching Document from Your Database
challengeType: 2
forumTopicId: 301545
localeTitle: Используйте model.findOne (), чтобы вернуть один соответствующий документ из вашей базы данных
---

## Description
<section id='description'>
Model.findOne () ведет себя как .find (), но возвращает только один документ (не массив), даже если есть несколько элементов. Это особенно полезно при поиске по свойствам, которые вы объявили уникальными. Найдите только одного человека, у которого есть определенная еда в избранном, используя Model.findOne () -&gt; Person. Используйте аргумент функции food в качестве ключа поиска.
</section>

## Instructions
<section id='instructions'>
Find just one person which has a certain food in the person&apos;s favorites, using <code>Model.findOne() -> Person</code>. Use the function argument food as search key.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Find one item should succeed
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-one-by-food'', {name: ''Gary'', age: 46, favoriteFoods: [''chicken salad'']}).then(data => { assert.equal(data.name, ''Gary'', ''item.name is not what expected''); assert.deepEqual(data.favoriteFoods, [''chicken salad''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''The item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>
