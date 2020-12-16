---
id: 587d7fb8367417b2b2512c11
title: 使用 model.remove() 删除多个 document
challengeType: 2
forumTopicId: 301538
---

# --description--

`Model.remove()` 可以用于删除符合给定匹配条件的所有 document。

# --instructions--

如果想要删除所有叫 "Mary" 的人，我们可以使用 `Model.remove()`，并给它传入一个包含 `name` 字段的对象作为查询条件。当然，我们还需要给它传入一个回调函数。

**注意：** `Model.remove()` 不会返回被删除的 document，而是会返回一个包含操作结果以及受影响的数据数量的 JSON 对象。不要忘记将它传入 `done()` 回调，因为我们需要在挑战的测试中调用它。

# --hints--

Deleting many items at once should succeed

```js

```

应成功地删除多条数据

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/_api/remove-many-people',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify([
      { name: 'Mary', age: 16, favoriteFoods: ['lollipop'] },
      { name: 'Mary', age: 21, favoriteFoods: ['steak'] }
    ])
  }).then(
    (data) => {
      assert.isTrue(!!data.ok, 'The mongo stats are not what expected');
      assert.equal(
        data.n,
        2,
        'The number of items affected is not what expected'
      );
      assert.equal(data.count, 0, 'the db items count is not what expected');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

