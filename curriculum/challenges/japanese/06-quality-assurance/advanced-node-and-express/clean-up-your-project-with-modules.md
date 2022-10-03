---
id: 589690e6f9fc0f352b528e6e
title: モジュールを使用してプロジェクトを整理する
challengeType: 2
forumTopicId: 301549
dashedName: clean-up-your-project-with-modules
---

# --description--

ここまで作成したものはすべて `server.js` ファイルにあります。 このままではコードが管理しずらくなって、あまり拡張できなくなる可能性があります。 `routes.js` と `auth.js` という 2 つの新しいファイルを作成してください。

どちらも次のコードから始める必要があります。

```js
module.exports = function (app, myDataBase) {

}
```

サーバーファイルの先頭で `const routes = require('./routes.js');` のようにしてファイルを require します。データベースとの接続を正常に確立した直後に、`routes(app, myDataBase)` のようにしてそれぞれをインスタンス化します。

さらに、サーバー内のすべてのルートを新しいファイルに貼り付け、サーバーファイルからそれらのルートを削除します。 `ensureAuthenticated` 関数についても、ルーティングのために特別に作成したものなので貼り付けます。 ここで、使用している `const passport = require('passport');` などの依存関係を `routes.js` ファイルのエクスポート行の先頭に正しく追加する必要があります。

以上の追加を、エラーがなくなりサーバーファイルにルーティングがなくなるまで続けます (**catchブロック内のルートは除きます**)。

続いて auth.js ファイルでも同じ作業をしてください。ファイルには、シリアル化やローカルストラテジーの設定など、認証に関連するすべてのものが含まれています。そして、サーバーファイルからそれらを消去してください。 サーバーの同じ場所で、依存関係を追加し、`auth(app, myDataBase)` を呼び出してください。

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを<a href="https://gist.github.com/camperbot/2d06ac5c7d850d8cf073d2c2c794cc92" target="_blank" rel="noopener noreferrer nofollow">こちら</a>で確認できます。

# --hints--

モジュールが存在する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require\s*\(('|")\.\/routes(\.js)?\1\)/gi,
        'You should have required your new files'
      );
      assert.match(
        data,
        /client\s*\.db[^]*routes/gi,
        'Your new modules should be called after your connection to the database'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
