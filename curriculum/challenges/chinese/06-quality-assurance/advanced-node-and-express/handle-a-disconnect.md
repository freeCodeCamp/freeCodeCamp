---
id: 589fc831f9fc0f352b528e76
title: 处理连接断开
challengeType: 2
forumTopicId: 301552
dashedName: handle-a-disconnect
---

# --description--

你也许注意到，目前为止我们只处理用户数量的增加，没有处理减少。 事实上，处理用户断开连接也很简单。 区别在于，新连接的监听是发生在整个服务器上，但连接断开的监听是发生在每个 socket 上。

为此，我们需要在目前的 `'connect'` 监听里面添加另一个监听器，监听 socket 断开连接 `'disconnect'` 的事件。 通过登录已与控制台断开连接的用户，你可以测试这个功能。

```js
socket.on('disconnect', () => {
  /*anything you want to do on disconnect*/
});
```

确保客户端不断更新当前用户的数量，当断开连接发生时，你应该在 `currentUsers` 上减去 1，然后发送 `'user count'` 事件和更新的计数。

**注意：**和 `'disconnect'` 类似，所有 socket 可以发送到服务器的事件，我们都应该在有 “socket” 定义的连接监听器里处理。

完成上述要求后，请提交你的页面链接。 如果你在运行时遇到错误，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#handle-a-disconnect-8" target="_blank" rel="noopener noreferrer nofollow">查看已完成的项目</a>。

# --hints--

服务器应处理断开 socket 连接的事件。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(data, /socket.on.*('|")disconnect('|")/s, '');
}
```

你的客户端应该监听 `'user count'` 事件。

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
