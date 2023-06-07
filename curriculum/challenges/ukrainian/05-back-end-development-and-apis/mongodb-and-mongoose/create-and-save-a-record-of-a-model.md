---
id: 587d7fb6367417b2b2512c09
title: Створіть та збережіть запис моделі
challengeType: 2
forumTopicId: 301536
dashedName: create-and-save-a-record-of-a-model
---

# --description--

У цьому завданні вам буде потрібно створити та зберегти запис моделі.

# --instructions--

У межах функції `createAndSavePerson` створіть екземпляр документа, використовуючи модель конструктора `Person`, який ви побудували раніше. Перенесіть до конструктора об'єкт, який має поля `name`, `age` та `favoriteFoods`. Їхні типи повинні збігатися з тими, що у `personSchema`. Опісля викличте метод `document.save()` у зворотньому екземплярі документа. Передайте його до зворотної функції, використовуючи конвенцію Node. Це загальний шаблон; всі наступні CRUD-методи потребують зворотну функцію як останній аргумент.

```js
/* Example */

// ...
person.save(function(err, data) {
  //   ...do your stuff here...
});
```

# --hints--

Створення та збереження елемента має пройти успішно

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/create-and-save-person').then(
    (data) => {
      assert.isString(data.name, '"item.name" should be a String');
      assert.isNumber(data.age, '28', '"item.age" should be a Number');
      assert.isArray(
        data.favoriteFoods,
        '"item.favoriteFoods" should be an Array'
      );
      assert.equal(data.__v, 0, 'The db item should be not previously edited');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
