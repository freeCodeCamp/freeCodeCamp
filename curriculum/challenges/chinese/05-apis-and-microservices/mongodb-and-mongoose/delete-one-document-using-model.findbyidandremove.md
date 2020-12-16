---
id: 587d7fb8367417b2b2512c10
title: 使用 model.findByIdAndRemove 删除一个 document
challengeType: 2
forumTopicId: 301539
---

# --description--

如果想在我们的数据库中通过 `_id` 删除一个人的数据，我们可以使用 `findByIdAndRemove()` 或 `findOneAndRemove()` 方法，它的使用方式和上面的更新方法很像。在这个挑战中，请使用 `personId` 找到对应的数据并把它删除。

# --hints--

应当成功地删除一条数据

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

