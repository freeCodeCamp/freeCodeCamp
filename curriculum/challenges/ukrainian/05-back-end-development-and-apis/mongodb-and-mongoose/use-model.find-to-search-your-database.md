---
id: 587d7fb7367417b2b2512c0b
title: Використайте model.find() для пошуку своєї бази даних
challengeType: 2
forumTopicId: 301543
dashedName: use-model-find-to-search-your-database
---

# --description--

У найпростішому використанні `Model.find()` приймає документ-запит (об'єкт JSON) як перший аргумент, а потім зворотній виклик. Це повертає масив збігів. Це підтримує надзвичайно широкий спектр варіантів пошуку. Читайте більше в документації.

# --instructions--

Змініть функцію `findPeopleByName`, щоб знайти всіх людей з даним іменем, використовуючи <code>Model.find() -\> [Person]</code>

Використайте аргумент функції `personName` як ключ пошуку.

# --hints--

Пошук усіх елементів, що відповідають критеріям, має бути успішними

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-all-by-name', {
    name: 'r@nd0mN4m3',
    age: 24,
    favoriteFoods: ['pizza']
  }).then(
    (data) => {
      assert.isArray(data, 'the response should be an Array');
      assert.equal(
        data[0].name,
        'r@nd0mN4m3',
        'item.name is not what expected'
      );
      assert.equal(data[0].__v, 0, 'The item should be not previously edited');
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
