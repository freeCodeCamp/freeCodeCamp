---
id: 587d7fb6367417b2b2512c09
title: モデルのレコードを作成および保存する
challengeType: 2
forumTopicId: 301536
dashedName: create-and-save-a-record-of-a-model
---

# --description--

このチャレンジでは、モデルのレコードを作成して保存する必要があります。

# --instructions--

`createAndSavePerson` 関数内で、以前に構築した `Person` モデル コンストラクターを使用してドキュメント インスタンスを作成します。 フィールド `name`、`age` および `favoriteFoods` を持つオブジェクトをコンストラクターに渡します。 これらのタイプは、`personSchema` 内のものに準拠していなければなりません。 次に、返されるドキュメント インスタンスに対してメソッド `document.save()` を呼び出します。 Node の規約を使用してコールバックを渡します。 これはよく使用するパターンです。以下の CRUD メソッドはすべて、このようなコールバック関数を最後の引数として受け取ります。

```js
/* Example */

// ...
person.save(function(err, data) {
  //   ...do your stuff here...
});
```

# --hints--

db アイテムを正しく作成して保存する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/create-and-save-person').then(
    (data) => {
      assert.isString(data.name, '"item.name" should be a String');
      assert.isNumber(data.age, '28', '"item.age" should be a Number');
      assert.isArray(
        data.favoriteFoods,
        '"item.favoriteFoods" should be an Array'
      );
      assert.equal(data.__v, 0, 'The db item should be not previously edited');
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
