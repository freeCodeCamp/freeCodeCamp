---
id: 587d7fb8367417b2b2512c10
title: Model.findByIdAndRemove を使用して 1 つのドキュメントを削除する
challengeType: 2
forumTopicId: 301539
dashedName: delete-one-document-using-model-findbyidandremove
---

# --description--

`findByIdAndRemove` と `findOneAndRemove` も、前回の更新メソッドと同様です。 これらは、削除したドキュメントを db に渡します。 いつものように、関数引数 `personId` を検索キーとして使用してください。

# --instructions--

`removeById` 関数を変更して、1 人の個人を `_id` で削除してください。 `findByIdAndRemove()` または `findOneAndRemove()` メソッドのいずれかを使用する必要があります。

# --hints--

アイテムを正しく削除する必要があります。

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
