---
id: 587d8249367417b2b2512c3e
title: 使用 helment.noCache() 禁用客户端缓存
challengeType: 2
forumTopicId: 301576
dashedName: disable-client-side-caching-with-helmet-nocache
---

# --description--

请注意，本项目在 [这个 Repl.it 项目](https://repl.it/github/freeCodeCamp/boilerplate-infosec) 的基础上进行开发。你也可以从 [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) 上克隆。

如果你为你的网站发布了一个更新，此时你一定想要用户看到最新的版本。为此，你可以通过禁用浏览器缓存来实现。而且，这个功能在开发环境中也非常有用。但另一方面，缓存可以为你的网站带来性能方面的提升，因此你应该只在必要的时候禁用缓存。

# --hints--

应正确加载 helmet.noCache() 中间件

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
