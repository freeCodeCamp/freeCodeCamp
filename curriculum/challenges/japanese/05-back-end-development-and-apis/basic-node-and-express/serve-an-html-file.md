---
id: 587d7fb0367417b2b2512bef
title: HTML ファイルを提供する
challengeType: 2
forumTopicId: 301516
dashedName: serve-an-html-file
---

# --description--

`res.sendFile(path)` メソッドを使用して、ファイルでリクエストに応答することができます。 メソッドは `app.get('/', ...)` ルートハンドラーの中に記述できます。 このメソッドは、送信したいファイルの処理方法をブラウザーに指示するための適切なヘッダーを、そのファイルタイプに応じて設定します。 そして、ファイルを読み取り、送信します。 このメソッドには絶対ファイルパスが必要です。 以下のようなパスを計算するために、Node のグローバル変数 `__dirname` を使用することを推奨します。

```js
absolutePath = __dirname + '/relativePath/file.ext'
```

# --instructions--

GET リクエストへのレスポンスとして、`/views/index.html` ファイルを `/` パスへ送信します。 動作可能なアプリを表示すると、大きな HTML 見出し (および、あとで使用するフォーム) が、スタイルが適用されていない状態で表示されることが確認できるはずです。

**注:** 前回のチャレンジのソリューションを編集するか、新しいチャレンジを作成できます。 新しいソリューションを作成する場合、Express ではルートが上から下に向かって評価され、最初に一致したルートのハンドラーが実行されることに注意してください。 前のソリューションをコメントアウトする必要があります。そうしないとサーバーは文字列で応答し続けます。

# --hints--

アプリからファイル views/index.html を提供する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.match(
        data,
        /<h1>.*<\/h1>/,
        'Your app does not serve the expected HTML'
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
