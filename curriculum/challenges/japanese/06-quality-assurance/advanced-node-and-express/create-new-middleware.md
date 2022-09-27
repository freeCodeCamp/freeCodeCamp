---
id: 5895f70df9fc0f352b528e6a
title: 新しいミドルウェアを作成する
challengeType: 2
forumTopicId: 301551
dashedName: create-new-middleware
---

# --description--

通常、ユーザーは認証されていてもいなくても、 url を入力することで `/profile` にアクセスできます。 ここではこの動作を防ぐために、プロファイルページをレンダーする前に、ユーザーが認証されているかどうかを先に確認する必要があるとします。 こうした例に最適なのがミドルウェアです。

ここでのチャレンジは、ミドルウェア関数 `ensureAuthenticated(req, res, next)` を作成することです。この関数は、`request` 時に Passport の `isAuthenticated` メソッドを呼び出してユーザーが認証されているかどうかを確認します。メソッドでは、`req.user` が定義されているかどうかを確認します。 定義されている場合は、`next()` を呼び出します。定義されていない場合は、ホームページにリダイレクトすることでログインリクエストに応答します。 このミドルウェアの実装は次のようになります。

```js
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
```

次に、*ensureAuthenticated* を、プロファイルページのリクエストに対するミドルウェアとして、ページをレンダーする関数を含む get リクエスト引数の前に追加してください。

```js
app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render(process.cwd() + '/views/pug/profile');
 });
```

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを<a href="https://gist.github.com/camperbot/ae49b8778cab87e93284a91343da0959" target="_blank" rel="noopener noreferrer nofollow">こちら</a>で確認できます。

# --hints--

ミドルウェア ensureAuthenticate を /profile ルート上に実装する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /ensureAuthenticated[^]*req.isAuthenticated/gi,
        'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'
      );
      assert.match(
        data,
        /profile[^]*get[^]*ensureAuthenticated/gi,
        'Your ensureAuthenticated middleware should be attached to the /profile route'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

認証されていないため、/profile への get リクエストを正しく / にリダイレクトする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/profile').then(
    (data) => {
      assert.match(
        data,
        /Home page/gi,
        'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in'
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
