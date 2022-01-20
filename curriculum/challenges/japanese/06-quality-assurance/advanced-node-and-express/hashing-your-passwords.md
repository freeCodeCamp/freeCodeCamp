---
id: 58a25c98f9fc0f352b528e7f
title: パスワードをハッシュする
challengeType: 2
forumTopicId: 301553
dashedName: hashing-your-passwords
---

# --description--

情報セキュリティのセクションに話を戻しますが、プレーンテキストのパスワードを保存することは*決して安全ではありません*。 ここでは、この問題を解決するために BCrypt を実装します。

`bcrypt@~5.0.0` を依存関係として追加し、サーバーで require してください。 2 つの重要な箇所でハッシュを処理する必要があります。1 つは、新しいアカウントの登録/保存を処理する箇所で、もう 1 つは、ログイン時にパスワードが正しいことを確認する箇所です。

現在の登録ルート上では、`password: req.body.password` のように、ユーザーのパスワードをデータベースへ挿入しています。 この代わりにハッシュの保存を実装する簡単な方法として、データベース ロジックの前に `const hash = bcrypt.hashSync(req.body.password, 12);` を追加し、データベースに保存する `req.body.password` を `password: hash` に置き換えることができます。

さらに認証ストラテジーでは、プロセスを完了する前のコードで `if (password !== user.password) { return done(null, false); }` のチェックを実行します。 以上の変更を加えると、`user.password` がハッシュになります。 既存のコードに変更を加える前に、ステートメントではパスワードが**一致しない**かどうかをチェックし、一致しない場合に非認証を返していることに注目してください。 上記を考慮するとコードは次のようになり、ハッシュに対して入力されたパスワードを適切にチェックします。

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

これで、パスワードを保存する必要がある場合に、最も重要なセキュリティ機能の1つを実装できます！

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを[こちら](https://gist.github.com/camperbot/dc16cca09daea4d4151a9c36a1fab564)で確認できます。

# --hints--

BCrypt を依存関係にする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'bcrypt',
        'Your project should list "bcrypt" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

BCrypt を正しく require して実装する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')bcrypt\1/gi,
        'You should have required bcrypt'
      );
      assert.match(
        data,
        /bcrypt.hashSync/gi,
        'You should use hash the password in the registration'
      );
      assert.match(
        data,
        /bcrypt.compareSync/gi,
        'You should compare the password to the hash in your strategy'
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
