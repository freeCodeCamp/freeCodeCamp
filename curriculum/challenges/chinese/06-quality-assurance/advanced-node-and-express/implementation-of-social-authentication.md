---
id: 589a69f5f9fc0f352b528e70
title: 实现社交账号认证
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

在应用中这种验证的基本路径是：

1.  用户点击一个按钮或链接，访问你的路由，使用特定的策略（例如 GitHub）进行认证。
2.  需要在路由中调用 `passport.authenticate('github')`，跳转至 GitHub 验证页面。
3.  页面跳转到 GitHub 上，如果用户未登录 GitHub，就需要在这里进行登录。 然后它要求他们批准从你的应用程序访问他们的个人资料。
4.  如果用户被批准，他们会在一个特定的回调 url 上带着他们的个人资料返回到你的应用程序。
5.  验证已完成。我们的应用需要查询这个用户是否已经存在。如果是新用户，那我们需要把用户信息存储到数据库。

在 OAuth 验证策略中，我们至少需要提供 *Client ID* 和 *Client Secret*，这样第三方平台就会获悉验证请求的来源，以及这个来源是否有效。 为此，需要去我们使用的第三方验证平台（比如 GitHub）获取这两个字段的值。 注意，我们获取到的这个值是唯一的，仅对我们的当前 app 有效——**因此，千万不要分享给别人**，更不要上传到公共仓库或者直接写在代码里。 通常，我们会把它们放在 `.env` 文件里，并通过 `process.env.GITHUB_CLIENT_ID` 获取。 在这个挑战中，你要使用 GitHub 策略。

按照<a href="https://www.freecodecamp.org/news/how-to-set-up-a-github-oauth-application/" target="_blank" rel="noopener noreferrer nofollow">这些说明</a>从 GitHub 获取你的 *客户端 ID 和密钥*。 将主页 URL 设置为你的 Replit 主页（**而不是项目代码的 URL**），并将回调 URL 设置为相同的主页 URL，并在末尾添加 `/auth/github/callback`。 将客户端 ID 和你的客户端密码保存到你的项目的 `.env`，作为 `GITHUB_CLIENT_ID` 和 `GITHUB_CLIENT_SECRET`。

在你的 `routes.js` 文件中，添加 `showSocialAuth: true` 到主页路由，在 `showRegistration: true` 的后面。 现在，创建两个接收 GET 请求的路由：`/auth/github` 和 `/auth/github/callback`。 第一个应该只调用 passport 来验证 `'github'`。 第二个应该调用 passport 来验证 `'github'`，失败后重定向到 `/`，然后如果成功则重定向到 `/profile`（与你的上一个项目类似）。

`/auth/github/callback` 的例子应该与你处理正常登录的方式相似：

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

完成之后，提交你的页面链接。 如果你在运行时遇到错误，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-3" target="_blank" rel="noopener noreferrer nofollow">查看已完成的项目</a>。

# --hints--

路由 `/auth/github` 应该是正确的。

```js
async (getUserInput) => {
  try {
    const res = await fetch(getUserInput('url') + '/_api/routes.js');
    if (res.ok) {
      const data = await res.text();
      assert.match(
          data.replace(/\s/g, ''),
          /passport.authenticate.*?github/g,
          'Route auth/github should only call passport.authenticate with github'
        );
    } else {
      throw new Error(res.statusText);
    }
    const res2 = await fetch(getUserInput('url') + '/_api/app-stack');
    if (res2.ok) {
      const data2 = JSON.parse(await res2.json());
      const dataLayer = data2.find(layer => layer?.route?.path === '/auth/github');
      assert.deepInclude(dataLayer?.route, { methods: {get: true}, path: "/auth/github"});
      assert.deepInclude(dataLayer?.route?.stack?.[0], {method: "get", name: "authenticate"});
    } else {
      throw new Error(res2.statusText);
    }
  } catch (err) {
    throw new Error(err);
  }
}
```

路由 `/auth/github/callback` 应该是正确的。

```js
async (getUserInput) => {
  try {
    const res = await fetch(getUserInput('url') + '/_api/routes.js');
    if (res.ok) {
      const data = await res.text();
      assert.match(
        data.replace(/\s/g, ''),
        /failureRedirect:("|')\/\1/g,
        'Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home'
      );
    } else {
      throw new Error(res.statusText);
    }
    const res2 = await fetch(getUserInput('url') + '/_api/app-stack');
    if (res2.ok) {
      const data2 = JSON.parse(await res2.json());
      const dataLayer = data2.find(layer => layer?.route?.path === '/auth/github/callback');
      assert.deepInclude(dataLayer?.route, { methods: {get: true}, path: "/auth/github/callback"});
      assert.deepInclude(dataLayer?.route?.stack?.[0], {method: "get", name: "authenticate"});
    } else {
      throw new Error(res2.statusText);
    }
  } catch (err) {
    throw new Error(err);
  }
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
