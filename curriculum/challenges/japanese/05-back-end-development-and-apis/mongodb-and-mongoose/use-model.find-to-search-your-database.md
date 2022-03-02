---
id: 587d7fb7367417b2b2512c0b
title: Model.find() を使用してデータベースを検索する
challengeType: 2
forumTopicId: 301543
dashedName: use-model-find-to-search-your-database
---

# --description--

最もシンプルな用法では、`Model.find()` は最初の引数としてクエリドキュメント (JSON オブジェクト) を受け取り、次にコールバックを受け取ります。 そして、一致する配列を返します。 このメソッドは非常に幅広い検索オプションに対応しています。 詳細はドキュメントをご覧ください。

# --instructions--

`findPeopleByName` 関数を変更し、<code>Model.find() -\> [Person]</code> を使用して、指定した名前を持つすべての人を検索してください。

検索キーとして関数引数 `personName` を使用してください。

# --hints--

条件に対応するすべてのアイテムを正しく見つける必要があります。

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
