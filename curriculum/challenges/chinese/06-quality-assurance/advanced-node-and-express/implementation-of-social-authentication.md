---
id: 589a69f5f9fc0f352b528e70
title: 实现第一种社交登录
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

在应用中这种验证的基本路径是：

1.  在用户点击按钮或者链接后，进入验证页面，通过第三方平台（如 GitHub）来进行用户验证。
2.  需要在路由中调用 `passport.authenticate('github')`，跳转至 GitHub 验证页面。
3.  页面跳转到 GitHub 上，如果用户未登录 GitHub，就需要在这里进行登录。 登录成功后，会出现向用户申请访问权限的确认页。
4.  如果用户同意访问，则用户会回到我们提供的回调地址，带着 GitHub 那边提供的用户信息回到我们的 app 中。
5.  验证已完成。我们的应用需要查询这个用户是否已经存在。如果是新用户，那我们需要把用户信息存储到数据库。

在 OAuth 验证策略中，我们至少需要提供 *Client ID* 和 *Client Secret*，这样第三方平台就会获悉验证请求的来源，以及这个来源是否有效。 为此，需要去我们使用的第三方验证平台（比如 GitHub）获取这两个字段的值。 注意，我们获取到的这个值是唯一的，仅对我们的当前 app 有效——**因此，千万不要分享给别人**，更不要上传到公共仓库或者直接写在代码里。 通常，我们会把它们放在 `.env` 文件里，并通过 `process.env.GITHUB_CLIENT_ID` 获取。 对于这次挑战，我们将会使用 GitHub 作为验证平台。

首先，你需要进入账户设置里的 “developer settings（开发者设置）”板块，在 '[OAuth applications](https://github.com/settings/developers)' 获取 *Client ID and Secret*。 点击 “Register a new application（注册一个新的应用）”，设置你的应用名称，然后把你的 Replit 主页地址（**不是项目代码的 url**）粘贴到 Homepage URL。然后，回调 url 需要设置成上面 Homepage URL 里你粘贴的地址，但后面要加上 `/auth/github/callback`。 这样在用户通过 Github 验证后才能跳转到我们指定的页面。 在你的 `.env` 文件里将返回的信息保存为 `'GITHUB_CLIENT_ID'` 和 `'GITHUB_CLIENT_SECRET'`。

在你的 `routes.js` 文件中，添加 `showSocialAuth: true` 到主页路由，在 `showRegistration: true` 的后面。 然后，为 `/auth/github` 和 `/auth/github/callback` 创建两个接收 GET 请求的路由。 第一个只需要通过调用 passport 来验证 `'github'`。 第二个应该调用 passport 来验证 `'github'`，但需要在失败时跳转回主页 `/`，成功时跳转到用户页面 `/profile`（跳转的逻辑与上一个项目中的逻辑一样）。

例如 `/auth/github/callback` 应该像我们处理在上一个项目中正常的登录一样：

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

完成上述要求后，请提交你的页面链接。 如果你遇到了问题，可以参考[这里](https://gist.github.com/camperbot/1f7f6f76adb178680246989612bea21e)的答案。

# --hints--

路由 /auth/github 应正确配置。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/routes.js').then(
    (data) => {
      assert.match(
        data.replace(/\s/g, ''),
        /('|")\/auth\/github\/?\1[^]*?get.*?passport.authenticate.*?github/gi,
        'Route auth/github should only call passport.authenticate with github'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

路由 /auth/github/callback 应正确配置。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/routes.js').then(
    (data) => {
      assert.match(
        data.replace(/\s/g, ''),
        /('|")\/auth\/github\/callback\/?\1[^]*?get.*?passport.authenticate.*?github.*?failureRedirect:("|')\/\2/gi,
        'Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home'
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
