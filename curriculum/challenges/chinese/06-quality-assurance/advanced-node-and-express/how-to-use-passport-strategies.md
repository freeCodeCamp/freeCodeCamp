---
id: 5895f70df9fc0f352b528e69
title: 如何使用 Passport 策略
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

在提供的 `index.pug` 文件中，有一个登录表格。 它被隐藏了，因为内联的 JavaScript `if showLogin` 和在它之后缩进的表单。

在页面的 `res.render` 中，为对象添加一个新变量：`showLogin: true`。 当你刷新你的页面时，应该能看到表单！ 此表单被设置为 `/login` 上的 **POST**。 所以，你应该在这里设置接受 POST 请求并认证用户。

对于这个挑战，你应该添加路由 `/login` 来接受 POST 请求。 要验证此路由，你需要添加一个中间件，然后发送回复。 这可以通过在你的响应之前向中间件传递另一个参数来实现。 要使用的中间件是 `passport.authenticate('local')`。

`passport.authenticate` 也可以把一些选项作为参数，例如 `{ failureRedirect: '/' }`，这非常有用，因此也要确保增加这一点。 在使用中间件后添加一个响应（只有在认证中间件通过后才会被调用），将用户重定向到 `/profile`。 添加该路由，让它呈现视图 `profile.pug`。

如果认证成功，用户对象将被保存在 `req.user`。

现在，如果你在表单中输入用户名和密码，它应该重定向到主页 `/`，你的服务器的控制台应该显示 `'User {USERNAME} attempted to log in.'`，因为目前未注册的用户无法登录。

完成后，提交你的页面链接。 如果你在运行时遇到错误，可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#how-to-use-passport-strategies-7" target="_blank" rel="noopener noreferrer nofollow">查看已完成的项目</a>。

# --hints--

所有步骤都应该在 `server.js` 中正确实现。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /showLogin:( |)true/,
    'You should be passing the variable "showLogin" as true to your render function for the homepage'
  );
  assert.match(
    data,
    /failureRedirect:( |)('|")\/('|")/,
    'Your code should include a failureRedirect to the "/" route'
  );
  assert.match(
    data,
    /login[^]*post[^]*local/,
    'You should have a route for login which accepts a POST and passport.authenticates local'
  );
}
```

`/login` 的 POST 请求应该正确重定向到 `/`。

```js
async (getUserInput) => {
  const url = new URL("/login", getUserInput("url"));
  const res = await fetch(url, { method: 'POST' });
  const data = await res.text();
  assert.match(
    data,
    /Looks like this page is being rendered from Pug into HTML!/,
    'A login attempt at this point should redirect to the homepage since we do not have any registered users'
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
