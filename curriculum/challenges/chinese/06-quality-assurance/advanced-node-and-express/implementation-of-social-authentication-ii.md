---
id: 589a69f5f9fc0f352b528e71
title: 实现第二种社交登录
challengeType: 2
forumTopicId: 301557
dashedName: implementation-of-social-authentication-ii
---

# --description--

设置 GitHub 验证的最后一步是创建策略本身。 `passport-github@~1.1.0` has already been added as a dependency, so require it in your `auth.js` file as `GithubStrategy` like this: `const GitHubStrategy = require('passport-github').Strategy;`. 别忘了请求和配置 `dotenv`，使用你的环境变量。

为了设置 GitHub 策略，我们需要在 Passport 中使用实例化的 `GitHubStrategy`，它可以接收两个参数：一个对象（包括 `clientID`、`clientSecret` 和 `callbackURL`），以及一个回调函数。在这个回调函数中，我们要处理验证成功时，判断用户是否已经在数据库中存在的逻辑，以及在用户数据库对象中最初保存哪些字段。 这种处理方式适用于绝大部分第三方验证策略，但有些策略会需要我们提供更多的信息，详情请参考相关策略的 GitHub README。 例如，Google 的验证策略会要求你提供一个 *scope*，用于标示用户成功登录后，你需要从返回的对象中获取那些信息。以及，这也需要经过用户同意，你才可以获取到。

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
