---
id: 5895f70df9fc0f352b528e69
title: Passport のストラテジーの使用方法
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

`index.pug` ファイルには、実はログインフォームがあります。 これまでは、インラインの JavaScript `if showLogin` があり、その後でフォームがインデントされていたために非表示になっていました。 `showLogin` が変数として定義されていなかったため、フォームを含むコードブロックがレンダーされませんでした。 このページの `res.render` で、新しい変数を `showLogin: true` としてオブジェクトに追加してください。 ページを更新すると、フォームが表示されます！ このフォームは、`/login` で **POST** を実行するように設定されています。つまり、ここで POST を受け入れてユーザーを認証する必要があります。

このチャレンジでは、POST リクエストを受け入れるためにルート `/login` を追加する必要があります。 このルートで認証するには、レスポンスを送信する前にそのためのミドルウェアを追加する必要があります。 それには、レスポンスで `function(req,res)` の前に別のミドルウェアの引数を渡すだけです！ 使用するミドルウェアは `passport.authenticate('local')` です。

`passport.authenticate` は引数として `{ failureRedirect: '/' }` などのいくつかのオプションを受け取ることができるのでとても便利です。ですので必ず追加してください。 ミドルウェア (認証ミドルウェアが成功した場合にのみ呼び出されます) を使用した後のレスポンスではユーザーを `/profile` にリダイレクトする必要があり、ルートでビュー `profile.pug` をレンダーする必要があります。

認証が成功すると、ユーザーオブジェクトが `req.user` に保存されます。

この時点で、ユーザー名とパスワードをフォームへ入力すると、ホームページ `/` にリダイレクトされ、サーバーのコンソールに `'User {USERNAME} attempted to log in.'` と表示されます。これは、今の段階では、登録されていないユーザーをログインさせないためです。

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを[こちら](https://gist.github.com/camperbot/7ad011ac54612ad53188b500c5e99cb9)で確認できます。

# --hints--

すべてのステップを server.js に正しく実装する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /showLogin:( |)true/gi,
        'You should be passing the variable "showLogin" as true to your render function for the homepage'
      );
      assert.match(
        data,
        /failureRedirect:( |)('|")\/('|")/gi,
        'Your code should include a failureRedirect to the "/" route'
      );
      assert.match(
        data,
        /login[^]*post[^]*local/gi,
        'You should have a route for login which accepts a POST and passport.authenticates local'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

/login への POST リクエストで / に正しくリダイレクトする必要があります。

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/login').then(
    (data) => {
      assert.match(
        data,
        /Looks like this page is being rendered from Pug into HTML!/gi,
        'A login attempt at this point should redirect to the homepage since we do not have any registered users'
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
