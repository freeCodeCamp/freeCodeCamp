---
id: 5895f70ef9fc0f352b528e6b
title: プロファイルをまとめる
challengeType: 2
forumTopicId: 301554
dashedName: how-to-put-a-profile-together
---

# --description--

`/profile` にアクセスしているユーザーが認証されたことを確認できるようになったので、ページの `req.user` に含まれている情報を使用できます！

プロパティ `username` および `req.user.username` の値を含むオブジェクトを、プロファイルビューのレンダーメソッドの 2 番目の引数として渡してください。 次に、`profile.pug` ビューに移動し、既存の `h1` 要素の下に同レベルのインデントで次の行を追加してください。

```pug
h2.center#welcome Welcome, #{username}!
```

これで、クラス「`center`」と id「`welcome`」を持ち、「`Welcome,`」の後にユーザー名を含む `h2` 要素が作成されます。

また、`profile.pug` で、ユーザーの認証解除のロジックを受け持つ `/logout` ルートを参照するリンクを追加してください。

```pug
a(href='/logout') Logout
```

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを<a href="https://gist.github.com/camperbot/136b3ad611cc80b41cab6f74bb460f6a" target="_blank" rel="noopener noreferrer nofollow">こちら</a>で確認できます。

# --hints--

Pug render 変数を /profile に正しく追加する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /username:( |)req.user.username/gi,
        'You should be passing the variable username with req.user.username into the render function of the profile page'
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
