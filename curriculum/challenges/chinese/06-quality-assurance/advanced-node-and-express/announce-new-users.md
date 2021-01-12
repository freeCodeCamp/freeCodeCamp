---
id: 589fc832f9fc0f352b528e78
title: 宣布新用户
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

许多聊天室都有这个功能：所有已连接到服务器的在线用户都会看到有人加入或退出的提醒。我们已经写好了处理连接和断开事件的代码，只要对这个方法稍作修改就可以实现这个功能。在事件中，我们需要发送这三条信息：连接或断开的用户名、当前用户数量、事件类型（即需要知道用户究竟是连接还是断开）。 请将事件名称更改为 `'user'`，其中应包含如下字段：'name'、'currentUsers'、'connected'（布尔值，连接上即为 `true`，断开则是 `false`）。记得要修改之前我们写好的处理 'user count' 的那部分代码，现在我们应在用户连接时传入布尔值 `true`；在用户断开连接是传入布尔值 `false`。

```js
io.emit('user', {
  name: socket.request.user.name,
  currentUsers,
  connected: true
});
```

现在，我们的客户端已经有足够的信息显示现有用户数量和发送用户上下线通知。接下来我们需要在客户端监听 'user' 事件，然后使用 jQuery 把 `#num-users` 节点的文本内容更新为 '{NUMBER} users online'。同时，我们需要为 `<ul>` 添加一个 id 为 'messages' 且带有 '{NAME} has {joined/left} the chat.' 文本的`<li>`。 一种实现方式如下：

```js
socket.on('user', data => {
  $('#num-users').text(data.currentUsers + ' users online');
  let message =
    data.name +
    (data.connected ? ' has joined the chat.' : ' has left the chat.');
  $('#messages').append($('<li>').html('<b>' + message + '</b>'));
});
```

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 [这里](https://gist.github.com/camperbot/bf95a0f74b756cf0771cd62c087b8286) 的答案。

# --hints--

`'user'` 事件应发送包含 name、currentUsers、connected 字段的对象。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.emit.*('|")user\1.*name.*currentUsers.*connected/gis,
        'You should have an event emitted named user sending name, currentUsers, and connected'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

客户端应处理和显示 `'user'` 对象中的信息

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")user\1[^]*num-users/gi,
        'You should change the text of "#num-users" within on your client within the "user" event listener to show the current users connected'
      );
      assert.match(
        data,
        /socket.on.*('|")user\1[^]*messages.*li/gi,
        'You should append a list item to "#messages" on your client within the "user" event listener to announce a user came or went'
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
