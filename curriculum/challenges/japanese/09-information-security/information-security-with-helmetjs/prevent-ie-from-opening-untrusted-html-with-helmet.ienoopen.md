---
id: 587d8248367417b2b2512c3b
title: helmet.ieNoOpen() を使用して、IE が信頼できない HTML を開けないようにする
challengeType: 2
forumTopicId: 301584
dashedName: prevent-ie-from-opening-untrusted-html-with-helmet-ienoopen
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

一部のウェブアプリケーションでは、信頼されていない HTML をダウンロード用に提供しています。 Internet Explorer の一部のバージョンではデフォルトで、あなたのサイトのコンテキストで、こうした HTML ファイルを開きます。 つまり、あなたのページのコンテキストで、信頼されていない HTML ページが悪意のある動作を始める可能性があります。 このミドルウェアは、X-Download-Options ヘッダーを設定して、そうしたファイルを開かないようにします。 これにより、IE ユーザーは信頼されたサイトのコンテキストでダウンロードを実行できなくなります。

# --instructions--

サーバーで `helmet.ieNoOpen()` メソッドを使用してください。

# --hints--

helmet.ieNoOpen() ミドルウェアを正しくマウントする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'ienoopen');
      assert.equal(data.headers['x-download-options'], 'noopen');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
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
