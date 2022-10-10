---
id: 589fc830f9fc0f352b528e74
title: 環境を設定する
challengeType: 2
forumTopicId: 301566
dashedName: set-up-the-environment
---

# --description--

以降のチャレンジでは `chat.pug` ファイルを使用します。 そこで、`routes.js` ファイルで、`/chat` を指す GET ルートを追加してください。/chat は、`ensureAuthenticated` を利用し、レスポンスへの引数として渡された `{ user: req.user }` を使用して `chat.pug` をレンダーします。 次に、既存の `/auth/github/callback` ルートを変更して、`req.session.user_id = req.user.id` を設定し、`/chat` にリダイレクトしてください。

すでに `socket.io@~2.3.0` が依存関係として追加されているので、(Node.js に組み込まれている) `http` を使用して、以下のようにサーバーでソケットの require を定義しインスタンス化してください。

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

*http* サーバーを *Express アプリ*にマウントしたので、*http* サーバーからリッスンする必要があります。 `app.listen` の行を `http.listen` に変更します。

最初の処理として、クライアントからの新しい接続をリッスンします。 <dfn>on</dfn> キーワードがその処理を行い、特定のイベントがないかリッスンします。 ここでは、エミットされたイベントのタイトルを含む文字列と、データを渡すための関数の、2 つの引数が必要です。 コネクションリスナーの場合は、*ソケット*を使用して第 2 引数でデータを定義します。 ソケットとは、接続している個々のクライアントのことです。

サーバーへの接続をリッスンするには、データベース接続の中に次を追加します。

```javascript
io.on('connection', socket => {
  console.log('A user has connected');
});
```

クライアントが接続できるようにするには、認証後にページによってロードされる `client.js` に次を追加する必要があります。

```js
/*global io*/
let socket = io();
```

コメントにより、通常「io」がファイル内で定義されていない場合に表示されるエラーを表示しないようにしています。 chat.pug 内のページの Socket.IO ライブラリには、すでに信頼性の高い CDN を追加してあります。

では、アプリの読み込みと認証を試してみましょう。サーバーコンソールに「A user has connected」と表示されるはずです！

**注:** `io()` は、同じ url またはサーバー上でホストされているソケットに接続している場合にのみ動作します。 他の場所でホストされている外部ソケットに接続するには、`io.connect('URL');` を使用します。

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを<a href="https://gist.github.com/camperbot/aae41cf59debc1a4755c9a00ee3859d1" target="_blank" rel="noopener noreferrer nofollow">こちら</a>で確認できます。

# --hints--

`socket.io` を依存関係にする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'socket.io',
        'Your project should list "socket.io" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

`http` を `http` として正しく require しインスタンス化する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /http.*=.*require.*('|")http\1/gi,
        'Your project should list "http" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

`socket.io` を `io` として正しく require しインスタンス化する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.*=.*require.*('|")socket.io\1.*http/gi,
        'You should correctly require and instantiate socket.io as io.'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Socket.IO で接続をリッスンする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.on.*('|")connection\1.*socket/gi,
        'io should listen for "connection" and socket should be the 2nd arguments variable'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

クライアントからサーバーに接続する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.*=.*io/gi,
        'Your client should be connection to server with the connection defined as socket'
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
