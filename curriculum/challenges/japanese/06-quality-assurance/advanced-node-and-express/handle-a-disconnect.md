---
id: 589fc831f9fc0f352b528e76
title: 切断を処理する
challengeType: 2
forumTopicId: 301552
dashedName: handle-a-disconnect
---

# --description--

お気づきかもしれませんが、ここまでは単にユーザー数を増やしているだけです。 ユーザーの切断処理も最初の接続と同じくらい簡単です。ただし、サーバー全体でリッスンするのではなくソケットごとにリッスンする必要があります。

これを行うには、データを渡さずにソケットで `'disconnect'` をリッスンする別のリスナーを、既存の `'connect'` リスナーの中に追加してください。 この機能をテストするには、ユーザーが切断したことをコンソールに記録するだけです。

```js
socket.on('disconnect', () => {
  /*anything you want to do on disconnect*/
});
```

クライアントで現在のユーザーの更新されたカウントを継続的に保つようにするには、切断が発生したときに currentUsers を 1 減らし、それから、更新されたカウントで「user count」イベントをエミットする必要があります！

**注:** `'disconnect'` とまったく同様に、ソケットがサーバーへエミットできる他のすべてのイベントについても、「socket」を定義しているコネクションリスナーの中で処理する必要があります。

正しいと思ったら、ページを送信してください。 エラーが発生している場合は、ここまでに完了したプロジェクトを<a href="https://gist.github.com/camperbot/ab1007b76069884fb45b215d3c4496fa" target="_blank" rel="noopener noreferrer nofollow">こちら</a>で確認できます。

# --hints--

サーバーはソケットからの切断イベントを処理する必要があります。

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

クライアントは「user count」イベントをリッスンする必要があります。

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
