---
id: 589a69f5f9fc0f352b528e70
title: 實現第一種社交登錄
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

在應用中這種驗證的基本路徑是：

1.  在用戶點擊按鈕或者鏈接後，進入驗證頁面，通過第三方平臺（如 GitHub）來進行用戶驗證。
2.  需要在路由中調用 `passport.authenticate('github')`，跳轉至 GitHub 驗證頁面。
3.  頁面跳轉到 GitHub 上，如果用戶未登錄 GitHub，就需要在這裏進行登錄。 登錄成功後，會出現向用戶申請訪問權限的確認頁。
4.  如果用戶同意訪問，則用戶會回到我們提供的回調地址，帶着 GitHub 那邊提供的用戶信息回到我們的 app 中。
5.  驗證已完成。我們的應用需要查詢這個用戶是否已經存在。如果是新用戶，那我們需要把用戶信息存儲到數據庫。

在 OAuth 驗證策略中，我們至少需要提供 *Client ID* 和 *Client Secret*，這樣第三方平臺就會獲悉驗證請求的來源，以及這個來源是否有效。 爲此，需要去我們使用的第三方驗證平臺（比如 GitHub）獲取這兩個字段的值。 注意，我們獲取到的這個值是唯一的，僅對我們的當前 app 有效——**因此，千萬不要分享給別人**，更不要上傳到公共倉庫或者直接寫在代碼裏。 通常，我們會把它們放在 `.env` 文件裏，並通過 `process.env.GITHUB_CLIENT_ID` 獲取。 對於這次挑戰，我們將會使用 GitHub 作爲驗證平臺。

Obtaining your *Client ID and Secret* from GitHub is done in your account profile settings under 'developer settings', then <a href="https://github.com/settings/developers" target="_blank" rel="noopener noreferrer nofollow">'OAuth applications'</a>. 點擊 “Register a new application（註冊一個新的應用）”，設置你的應用名稱，然後把你的 Replit 主頁地址（**不是項目代碼的 url**）粘貼到 Homepage URL。然後，回調 url 需要設置成上面 Homepage URL 裏你粘貼的地址，但後面要加上 `/auth/github/callback`。 這樣在用戶通過 Github 驗證後才能跳轉到我們指定的頁面。 在你的 `.env` 文件裏將返回的信息保存爲 `'GITHUB_CLIENT_ID'` 和 `'GITHUB_CLIENT_SECRET'`。

在你的 `routes.js` 文件中，添加 `showSocialAuth: true` 到主頁路由，在 `showRegistration: true` 的後面。 然後，爲 `/auth/github` 和 `/auth/github/callback` 創建兩個接收 GET 請求的路由。 第一個只需要通過調用 passport 來驗證 `'github'`。 第二個應該調用 passport 來驗證 `'github'`，但需要在失敗時跳轉回主頁 `/`，成功時跳轉到用戶頁面 `/profile`（跳轉的邏輯與上一個項目中的邏輯一樣）。

例如 `/auth/github/callback` 應該像我們處理在上一個項目中正常的登錄一樣：

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

完成上述要求後，請提交你的頁面鏈接。 If you're running into errors, you can check out the project up to this point <a href="https://gist.github.com/camperbot/1f7f6f76adb178680246989612bea21e" target="_blank" rel="noopener noreferrer nofollow">https://gist.github.com/camperbot/1f7f6f76adb178680246989612bea21e</a>.

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
