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

在服務端，我們需要監聽包含 `message` 數據的 `'chat message'` 事件。 當事件發生，我們就通過 `io.emit` 把包含 `name` 和 `message` 的 `'chat message'` 事件發送給所有已連接的 socket。

在 `client.js` 中，我們需要監聽 `'chat message'` 事件。只要接收到這個事件，就把包含名字和消息的內容（注意：需要在名字後添加冒號）添加到 `#messages`。

至此，我們已經完成發送信息到所有客戶端的功能。

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以<a href="https://gist.github.com/camperbot/d7af9864375207e254f73262976d2016" target="_blank" rel="noopener noreferrer nofollow">查看已執行項目的當前進度</a>。

# --hints--

服務端應監聽 `'chat message'`，且應在監聽到後發送它。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")chat message('|")[^]*io.emit.*('|")chat message('|").*name.*message/gis,
        'Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

客戶端應正確處理和展示從 `'chat message'` 事件發來的新數據。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")chat message('|")[^]*messages.*li/gis,
        'You should append a list item to #messages on your client within the "chat message" event listener to display the new message'
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
