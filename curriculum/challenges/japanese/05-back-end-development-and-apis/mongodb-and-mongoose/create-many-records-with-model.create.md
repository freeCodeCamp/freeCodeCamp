---
id: 587d7fb7367417b2b2512c0a
title: Model.create() で多数のレコードを作成する
challengeType: 2
forumTopicId: 301537
dashedName: create-many-records-with-model-create
---

# --description--

最初のデータでデータベースをシードする場合などでは、モデルのインスタンスを多数作成する必要があります。 `Model.create()` は、最初の引数として `[{name: 'John', ...}, {...}, ...]` のようなオブジェクト配列を受け取り、それらのすべてを db に保存します。

# --instructions--

`createManyPeople` 関数を変更して、`Model.create()` で引数 `arrayOfPeople` を使用して多数の人を作成してください。

**注:** 前回の演習でインスタンス化したモデルを再利用できます。

# --hints--

一度に多数の db アイテムを正しく作成する必要がります。

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/_api/create-many-people',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify([
      { name: 'John', age: 24, favoriteFoods: ['pizza', 'salad'] },
      { name: 'Mary', age: 21, favoriteFoods: ['onions', 'chicken'] }
    ])
  }).then(
    (data) => {
      assert.isArray(data, 'the response should be an array');
      assert.equal(
        data.length,
        2,
        'the response does not contain the expected number of items'
      );
      assert.equal(data[0].name, 'John', 'The first item is not correct');
      assert.equal(
        data[0].__v,
        0,
        'The first item should be not previously edited'
      );
      assert.equal(data[1].name, 'Mary', 'The second item is not correct');
      assert.equal(
        data[1].__v,
        0,
        'The second item should be not previously edited'
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
