---
id: 58965611f9fc0f352b528e6c
title: ユーザーをログアウトさせる
challengeType: 2
forumTopicId: 301560
dashedName: logging-a-user-out
---

# --description--

ログアウトロジックの作成は簡単です。 ルートで、ユーザーの認証を解除し、ビューをレンダーするのではなくホームページにリダイレクトするだけです。

Passport では、リダイレクトする前に `req.logout();` を呼び出すだけで簡単にユーザーの認証を解除することができます。

```js
app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});
```

「ページが見つかりません」(404) を処理していないことにお気づきかもしれません。 Node では通常は次のミドルウェアでこれを処理します。 他のすべてのルートの後に、これを追加してください。

```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを[こちら](https://gist.github.com/camperbot/c3eeb8a3ebf855e021fd0c044095a23b)で確認できます。

# --hints--

`req.Logout` を `/logout` ルートで呼び出す必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /req.logout/gi,
        'You should be calling req.logout() in your /logout route'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ログアウトからホームページにリダイレクトする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/logout').then(
    (data) => {
      assert.match(
        data,
        /Home page/gi,
        'When a user logs out they should be redirected to the homepage'
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
