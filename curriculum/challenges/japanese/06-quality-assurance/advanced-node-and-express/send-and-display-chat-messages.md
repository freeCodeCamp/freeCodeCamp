---
id: 589fc832f9fc0f352b528e79
title: チャットメッセージを送信して表示する
challengeType: 2
forumTopicId: 301562
dashedName: send-and-display-chat-messages
---

# --description--

ここでは、クライアントからサーバーにチャットメッセージを送信できるようにし、サーバーからすべてのクライアントにエミットできるようにします。 `client.js` ファイルには、すでにメッセージフォームの送信時の処理を行うコードブロックが用意されています。

```js
$('form').submit(function() {
  /*logic*/
});
```

フォームの送信コードの中で、`messageToSend` を定義した後、ただしテキストボックス `#m` をクリアする前に、イベントをエミットする必要があります。 イベント名は `'chat message'` にし、データは `messageToSend` にする必要があります。

```js
socket.emit('chat message', messageToSend);
```

次に、サーバー上でソケットをリッスンし、 `message` というデータを持つイベント `'chat message'` を受信する必要があります。 サーバーでイベントを受信したら、`name` と `message` を含むオブジェクトデータを使用して、イベント `'chat message'` をすべてのソケット `io.emit` にエミットする必要があります。

`client.js` では、イベント `'chat message'` をリッスンし、イベントを受信したら、名前、コロン、メッセージを使用してリストアイテムを `#messages` の末尾に追加する必要があります。

この時点でチャットが完全に機能し、すべてのクライアントにメッセージが送信されるはずです！

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを[こちら](https://gist.github.com/camperbot/d7af9864375207e254f73262976d2016)で確認できます。

# --hints--

サーバーは、`'chat message'` をリッスンして正しくエミットする必要があります。

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

クライアントは、イベント `'chat message'` から受信した新しいデータを適切に処理して表示する必要があります。

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
