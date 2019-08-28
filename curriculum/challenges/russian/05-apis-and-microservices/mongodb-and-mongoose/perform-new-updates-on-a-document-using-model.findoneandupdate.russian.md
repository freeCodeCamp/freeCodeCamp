---
id: 587d7fb8367417b2b2512c0f
title: Perform New Updates on a Document Using model.findOneAndUpdate()
challengeType: 2
forumTopicId: 301542
localeTitle: Выполнять новые обновления в документе с помощью model.findOneAndUpdate ()
---

## Description
<section id='description'>
последних версиях mongoose есть методы, упрощающие обновление документов. Некоторые более продвинутые функции (например, до / после перехвата, проверка) ведут себя по-разному с этим подходом, поэтому метод Classic по-прежнему полезен во многих ситуациях. findByIdAndUpdate () может использоваться при поиске по Id. 
Найдите человека по имени и установите для него возраст 20. Используйте параметр функции personName в качестве ключа поиска. 
Подсказка: мы хотим, чтобы вы вернули обновленный документ. Для этого вам нужно передать документ параметров {new: true} в качестве 3-го аргумента для findOneAndUpdate (). По умолчанию эти методы возвращают неизмененный объект.
</section>

## Instructions
<section id='instructions'>
Find a person by <code>Name</code> and set the person&apos;s age to 20. Use the function parameter <code>personName</code> as search key.
<strong>Note:</strong> You should return the updated document. To do that you need to pass the options document <code>{ new: true }</code> as the 3rd argument to <code>findOneAndUpdate()</code>. By default these methods return the unmodified object.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: findOneAndUpdate an item should succeed
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-one-update'', {name:''Dorian Gray'', age: 35, favoriteFoods:[''unknown'']}).then(data => { assert.equal(data.name, ''Dorian Gray'', ''item.name is not what expected''); assert.equal(data.age, 20, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''unknown''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''findOneAndUpdate does not increment version by design !!!''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>
