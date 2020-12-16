---
id: 587d8248367417b2b2512c3a
title: 使用 helment.noSniff() 来避免推断响应的 MIME 类型
challengeType: 2
forumTopicId: 301574
---

# --description--

请注意，本项目在 [这个 Repl.it 项目](https://repl.it/github/freeCodeCamp/boilerplate-infosec) 的基础上进行开发。你也可以从 [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) 上克隆。

浏览器可以通过 content 或者 MIME 嗅探来判断不同的响应内容。这两个的优先级比 header 中的 Content-Type 高。这在一些情况下非常方便，但也会造成一定的安全风险。我们可以通过中间件来把 header 中的 X-Content-Type-Options 字段设置为 nosniff，这样浏览器就不会绕过 header 中的 Content-Type 了。

# --hints--

应正确加载 helmet.noSniff() 中间件

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

