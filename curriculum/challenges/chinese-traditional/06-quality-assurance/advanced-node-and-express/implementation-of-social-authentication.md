---
id: 589a69f5f9fc0f352b528e70
title: 實現第一種社交登錄
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

在應用中這種驗證的基本路徑是：

1.  User clicks a button or link sending them to your route to authenticate using a specific strategy (e.g. GitHub).
2.  需要在路由中調用 `passport.authenticate('github')`，跳轉至 GitHub 驗證頁面。
3.  頁面跳轉到 GitHub 上，如果用戶未登錄 GitHub，就需要在這裏進行登錄。 It then asks them to approve access to their profile from your app.
4.  The user is then returned to your app at a specific callback url with their profile if they are approved.
5.  驗證已完成。我們的應用需要查詢這個用戶是否已經存在。如果是新用戶，那我們需要把用戶信息存儲到數據庫。

在 OAuth 驗證策略中，我們至少需要提供 *Client ID* 和 *Client Secret*，這樣第三方平臺就會獲悉驗證請求的來源，以及這個來源是否有效。 爲此，需要去我們使用的第三方驗證平臺（比如 GitHub）獲取這兩個字段的值。 注意，我們獲取到的這個值是唯一的，僅對我們的當前 app 有效——**因此，千萬不要分享給別人**，更不要上傳到公共倉庫或者直接寫在代碼裏。 通常，我們會把它們放在 `.env` 文件裏，並通過 `process.env.GITHUB_CLIENT_ID` 獲取。 For this challenge you are going to use the GitHub strategy.

Follow these instructions to obtain your *Client ID and Secret* from GitHub. Go to your GitHub profile settings and click 'developer settings', then <a href="https://github.com/settings/developers" target="_blank" rel="noopener noreferrer nofollow">'OAuth Apps'</a>. Click 'New OAuth App', then give your app a name, paste in the URL to your Replit homepage (**Not the project code's url**) and, for the callback URL, paste in the same URL as the homepage but add `/auth/github/callback` to the end of it. This is where users will be redirected after authenticating on GitHub. After you do all that, click 'Register application'.

On the next page, click 'Generate a new client secret' to create a new client secret. Save the client ID and your client secret in your project's `.env` file as `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`.

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
