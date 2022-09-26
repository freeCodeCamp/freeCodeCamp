---
id: 5895f70cf9fc0f352b528e66
title: ユーザーオブジェクトのシリアライズ
challengeType: 2
forumTopicId: 301563
dashedName: serialization-of-a-user-object
---

# --description--

シリアライズとデシリアライズは認証に関する重要な概念です。 オブジェクトをシリアライズするとは、その内容を小さな*キー*に変換して、元のオブジェクトにデシリアライズできるようにすることを意味します。 これにより、 新しいページをリクエストするたびにユーザー名とパスワードのような認証データを送信することなく、誰がサーバーと通信したかを知ることができます。

これを適切に設定するには、シリアライズ関数とデシリアライズ関数が必要です。 Passport では、これらを `passport.serializeUser( OURFUNCTION )` と `passport.deserializeUser( OURFUNCTION )` で作成します。

`serializeUser` は 2 つの引数を指定して呼び出します。1 つ目は完全なユーザーオブジェクトで、2 つ目は Passport で使用されるコールバックです。 コールバックからは、ユーザーを特定するための一意のキーを返す必要があります。オブジェクトのユーザー `_id` を使用するのが最も簡単です。 この _id は MongoDB によって生成されるため、一意になります。 同様に、`deserializeUser` もそのキーと Passport のコールバック関数を指定して呼び出しますが、ここでは、前述のキーを受け取り、完全なユーザー オブジェクトをコールバックに返す必要があります。 Mongo の `_id` のクエリ検索を行うには、`const ObjectID = require('mongodb').ObjectID;` を作成する必要があり、それを使用するために `new ObjectID(THE_ID)` を呼び出す必要があります。 すでに `mongodb@~3.6.0` が依存関係として追加されています。 以下の例をご覧ください。

```js
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, null);
  });
});
```

注: この `deserializeUser` は、次のステップで DB を設定するまではエラーをスローします。そのため、ここではブロック全体をコメントアウトして、関数 `deserializeUser` で `done(null, null)` を呼び出すだけにしてください。

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを<a href="https://gist.github.com/camperbot/7068a0d09e61ec7424572b366751f048" target="_blank" rel="noopener noreferrer nofollow">こちら</a>で確認できます。

# --hints--

ユーザー関数を正しくシリアライズする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.serializeUser/gi,
        'You should have created your passport.serializeUser function'
      );
      assert.match(
        data,
        /null,\s*user._id/gi,
        'There should be a callback in your serializeUser with (null, user._id)'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ユーザー関数を正しくデシリアライズする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.deserializeUser/gi,
        'You should have created your passport.deserializeUser function'
      );
      assert.match(
        data,
        /null,\s*null/gi,
        'There should be a callback in your deserializeUser with (null, null) for now'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

MongoDB を依存関係にする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'mongodb',
        'Your project should list "mongodb" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ObjectId を含めて Mongodb を正しく require する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')mongodb\1/gi,
        'You should have required mongodb'
      );
      assert.match(
        data,
        /new ObjectID.*id/gi,
        'Even though the block is commented out, you should use new ObjectID(id) for when we add the database'
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
