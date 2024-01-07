---
id: 587d7fb9367417b2b2512c12
title: 検索クエリヘルパーをチェーンして検索結果を絞り込む
challengeType: 2
forumTopicId: 301533
dashedName: chain-search-query-helpers-to-narrow-search-results
---

# --description--

`Model.find()` (または他の検索メソッド) に最後の引数としてコールバックを渡さない場合、クエリは実行されません。 クエリを変数に保存しておき、後で使用することができます。 この種類のオブジェクトでは、チェーン シンタックスを使用してクエリを構築できます。 実際の db 検索は、最後にメソッド `.exec()` をチェーンしたときに実行されます。 この最後のメソッドに、常にコールバックを渡す必要があります。 多くのクエリヘルパーがありますが、ここでは最もよく使用されるものを使用します。

# --instructions--

`queryChain` 関数を変更して、`foodToSearch` という変数で指定された食べ物が好きな人を見つけてください。 `name` 順に並べ替え、結果を 2 つのドキュメントに限定して、年齢を非表示にしてください。 `.find()`、`.sort()`、`.limit()`、`.select()` および `.exec()` をチェーンしてください。 `done(err, data)` コールバックを `exec()` に渡してください。

# --hints--

クエリヘルパーを正しくチェーンする必要があります。

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/_api/query-tools',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify([
      { name: 'Pablo', age: 26, favoriteFoods: ['burrito', 'hot-dog'] },
      { name: 'Bob', age: 23, favoriteFoods: ['pizza', 'nachos'] },
      { name: 'Ashley', age: 32, favoriteFoods: ['steak', 'burrito'] },
      { name: 'Mario', age: 51, favoriteFoods: ['burrito', 'prosciutto'] }
    ])
  }).then(
    (data) => {
      assert.isArray(data, 'the response should be an Array');
      assert.equal(
        data.length,
        2,
        'the data array length is not what expected'
      );
      assert.notProperty(
        data[0],
        'age',
        'The returned first item has too many properties'
      );
      assert.equal(
        data[0].name,
        'Ashley',
        'The returned first item name is not what expected'
      );
      assert.notProperty(
        data[1],
        'age',
        'The returned second item has too many properties'
      );
      assert.equal(
        data[1].name,
        'Mario',
        'The returned second item name is not what expected'
      );
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
