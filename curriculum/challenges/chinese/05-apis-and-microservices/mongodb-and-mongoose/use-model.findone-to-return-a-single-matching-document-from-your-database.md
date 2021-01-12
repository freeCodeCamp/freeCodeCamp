---
id: 587d7fb7367417b2b2512c0c
title: 使用 model.findOne() 从数据库中返回一个单一匹配的 Document
challengeType: 2
forumTopicId: 301545
---

# --description--

`Model.findOne()` 与 `Model.find()` 十分类似。但就算数据库中有很多条数据可以匹配查询条件，`Model.findOne()` 也只返回一个 document，而不会返回一个数组。如果查询条件是声明为唯一值的属性，`Model.findOne()` 会更加适用。

# --instructions--

修改 `findOneByFood` 函数，用 `Model.findOne() -> Person` 来查询在收藏夹中有某种食物的一个人。将函数参数中的 `food` 作为检索条件。

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

# --seed--

# --solutions--

```js
/**
  后端挑战不需要 solutions， 
  因为他们需要使用一个完整的项目进行测试。 
  请查询我们的贡献指南以了解更多信息。 
*/
```
