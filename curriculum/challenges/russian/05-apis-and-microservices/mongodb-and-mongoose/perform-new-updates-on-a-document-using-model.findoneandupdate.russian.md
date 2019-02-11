---
id: 587d7fb8367417b2b2512c0f
title: Perform New Updates on a Document Using model.findOneAndUpdate()
localeTitle: Выполнять новые обновления в документе с помощью model.findOneAndUpdate ()
challengeType: 2
---

## Description
<section id='description'> 
последних версиях mongoose есть методы, упрощающие обновление документов. Некоторые более продвинутые функции (например, до / после перехвата, проверка) ведут себя по-разному с этим подходом, поэтому метод Classic по-прежнему полезен во многих ситуациях. findByIdAndUpdate () может использоваться при поиске по Id. 
Найдите человека по имени и установите для него возраст 20. Используйте параметр функции personName в качестве ключа поиска. 
Подсказка: мы хотим, чтобы вы вернули обновленный документ. Для этого вам нужно передать документ параметров {new: true} в качестве 3-го аргумента для findOneAndUpdate (). По умолчанию эти методы возвращают неизмененный объект. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: findOneAndUpdate элемент должен быть успешным
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/find-one-update'', {name:''Dorian Gray'', age: 35, favoriteFoods:[''unknown'']}).then(data => { assert.equal(data.name, ''Dorian Gray'', ''item.name is not what expected''); assert.equal(data.age, 20, ''item.age is not what expected''); assert.deepEqual(data.favoriteFoods, [''unknown''], ''item.favoriteFoods is not what expected''); assert.equal(data.__v, 0, ''findOneAndUpdate does not increment version by design !!!''); }, xhr => { throw new Error(xhr.responseText); })'

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
