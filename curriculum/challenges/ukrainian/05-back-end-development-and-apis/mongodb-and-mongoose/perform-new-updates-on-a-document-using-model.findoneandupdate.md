---
id: 587d7fb8367417b2b2512c0f
title: Виконайте нові оновлення на документі за допомогою model.findOneAndUpdate()
challengeType: 2
forumTopicId: 301542
dashedName: perform-new-updates-on-a-document-using-model-findoneandupdate
---

# --description--

Останні версії Mongoose мають методи спрощення оновлення документів. Деякі більш розширені функції (наприклад, хуки до/після, перевірка) поводяться з таким підходом по-різному, тому класичний метод залишається корисним. `findByIdAndUpdate()` можна використовувати під час пошуку за id.

# --instructions--

Змініть функцію `findAndUpdate`, щоб знайти людину за `Name` і встановити вік на `20`. Використайте параметр функції `personName` як ключ пошуку.

**Примітка:** ви повинні повернути оновлений документ. Для цього потрібно передати опції документа `{ new: true }` до `findOneAndUpdate()` як третій аргумент. За замовчуванням ці методи повертають немодифікований об'єкт.

# --hints--

findOneAndUpdate елемента має бути успішним

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-one-update', {
    name: 'Dorian Gray',
    age: 35,
    favoriteFoods: ['unknown']
  }).then(
    (data) => {
      assert.equal(data.name, 'Dorian Gray', 'item.name is not what expected');
      assert.equal(data.age, 20, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['unknown'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(
        data.__v,
        0,
        'findOneAndUpdate does not increment version by design!'
      );
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
