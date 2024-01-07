---
id: 589fc831f9fc0f352b528e77
title: Socket.IOによる認証
challengeType: 2
forumTopicId: 301548
dashedName: authentication-with-socket-io
---

# --description--

今の時点で、誰がウェブソケットに接続しているかを判断することはできません。 `req.user` にはユーザーオブジェクトが含まれていますが、そうなっているのはユーザーがウェブサーバーとやり取りするときだけであり、ウェブソケットでは `req` (リクエスト) がないため、ユーザーデータはありません。 誰がウェブソケットに接続しているのかを知るための方法の 1 つとして、Passport セッションを含む Cookie を解析してデコードした後、デシリアライズしてユーザーオブジェクトを取得することができます。 幸い、 NPM にはまさにこのためのパッケージがあり、複雑な作業をシンプルにしてくれます！

すでに `passport.socketio@~3.7.0`、`connect-mongo@~3.2.0`、`cookie-parser@~1.4.5` が依存関係として追加されています。 それぞれ `passportSocketIo`、`MongoStore`、`cookieParser` として require します。 また、前に require した `express-session` から、新しいメモリストアを初期化する必要があります。 次のようになります。

```js
const MongoStore = require('connect-mongo')(session);
const URI = process.env.MONGO_URI;
const store = new MongoStore({ url: URI });
```

あとは、Socket.IO にそれを使用してオプションを設定するように伝えるだけです。 このコードは必ず既存のソケットコードの前に追加し、既存のコネクションリスナーには追加しないでください。 サーバーでは次のようになります。

```js
io.use(
  passportSocketIo.authorize({
    cookieParser: cookieParser,
    key: 'express.sid',
    secret: process.env.SESSION_SECRET,
    store: store,
    success: onAuthorizeSuccess,
    fail: onAuthorizeFail
  })
);
```

Socket.IO の Passport 認証の設定は、API の `session` ミドルウェアの設定方法によく似ています。 これは、同じ認証方式の使用を意図しているためです。つまり、Cookie からセッション id を取得して検証します。

前に `session` ミドルウェアを設定したときは、セッションの Cookie 名 (`key`) を明示的に設定してはいませんでした。 これは、`session` パッケージでデフォルト値を使用していたためです。 これで、Cookie から同じ値にアクセスする必要がある別のパッケージが追加されました。両方の設定オブジェクトへ明示的に `key` の値を設定する必要があります。

Socket.IO キーに一致する `session` ミドルウェアに、`key` と Cookie 名を追加してください。 また、`saveUninitialized: true` を設定した近くで、`store` 参照をオプションに追加してください。 これは、どのセッションに関連付けるかを Socket.IO に伝えるために必要です。

<hr />

次に、`success` と `fail` コールバック関数を定義します。

```js
function onAuthorizeSuccess(data, accept) {
  console.log('successful connection to socket.io');

  accept(null, true);
}

function onAuthorizeFail(data, message, error, accept) {
  if (error) throw new Error(message);
  console.log('failed connection to socket.io:', message);
  accept(null, false);
}
```

これでソケットオブジェクトでユーザーオブジェクトに `socket.request.user` としてアクセスできるようになりました。 たとえば、次のように追加できます。

```js
console.log('user ' + socket.request.user.username + ' connected');
```

接続したサーバーコンソールにログインします！

正しいと思ったら、ページを送信してください。 エラーが発生している場合、<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#authentication-with-socketio-9" target="_blank" rel="noopener noreferrer nofollow">この時点までのコードをこちらで確認できます</a>。

# --hints--

`passport.socketio` を依存関係にする必要があります。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport.socketio',
    'Your project should list "passport.socketio" as a dependency'
  );
}
```

`cookie-parser` を依存関係にする必要があります。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'cookie-parser',
    'Your project should list "cookie-parser" as a dependency'
  );
}
```

passportSocketIo を適切に require する必要があります。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require\((['"])passport\.socketio\1\)/gi,
    'You should correctly require and instantiate "passport.socketio"'
  );
}
```

passportSocketIo を正しく設定する必要があります。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io\.use\(\s*\w+\.authorize\(/,
    'You should register "passport.socketio" as socket.io middleware and provide it correct options'
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
