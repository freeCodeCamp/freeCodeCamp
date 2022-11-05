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

To make sure clients continuously have the updated count of current users, you should decrease `currentUsers` by 1 when the disconnect happens then emit the `'user count'` event with the updated count.

**注意：**和 `'disconnect'` 類似，所有 socket 可以發送到服務器的事件，我們都應該在有 “socket” 定義的連接監聽器裏處理。

完成上述要求後，請提交你的頁面鏈接。 If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#handle-a-disconnect-8" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

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

Your client should be listening for `'user count'` event.

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
