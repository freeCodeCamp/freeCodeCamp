---
id: 587d7fb1367417b2b2512bf4
title: ミドルウェアをチェーンしてタイムサーバーを作成する
challengeType: 2
forumTopicId: 301510
dashedName: chain-middleware-to-create-a-time-server
---

# --description--

`app.METHOD(path, middlewareFunction)` を使用して、ミドルウェアを特定のルートにマウントすることができます。 ミドルウェアをルート定義の中でチェーンすることもできます。

以下の例を見てください。

```js
app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send(req.user);
});
```

このアプローチは、サーバー操作を小さいユニットに分割するのに便利です。 これにより、アプリの構造が整理され、異なる場所でコードを再利用できるようになります。 このアプローチは、データに対して何らかの検証を実行する場合にも使用できます。 ミドルウェア スタックの各ポイントで、現在のチェーンの実行をブロックし、エラーを処理するために特別に設計された関数へ制御を渡すことができます。 または、特別なケースを処理するために、次にマッチするルートへ制御を渡すこともできます。 詳しくは「高度な Express」セクションで説明します。

# --instructions--

ルート `app.get('/now', ...)` で、ミドルウェア関数と最後のハンドラーをチェーンします。 ミドルウェア関数では、リクエストオブジェクトの `req.time` キーに現在時刻を追加する必要があります。 `new Date().toString()` を使用できます。 ハンドラーでは、JSON オブジェクトで応答し、構造体 `{time: req.time}` を受け取ってください。

** 注意:** ミドルウェアをチェーンしなければ、テストは成功しません。 関数を別の場所にマウントした場合、出力結果が正しくてもテストは失敗となります。

# --hints--

/now エンドポイントで、ミドルウェアをマウントしている必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/chain-middleware-time').then(
    (data) => {
      assert.equal(
        data.stackLength,
        2,
        '"/now" route has no mounted middleware'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

`/now` エンドポイントは、現在の時刻を返す必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/chain-middleware-time').then(
    (data) => {
      var now = new Date();
      assert.isAtMost(
        Math.abs(new Date(data.time) - now),
        20000,
        'the returned time is not between +- 20 secs from now'
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
