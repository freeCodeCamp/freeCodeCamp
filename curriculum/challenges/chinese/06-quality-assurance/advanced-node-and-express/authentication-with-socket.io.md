---
id: 589fc831f9fc0f352b528e77
title: 使用 Socket.IO 进行身份验证
challengeType: 2
forumTopicId: 301548
dashedName: authentication-with-socket-io
---

# --description--

目前，你还无法确定连接到服务器的用户身份。 虽然 `req.user` 包含用户信息，但这个只在用户直接与服务器交互时产生。当用户通过 web socket 与服务器连接时，由于不存在 `req` 对象，我们就无法获取用户数据。 解决这个问题的方法之一是通过读取和解析请求中包含 passport session 的 cookie，然后反序列化，进而获取用户信息对象。 幸运的是，NPM 上有可以让这个复杂的流程简单化的库。

`passport.socketio@~3.7.0`, `connect-mongo@~3.2.0`, and `cookie-parser@~1.4.5` have already been added as dependencies. Require them as `passportSocketIo`, `MongoStore`, and `cookieParser` respectively. Also, we need to initialize a new memory store, from `express-session` which we previously required. It should look like this:

```js
const MongoStore = require('connect-mongo')(session);
const URI = process.env.MONGO_URI;
const store = new MongoStore({ url: URI });
```

现在我们只需要让 Socket.IO 调用它并进行相应的配置即可。 请注意，以上这些都必须放在现有的 socket 相关代码之前，而且不能放到连接的监听回调函数里。 你的服务器代码应类似于这样：

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

请注意，为 Socket.IO 配置 Passport 认证与我们为 API 配置的 `session` 中间件非常相似。 这是因为它们旨在使用相同的身份验证方法 — — 从 cookie 获取会话 id 并验证它。

以前，当我们配置 `session` 中间件的时候，我们没有为 session 明确设置 cookie 名称（`key`）。 这是因为 `session` 包使用了默认值。 现在我们已经添加了另一个需要从 cookie 访问相同值的软件包， 我们需要在两个配置对象中设置 `key` 值。

请将带有 cookie 名称的 `key` 添加到匹配 Socket.IO 密钥的 `session` 中间件。 另外，将 `store` 引用添加到选项中，靠近我们设置 `saveUninitialized: true` 的位置。 这样，Socket.IO 才知道与哪个 session 关联。

<hr />

接下来，定义 `success` 与 `fail` 回调函数：

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

现在，我们可以通过 `socket.request.user` 访问用户对象。 例如，你可以这样做：

```js
console.log('user ' + socket.request.user.name + ' connected');
```

它将在服务器控制台记录已连接的用户！

完成以上要求后，请提交你的页面链接。 If you're running into errors, you can check out the project up to this point <a href="https://gist.github.com/camperbot/1414cc9433044e306dd7fd0caa1c6254" target="_blank" rel="noopener noreferrer nofollow">https://gist.github.com/camperbot/1414cc9433044e306dd7fd0caa1c6254</a>.

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
