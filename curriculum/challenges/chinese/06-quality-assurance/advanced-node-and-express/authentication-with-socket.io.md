---
id: 589fc831f9fc0f352b528e77
title: 使用 Socket.IO 进行身份验证
challengeType: 2
forumTopicId: 301548
dashedName: authentication-with-socket-io
---

# --description--

目前，你还无法确定连接到服务器的用户身份。 虽然 `req.user` 包含用户信息，但这个只在用户直接与服务器交互时产生。当用户通过 web socket 与服务器连接时，由于不存在 `req` 对象，我们就无法获取用户数据。 解决这个问题的方法之一是通过读取和解析请求中包含 passport session 的 cookie，然后反序列化，进而获取用户信息对象。 幸运的是，NPM 上有可以让这个复杂的流程简单化的库。

`passport.socketio@~3.7.0`、`connect-mongo@~3.2.0` 和 `cookie-parser@~1.4.5` 已经被添加为依赖项。 分别请求它们为 `passportSocketIo`、`MongoStore` 和 `cookieParser`。 同时，我们需要从之前引入的 `express-session` 中初始化新的内存。 就像这样：

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
console.log('user ' + socket.request.user.username + ' connected');
```

它将在服务器控制台记录已连接的用户！

完成以上要求后，请提交你的页面链接。 如果你在运行时遇到错误，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#authentication-with-socketio-9" target="_blank" rel="noopener noreferrer nofollow">查看已完成的项目</a>。

# --hints--

应添加 `passport.socketio` 作为依赖。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport.socketio',
    'Your project should list "passport.socketio" as a dependency'
  );
}
```

应添加 `cookie-parser` 作为依赖。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'cookie-parser',
    'Your project should list "cookie-parser" as a dependency'
  );
}
```

应正确引入 passportSocketIo。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require\((['"])passport\.socketio\1\)/gi,
    'You should correctly require and instantiate "passport.socketio"'
  );
}
```

应正确配置 passportSocketIo。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io\.use\(\s*\w+\.authorize\(/,
    'You should register "passport.socketio" as socket.io middleware and provide it correct options'
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
