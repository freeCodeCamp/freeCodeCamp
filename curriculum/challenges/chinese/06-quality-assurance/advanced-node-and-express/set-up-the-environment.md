---
id: 589fc830f9fc0f352b528e74
title: 设置环境
challengeType: 2
forumTopicId: 301566
dashedName: set-up-the-environment
---

# --description--

在接下来的挑战中，我们将会用到 `chat.pug` 文件。 首先，在你的 `routes.js` 文件中为 `/chat` 添加一个处理 GET 请求的路由，并给它传入 `ensureAuthenticated`。在回调函数中，我们需要让它渲染 `chat.pug` 文件，并在响应中包含 `{ user: req.user }` 信息。 现在，请修改 `/auth/github/callback` 路由，让它可以像这样设置 user_id：`req.session.user_id = req.user.id`，并在设置完成后重定向至 `/chat`。

已添加 `socket.io@~2.3.0` 作为依赖项，在你的服务器中和 `http` （内置在 Nodejs 中）一起导入/实例化，具体如下：

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

现在我们的 *express 应用*已经包含了 *http* 服务，接下来我们需要监听 *http* 服务的事件。 为此，我们需要把 `app.listen` 更新为 `http.listen`。

需要处理的第一件事是监听客户端的新连接。 <dfn>on</dfn> 关键字就是监听这个特定事件。 它需要 2 个参数：一个包含所发出事件标题的字符串，以及一个用于传递数据的函数。 在连接监听器中，我们用 `socket` 来定义第二个参数中的数据。 socket 就是指已连接到服务器的客户端。

为了可以监听服务器的连接事件，我们在数据库连接的部分加入如下代码：

```javascript
io.on('connection', socket => {
  console.log('A user has connected');
});
```

对于发出连接事件的客户端，只需要在认证后页面加载出的 `client.js` 中添加以下内容：

```js
/*global io*/
let socket = io();
```

在这个文件中，我们没有定义 “io” 变量，但第一行的注释会阻止运行时产生的报错。 你已经在 `chat.pug` 中在页面上为 Socket.IO 库添加了一个可靠的CDN。

现在你可以重启一下你的 app，尝试一下验证用户，然后你应该会看到服务器的 console 里输出了 `A user has connected`。

**注意：**只有在连接到处于同一个 url/server 上的 socket 时，`io()`才可以正常执行。 如果需要连接到外部的 socket，就需要这样调用：`io.connect('URL');`。

完成上述要求后，请提交你的页面链接。 如果你遇到错误，可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-the-environment-6" target="_blank" rel="noopener noreferrer nofollow">查看已完成的项目</a>。

# --hints--

应添加 `socket.io` 作为依赖。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'socket.io',
    'Your project should list "socket.io" as a dependency'
  );
}
```

应正确引入 `http`，并实例化为 `http`。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /http.*=.*require.*('|")http\1/s,
    'Your project should list "http" as a dependency'
  );
}
```

应正确引入 `socket.io`，并实例化为 `io`。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.*=.*require.*('|")socket.io\1.*http/s,
    'You should correctly require and instantiate socket.io as io.'
  );
}
```

Socket.IO 应监听连接。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.on.*('|")connection\1.*socket/s,
    'io should listen for "connection" and socket should be the 2nd arguments variable'
  );
}
```

客户端应连接到服务器。

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.*=.*io/s,
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
