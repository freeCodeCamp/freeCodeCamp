---
id: 589a69f5f9fc0f352b528e70
title: Implementation of Social Authentication
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

在应用中这种验证的基本路径是：

1.  User clicks a button or link sending them to your route to authenticate using a specific strategy (e.g. GitHub).
2.  需要在路由中调用 `passport.authenticate('github')`，跳转至 GitHub 验证页面。
3.  页面跳转到 GitHub 上，如果用户未登录 GitHub，就需要在这里进行登录。 It then asks them to approve access to their profile from your app.
4.  The user is then returned to your app at a specific callback url with their profile if they are approved.
5.  验证已完成。我们的应用需要查询这个用户是否已经存在。如果是新用户，那我们需要把用户信息存储到数据库。

在 OAuth 验证策略中，我们至少需要提供 *Client ID* 和 *Client Secret*，这样第三方平台就会获悉验证请求的来源，以及这个来源是否有效。 为此，需要去我们使用的第三方验证平台（比如 GitHub）获取这两个字段的值。 注意，我们获取到的这个值是唯一的，仅对我们的当前 app 有效——**因此，千万不要分享给别人**，更不要上传到公共仓库或者直接写在代码里。 通常，我们会把它们放在 `.env` 文件里，并通过 `process.env.GITHUB_CLIENT_ID` 获取。 For this challenge you are going to use the GitHub strategy.

Follow <a href="https://www.freecodecamp.org/news/how-to-set-up-a-github-oauth-application/" target="_blank" rel="noopener noreferrer nofollow">these instructions</a> to obtain your *Client ID and Secret* from GitHub. Set the homepage URL to your Replit homepage (**not the project code's URL**), and set the callback URL to the same homepage URL with `/auth/github/callback` appended to the end. Save the client ID and your client secret in your project's `.env` file as `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`.

In your `routes.js` file, add `showSocialAuth: true` to the homepage route, after `showRegistration: true`. Now, create 2 routes accepting GET requests: `/auth/github` and `/auth/github/callback`. The first should only call passport to authenticate `'github'`. The second should call passport to authenticate `'github'` with a failure redirect to `/`, and then if that is successful redirect to `/profile` (similar to your last project).

An example of how `/auth/github/callback` should look is similar to how you handled a normal login:

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

Submit your page when you think you've got it right. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-3" target="_blank" rel="noopener noreferrer nofollow">check out the project up to this point</a>.

# --hints--

Route `/auth/github` should be correct.

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

Route `/auth/github/callback` should be correct.

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
