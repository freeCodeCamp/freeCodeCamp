---
id: 587d7fb0367417b2b2512bf0
title: 静的アセットを提供する
challengeType: 2
forumTopicId: 301518
dashedName: serve-static-assets
---

# --description--

HTML サーバーには通常、ユーザーがアクセスできるディレクトリが 1 つ以上あります。 それらのディレクトリには、アプリに必要な静的アセット (スタイルシート、スクリプト、画像) を置くことができます。

Express では、ミドルウェア `express.static(path)` を使用してこの機能を実現できます。ここで、`path` パラメーターはアセットのあるフォルダーの絶対パスです。

ミドルウェアのことが分からなくても心配はいりません。後で詳しく説明します。 基本的に、ミドルウェアとは、ルートハンドラーに割り込んで何らかの情報を追加する関数です。 ミドルウェアはメソッド `app.use(path, middlewareFunction)` を使用してマウントする必要があります。 最初の `path` 引数は任意です。 これを渡さない場合は、すべてのリクエストに対してミドルウェアが実行されます。

# --instructions--

`app.use()` を使用して、`express.static()` ミドルウェアをパス `/public` にマウントしてください。 アセットフォルダーへの絶対パスは `__dirname + /public` です。

これで、アプリが CSS スタイルシートを提供できるようになります。 `/public/style.css` ファイルは、プロジェクト ボイラープレートの `/views/index.html` で参照されることに注意してください。 これで、フロントページの見栄えが少し良くなっているはずです！

# --hints--

アプリは、`/public` ディレクトリから `/public` パスにアセットファイルを提供する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/style.css').then(
    (data) => {
      assert.match(
        data,
        /body\s*\{[^\}]*\}/,
        'Your app does not serve static assets'
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
