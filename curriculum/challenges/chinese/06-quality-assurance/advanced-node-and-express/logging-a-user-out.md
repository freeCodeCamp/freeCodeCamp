---
id: 58965611f9fc0f352b528e6c
title: 用户退出登录
challengeType: 2
forumTopicId: 301560
dashedName: logging-a-user-out
---

# --description--

创建退出登录的逻辑是比较简单的。 路由应该取消用户的认证，并重定向到主页，而不是渲染任何视图。

在 passport 里，只需要在重定向前调用 `req.logout()` 即可完成用户的退出登录。 添加 `/logout` 路由来实现：

```js
app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});
```

你可能已经注意到我们还没有处理 404 错误，这个错误码代表页面无法找到。 在 Node 中我们通常会用如下的中间件来处理。 请在所有路由之后添加这段代码：

```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```

完成上述要求后，请提交你的页面链接。 如果你在运行时遇到错误，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#logging-a-user-out-10" target="_blank" rel="noopener noreferrer nofollow">查看已完成的项目</a>。

# --hints--

`req.logout()` 应在 `/logout` 路由中调用。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /req.logout/gi,
    'You should be calling req.logout() in your /logout route'
  );
}
```

`/logout` 应重定向到主页。

```js
async (getUserInput) => {
  const url = new URL("/logout", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /Home page/gi,
    'When a user logs out they should be redirected to the homepage'
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
