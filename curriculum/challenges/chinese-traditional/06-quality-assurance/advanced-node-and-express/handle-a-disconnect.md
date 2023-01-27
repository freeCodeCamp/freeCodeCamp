---
id: 589fc831f9fc0f352b528e76
title: 處理連接斷開
challengeType: 2
forumTopicId: 301552
dashedName: handle-a-disconnect
---

# --description--

你也許注意到，目前爲止我們只處理用戶數量的增加，沒有處理減少。 事實上，處理用戶斷開連接也很簡單。 區別在於，新連接的監聽是發生在整個服務器上，但連接斷開的監聽是發生在每個 socket 上。

爲此，我們需要在目前的 `'connect'` 監聽裏面添加另一個監聽器，監聽 socket 斷開連接 `'disconnect'` 的事件。 通過登錄已與控制檯斷開連接的用戶，你可以測試這個功能。

```js
socket.on('disconnect', () => {
  /*anything you want to do on disconnect*/
});
```

確保客戶端不斷更新當前用戶的數量，當斷開連接發生時，你應該在 `currentUsers` 上減去 1，然後發送 `'user count'` 事件和更新的計數。

**注意：**和 `'disconnect'` 類似，所有 socket 可以發送到服務器的事件，我們都應該在有 “socket” 定義的連接監聽器裏處理。

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#handle-a-disconnect-8" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目</a>。

# --hints--

服務器應處理斷開 socket 連接的事件。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(data, /socket.on.*('|")disconnect('|")/s, '');
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
