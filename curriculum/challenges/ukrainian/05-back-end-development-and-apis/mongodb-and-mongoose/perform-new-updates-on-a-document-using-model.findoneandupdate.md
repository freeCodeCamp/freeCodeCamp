---
id: 587d7fb8367417b2b2512c0f
title: Виконання нових оновлень для документа за допомогою model.findOneAndUpdate()
challengeType: 2
forumTopicId: 301542
dashedName: perform-new-updates-on-a-document-using-model-findoneandupdate
---

# --description--

Останні версії Mongoose мають методи спрощення оновлення документів. Деякі більш розширені функції (наприклад, хуки до/після, перевірка) поводяться з таким підходом по-різному, тому класичний метод все ще корисний у багатьох ситуаціях. `findByIdAndUpdate()` можна використовувати під час пошуку за id.

# --instructions--

Змініть функцію `findAndUpdate`, щоб знайти особу за `Name` і встановити вік особи за `20`. Використовуйте параметр функції `personName` як ключ пошуку.

**Примітка:** Ви повинні повернути оновлений документ. Для цього необхідно передати опції документа `{ new: true }` як третій аргумент `findOneAndUpdate()`. За замовчуванням ці методи повертають немодифікований об'єкт.

# --hints--

пошук OneAndUpdate елемента має бути успішним

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
