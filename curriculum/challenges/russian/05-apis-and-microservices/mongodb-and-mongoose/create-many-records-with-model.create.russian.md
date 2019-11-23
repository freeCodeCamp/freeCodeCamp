---
id: 587d7fb7367417b2b2512c0a
title: Create Many Records with model.create()
challengeType: 2
forumTopicId: 301537
localeTitle: Создать много записей с model.create()
---

## Description
<section id='description'>
Иногда вам нужно создать множество экземпляров ваших моделей, например, при заполнении базы данных исходными данными. Model.create() принимает массив объектов, таких как [{name: 'John', ...}, {...}, ...], в качестве первого аргумента и сохраняет их все в БД. Создайте много людей с Model.create(), используя аргумент функции arrayOfPeople.
</section>

## Instructions
<section id='instructions'>
Создайте много людей с <code>Model.create()</code>, используя аргумент функции <code>arrayOfPeople</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Создание нескольких элементов БД одновременно должно быть успешным
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'') + ''/_api/create-many-people'', type: ''POST'', contentType:''application/json'', data: JSON.stringify([{name: ''John'', age: 24, favoriteFoods: [''pizza'', ''salad'']}, {name: ''Mary'', age: 21, favoriteFoods: [''onions'', ''chicken'']}])}).then(data => { assert.isArray(data, ''the response should be an array''); assert.equal(data.length, 2, ''the response does not contain the expected number of items''); assert.equal(data[0].name, ''John'', ''The first item is not correct''); assert.equal(data[0].__v, 0, ''The first item should be not previously edited''); assert.equal(data[1].name, ''Mary'', ''The second item is not correct''); assert.equal(data[1].__v, 0, ''The second item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>
