---
id: 5895f70df9fc0f352b528e69
title: 如何使用 Passport 策略
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

在提供的 `index.pug` 文件里有一个登录表单。 因为这个表单中存在行内 JavaScript 代码 `if showLogin`，因此它是隐藏的。 因为变量 `showLogin` 未定义，所以表单不会渲染。 在该页面的 `res.render` 里，给 `showLogin: true` 对象添加一个新的变量。 当你刷新页面，就会看到表单！ 表单设置为 `/login` 的 **POST**，因此我们在这里接收 POST 请求并验证用户。

在这个挑战中，你需要为 POST 请求添加路由 `/login`。 为了用这个路由进行验证，你需要在发送请求响应之前添加一个中间件。 中间件应作为参数添加到用于处理请求的函数 `function(req,res)` 之前。 对于 passport 的验证中间件，应这样调用：`passport.authenticate('local')`。

`passport.authenticate` 也接收选项作为参数，例如 `{ failureRedirect: '/' }` 就很有用，请记得添加到你的代码中。 如果中间件验证通过，响应应该是将用户重定向到 `/profile`，并渲染 `profile.pug`。

如果验证通过，用户对象将会储存到 `req.user` 中。

这时，由于我们还没有实现注册功能，如果你在表单里输入了用户名和密码，路由将会重定向到主页 `/`，在服务端将会打印 `'User {USERNAME} attempted to log in.'`。

完成上述要求后，请提交你的页面链接。 如果你遇到了问题，可以参考[这里](https://gist.github.com/camperbot/7ad011ac54612ad53188b500c5e99cb9)的答案。

# --hints--

server.js 中应正确执行所有步骤。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /showLogin:( |)true/gi,
        'You should be passing the variable "showLogin" as true to your render function for the homepage'
      );
      assert.match(
        data,
        /failureRedirect:( |)('|")\/('|")/gi,
        'Your code should include a failureRedirect to the "/" route'
      );
      assert.match(
        data,
        /login[^]*post[^]*local/gi,
        'You should have a route for login which accepts a POST and passport.authenticates local'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

到 /login 的 POST 请求应重定向到 /。

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/login').then(
    (data) => {
      assert.match(
        data,
        /Looks like this page is being rendered from Pug into HTML!/gi,
        'A login attempt at this point should redirect to the homepage since we do not have any registered users'
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
