---
id: 589a69f5f9fc0f352b528e71
title: ソーシャル認証の実装Ⅱ
challengeType: 2
forumTopicId: 301557
dashedName: implementation-of-social-authentication-ii
---

# --description--

GitHub 認証の最後の設定作業として、ストラテジーそのものを作成します。 そのためには、`passport-github@~1.1.0` という依存関係をプロジェクトに追加し、`auth.js` で `GithubStrategy` として require する必要があります。たとえば `const GitHubStrategy = require('passport-github').Strategy;` のようになります。 環境変数を使用できるように、`dotenv` の require と設定を忘れないでください。

GitHub ストラテジーを設定するには、インスタンス化された `GitHubStrategy` を使用するよう Passport に指示する必要があります。これは 2 つの引数を受け取ります。1 つはオブジェクト (`clientID`、`clientSecret` および `callbackURL` を含む) で、もう 1 つはユーザーが正常に認証されたときに呼び出される関数です。この関数は、ユーザーが新規かどうかを判断し、ユーザーのデータベースオブジェクトに最初にどのフィールドを保存するかを決めます。 この手順は多くのストラテジーで一般的ですが、特定のストラテジーの GitHub README に概説されているように、より多くの情報が必要な場合もあります。 たとえば、Google では*スコープ*も必要です。スコープは、リクエストがどのような種類の情報を返すよう求めているのかを判断し、そのようなアクセスを承認するようユーザーに求めます。 ここで実装しているストラテジーの使用方法は[こちら](https://github.com/jaredhanson/passport-github/)に記載されていますが、私たちは freeCodeCamp で順調に作業を進めています！

新しいストラテジーは次のようになります。

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

認証はまだ成功せず、データベース ロジックとコールバックがないためエラーになりますが、コンソールに GitHub プロファイルが記録されるはずです！

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを[こちら](https://gist.github.com/camperbot/ff3a1166684c1b184709ac0bee30dee6)で確認できます。

# --hints--

passport-github 依存関係を追加する必要があります。

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

passport-github を require する必要があります。

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

GitHub ストラテジーをここまで正しく設定する必要があります。

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
