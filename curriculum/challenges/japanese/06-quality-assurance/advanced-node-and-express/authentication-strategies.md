---
id: 5895f70df9fc0f352b528e68
title: 認証ストラテジー
challengeType: 2
forumTopicId: 301547
dashedName: authentication-strategies
---

# --description--

ストラテジーとは、ユーザーを認証する方法です。 ローカルに保存された情報に基づいてユーザーを認証できるようにするためのストラテジーを使用したり (初めてユーザーに登録してもらう場合)、Google や GitHub などのさまざまなプロバイダーからユーザーを認証できるようにするためのストラテジーを使用したりできます。 このプロジェクトでは、ローカルストラテジーを設定します。 何百ものストラテジーのリストを見るには、Passportの[こちら](http://passportjs.org/)のサイトにアクセスしてください。

`passport-local@~1.0.0` を依存関係として追加し、次のようにサーバーに追加します: `const LocalStrategy = require('passport-local');`

ここでPassportに対して、いくつかの設定を定義してインスタンス化した LocalStrategy オブジェクトを **use** するよう伝える必要があります。 このオブジェクト (および今後すべてのもの) はデータベース接続に依存するため、必ずデータベース接続でカプセル化してください！

```js
passport.use(new LocalStrategy(
  function(username, password, done) {
    myDataBase.findOne({ username: username }, function (err, user) {
      console.log('User '+ username +' attempted to log in.');
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (password !== user.password) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

ここでは、ローカルで誰かを認証しようとするときに使用するプロセスを定義しています。 まず、入力されたユーザー名を使用してデータベースでユーザーの検索を試みた後、パスワードが一致するかどうかを確認します。そして、パスワード間違いなどのエラーが検出されなければ、`user` のオブジェクトが返されて認証されます。

多くのストラテジーは異なる設定を使用して設定されていますが、通常は、そのストラテジーのリポジトリにある README に基づいて設定するのが簡単です。 良い例として GitHub ストラテジーがあります。このストラテジーでは、ユーザーは GitHub の認証ページに送信されて認証されるため、ユーザー名やパスワードのことを気にする必要がありません。 ユーザーがログインして同意している限り、GitHub は、私たちが使用できるようにユーザーのプロファイルを返します。

次のステップでは、フォームデータに基づいてユーザーを検証するための認証ストラテジーを実際に呼び出す方法を設定します！

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを[こちら](https://gist.github.com/camperbot/53b495c02b92adeee0aa1bd3f3be8a4b)で確認できます。

# --hints--

Passport-local を依存関係にする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport-local',
        'Your project should list "passport-local " as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Passport-local を正しく require して設定する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport-local("|')/gi,
        'You should have required passport-local'
      );
      assert.match(
        data,
        /new LocalStrategy/gi,
        'You should have told passport to use a new strategy'
      );
      assert.match(
        data,
        /findOne/gi,
        'Your new local strategy should use the findOne query to find a username based on the inputs'
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
