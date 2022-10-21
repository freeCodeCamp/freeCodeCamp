---
id: 587d8248367417b2b2512c3d
title: helmet.dnsPrefetchControl() を使用して DNS プリフェッチを無効にする
challengeType: 2
forumTopicId: 301577
dashedName: disable-dns-prefetching-with-helmet-dnsprefetchcontrol
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

ほとんどのブラウザーでは、パフォーマンスを向上させるために、ページ内のリンクの DNS レコードを先読み (プリフェッチ) します。 これにより、ユーザーがリンクをクリックしたときには、すでに目的の IP がわかっている状態になります。 その結果、DNS サービスの過度の使用 (何百万人もの人が訪れる大規模なウェブサイトの運営を想像してみてください…)、プライバシーの問題 (特定のページを閲覧しているユーザーを盗聴者が推測できる可能性がある)、ページ統計の改ざん (リンク先が訪問されていなくても訪問されているように表示される) などが発生する可能性があります。 高度なセキュリティを必要とする場合は、パフォーマンスの低下を犠牲にして、DNS プリフェッチを無効にすることができます。

# --instructions--

サーバーで `helmet.dnsPrefetchControl()` メソッドを使用してください。

# --hints--

helmet.dnsPrefetchControl() ミドルウェアを正しくマウントする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'dnsPrefetchControl');
      assert.equal(data.headers['x-dns-prefetch-control'], 'off');
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
