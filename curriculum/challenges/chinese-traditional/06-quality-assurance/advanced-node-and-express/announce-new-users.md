---
id: 589fc832f9fc0f352b528e78
title: 用戶公告
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

許多聊天室都有這個功能：所有已連接到服務器的在線用戶都會看到有人加入或退出的提醒。 我們已經寫好了處理連接和斷開事件的代碼，只要對這個方法稍作修改就可以實現這個功能。 在事件中，我們需要發送這三條信息：連接或斷開的用戶名、當前用戶數量、事件類型（即需要知道用戶究竟是連接還是斷開）。

請將事件名稱更改爲 `'user'`，其中應包含如下字段：'name'、'currentUsers'、'connected'（布爾值，連接上即爲 `true`，斷開則是 `false`）。 請務必更改兩個 user count 事件，設置 disconnect 事件向 connected 字段發送 `false` ，而不是像 connect 事件一樣發送 `true`。

```js
io.emit('user', {
  name: socket.request.user.name,
  currentUsers,
  connected: true
});
```

現在客戶端已具備足夠的信息，來顯示當前用戶數，並在用戶連接或斷開連接時通知！ 接下來我們需要在客戶端監聽 `'user'` 事件，然後用 jQuery 把 `#num-users` 節點的文本內容更新爲 `'{NUMBER} users online'`。 同時，我們需要爲無序列表添加一個 id 爲 `messages` 且帶有 `'{NAME} has {joined/left} the chat.'` 文本的 `<li>`。

實現如下：

```js
socket.on('user', data => {
  $('#num-users').text(data.currentUsers + ' users online');
  let message =
    data.name +
    (data.connected ? ' has joined the chat.' : ' has left the chat.');
  $('#messages').append($('<li>').html('<b>' + message + '</b>'));
});
```

完成上述要求後，你可以在下方提交你的頁面鏈接。 如果你遇到了問題，可以參考 [這裏](https://gist.github.com/camperbot/bf95a0f74b756cf0771cd62c087b8286) 的答案。

# --hints--

事件 `'user'` 應該包含，name、 currentUsers 和 connected。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.emit.*('|")user\1.*name.*currentUsers.*connected/gis,
        'You should have an event emitted named user sending name, currentUsers, and connected'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

客戶端應處理和顯示 `'user'` 中的新數據。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.on.*('|")user\1[^]*num-users/gi,
        'You should change the text of "#num-users" within on your client within the "user" event listener to show the current users connected'
      );
      assert.match(
        data,
        /socket.on.*('|")user\1[^]*messages.*li/gi,
        'You should append a list item to "#messages" on your client within the "user" event listener to announce a user came or went'
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
