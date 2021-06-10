---
id: 589fc831f9fc0f352b528e77
title: 使用 Socket.IO 進行身份驗證
challengeType: 2
forumTopicId: 301548
dashedName: authentication-with-socket-io
---

# --description--

目前，你還無法確定連接到服務器的用戶身份。 雖然 `req.user` 包含用戶信息，但這個只在用戶直接與服務器交互時產生。當用戶通過 web socket 與服務器連接時，由於不存在 `req` 對象，我們就無法獲取用戶數據。 解決這個問題的方法之一是通過讀取和解析請求中包含 passport session 的 cookie，然後反序列化，進而獲取用戶信息對象。 幸運的是，NPM 上有可以讓這個複雜的流程簡單化的庫。

添加 `passport.socketio`、`connect-mongo@~3.2.0`、`cookie-parser` 作爲依賴，把它們分別賦值給 `passportSocketIo`、`MongoStore`、`cookieParser`。 同時，我們需要從之前引入的 `express-session` 中開闢新的內存空間， 就像這樣：

```js
const MongoStore = require('connect-mongo')(session);
const URI = process.env.MONGO_URI;
const store = new MongoStore({ url: URI });
```

現在我們只需要讓 Socket.IO 調用它並進行相應的配置即可。 請注意，以上這些都必須放在現有的 socket 相關代碼之前，而且不能放到連接的監聽回調函數裏。 你的服務器代碼應類似於這樣：

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

記得要把 `key` 和 `store` 加到 app 的 `session` 中間件。 這樣，*SocketIO* 才知道該對哪個 session 執行此配置。

<hr />

接下來，我們可以定義 `success` 與 `fail` 的回調函數：

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

現在，我們可以通過 `socket.request.user` 訪問用戶數據。 爲此，你可以這樣做：

```js
console.log('user ' + socket.request.user.name + ' connected');
```

這樣，我們可以在 console 裏看到誰連接到了我們的服務器。

完成上述要求後，請提交你的頁面鏈接。 如果你遇到了問題，可以參考[這裏](https://gist.github.com/camperbot/1414cc9433044e306dd7fd0caa1c6254)的答案。

# --hints--

應添加 `passport.socketio` 作爲依賴。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport.socketio',
        'Your project should list "passport.socketio" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

應添加 `cookie-parser` 作爲依賴。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'cookie-parser',
        'Your project should list "cookie-parser" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

應正確引入 passportSocketIo。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require\((['"])passport\.socketio\1\)/gi,
        'You should correctly require and instantiate "passport.socketio"'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

應正確配置 passportSocketIo。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io\.use\(\s*\w+\.authorize\(/,
        'You should register "passport.socketio" as socket.io middleware and provide it correct options'
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
