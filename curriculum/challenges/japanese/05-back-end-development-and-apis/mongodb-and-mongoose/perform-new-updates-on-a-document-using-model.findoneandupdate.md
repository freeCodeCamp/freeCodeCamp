---
id: 587d7fb8367417b2b2512c0f
title: Model.findOneAndUpdate() を使用して、ドキュメントの新しい更新を実行する
challengeType: 2
forumTopicId: 301542
dashedName: perform-new-updates-on-a-document-using-model-findoneandupdate
---

# --description--

最新バージョンの Mongoose は、ドキュメントの更新を簡素化するメソッドを備えています。 しかし、いくつかの高度な機能 (プレ/ポストフック、検証) は、上記のアプローチに対しては異なる動作をします。そのため、従来のメソッドが今でも多くの状況で役に立ちます。 `findByIdAndUpdate()` は、id で検索するときに使用できます。

# --instructions--

`findAndUpdate` 関数を変更して、`Name` で個人を検索し、年齢を `20` に設定してください。 検索キーとして、関数パラメーター `personName` を使用してください。

**注:** 更新したドキュメントを返す必要があります。 そのためには、オプションのドキュメント `{ new: true }` を `findOneAndUpdate()` の第 3 引数として渡す必要があります。 デフォルトでは、これらのメソッドは変更前のオブジェクトを返します。

# --hints--

アイテムを正しく findOneAndUpdate する必要があります。

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/_api/find-one-update', {
    name: 'Dorian Gray',
    age: 35,
    favoriteFoods: ['unknown']
  }).then(
    (data) => {
      assert.equal(data.name, 'Dorian Gray', 'item.name is not what expected');
      assert.equal(data.age, 20, 'item.age is not what expected');
      assert.deepEqual(
        data.favoriteFoods,
        ['unknown'],
        'item.favoriteFoods is not what expected'
      );
      assert.equal(
        data.__v,
        0,
        'findOneAndUpdate does not increment version by design!'
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
