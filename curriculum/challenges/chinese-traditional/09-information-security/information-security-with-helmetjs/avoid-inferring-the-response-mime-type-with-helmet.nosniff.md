---
id: 587d8248367417b2b2512c3a
title: 用 helmet.noSniff() 避免推斷出響應的 MIME 類型。
challengeType: 2
forumTopicId: 301574
dashedName: avoid-inferring-the-response-mime-type-with-helmet-nosniff
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。 Browsers can use content or MIME sniffing to override the `Content-Type` header of a response to guess and process the data using an implicit content type. 雖然這在某些情況下可能很方便，但也可能導致一些危險的攻擊。 This middleware sets the `X-Content-Type-Options` header to `nosniff`, instructing the browser to not bypass the provided `Content-Type`.

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
