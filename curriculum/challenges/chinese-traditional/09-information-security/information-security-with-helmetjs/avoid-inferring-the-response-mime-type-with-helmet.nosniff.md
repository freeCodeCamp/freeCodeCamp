---
id: 587d8248367417b2b2512c3a
title: 用 helmet.noSniff() 避免推斷出響應的 MIME 類型。
challengeType: 2
forumTopicId: 301574
dashedName: avoid-inferring-the-response-mime-type-with-helmet-nosniff
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。 瀏覽器可以使用內容或 MIME 嗅探來覆蓋響應的 `Content-Type` 標頭，使用隱式內容類型猜測和處理數據。 雖然這在某些情況下可能很方便，但也可能導致一些危險的攻擊。 該中間件將 `X-Content-Type-Options` 標頭設置爲 `nosniff`，指示瀏覽器不要繞過所提供的 `Content-Type`。

# --instructions--

在你的服務器上使用 `helmet.noSniff()` 方法。

# --hints--

helmet.noSniff() 中間件應該被正確安裝

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'nosniff');
      assert.equal(data.headers['x-content-type-options'], 'nosniff');
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
