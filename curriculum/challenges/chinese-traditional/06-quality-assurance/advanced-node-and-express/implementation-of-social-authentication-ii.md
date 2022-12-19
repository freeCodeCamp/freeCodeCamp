---
id: 589a69f5f9fc0f352b528e71
title: 實現社交賬號認證 II
challengeType: 2
forumTopicId: 301557
dashedName: implementation-of-social-authentication-ii
---

# --description--

設置 GitHub 驗證的最後一步是創建策略本身。 已經添加 `passport-github@~1.1.0` 作爲依賴，在 `auth.js` 中請求它，作爲 `GithubStrategy`，像這樣：`const GitHubStrategy = require('passport-github').Strategy;`。 別忘了請求和配置 `dotenv`，使用你的環境變量。

爲了設置 GitHub 策略，我們需要在 Passport 中使用實例化的 `GitHubStrategy`，它可以接收兩個參數：一個對象（包括 `clientID`、`clientSecret` 和 `callbackURL`），以及一個回調函數。在這個回調函數中，我們要處理驗證成功時，判斷用戶是否已經在數據庫中存在的邏輯，以及在用戶數據庫對象中最初保存哪些字段。 這種處理方式適用於絕大部分第三方驗證策略，但有些策略會需要我們提供更多的信息，詳情請參考相關策略的 GitHub README。 例如，Google 的驗證策略會要求你提供一個 *scope*，用於標示用戶成功登錄後，你需要從返回的對象中獲取那些信息。以及，這也需要經過用戶同意，你纔可以獲取到。

你目前實施的策略是使用 GitHub 賬戶和 OAuth 2.0 令牌來認證用戶。 創建應用程序時獲得的客戶 ID 和密碼在創建策略時作爲選項提供。 策略還需要 `verify` 回調，接收訪問令牌和可選刷新令牌， 以及包含認證用戶的 GitHub 資料的 `profile`。 `verify` 回調必須調用 `cb` 提供用戶完成驗證。

你的新策略應該是這樣的：

```js
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: /*INSERT CALLBACK URL ENTERED INTO GITHUB HERE*/
},
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    //Database logic here with callback containing your user object
  }
));
```

目前，你的驗證部分不會成功。由於沒有數據庫的邏輯和回調函數，你的代碼目前還會報錯。但如果你試一試，就可以在控制檯裏看到輸出了你的 GitHub 個人信息。

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-ii-4" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目</a>。

# --hints--

應正確添加依賴 passport-github。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport-github',
    'Your project should list "passport-github" as a dependency'
  );
}
```

應正確請求依賴 passport-github。

```js
async (getUserInput) => {
  const url = new URL("/_api/auth.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')passport-github("|')/gi,
    'You should have required passport-github'
  );
}
```

到目前爲止，GitHub 策略應正確設置。

```js
async (getUserInput) => {
  const url = new URL("/_api/auth.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /passport\.use.*new GitHubStrategy/gis,
    'Passport should use a new GitHubStrategy'
  );
  assert.match(
    data,
    /callbackURL:\s*("|').*("|')/gi,
    'You should have a callbackURL'
  );
  assert.match(
    data,
    /process\.env(\.GITHUB_CLIENT_SECRET|\[(?<q>"|')GITHUB_CLIENT_SECRET\k<q>\])/g,
    'You should use process.env.GITHUB_CLIENT_SECRET'
  );
  assert.match(
    data,
    /process\.env(\.GITHUB_CLIENT_ID|\[(?<q>"|')GITHUB_CLIENT_ID\k<q>\])/g,
    'You should use process.env.GITHUB_CLIENT_ID'
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
