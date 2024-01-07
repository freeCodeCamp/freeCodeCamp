---
id: 587d7fb8367417b2b2512c10
title: Видаліть один документ за допомогою model.findByIdAndRemove
challengeType: 2
forumTopicId: 301539
dashedName: delete-one-document-using-model-findbyidandremove
---

# --description--

`findByIdAndRemove` і `findOneAndRemove` схожі до попередніх методів оновлення. Вони передають вилучений документ до бази даних. Використайте аргумент функції `personId` як ключ пошуку.

# --instructions--

Змініть функцію `removeById`, щоб видалити одну людину на основі її `_id`. Ви повинні використати метод `findByIdAndRemove()` або `findOneAndRemove()`.

# --hints--

Видалення елемента має бути успішним

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/remove-one-person', {
    name: 'Jason Bourne',
    age: 36,
    favoriteFoods: ['apples']
  }).then(
    (data) => {
      assert.equal(data.name, 'Jason Bourne', 'item.name is not what expected');
      assert.equal(data.age, 36, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['apples'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(data.__v, 0);
      assert.equal(data.count, 0, 'the db items count is not what expected');
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
