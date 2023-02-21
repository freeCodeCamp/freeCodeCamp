---
id: 5895f70df9fc0f352b528e68
title: 身份验证策略
challengeType: 2
forumTopicId: 301547
dashedName: authentication-strategies
---

# --description--

策略是认证用户的一种方式。 如果你让用户在注册时填写了用户信息，那你就可以基于这些信息进行验证。或者也可以引入第三方登录，如 Google 或者 Github。 在这个项目中，我们将使用 Passport 中间件。 Passport 提供了一套全面的策略，支持使用用户名和密码、GitHub、谷歌等进行认证。

`passport-local@~1.0.0` 已经被添加为依赖项。 将其添加到你的服务器，如下所示：

```javascript
const LocalStrategy = require('passport-local');
```

然后，需要让 passport **使用**一个实例化的 `LocalStrategy` 对象，这个对象的一些设置已完成。 请注意，接下来的所有代码都应写在连接数据库的回调中，因为它们的执行都依赖数据库。

```javascript
passport.use(new LocalStrategy((username, password, done) => {
  myDataBase.findOne({ username: username }, (err, user) => {
    console.log(`User ${username} attempted to log in.`);
    if (err) return done(err);
    if (!user) return done(null, false);
    if (password !== user.password) return done(null, false);
    return done(null, user);
  });
}));
```

这是定义当你试图在本地验证某人时要使用的程序： 首先，它试图在你的数据库中找到一个具有输入的用户名的用户。 然后检查密码是否匹配。 最后，如果没有弹出你检查的错误（例如，一个错误的密码），返回 `user` 对象，并且它们已经被验证。

许多策略是通过不同的设置来制定的。 一般来说，很容易根据该策略的仓库中的 README 来建立它。 一个很好的例子是 GitHub 策略。在该策略中，你不需要写用户名或密码的相关验证逻辑，因为用户将被引导到 GitHub 页面进行验证。 只要用户登录并同意，GitHub 就会返回用户的个人信息供你使用。

下一步，你将根据表单数据设置如何实际调用认证策略来验证用户。

完成上述要求后，请提交你的页面链接。 如果你在运行时遇到错误，可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#authentication-strategies-6" target="_blank" rel="noopener noreferrer nofollow">查看已完成的项目</a>。

# --hints--

需要使用 passport-local 作为依赖。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport-local',
    'Your project should list "passport-local " as a dependency'
  );
}
```

应该正确地引入和配置 Passport-local。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')passport-local("|')/,
    'You should have required passport-local'
  );
  assert.match(
    data,
    /new LocalStrategy/,
    'You should have told passport to use a new strategy'
  );
  assert.match(
    data,
    /findOne/,
    'Your new local strategy should use the findOne query to find a username based on the inputs'
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
