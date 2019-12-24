---
id: 587d7fb6367417b2b2512c09
title: Create and Save a Record of a Model
challengeType: 2
forumTopicId: 301536
localeTitle: Создать и сохранить запись модели
---

## Description
<section id='description'>
Создайте экземпляр документа с помощью созданного ранее конструктора Person. Передайте в конструктор объект с полями name, age и FavoritesFoods. Их типы должны соответствовать типам в схеме Person. Затем вызовите метод document.save() для возвращенного экземпляра документа. Передайте ему обратный вызов, используя соглашение Node. Это общий шаблон, все последующие методы CRUD принимают функцию обратного вызова, подобную этой, в качестве последнего аргумента.
<code>/* Example */</code>
<code>// ...</code>
<code>person.save(function(err, data) {</code>
<code>// ...do your stuff here...</code>
<code>});</code>
</section>

## Instructions
<section id='instructions'>
Создайте экземпляр документа, используя конструктор <code>Person</code>, который вы создали ранее. Передайте в конструктор объект, имеющий поля <code>name</code>, <code>age</code> и <code>favoriteFoods</code>. Их типы должны соответствовать тем, которые указаны в схеме Person. Затем вызовите метод <code>document.save()</code> для возвращенного экземпляра документа. Передайте ему обратный вызов, используя соглашение Node. Это общий шаблон, все последующие методы CRUD принимают функцию обратного вызова, подобную этой, в качестве последнего аргумента.

```js
/* Example */

// ...
person.save(function(err, data) {
  //   ...do your stuff here...
});
```

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Создание и сохранение элемента БД должно завершиться успешно
    testString: getUserInput => $.get(getUserInput('url') + '/_api/create-and-save-person').then(data => { assert.isString(data.name, '"item.name" should be a String'); assert.isNumber(data.age, '28', '"item.age" should be a Number'); assert.isArray(data.favoriteFoods, '"item.favoriteFoods" should be an Array'); assert.equal(data.__v, 0, 'The db item should be not previously edited'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
