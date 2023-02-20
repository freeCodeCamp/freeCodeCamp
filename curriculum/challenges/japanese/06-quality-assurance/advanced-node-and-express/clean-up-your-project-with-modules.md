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

Do the same thing in your `auth.js` file with all of the things related to authentication such as the serialization and the setting up of the local strategy and erase them from your server file. サーバーの同じ場所で、依存関係を追加し、`auth(app, myDataBase)` を呼び出してください。

正しいと思ったら、ページを送信してください。 エラーが発生している場合、<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#clean-up-your-project-with-modules-2" target="_blank" rel="noopener noreferrer nofollow">完成形のプロジェクトの例をこちらで確認できます</a>。

# --hints--

モジュールが存在する必要があります。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
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
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
