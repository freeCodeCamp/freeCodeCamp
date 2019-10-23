---
id: 587d7fb7367417b2b2512c0d
title: Use model.findById() to Search Your Database By _id
challengeType: 2
forumTopicId: 301544
localeTitle: Используйте model.findById () для поиска в вашей базе данных по _id
---

## Description
<section id='description'>
При сохранении документа mongodb автоматически добавляет поле _id и присваивает ему уникальный буквенно-цифровой ключ. Поиск по _id является чрезвычайно частой операцией, поэтому mongoose предоставляет для нее специальный метод. Найдите (только !!) человека, имеющего данный _id, используя Model.findById () -&gt; Person. Используйте аргумент функции personId в качестве ключа поиска.
</section>

## Instructions
<section id='instructions'>
Find the (only!!) person having a given <code>_id</code>, using <code>Model.findById() -> Person</code>. Use the function argument <code>personId</code> as the search key.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Find an item by Id should succeed
    testString: getUserInput => $.get(getUserInput('url') + '/_api/find-by-id').then(data => { assert.equal(data.name, 'test', 'item.name is not what expected'); assert.equal(data.age, 0, 'item.age is not what expected'); assert.deepEqual(data.favoriteFoods, ['none'], 'item.favoriteFoods is not what expected'); assert.equal(data.__v, 0, 'The item should be not previously edited'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
