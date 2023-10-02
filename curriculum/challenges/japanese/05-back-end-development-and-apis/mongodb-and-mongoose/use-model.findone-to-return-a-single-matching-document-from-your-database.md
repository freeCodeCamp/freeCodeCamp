---
id: 587d7fb7367417b2b2512c0c
title: Model.findOne() を使用して、一致する単一のドキュメントをデータベースから返す
challengeType: 2
forumTopicId: 301545
dashedName: use-model-findone-to-return-a-single-matching-document-from-your-database
---

# --description--

`Model.findOne()` の動作は `Model.find()` と似ていますが、アイテムが複数あっても (配列ではなく) 1 つのドキュメントだけを返します。 これは、プロパティを一意なものに宣言し、プロパティで検索をするときに特に便利です。

# --instructions--

`findOneByFood` 関数を変更し、`Model.findOne() -> Person` を使用して、好きな食べ物の中に特定の食べ物がある個人を 1 人検索してください。 検索キーとして関数引数 `food` を使用してください。

# --hints--

1 つのアイテムを正しく見つける必要があります。

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
