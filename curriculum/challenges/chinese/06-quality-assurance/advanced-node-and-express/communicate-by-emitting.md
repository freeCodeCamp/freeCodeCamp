---
id: 589fc831f9fc0f352b528e75
title: 通过 Emitting 通信
challengeType: 2
forumTopicId: 301550
dashedName: communicate-by-emitting
---

# --description--

<dfn>Emit</dfn> 是你会用到的最常见的通信方式。 如果我们从服务器发送信息给 “io”，就相当于把事件的名称和数据发送给了所有处于连接状态的 socket。 我们可以利用这个特性实现这样的功能：只要有新用户连接到服务器，我们就可以把目前连接的总用户数发给所有已连接的用户，这样所有用户随时都可以看到实时的在线人数。

首先，我们需要在监听连接的地方之前添加一个用于追踪用户数的变量：

```js
let currentUsers = 0;
```

然后，只要有人连接到服务器，就需要在发出用户数量之前先给这个变量加 1。 因此，需要在连接监听器中增加一个递增器。

```js
++currentUsers;
```

最后，在监听连接的地方发出（emit）该事件即可。 这个事件应命名为 “user count”，且数据应该为 `currentUsers`：

```js
io.emit('user count', currentUsers);
```

现在，你实现了在客户端监听此事件。 类似在服务器上监听连接，你将使用 `on` 关键字。

```js
socket.on('user count', function(data) {
  console.log(data);
});
```

现在你可以尝试启动你的 app 并登录，你会看到在客户端的控制台打印出了 “1”，这就表示目前连接到服务器的用户数为 1。 你可以试着通过打开多个 app 来验证数量是否会增加。

完成上述要求后，请提交你的页面链接。 如果你在运行时遇到错误，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#communicate-by-emitting-7" target="_blank" rel="noopener noreferrer nofollow">查看到目前为止已完成的项目</a>。

# --hints--

应该定义 `currentUsers`。

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

服务器应在有新的连接时发送当前用户数量。

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
