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

最初の処理として、クライアントからの新しい接続をリッスンします。 <dfn>on</dfn> キーワードがその処理を行い、特定のイベントがないかリッスンします。 ここでは、エミットされたイベントのタイトルを含む文字列と、データを渡すための関数の、2 つの引数が必要です。 In the case of our connection listener, use `socket` to define the data in the second argument. ソケットとは、接続している個々のクライアントのことです。

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

コメントにより、通常「io」がファイル内で定義されていない場合に表示されるエラーを表示しないようにしています。 You have already added a reliable CDN to the Socket.IO library on the page in `chat.pug`.

Now try loading up your app and authenticate and you should see in your server console `A user has connected`.

**注:** `io()` は、同じ url またはサーバー上でホストされているソケットに接続している場合にのみ動作します。 他の場所でホストされている外部ソケットに接続するには、`io.connect('URL');` を使用します。

正しいと思ったら、ページを送信してください。 エラーが発生している場合、<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-the-environment-6" target="_blank" rel="noopener noreferrer nofollow">この時点までの完成形のコードをこちらで確認できます</a>。

# --hints--

`socket.io` を依存関係にする必要があります。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'socket.io',
    'Your project should list "socket.io" as a dependency'
  );
}
```

`http` を `http` として正しく require しインスタンス化する必要があります。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /http.*=.*require.*('|")http\1/s,
    'Your project should list "http" as a dependency'
  );
}
```

`socket.io` を `io` として正しく require しインスタンス化する必要があります。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.*=.*require.*('|")socket.io\1.*http/s,
    'You should correctly require and instantiate socket.io as io.'
  );
}
```

Socket.IO で接続をリッスンする必要があります。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.on.*('|")connection\1.*socket/s,
    'io should listen for "connection" and socket should be the 2nd arguments variable'
  );
}
```

クライアントからサーバーに接続する必要があります。

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.*=.*io/s,
    'Your client should be connection to server with the connection defined as socket'
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
