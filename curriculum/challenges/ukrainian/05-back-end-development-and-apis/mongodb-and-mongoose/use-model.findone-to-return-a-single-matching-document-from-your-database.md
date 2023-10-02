---
id: 587d7fb7367417b2b2512c0c
title: Використайте model.findOne(), щоб повернути єдиний відповідний документ із бази даних
challengeType: 2
forumTopicId: 301545
dashedName: use-model-findone-to-return-a-single-matching-document-from-your-database
---

# --description--

`Model.findOne()` функціонує як `Model.find()`, але повертає лише один документ (не масив), навіть якщо є декілька елементів. Це особливо корисно під час пошуку за властивостями, які були оголошені як унікальні.

# --instructions--

Змініть функцію `findOneByFood`, щоб знайти лише одну людину, якій подобається певна їжа, використовуючи `Model.findOne() -> Person`. Використайте аргумент функції `food` як ключ пошуку.

# --hints--

Пошук елемента має бути успішним

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-one-by-food', {
    name: 'Gary',
    age: 46,
    favoriteFoods: ['chicken salad']
  }).then(
    (data) => {
      assert.equal(data.name, 'Gary', 'item.name is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['chicken salad'],
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
