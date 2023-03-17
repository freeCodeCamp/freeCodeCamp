---
id: 5895f70df9fc0f352b528e69
title: Passport のストラテジーの使用方法
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

`index.pug` ファイルには、ログインフォームがあります。 It is hidden because of the inline JavaScript `if showLogin` with the form indented after it.

In the `res.render` for that page, add a new variable to the object, `showLogin: true`. ページを更新すると、フォームが表示されます！ This form is set up to **POST** on `/login`. So, this is where you should set up to accept the POST request and authenticate the user.

For this challenge, you should add the route `/login` to accept a POST request. このルートで認証するには、レスポンスを送信する前にそのためのミドルウェアを追加する必要があります。 This is done by just passing another argument with the middleware before with your response. 使用するミドルウェアは `passport.authenticate('local')` です。

`passport.authenticate` can also take some options as an argument such as `{ failureRedirect: '/' }` which is incredibly useful, so be sure to add that in as well. Add a response after using the middleware (which will only be called if the authentication middleware passes) that redirects the user to `/profile`. Add that route, as well, and make it render the view `profile.pug`.

認証が成功すると、ユーザーオブジェクトが `req.user` に保存されます。

この時点で、ユーザー名とパスワードをフォームへ入力すると、ホームページ `/` にリダイレクトされ、サーバーのコンソールに `'User {USERNAME} attempted to log in.'` と表示されます。これは、今の段階では、登録されていないユーザーはログインできないためです。

完成したと思ったら、ページを送信してください。 エラーが発生している場合、<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#how-to-use-passport-strategies-7" target="_blank" rel="noopener noreferrer nofollow">この時点までの完成形のコードをこちらで確認できます</a>。

# --hints--

All steps should be correctly implemented in `server.js`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /showLogin:( |)true/,
    'You should be passing the variable "showLogin" as true to your render function for the homepage'
  );
  assert.match(
    data,
    /failureRedirect:( |)('|")\/('|")/,
    'Your code should include a failureRedirect to the "/" route'
  );
  assert.match(
    data,
    /login[^]*post[^]*local/,
    'You should have a route for login which accepts a POST and passport.authenticates local'
  );
}
```

A POST request to `/login` should correctly redirect to `/`.

```js
async (getUserInput) => {
  const url = new URL("/login", getUserInput("url"));
  const res = await fetch(url, { method: 'POST' });
  const data = await res.text();
  assert.match(
    data,
    /Looks like this page is being rendered from Pug into HTML!/,
    'A login attempt at this point should redirect to the homepage since we do not have any registered users'
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
