---
id: 589fc832f9fc0f352b528e78
title: 用户公告
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

许多聊天室都有这个功能：所有已连接到服务器的在线用户都会看到有人加入或退出的提醒。 我们已经写好了处理连接和断开事件的代码，只要对这个方法稍作修改就可以实现这个功能。 The most logical way of doing so is sending 3 pieces of data with the event: the username of the user who connected/disconnected, the current user count, and if that username connected or disconnected.

Change the event name to `'user'`, and pass an object along containing the fields `username`, `currentUsers`, and `connected` (to be `true` in case of connection, or `false` for disconnection of the user sent). Be sure to change both `'user count'` events and set the disconnect one to send `false` for the field `connected` instead of `true` like the event emitted on connect.

```js
io.emit('user', {
  username: socket.request.user.username,
  currentUsers,
  connected: true
});
```

现在客户端已具备足够的信息，来显示当前用户数，并在用户连接或断开连接时通知！ 接下来我们需要在客户端监听 `'user'` 事件，然后用 jQuery 把 `#num-users` 节点的文本内容更新为 `'{NUMBER} users online'`。 同时，我们需要为无序列表添加一个 id 为 `messages` 且带有 `'{NAME} has {joined/left} the chat.'` 文本的 `<li>`。

实现如下：

```js
socket.on('user', data => {
  $('#num-users').text(data.currentUsers + ' users online');
  let message =
    data.username +
    (data.connected ? ' has joined the chat.' : ' has left the chat.');
  $('#messages').append($('<li>').html('<b>' + message + '</b>'));
});
```

完成上述要求后，你可以在下方提交你的页面链接。 If you're running into errors, you can check out <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135/3#announce-new-users-10" target="_blank" rel="noopener noreferrer nofollow">the project completed up to this point </a>.

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

客户端应处理和显示 `'user'` 中的新数据。

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
