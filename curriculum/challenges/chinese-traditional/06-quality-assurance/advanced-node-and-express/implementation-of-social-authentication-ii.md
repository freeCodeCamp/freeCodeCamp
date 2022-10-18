---
id: 589a69f5f9fc0f352b528e71
title: 實現第二種社交登錄
challengeType: 2
forumTopicId: 301557
dashedName: implementation-of-social-authentication-ii
---

# --description--

設置 GitHub 驗證的最後一步是創建策略本身。 `passport-github@~1.1.0` has already been added as a dependency, so require it in your `auth.js` file as `GithubStrategy` like this: `const GitHubStrategy = require('passport-github').Strategy;`. 別忘了請求和配置 `dotenv`，使用你的環境變量。

爲了設置 GitHub 策略，我們需要在 Passport 中使用實例化的 `GitHubStrategy`，它可以接收兩個參數：一個對象（包括 `clientID`、`clientSecret` 和 `callbackURL`），以及一個回調函數。在這個回調函數中，我們要處理驗證成功時，判斷用戶是否已經在數據庫中存在的邏輯，以及在用戶數據庫對象中最初保存哪些字段。 這種處理方式適用於絕大部分第三方驗證策略，但有些策略會需要我們提供更多的信息，詳情請參考相關策略的 GitHub README。 例如，Google 的驗證策略會要求你提供一個 *scope*，用於標示用戶成功登錄後，你需要從返回的對象中獲取那些信息。以及，這也需要經過用戶同意，你纔可以獲取到。

The current strategy we are implementing authenticates users using a GitHub account and OAuth 2.0 tokens. The client ID and secret obtained when creating an application are supplied as options when creating the strategy. The strategy also requires a `verify` callback, which receives the access token and optional refresh token, as well as `profile` which contains the authenticated user's GitHub profile. The `verify` callback must call `cb` providing a user to complete authentication.

Here's how your new strategy should look at this point:

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

Your authentication won't be successful yet, and it will actually throw an error without the database logic and callback, but it should log your GitHub profile to your console if you try it!

Submit your page when you think you've got it right. If you're running into errors, you can <a href="https://gist.github.com/camperbot/ff3a1166684c1b184709ac0bee30dee6" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

passport-github dependency should be added.

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

passport-github should be required.

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

GitHub strategy should be setup correctly thus far.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/auth.js').then(
    (data) => {
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
