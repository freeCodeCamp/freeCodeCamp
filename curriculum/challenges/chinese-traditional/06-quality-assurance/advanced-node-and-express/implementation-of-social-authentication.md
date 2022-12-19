---
id: 589a69f5f9fc0f352b528e70
title: 實現社交賬號認證
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

在應用中這種驗證的基本路徑是：

1.  用戶點擊一個按鈕或鏈接，訪問你的路由，使用特定的策略（例如 GitHub）進行認證。
2.  需要在路由中調用 `passport.authenticate('github')`，跳轉至 GitHub 驗證頁面。
3.  頁面跳轉到 GitHub 上，如果用戶未登錄 GitHub，就需要在這裏進行登錄。 然後它要求他們批准從你的應用程序訪問他們的個人資料。
4.  如果用戶被批准，他們會在一個特定的回調 url 上帶着他們的個人資料返回到你的應用程序。
5.  驗證已完成。我們的應用需要查詢這個用戶是否已經存在。如果是新用戶，那我們需要把用戶信息存儲到數據庫。

在 OAuth 驗證策略中，我們至少需要提供 *Client ID* 和 *Client Secret*，這樣第三方平臺就會獲悉驗證請求的來源，以及這個來源是否有效。 爲此，需要去我們使用的第三方驗證平臺（比如 GitHub）獲取這兩個字段的值。 注意，我們獲取到的這個值是唯一的，僅對我們的當前 app 有效——**因此，千萬不要分享給別人**，更不要上傳到公共倉庫或者直接寫在代碼裏。 通常，我們會把它們放在 `.env` 文件裏，並通過 `process.env.GITHUB_CLIENT_ID` 獲取。 在這個挑戰中，你要使用 GitHub 策略。

按照<a href="https://www.freecodecamp.org/news/how-to-set-up-a-github-oauth-application/" target="_blank" rel="noopener noreferrer nofollow">這些說明</a>從 GitHub 獲取你的 *客戶端 ID 和密鑰*。 將主頁 URL 設置爲你的 Replit 主頁（**而不是項目代碼的 URL**），並將回調 URL 設置爲相同的主頁 URL，並在末尾添加 `/auth/github/callback`。 將客戶端 ID 和你的客戶端密碼保存到你的項目的 `.env`，作爲 `GITHUB_CLIENT_ID` 和 `GITHUB_CLIENT_SECRET`。

在你的 `routes.js` 文件中，添加 `showSocialAuth: true` 到主頁路由，在 `showRegistration: true` 的後面。 現在，創建兩個接收 GET 請求的路由：`/auth/github` 和 `/auth/github/callback`。 第一個應該只調用 passport 來驗證 `'github'`。 第二個應該調用 passport 來驗證 `'github'`，失敗後重定向到 `/`，然後如果成功則重定向到 `/profile`（與你的上一個項目類似）。

`/auth/github/callback` 的例子應該與你處理正常登錄的方式相似：

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

完成之後，提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-3" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目</a>。

# --hints--

路由 `/auth/github` 應該是正確的。

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

路由 `/auth/github/callback` 應該是正確的。

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
