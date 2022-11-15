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

在服务端，我们需要监听包含 `message` 数据的 `'chat message'` 事件。 Once the event is received, it should emit the event `'chat message'` to all sockets using `io.emit`, sending a data object containing the `username` and `message`.

In `client.js`, you should now listen for event `'chat message'` and, when received, append a list item to `#messages` with the username, a colon, and the message!

至此，我们已经完成发送信息到所有客户端的功能。

完成上述要求后，请提交你的页面链接。 If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#send-and-display-chat-messages-11" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

服务端应监听 `'chat message'`，且应在监听到后发送它。

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

客户端应正确处理和展示从 `'chat message'` 事件发来的新数据。

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
