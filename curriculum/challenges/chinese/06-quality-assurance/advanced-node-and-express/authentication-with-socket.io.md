---
id: 589fc831f9fc0f352b528e77
title: 使用Socket.IO进行身份验证
challengeType: 2
forumTopicId: 301548
dashedName: authentication-with-socket-io
---

# --description--

目前，我们还无法确定连接到服务器的用户身份。虽然 `req.user` 包含用户信息，但这个只在用户直接与服务器交互（即不通过 web socket 访问服务器资源）时产生。当我们的用户通过 web socket 与服务器连接时，由于不存在 `req` 对象，因此我们无法获取用户数据。解决这个问题的方法之一是通过读取和解析请求中包含 passport session 的 cookie，然后反序列化，进而获取用户信息对象。幸运的是，npm 上有可以让这个复杂的流程简单化的库。

添加 `passport.socketio`、`connect-mongo`、`cookie-parser` 作为依赖，把它们分别赋值给 `passportSocketIo`、`MongoStore`、`cookieParser`。同时，我们需要从之前引入的 `express-session` 中开辟新的内存空间，就像接下来这样：

```js
const MongoStore = require('connect-mongo')(session);
const URI = process.env.MONGO_URI;
const store = new MongoStore({ url: URI });
```

现在我们只需要让 Socket.IO 调用它并进行相应的配置即可。请注意，以上这些都必须放在现有的 socket 相关代码之前，而且不能放到连接的监听回调函数里。你的服务器代码应类似于这样：

```js
io.use(
  passportSocketIo.authorize({
    cookieParser: cookieParser,
    key: 'express.sid',
    secret: process.env.SESSION_SECRET,
    store: store,
    success: onAuthorizeSuccess,
    fail: onAuthorizeFail
  })
);
```

记得要把 `key` 和 `store` 加到 app 的 `session` 中间件。这样，SocketIO 才知道该对哪个 session 执行此配置。

<hr>

接下来，我们可以定义 `success` 与 `fail` 的回调函数：

```js
function onAuthorizeSuccess(data, accept) {
  console.log('successful connection to socket.io');

  accept(null, true);
}

function onAuthorizeFail(data, message, error, accept) {
  if (error) throw new Error(message);
  console.log('failed connection to socket.io:', message);
  accept(null, false);
}
```

现在，我们可以通过 socket 对象通过 `socket.request.user` 访问 `user` 对象。为此，你可以这样做：

```js
console.log('user ' + socket.request.user.name + ' connected');
```

这样，我们可以在 console 里看到谁连接到了我们的服务器。

完成上述要求后，你可以在下方提交你的页面链接。 完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 [这里](https://gist.github.com/camperbot/1414cc9433044e306dd7fd0caa1c6254) 的答案。

# --hints--

应添加 `passport.socketio` 作为依赖。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport.socketio',
        'Your project should list "passport.socketio" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

应添加 `cookie-parser` 作为依赖。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'cookie-parser',
        'Your project should list "cookie-parser" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

应正确引入 passportSocketIo。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require\((['"])passport\.socketio\1\)/gi,
        'You should correctly require and instantiate "passport.socketio"'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

应正确配置 passportSocketIo。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io\.use\(\s*\w+\.authorize\(/,
        'You should register "passport.socketio" as socket.io middleware and provide it correct options'
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
