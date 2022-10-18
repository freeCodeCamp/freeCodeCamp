---
id: 589fc832f9fc0f352b528e79
title: 发送和显示聊天消息
challengeType: 2
forumTopicId: 301562
dashedName: send-and-display-chat-messages
---

# --description--

是时候开始允许用户向服务器发送聊天消息，以向所有客户端发送消息了！ 在 `client.js` 文件里，你应该已经注意到了这段提交消息表单的代码：

```js
$('form').submit(function() {
  /*logic*/
});
```

在表单提交代码中，需要处理发送（emit）事件，它应该发生在定义 `messageToSend` 之后，以及清除 `#m` 中的文本之前。 我们称这个事件为 `'chat message'`，需发送的数据为 `messageToSend`。

```js
socket.emit('chat message', messageToSend);
```

在服务端，我们需要监听包含 `message` 数据的 `'chat message'` 事件。 当事件发生，我们就通过 `io.emit` 把包含 `name` 和 `message` 的 `'chat message'` 事件发送给所有已连接的 socket。

在 `client.js` 中，我们需要监听 `'chat message'` 事件。只要接收到这个事件，就把包含名字和消息的内容（注意：需要在名字后添加冒号）添加到 `#messages`。

至此，我们已经完成发送信息到所有客户端的功能。

完成上述要求后，请提交你的页面链接。 If you're running into errors, you can <a href="https://gist.github.com/camperbot/d7af9864375207e254f73262976d2016" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

服务端应监听 `'chat message'`，且应在监听到后发送它。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")chat message('|")[^]*io.emit.*('|")chat message('|").*name.*message/gis,
        'Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

客户端应正确处理和展示从 `'chat message'` 事件发来的新数据。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")chat message('|")[^]*messages.*li/gis,
        'You should append a list item to #messages on your client within the "chat message" event listener to display the new message'
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
