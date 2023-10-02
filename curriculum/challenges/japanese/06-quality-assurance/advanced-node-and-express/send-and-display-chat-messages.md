---
id: 589fc832f9fc0f352b528e79
title: チャットメッセージを送信して表示する
challengeType: 2
forumTopicId: 301562
dashedName: send-and-display-chat-messages
---

# --description--

ここでは、クライアントからサーバーにチャットメッセージを送信できるようにし、サーバーからすべてのクライアントにエミットできるようにします。 `client.js` ファイルには、すでにメッセージフォームの送信時の処理を行うコードブロックが用意されています。

```js
$('form').submit(function() {
  /*logic*/
});
```

フォームの送信コードの中で、`messageToSend` を定義した後、ただしテキストボックス `#m` をクリアする前に、イベントをエミットする必要があります。 イベント名は `'chat message'` にし、データは `messageToSend` にする必要があります。

```js
socket.emit('chat message', messageToSend);
```

次に、サーバー上でソケットをリッスンし、 `message` というデータを持つイベント `'chat message'` を受信する必要があります。 Once the event is received, it should emit the event `'chat message'` to all sockets using `io.emit`, sending a data object containing the `username` and `message`.

In `client.js`, you should now listen for event `'chat message'` and, when received, append a list item to `#messages` with the username, a colon, and the message!

この時点でチャットが完全に機能し、すべてのクライアントにメッセージが送信されるはずです！

正しいと思ったら、ページを送信してください。 エラーが発生している場合、<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#send-and-display-chat-messages-11" target="_blank" rel="noopener noreferrer nofollow">この時点までの完成形のコードをこちらで確認できます</a>。

# --hints--

サーバーは、`'chat message'` をリッスンして正しくエミットする必要があります。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.on.*('|")chat message('|")[^]*io.emit.*('|")chat message('|").*username.*message/s,
    'Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object'
  );
}
```

クライアントは、イベント `'chat message'` から受信した新しいデータを適切に処理して表示する必要があります。

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.on.*('|")chat message('|")[^]*messages.*li/s,
    'You should append a list item to #messages on your client within the "chat message" event listener to display the new message'
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
