---
id: 587d8248367417b2b2512c3d
title: 使用 helmet.dnsPrefetchControl() 禁用 DNS 預獲取
challengeType: 2
forumTopicId: 301577
dashedName: disable-dns-prefetching-with-helmet-dnsprefetchcontrol
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

爲了提高性能，大部分瀏覽器都會爲頁面上的鏈接預先加載 DNS 記錄。 這樣當用戶點擊一個鏈接的時候瀏覽器已經知道其 IP 地址了。 但這也會造成 DNS 服務的過度使用（如果你有一個百萬用戶數量級的大型網站）、隱私問題（竊聽者可以藉此推測出你在訪問哪個頁面）、頁面統計數據準確性（有些沒訪問過的鏈接會被標記成已訪問）。 如果你對安全性要求比較高，你應該禁用 DNS 預加載。 當然，這樣做會讓你損失一些性能。

# --instructions--

應正確加載 helmet.dnsPrefetchControl() 中間件

# --hints--

應正確加載 helmet.dnsPrefetchControl() 中間件

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
