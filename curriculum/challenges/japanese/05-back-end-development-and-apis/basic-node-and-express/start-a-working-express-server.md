---
id: 587d7fb0367417b2b2512bee
title: 作業用の Express サーバーを起動する
challengeType: 2
forumTopicId: 301519
dashedName: start-a-working-express-server
---

# --description--

ファイル `myApp.js` の最初の 2 行を見ると、Express アプリオブジェクトを簡単に作成できることがわかります。 このオブジェクトにはいくつかのメソッドがあり、チャレンジでそれらの多くを学ぶことになります。 基本的なメソッドの一つが、`app.listen(port)` です。 このメソッドは、指定されたポートをリッスンするようにサーバーへ指示し、サーバーを実行中の状態にします。 テスト目的のため、アプリをバックグラウンドで実行する必要があります。そのため、このメソッドを `server.js` ファイルに追加しました。

サーバーから最初の文字列を提供してみましょう！ Express では、ルートは `app.METHOD(PATH, HANDLER)` という構造をとります。 METHOD は、小文字の http メソッドです。 PATH は、サーバー上の相対パスです (文字列、または正規表現でもかまいません) 。 HANDLER は、ルートが一致したときに Express が呼び出す関数です。 ハンドラーは `function(req, res) {...}` という形式をとります。req はリクエストオブジェクトで、res はレスポンスオブジェクトです。 たとえば、下記のハンドラー

```js
function(req, res) {
  res.send('Response String');
}
```

は、文字列「Response String」を提供します。

# --instructions--

`app.get()` メソッドを使用して、`/` (root) パスに一致する GET リクエストに対して文字列「Hello Express」を提供してください。 ログを見てコードが動作することを確認し、Replit を使用している場合はプレビューで結果を確認してください。

** 注: ** レッスンのコードはすべて、あらかじめ用意されている数行のコードの間に追加する必要があります。

# --hints--

アプリは、「Hello Express」という文字列を提供する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.equal(
        data,
        'Hello Express',
        'Your app does not serve the text "Hello Express"'
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
