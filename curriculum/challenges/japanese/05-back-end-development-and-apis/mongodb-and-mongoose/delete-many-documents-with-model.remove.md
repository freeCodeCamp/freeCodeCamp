---
id: 587d7fb8367417b2b2512c11
title: Model.remove() で多数のドキュメントを削除する
challengeType: 2
forumTopicId: 301538
dashedName: delete-many-documents-with-model-remove
---

# --description--

`Model.remove()` は、指定された条件に一致するすべてのドキュメントを削除するのに便利です。

# --instructions--

`removeManyPeople` を変更し、`Model.remove()` を使用して、名前が変数 `nameToRemove` 内にある人をすべて削除してください。 それを、`name` フィールドを設定したクエリドキュメントと、コールバックに渡してください。

**注:** `Model.remove()` は、削除したドキュメントを返さず、操作の結果を含む JSON オブジェクトと、影響を受けたアイテムの数を返します。 テストで使用するので、忘れずに `done()` コールバックに渡してください。

# --hints--

一度に多数のアイテムを正しく削除する必要があります。

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

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
