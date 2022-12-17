---
id: 589fc832f9fc0f352b528e79
title: 發送和顯示聊天消息
challengeType: 2
forumTopicId: 301562
dashedName: send-and-display-chat-messages
---

# --description--

是時候開始允許用戶向服務器發送聊天消息，以向所有客戶端發送消息了！ 在 `client.js` 文件裏，你應該已經注意到了這段提交消息表單的代碼：

```js
$('form').submit(function() {
  /*logic*/
});
```

在表單提交代碼中，需要處理髮送（emit）事件，它應該發生在定義 `messageToSend` 之後，以及清除 `#m` 中的文本之前。 我們稱這個事件爲 `'chat message'`，需發送的數據爲 `messageToSend`。

```js
socket.emit('chat message', messageToSend);
```

在服務端，我們需要監聽包含 `message` 數據的 `'chat message'` 事件。 一旦接收到事件，服務端應該使用 `io.emit` 向所有套接字發出 `'chat message'` 事件，併發送包含 `username` 和 `message` 的數據對象。

在 `client.js` 中，你現在應該監聽 `'chat message'` 事件，並在接收到事件後將用戶名、冒號和消息添加到 `#messages` 的列表項中！

至此，我們已經完成發送信息到所有客戶端的功能。

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#send-and-display-chat-messages-11" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目</a>。

# --hints--

服務端應監聽 `'chat message'`，且應在監聽到後發送它。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.on.*('|")chat message('|")[^]*io.emit.*('|")chat message('|").*username.*message/s,
    'Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object'
  );
}
```

客戶端應正確處理和展示從 `'chat message'` 事件發來的新數據。

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.on.*('|")chat message('|")[^]*messages.*li/s,
    'You should append a list item to #messages on your client within the "chat message" event listener to display the new message'
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
