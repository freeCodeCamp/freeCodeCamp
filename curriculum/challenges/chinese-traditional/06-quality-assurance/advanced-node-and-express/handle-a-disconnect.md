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

爲確保客戶端可以看到實時的用戶數量，我們應該在用戶斷開時讓 currentUsers 減 1，然後發送 “user count” 事件，並使用修改後的用戶數量。

**注意：**和 `'disconnect'` 類似，所有 socket 可以發送到服務器的事件，我們都應該在有 “socket” 定義的連接監聽器裏處理。

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以<a href="https://gist.github.com/camperbot/ab1007b76069884fb45b215d3c4496fa" target="_blank" rel="noopener noreferrer nofollow">查看已執行項目的當前進度</a>。

# --hints--

服務器應處理斷開 socket 連接的事件。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(data, /socket.on.*('|")disconnect('|")/gi, '');
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

客戶端應監聽 “user count” 事件。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")user count('|")/gi,
        'Your client should be connection to server with the connection defined as socket'
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
