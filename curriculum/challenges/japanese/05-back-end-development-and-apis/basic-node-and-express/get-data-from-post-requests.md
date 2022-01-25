---
id: 587d7fb2367417b2b2512bf8
title: POST リクエストからデータを取得する
challengeType: 2
forumTopicId: 301511
dashedName: get-data-from-post-requests
---

# --description--

パス `/name` で POST ハンドラーをマウントしてください。 これは前回と同じパスです。 html のフロントページにフォームが用意されています。 このフォームは、演習 10 (クエリ文字列) と同じデータを送信します。 ボディパーサーが正しく設定されている場合は、`req.body` オブジェクトにパラメーターが見つかります。 次は通常のライブラリの例です。

<blockquote>route: POST '/library'<br>urlencoded_body: userId=546&#x26;bookId=6754 <br>req.body: {userId: '546', bookId: '6754'}</blockquote>

前回と同じ JSON オブジェクト `{name: 'firstname lastname'}` で応答してください。 アプリのフロントページに提供されている html フォームを使用してエンドポイントが動作するかどうかをテストしてください。

ヒント: GET と POST 以外にもいくつかの http メソッドがあります。 慣例として、http 動詞とサーバ上で実行する操作には対応関係があります。 従来の対応関係は以下のようになっています。

POST (場合によっては PUT) - リクエストと共に送信された情報を使用して新しいリソースを作成する。

GET - 既存のリソースを変更せずに読み取る。

PUT または PATCH (場合によっては POST) - 送信されたデータを使用してリソースを更新する。

DELETE => リソースを削除する。

他にもサーバーとの接続のやり取りに使用するメソッドがいくつかあります。 GET を除いて、上記のメソッドはすべてペイロードを持つことができます (つまり、データをリクエストボディに保存できます)。 ボディ解析ミドルウェアでもこれらのメソッドを使用できます。

# --hints--

テスト 1: API エンドポイントは、正しい名前で応答する必要があります。

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/name', { first: 'Mick', last: 'Jagger' }).then(
    (data) => {
      assert.equal(
        data.name,
        'Mick Jagger',
        'Test 1: "POST /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

テスト 2: API エンドポイントは、正しい名前で応答する必要があります。

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/name', {
    first: 'Keith',
    last: 'Richards'
  }).then(
    (data) => {
      assert.equal(
        data.name,
        'Keith Richards',
        'Test 2: "POST /name" route does not behave as expected'
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
