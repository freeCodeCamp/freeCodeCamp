---
id: 589fc831f9fc0f352b528e75
title: エミットで通信する
challengeType: 2
forumTopicId: 301550
dashedName: communicate-by-emitting
---

# --description--

<dfn>エミット (emit)</dfn> は、最もよく使用する通信方法です。 サーバーから 「io」へ何かをエミットするときは、接続中のすべてのソケットにイベントの名前とデータを送信します。 エミットの良い例として、たとえば新しいユーザーが接続するたびに、接続したユーザーの現在の数をエミットすることができます。

まず、現在接続をリッスンしている場所の直前に、ユーザーを追跡する変数を追加してください。

```js
let currentUsers = 0;
```

誰かが接続したときは、ユーザー数をインクリメントしてからその数をエミットする必要があります。 そこで、コネクションリスナー内にインクリメンターを追加します。

```js
++currentUsers;
```

また、ユーザー数をインクリメントした後にイベントをエミットする必要があります (これもコレクションリスナー内で行います) 。 イベント名は「user count」、データは `currentUsers` としてください。

```js
io.emit('user count', currentUsers);
```

これで、クライアントでこのイベントをリッスンする方法を実装できました！ サーバーの接続をリッスンするのと同様に、`on` キーワードを使用します。

```js
socket.on('user count', function(data) {
  console.log(data);
});
```

ここで、アプリを読み込んで認証を実行してみてください。クライアントコンソールに、現在のユーザー数である「1」が表示されるはずです。 より多くのクライアントを読み込んで認証し、数字が増えるのを確認してください。

正しいと思ったら、ページを送信してください。 エラーが発生している場合、<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#communicate-by-emitting-7" target="_blank" rel="noopener noreferrer nofollow">この時点までの完成形のコードをこちらで確認できます</a>。

# --hints--

`currentUsers` should be defined.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /currentUsers/s,
    'You should have variable currentUsers defined'
  );
}
```

新しい接続ごとにサーバーから現在のユーザー数をエミットする必要があります。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.emit.*('|")user count('|").*currentUsers/s,
    'You should emit "user count" with data currentUsers'
  );
}
```

Your client should be listening for `'user count'` event.

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.on.*('|")user count('|")/s,
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
