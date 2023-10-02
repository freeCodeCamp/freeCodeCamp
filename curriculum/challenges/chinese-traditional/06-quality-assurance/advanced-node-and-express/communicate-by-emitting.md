---
id: 589fc831f9fc0f352b528e75
title: 通過 Emitting 通信
challengeType: 2
forumTopicId: 301550
dashedName: communicate-by-emitting
---

# --description--

<dfn>Emit</dfn> 是你會用到的最常見的通信方式。 如果我們從服務器發送信息給 “io”，就相當於把事件的名稱和數據發送給了所有處於連接狀態的 socket。 我們可以利用這個特性實現這樣的功能：只要有新用戶連接到服務器，我們就可以把目前連接的總用戶數發給所有已連接的用戶，這樣所有用戶隨時都可以看到實時的在線人數。

首先，我們需要在監聽連接的地方之前添加一個用於追蹤用戶數的變量：

```js
let currentUsers = 0;
```

然後，只要有人連接到服務器，就需要在發出用戶數量之前先給這個變量加 1。 因此，需要在連接監聽器中增加一個遞增器。

```js
++currentUsers;
```

最後，在監聽連接的地方發出（emit）該事件即可。 這個事件應命名爲 “user count”，且數據應該爲 `currentUsers`：

```js
io.emit('user count', currentUsers);
```

現在，你實現了在客戶端監聽此事件。 類似在服務器上監聽連接，你將使用 `on` 關鍵字。

```js
socket.on('user count', function(data) {
  console.log(data);
});
```

現在你可以嘗試啓動你的 app 並登錄，你會看到在客戶端的控制檯打印出了 “1”，這就表示目前連接到服務器的用戶數爲 1。 你可以試着通過打開多個 app 來驗證數量是否會增加。

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#communicate-by-emitting-7" target="_blank" rel="noopener noreferrer nofollow">查看到目前爲止已完成的項目</a>。

# --hints--

應該定義 `currentUsers`。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /currentUsers/s,
    'You should have variable currentUsers defined'
  );
}
```

服務器應在有新的連接時發送當前用戶數量。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.emit.*('|")user count('|").*currentUsers/s,
    'You should emit "user count" with data currentUsers'
  );
}
```

你的客戶端應該監聽 `'user count'` 事件。

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.on.*('|")user count('|")/s,
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
