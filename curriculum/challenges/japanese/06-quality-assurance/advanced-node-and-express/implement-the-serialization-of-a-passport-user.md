---
id: 5895f70cf9fc0f352b528e67
title: Passport ユーザーのシリアライズを実装する
challengeType: 2
forumTopicId: 301556
dashedName: implement-the-serialization-of-a-passport-user
---

# --description--

今の段階ではまだデータベースを設定していないため、実際のユーザーオブジェクトを読み込んでいません。 これはさまざまな方法で実現できますが、このプロジェクトでは、サーバーを起動し、アプリのライフサイクル全体にわたって永続的な接続を維持した時点で、データベースに接続します。 接続するために、データベースの接続文字列 (例: `mongodb+srv://:@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority`) を環境変数 `MONGO_URI` に追加してください 。 この変数は `connection.js` ファイルで使用されます。

*[MongoDB Atlas](https://www.mongodb.com/cloud/atlas) で無料のデータベースを設定することができます。*

ここではデータベースに接続し、リクエストのリッスンを開始します。 その目的は、データベースの接続前やデータベースエラーの発生時にリクエストを許可しないことです。 そのためには、次のようなコードでシリアライズとアプリルートを処理します。

```js
myDB(async client => {
  const myDataBase = await client.db('database').collection('users');

  // Be sure to change the title
  app.route('/').get((req, res) => {
    //Change the response to render the Pug template
    res.render('pug', {
      title: 'Connected to Database',
      message: 'Please login'
    });
  });

  // Serialization and deserialization here...

  // Be sure to add this...
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('pug', { title: e, message: 'Unable to login' });
  });
});
// app.listen out here...
```

`deserializeUser` の `myDataBase` コードを必ずコメント解除してください。そして `done(null, null)` を編集して `doc` を含めてください。

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを[こちら](https://gist.github.com/camperbot/175f2f585a2d8034044c7e8857d5add7)で確認できます。

# --hints--

データベース接続が存在する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /Connected to Database/gi,
        'You successfully connected to the database!'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

デシリアライズで DB を正しく使用している必要があり、`doc` を指定して `done(null, null)` を呼び出す必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /null,\s*doc/gi,
        'The callback in deserializeUser of (null, null) should be altered to (null, doc)'
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
