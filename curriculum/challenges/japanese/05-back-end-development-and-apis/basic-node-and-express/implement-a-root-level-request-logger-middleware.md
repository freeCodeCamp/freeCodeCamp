---
id: 587d7fb1367417b2b2512bf3
title: ルートレベルのリクエスト ロガー ミドルウェアを実装する
challengeType: 2
forumTopicId: 301514
dashedName: implement-a-root-level-request-logger-middleware
---

# --description--

前に `express.static()` ミドルウェア関数について説明しました。 ここでは、ミドルウェアとはどのようなものなのか、もっと詳しく説明しましょう。 ミドルウェア関数は 3 つの引数を取る関数です。それらは、リクエストオブジェクト、レスポンスオブジェクト、そして、アプリケーションのリクエストレスポンスサイクルにおける次の関数です。 これらの関数は、アプリケーションに副次的な効果を与えるコードを実行し、通常はリクエストオブジェクトもしくはレスポンスオブジェクトへ情報を追加します。 また、条件が満たされたときにレスポンスを送信して、サイクルを終了することもできます。 終了時にレスポンスを送信しない場合は、スタック内で次の関数の実行を開始します。 これにより、3 番目の引数 `next()` が呼び出されます。

以下の例を見てください。

```js
function(req, res, next) {
  console.log("I'm a middleware...");
  next();
}
```

ルートにこの関数をマウントしたとしましょう。 リクエストがルートと一致すると、「I'm a middleware…」という文字列が表示され、スタック内で次の関数が実行されます。 この演習では、ルートレベルのミドルウェアを構築します。 チャレンジ 4 で説明したように、ミドルウェア関数をルートレベルでマウントするには、 `app.use(<mware-function>)` メソッドを使用できます。 この場合、関数はすべてのリクエストに対して実行されますが、より具体的な条件を設定することもできます。 たとえば、POST リクエストに対してのみ関数を実行したい場合は、 `app.post(<mware-function>)` を使用できます。 すべての HTTP 動詞 (GET、DELETE、PUT、 … ) について、類似したメソッドがあります。

# --instructions--

シンプルなロガーを構築してください。 リクエストごとに、`method path - ip` という形式の文字列をコンソールへ記録する必要があります。 たとえば `GET /json - ::ffff:127.0.0.1` などとします。 `method` と `path` の間に空白を入れ、`path` と `ip` を区切るダッシュの両側を空白で囲むことに注意してください。 `req.method`、`req.path` および `req.ip` を使用して、リクエストメソッド (http 動詞)、相対ルートパスおよびリクエストオブジェクトの発信者 ip を取得できます。 処理を終えたら忘れずに `next()` を呼び出してください。そうしないとサーバーがずっと無応答になります。 必ず 「Logs」を開き、リクエストが届いたときにどうなるか確認してください。

** 注: ** Express では、関数はコード内に出現する順序で評価されます。 この動作はミドルウェアにも適用されます。 すべてのルートで動作させたい場合は、それらの前でマウントする必要があります。

# --hints--

ルートレベルのロガーミドルウェアをアクティブにする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/root-middleware-logger').then(
    (data) => {
      assert.isTrue(
        data.passed,
        'root-level logger is not working as expected'
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
