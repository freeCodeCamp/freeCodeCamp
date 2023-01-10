---
id: 587d7fb7367417b2b2512c0d
title: Використайте model.findById(), щоб знайти базу даних за _id
challengeType: 2
forumTopicId: 301544
dashedName: use-model-findbyid-to-search-your-database-by-id
---

# --description--

При збереженні документу, MongoDB автоматично додає поле `_id` та встановлює для нього унікальний алфавітно-цифровий ключ. Пошук за `_id` є надзвичайно частою операцією, тому Mongoose надає для цього спеціальний метод.

# --instructions--

Змініть `findPersonById`, щоб знайти лише одну людину, яка має заданий `_id`, використовуючи `Model.findById() -> Person`. Використайте аргумент функції `personId` як ключ пошуку.

# --hints--

Пошук елемента за Id має бути успішним

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/find-by-id').then(
    (data) => {
      assert.equal(data.name, 'test', 'item.name is not what expected');
      assert.equal(data.age, 0, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['none'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(data.__v, 0, 'The item should be not previously edited');
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
