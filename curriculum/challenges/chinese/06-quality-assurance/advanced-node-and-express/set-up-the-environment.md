---
id: 589fc830f9fc0f352b528e74
title: 设置环境
challengeType: 2
forumTopicId: 301566
dashedName: set-up-the-environment
---

# --description--

在接下来的挑战中，我们将会用到 `chat.pug` 文件。 首先，在你的 `routes.js` 文件中为 `/chat` 添加一个处理 GET 请求的路由，并给它传入 `ensureAuthenticated`。在回调函数中，我们需要让它渲染 `chat.pug` 文件，并在响应中包含 `{ user: req.user }` 信息。 现在，请修改 `/auth/github/callback` 路由，让它可以像这样设置 user_id：`req.session.user_id = req.user.id`，并在设置完成后重定向至 `/chat`。

`socket.io@~2.3.0` has already been added as a dependency, so require/instantiate it in your server as follows with `http` (comes built-in with Nodejs):

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

现在我们的 *express 应用*已经包含了 *http* 服务，接下来我们需要监听 *http* 服务的事件。 为此，我们需要把 `app.listen` 更新为 `http.listen`。

需要处理的第一件事是监听客户端的新连接。 <dfn>on</dfn> 关键字就是监听这个特定事件。 It requires 2 arguments: a string containing the title of the event that's emitted, and a function with which the data is passed through. 在连接监听器中，我们用 *socket* 来代表它所包含的数据。 socket 就是指已连接到服务器的客户端。

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

在这个文件中，我们没有定义 “io” 变量，但第一行的注释会阻止运行时产生的报错。 不过，我们在 chat.pug 的页面上已经为你添加好了 Socket.IO 库的 CDN。

现在你可以重启一下你的 app，尝试一下验证用户，然后你应该会看到服务器的 console 里输出了 “A user has connected”。

**注意：**只有在连接到处于同一个 url/server 上的 socket 时，`io()`才可以正常执行。 如果需要连接到外部的 socket，就需要这样调用：`io.connect('URL');`。

完成上述要求后，请提交你的页面链接。 If you're running into errors, you can <a href="https://gist.github.com/camperbot/aae41cf59debc1a4755c9a00ee3859d1" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

应添加 `socket.io` 作为依赖。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'socket.io',
        'Your project should list "socket.io" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

应正确引入 `http`，并实例化为 `http`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /http.*=.*require.*('|")http\1/gi,
        'Your project should list "http" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

应正确引入 `socket.io`，并实例化为 `io`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.*=.*require.*('|")socket.io\1.*http/gi,
        'You should correctly require and instantiate socket.io as io.'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Socket.IO 应监听连接。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.on.*('|")connection\1.*socket/gi,
        'io should listen for "connection" and socket should be the 2nd arguments variable'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

客户端应连接到服务器。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.*=.*io/gi,
        'Your client should be connection to server with the connection defined as socket'
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
