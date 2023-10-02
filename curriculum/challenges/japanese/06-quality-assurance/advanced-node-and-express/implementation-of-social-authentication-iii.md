---
id: 589a8eb3f9fc0f352b528e72
title: ソーシャル認証の実装Ⅲ
challengeType: 2
forumTopicId: 301558
dashedName: implementation-of-social-authentication-iii
---

# --description--

ストラテジーの最後の部分では、GitHub から返されたプロファイルを処理します。 ユーザーのデータベースオブジェクトが存在する場合はそれを読み込み、存在しない場合は作成する必要があります。 プロファイルからのフィールドを設定し、ユーザーのオブジェクトを返します。 GitHub からは固有の *id* が各プロファイル内に提供されます。この id を使用してユーザーを検索しシリアライズすることができます (すでに実装済み) 。 以下は、プロジェクトで使用できる実装の例です。新しいストラテジーの 2 番目の引数となる関数の中で、現在の `console.log(profile);` のすぐ下に記述します。

```js
myDataBase.findOneAndUpdate(
  { id: profile.id },
  {
    $setOnInsert: {
      id: profile.id,
      username: profile.username,
      name: profile.displayName || 'John Doe',
      photo: profile.photos[0].value || '',
      email: Array.isArray(profile.emails)
        ? profile.emails[0].value
        : 'No public email',
      created_on: new Date(),
      provider: profile.provider || ''
    },
    $set: {
      last_login: new Date()
    },
    $inc: {
      login_count: 1
    }
  },
  { upsert: true, new: true },
  (err, doc) => {
    return cb(null, doc.value);
  }
);
```

`findOneAndUpdate` では、オブジェクトを検索して更新することができます。 オブジェクトが存在しない場合は、そのオブジェクトが挿入され、コールバック関数で使用できるようになります。 この例では、`last_login` を常に設定し、`login_count` を `1` 増やして、新しいオブジェクト (新規ユーザー) が挿入された場合にのみ、フィールドの大部分を設定します。 デフォルト値の使用に注意してください。 場合によっては、返されるプロファイルに必ずしもすべての情報が設定されていなかったり、ユーザーがプロファイルを非公開にしていたりします。 そのような場合は、エラーを防ぐための処理を実行します。

これでアプリにログインできるはずです。 試してみましょう！

正しいと思ったら、ページを送信してください。 エラーが発生している場合、<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-iii-5" target="_blank" rel="noopener noreferrer nofollow">この時点までの完成形のコードをこちらで確認できます</a>。

# --hints--

GitHub ストラテジーの設定を完了する必要があります。

```js
async (getUserInput) => {
  const url = new URL("/_api/auth.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /GitHubStrategy[^]*myDataBase/gi,
    'Strategy should use now use the database to search for the user'
  );
  assert.match(
    data,
    /GitHubStrategy[^]*cb/gi,
    'Strategy should return the callback function "cb"'
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
