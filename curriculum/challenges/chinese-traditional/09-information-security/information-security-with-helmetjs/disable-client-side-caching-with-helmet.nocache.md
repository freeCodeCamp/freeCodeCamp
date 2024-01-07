---
id: 587d8249367417b2b2512c3e
title: 使用 helment.noCache() 禁用客戶端緩存
challengeType: 2
forumTopicId: 301576
dashedName: disable-client-side-caching-with-helmet-nocache
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

如果你正在爲你的網站發佈更新，而你希望用戶總是下載較新的版本，你可以（嘗試）在客戶的瀏覽器上禁用緩存。 它在開發中也很有用。 緩存具有性能優勢，你將失去這些優勢，因此只有在真正需要時才使用此選項。

# --instructions--

在你的服務器上使用 `helmet.noCache()` 方法。

# --hints--

應正確加載 helmet.noCache() 中間件

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'nocache');
      assert.equal(
        data.headers['cache-control'],
        'no-store, no-cache, must-revalidate, proxy-revalidate'
      );
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
