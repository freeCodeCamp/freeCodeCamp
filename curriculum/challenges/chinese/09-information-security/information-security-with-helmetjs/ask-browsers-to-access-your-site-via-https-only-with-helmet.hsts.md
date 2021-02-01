---
id: 587d8248367417b2b2512c3c
title: 要求浏览器通过HTTPS访问您的站点仅限于使用helmet.hsts（）
challengeType: 2
forumTopicId: 301573
dashedName: ask-browsers-to-access-your-site-via-https-only-with-helmet-hsts
---

# --description--

请注意，本项目在 [这个 Repl.it 项目](https://repl.it/github/freeCodeCamp/boilerplate-infosec) 的基础上进行开发。你也可以从 [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) 上克隆。

HTTP 严格安全传输（HSTS）是一个能帮助我们抵御协议 [降级攻击](https://en.wikipedia.org/wiki/Downgrade_attack) 和 [Cookie 挟持](https://en.wikipedia.org/wiki/Session_hijacking) 的 WEB 安全协议。如果你的网站能够通过 HTTPS 访问，那么你就可以让你的用户避免使用不安全的 HTTP 协议访问。为此，你只需要在 header 中设置 Strict-Transport-Security 字段，以此来告诉浏览器在今后的一段时间内使用 HTTPS 来请求网站内容。这一设置对首次请求之后所以的后续请求都适用。

# --instructions--

通过 `helmet.hsts()`，网站会在未来的90天内使用 HTTPS。我们还可以传入配置对象 `{maxAge: timeInSeconds, force: true}`。Repl.it 默认已经开启 hsts，但你仍然可以通过添加 `{force: true}` 来覆盖它。我们会拦截 Glitch 请求的 header 来进行此挑战的测试，然后恢复此项配置。

注意: 配置 HTTPS 需要域名以及 SSL/TSL 证书。

# --hints--

应正确加载 helmet.hsts() 中间件

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'hsts');
      assert.property(data.headers, 'strict-transport-security');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应将 maxAge 设置为 7776000 ms（90 天）

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.match(
        data.headers['strict-transport-security'],
        /^max-age=7776000;?/
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
