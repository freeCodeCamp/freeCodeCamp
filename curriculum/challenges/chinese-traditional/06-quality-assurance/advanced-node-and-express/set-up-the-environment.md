---
id: 589fc830f9fc0f352b528e74
title: 設置環境
challengeType: 2
forumTopicId: 301566
dashedName: set-up-the-environment
---

# --description--

在接下來的挑戰中，我們將會用到 `chat.pug` 文件。 首先，在你的 `routes.js` 文件中爲 `/chat` 添加一個處理 GET 請求的路由，並給它傳入 `ensureAuthenticated`。在回調函數中，我們需要讓它渲染 `chat.pug` 文件，並在響應中包含 `{ user: req.user }` 信息。 現在，請修改 `/auth/github/callback` 路由，讓它可以像這樣設置 user_id：`req.session.user_id = req.user.id`，並在設置完成後重定向至 `/chat`。

已添加 `socket.io@~2.3.0` 作爲依賴項，在你的服務器中和 `http` （內置在 Nodejs 中）一起導入/實例化，具體如下：

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

現在我們的 *express 應用*已經包含了 *http* 服務，接下來我們需要監聽 *http* 服務的事件。 爲此，我們需要把 `app.listen` 更新爲 `http.listen`。

需要處理的第一件事是監聽客戶端的新連接。 <dfn>on</dfn> 關鍵字就是監聽這個特定事件。 它需要 2 個參數：一個包含所發出事件標題的字符串，以及一個用於傳遞數據的函數。 在連接監聽器中，我們用 `socket` 來定義第二個參數中的數據。 socket 就是指已連接到服務器的客戶端。

爲了可以監聽服務器的連接事件，我們在數據庫連接的部分加入如下代碼：

```javascript
io.on('connection', socket => {
  console.log('A user has connected');
});
```

對於發出連接事件的客戶端，只需要在認證後頁面加載出的 `client.js` 中添加以下內容：

```js
/*global io*/
let socket = io();
```

在這個文件中，我們沒有定義 “io” 變量，但第一行的註釋會阻止運行時產生的報錯。 你已經在 `chat.pug` 中在頁面上爲 Socket.IO 庫添加了一個可靠的CDN。

現在你可以重啓一下你的 app，嘗試一下驗證用戶，然後你應該會看到服務器的 console 裏輸出了 `A user has connected`。

**注意：**只有在連接到處於同一個 url/server 上的 socket 時，`io()`纔可以正常執行。 如果需要連接到外部的 socket，就需要這樣調用：`io.connect('URL');`。

完成上述要求後，請提交你的頁面鏈接。 如果你遇到錯誤，可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-the-environment-6" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目</a>。

# --hints--

應添加 `socket.io` 作爲依賴。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'socket.io',
    'Your project should list "socket.io" as a dependency'
  );
}
```

應正確引入 `http`，並實例化爲 `http`。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /http.*=.*require.*('|")http\1/s,
    'Your project should list "http" as a dependency'
  );
}
```

應正確引入 `socket.io`，並實例化爲 `io`。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.*=.*require.*('|")socket.io\1.*http/s,
    'You should correctly require and instantiate socket.io as io.'
  );
}
```

Socket.IO 應監聽連接。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.on.*('|")connection\1.*socket/s,
    'io should listen for "connection" and socket should be the 2nd arguments variable'
  );
}
```

客戶端應連接到服務器。

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.*=.*io/s,
    'Your client should be connection to server with the connection defined as socket'
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
