---
id: 589fc832f9fc0f352b528e79
title: 发送和显示聊天消息
challengeType: 2
forumTopicId: 301562
---

# --description--

现在，我们可以开始实现聊天室功能了。整体逻辑很简单，只需要获取用户发给服务端的消息，再通过服务端给所有客户端发送信息就可以了。在 client.js 文件里，你应该已经注意到了这段提交表单的代码：

```js
$('form').submit(function() {
  /*logic*/
});
```

现在我们需要处理事件的 emit，它应该发生在定义 `messageToSend` 之后，以及清除 `#m` 中的文本之前。我们称这个事件叫 `'chat message'`，需发送的数据叫 `messageToSend`：

```js
socket.emit('chat message', messageToSend);
```

在服务端，我们需要监听包含 `message` 的 `'chat message'` 事件。一旦事件发生，我们就通过`io.emit` 把包含 `name` 和 `message` 的 `'chat message'` 事件发送给所有已连接的 socket。

回到客户端，我们需要监听 `'chat message'` 事件。只要接收到这个事件，就把包含名字和消息的内容（注意：需要在名字后添加冒号）通过 `<li>` 添加到 `#messages`。

至此，我们已经完成发送信息到所有客户端的功能。

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 [这里](https://gist.github.com/camperbot/d7af9864375207e254f73262976d2016) 的答案。

# --hints--

服务端应监听 `'chat message'`，且应在监听到后 emit。

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

