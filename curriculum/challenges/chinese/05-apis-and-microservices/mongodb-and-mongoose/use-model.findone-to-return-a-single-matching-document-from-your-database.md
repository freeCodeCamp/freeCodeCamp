---
id: 587d7fb7367417b2b2512c0c
title: 使用 model.findOne() 从数据库中返回一个匹配的 document
challengeType: 2
forumTopicId: 301545
---

# --description--

`Model.findOne()` 与 `Model.find()` 十分类似。但就算数据库中有很多条数据可以匹配查找条件，`Model.findOne()` 也只返回一个 document，而不会返回一个数组。如果查找的条件是一个值唯一的属性，`Model.findOne()` 会更加适用。

# --instructions--

用一个特定的 food 作为 `Model.findOne() -> Person` 的查找参数，来寻找喜欢食物列表中包含给定食物的某一个人。

# --hints--

应成功地找到一个数据

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

