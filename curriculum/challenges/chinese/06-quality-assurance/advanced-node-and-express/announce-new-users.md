---
id: 589fc832f9fc0f352b528e78
title: 用户公告
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

许多聊天室都有这个功能：所有已连接到服务器的在线用户都会看到有人加入或退出的提醒。 我们已经写好了处理连接和断开事件的代码，只要对这个方法稍作修改就可以实现这个功能。 最合理的方式是随事件发送 3 个数据：连接/断开连接的用户的用户名、当前的用户数，以及该用户名是否连接或断开连接。

将事件名称更改为 `'user'`，传递一个对象，其中应包含如下字段：`username`、`currentUsers` 和 `connected`（布尔值，连接上即为 `true`，断开则是 `false`）。 记得更改两个 `'user count'` 事件，设置断开连接事件向 `connected` 字段发送 `false` ，而不是像连接上的事件一样发送 `true`。

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

完成上述要求后，你可以在下方提交你的页面链接。 如果你在运行时遇到错误，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135/3#announce-new-users-10" target="_blank" rel="noopener noreferrer nofollow">查看已完成的项目</a>。

# --hints--

事件 `'user'` 应该与 `name`、`currentUsers` 和 `connected` 一起发送。

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
