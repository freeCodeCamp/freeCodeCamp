---
id: 589a69f5f9fc0f352b528e71
title: 實現第二種社交登錄
challengeType: 2
forumTopicId: 301557
dashedName: implementation-of-social-authentication-ii
---

# --description--

設置 GitHub 驗證的最後一步是創建策略本身。 爲此，你需要在項目中添加 “passport-github” 依賴，並在 `auth.js` 中 請求它，作爲 `GithubStrategy`，像這樣：`const GitHubStrategy = require('passport-github').Strategy;`。 別忘了請求和配置 `dotenv`，使用你的環境變量。

爲了設置 GitHub 策略，我們需要在 Passport 中使用實例化的 `GitHubStrategy`，它可以接收兩個參數：一個對象（包括 `clientID`、`clientSecret` 和 `callbackURL`），以及一個回調函數。在這個回調函數中，我們要處理驗證成功時，判斷用戶是否已經在數據庫中存在的邏輯，以及在用戶數據庫對象中最初保存哪些字段。 這種處理方式適用於絕大部分第三方驗證策略，但有些策略會需要我們提供更多的信息，詳情請參考相關策略的 GitHub README。 例如，Google 的驗證策略會要求你提供一個 *scope*，用於標示用戶成功登錄後，你需要從返回的對象中獲取那些信息。以及，這也需要經過用戶同意，你纔可以獲取到。 你可以在[這裏](https://github.com/jaredhanson/passport-github/)瞭解當前我們使用的驗證策略的用法，不過我們也會在 freeCodeCamp 課程中進行詳細講解。

你的新策略應該這樣去實現：

```js
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: /*INSERT CALLBACK URL ENTERED INTO GITHUB HERE*/
},
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    //Database logic here with callback containing our user object
  }
));
```

目前，你的驗證部分不會成功。由於沒有數據庫的邏輯和回調函數，你的代碼目前還會報錯。但如果你試一試，就可以在控制檯裏看到輸出了你的 GitHub 個人信息。

完成上述要求後，請提交你的頁面鏈接。 如果你遇到了問題，可以參考[這裏](https://gist.github.com/camperbot/ff3a1166684c1b184709ac0bee30dee6)的答案。

# --hints--

應正確添加依賴 passport-github。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport-github',
        'Your project should list "passport-github" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

應正確請求依賴 passport-github。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/auth.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport-github("|')/gi,
        'You should have required passport-github'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

到目前爲止，Github 策略應正確設置。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/auth.js').then(
    (data) => {
      assert.match(
        data,
        /passport\.use.*new GitHubStrategy/gi,
        'Passport should use a new GitHubStrategy'
      );
      assert.match(
        data,
        /callbackURL:\s*("|').*("|')/gi,
        'You should have a callbackURL'
      );
      assert.match(
        data,
        /process.env.GITHUB_CLIENT_SECRET/g,
        'You should use process.env.GITHUB_CLIENT_SECRET'
      );
      assert.match(
        data,
        /process.env.GITHUB_CLIENT_ID/g,
        'You should use process.env.GITHUB_CLIENT_ID'
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
