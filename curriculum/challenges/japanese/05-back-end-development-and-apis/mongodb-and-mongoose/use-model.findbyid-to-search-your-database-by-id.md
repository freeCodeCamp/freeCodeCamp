---
id: 587d7fb7367417b2b2512c0d
title: Model.findById() を使用して _id でデータベースを検索する
challengeType: 2
forumTopicId: 301544
dashedName: use-model-findbyid-to-search-your-database-by-id
---

# --description--

MongoDB ではドキュメントが保存されるときに、フィールド `_id` が自動的に追加され、一意の英数字キーが設定されます。 `_id` での検索操作は非常に頻繁に行われるので、Mongoose では専用のメソッドが用意されています。

# --instructions--

`findPersonById` を変更し、`Model.findById() -> Person` を使用して、指定した `_id` を持つ人のみを検索してください。 検索キーとして関数引数 `personId` を使用してください。

# --hints--

Id でアイテムを正しく検索する必要があります。

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
