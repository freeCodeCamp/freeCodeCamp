---
id: 589fc832f9fc0f352b528e78
title: 新しいユーザーを通知する
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

多くのチャットルームは、ユーザーが接続または切断したときに、チャットにいる他のすべての接続中ユーザーにそのことを通知して表示することができます。 接続時と切断時にすでにイベントをエミットしているはずなので、このような機能をサポートするようにこのイベントを変更するだけです。 The most logical way of doing so is sending 3 pieces of data with the event: the username of the user who connected/disconnected, the current user count, and if that username connected or disconnected.

Change the event name to `'user'`, and pass an object along containing the fields `username`, `currentUsers`, and `connected` (to be `true` in case of connection, or `false` for disconnection of the user sent). Be sure to change both `'user count'` events and set the disconnect one to send `false` for the field `connected` instead of `true` like the event emitted on connect.

```js
io.emit('user', {
  username: socket.request.user.username,
  currentUsers,
  connected: true
});
```

これで必要なすべての情報がクライアントに揃い、ユーザーが接続または切断したときに現在のユーザー数と通知が正しく表示されます！ クライアント側でこのイベントを処理するには、`'user'` をリッスンし、それから jQuery を使用して現在のユーザー数を更新し、`#num-users` のテキストを `'{NUMBER} users online'` に変更する必要があります。また、id が `messages` の順序なしリストに、`'{NAME} has {joined/left} the chat.'` という内容の `<li>` を追加します。

この実装は次のようになります。

```js
socket.on('user', data => {
  $('#num-users').text(data.currentUsers + ' users online');
  let message =
    data.username +
    (data.connected ? ' has joined the chat.' : ' has left the chat.');
  $('#messages').append($('<li>').html('<b>' + message + '</b>'));
});
```

正しいと思ったら、ページを送信してください。 エラーが発生している場合、<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135/3#announce-new-users-10" target="_blank" rel="noopener noreferrer nofollow">この時点までの完成形のコードをこちらで確認できます</a>。

# --hints--

Event `'user'` should be emitted with `name`, `currentUsers`, and `connected`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.emit.*('|")user\1.*name.*currentUsers.*connected/s,
    'You should have an event emitted named user sending name, currentUsers, and connected'
  );
}
```

クライアントは、イベント `'user'` の新しいデータを適切に処理して表示する必要があります。

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.on.*('|")user\1[^]*num-users/s,
    'You should change the text of "#num-users" within on your client within the "user" event listener to show the current users connected'
  );
  assert.match(
    data,
    /socket.on.*('|")user\1[^]*messages.*li/s,
    'You should append a list item to "#messages" on your client within the "user" event listener to announce a user came or went'
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
