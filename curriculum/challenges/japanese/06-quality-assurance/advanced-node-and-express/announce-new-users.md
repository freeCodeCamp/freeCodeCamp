---
id: 589fc832f9fc0f352b528e78
title: 新しいユーザーを通知する
challengeType: 2
forumTopicId: 301546
dashedName: announce-new-users
---

# --description--

多くのチャットルームは、ユーザーが接続または切断したときに、チャットにいる他のすべての接続中ユーザーにそのことを通知して表示することができます。 接続時と切断時にすでにイベントをエミットしているはずなので、このような機能をサポートするようにこのイベントを変更するだけです。 そのための最も論理的な方法として、イベントに伴う 3 つのデータを送信します。それらは、接続/切断したユーザーの名前、現在のユーザー数、および、その名前が接続されているか切断されているかを示すデータです。

イベント名を `'user'` に変更してください、そして、フィールド 「name」、「currentUsers」および「connected」(送信されたユーザーが接続する場合は `true`、切断する場合は `false`) を含むオブジェクトを渡してください。 必ず両方の「user count」イベントを変更し、切断イベントではフィールド 「connected」に対して、接続時にイベントが発生するような `true` ではなく `false` を送信するように設定してください。

```js
io.emit('user', {
  name: socket.request.user.name,
  currentUsers,
  connected: true
});
```

これで必要なすべての情報がクライアントに揃い、ユーザーが接続または切断したときに現在のユーザー数と通知が正しく表示されます！ クライアント側でこのイベントを処理するには、`'user'` をリッスンし、それから jQuery を使用して現在のユーザー数を更新し、`#num-users` のテキストを `'{NUMBER} users online'` に変更する必要があります。また、id が `messages` の順序なしリストに、`'{NAME} has {joined/left} the chat.'` という内容の `<li>` を追加します。

この実装は次のようになります。

```js
socket.on('user', data => {
  $('#num-users').text(data.currentUsers + ' users online');
  let message =
    data.name +
    (data.connected ? ' has joined the chat.' : ' has left the chat.');
  $('#messages').append($('<li>').html('<b>' + message + '</b>'));
});
```

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを<a href="https://gist.github.com/camperbot/bf95a0f74b756cf0771cd62c087b8286" target="_blank" rel="noopener noreferrer nofollow">こちら</a>で確認できます。

# --hints--

イベント `'user'` を、name、currentUsers および connected とともにエミットする必要があります。

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

クライアントは、イベント `'user'` の新しいデータを適切に処理して表示する必要があります。

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
