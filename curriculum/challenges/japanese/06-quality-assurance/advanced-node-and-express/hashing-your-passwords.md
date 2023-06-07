---
id: 58a25c98f9fc0f352b528e7f
title: パスワードをハッシュする
challengeType: 2
forumTopicId: 301553
dashedName: hashing-your-passwords
---

# --description--

情報セキュリティのセクションに話を戻しますが、プレーンテキストのパスワードを保存することは*決して安全ではありません*。 ここでは、この問題を解決するために BCrypt を実装します。

すでに `bcrypt@~5.0.0` が依存関係として追加されているので、サーバーで require します。 2 つの重要な箇所でハッシュを処理する必要があります。1 つは、新しいアカウントの登録/保存を処理する箇所で、もう 1 つは、ログイン時にパスワードが正しいことを確認する箇所です。

Currently on your registration route, you insert a user's plaintext password into the database like so: `password: req.body.password`. Hash the passwords instead by adding the following before your database logic: `const hash = bcrypt.hashSync(req.body.password, 12);`, and replacing the `req.body.password` in the database saving with just `password: hash`.

On your authentication strategy, you check for the following in your code before completing the process: `if (password !== user.password) return done(null, false);`. 以上の変更を加えると、`user.password` がハッシュになります。 既存のコードに変更を加える前に、ステートメントではパスワードが**一致しない**かどうかをチェックし、一致しない場合に非認証を返していることに注目してください。 With this in mind, change that code to look as follows to properly check the password entered against the hash:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

That is all it takes to implement one of the most important security features when you have to store passwords.

正しいと思ったら、ページを送信してください。 エラーが発生している場合、<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#hashing-your-passwords-1" target="_blank" rel="noopener noreferrer nofollow">この時点までの完成形のコードをこちらで確認できます</a>。

# --hints--

BCrypt を依存関係にする必要があります。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json()
  assert.property(
    packJson.dependencies,
    'bcrypt',
    'Your project should list "bcrypt" as a dependency'
  );
}
```

BCrypt を正しく require して実装する必要があります。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
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
