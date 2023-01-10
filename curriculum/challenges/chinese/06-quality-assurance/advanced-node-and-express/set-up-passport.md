---
id: 5895f70cf9fc0f352b528e65
title: 设置 Passport
challengeType: 2
forumTopicId: 301565
dashedName: set-up-passport
---

# --description--

现在我们来创建 *Passport*，最终我们需要用它来实现用户注册和登录。 除了 Passport，我们还会用 Express-session 来处理 session（会话）。 Express-session 有许多高级特性供你使用，但你暂时只需要了解其基础功能。 在客户端，我们可以用这个中间件把 session id 储存到 cookie。同时，我们可以在服务器上通过这个 id 访问 session 数据。 通过这种方式，你无需把用户的个人账号信息存到 cookie，来完成用户的验证。只需要用这个 id 作为 *key* 来访问服务器上用户的数据即可。

`passport@~0.4.1` 和 `express-session@~1.17.1` 已经安装，并且在你的 `package.json` 文件中均被列为依赖项。

现在，你需要配置 session 并初始化 Passport。 首先，创建变量 `session` 和 `passport` 以便分别请求 `express-session` 和 `passport`。

然后，通过定义以下选项来设置你的 Express 应用程序来使用会话：

```javascript
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
```

请在 `.env` 文件中添加 `SESSION_SECRET`，并给它赋一个随机值。 这是用来计算用于加密你的 cookie 的哈希值的！

在你做了所有这些后，告诉你的 Express 应用程序**使用** `passport.initialize()` 和 `passport.session()`。

完成后，提交你的页面链接。 如果你遇到错误，可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-passport-3" target="_blank" rel="noopener noreferrer nofollow">查看已完成的项目</a>。

# --hints--

应添加 Passort 和 Express-session 作为依赖。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport',
    'Your project should list "passport" as a dependency'
  );
  assert.property(
    packJson.dependencies,
    'express-session',
    'Your project should list "express-session" as a dependency'
  );
}
```

依赖应正确引入。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')passport("|')/,
    'You should have required passport'
  );
  assert.match(
    data,
    /require.*("|')express-session("|')/,
    'You should have required express-session'
  );
}
```

Express app 可以使用新的依赖。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(data, /passport\.initialize/, 'Your express app should use "passport.initialize()"');
  assert.match(data, /passport\.session/, 'Your express app should use "passport.session()"');
}
```

应正确设置 session 和 session secret。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /secret *:\s*process\.env(\.SESSION_SECRET|\[(?<q>"|')SESSION_SECRET\k<q>\])/,
    'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET'
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
