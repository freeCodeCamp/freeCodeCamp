---
id: 587d8248367417b2b2512c3c
title: 用 helmet.hsts() 使浏览器只能通过 HTTPS 访问你的网站。
challengeType: 2
forumTopicId: 301573
dashedName: ask-browsers-to-access-your-site-via-https-only-with-helmet-hsts
---

# --description--

请注意，本项目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化项目的基础上进行开发，你也可以从 <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

HTTP 严格传输安全（HSTS）是一种网络安全策略，有助于保护网站免受协议降级攻击和 cookie 劫持。 如果你的网站可以通过 HTTPS 访问，你可以要求用户的浏览器避免使用不安全的 HTTP。 通过设置标头 Strict-Transport-Security，你告诉浏览器在指定时间内对未来的请求使用 HTTPS。 这将对初始请求之后的请求起作用。

# --instructions--

配置 `helmet.hsts()` 以在未来 90 天内使用 HTTPS。 传递配置对象 `{maxAge: timeInSeconds, force: true}`。 你可以创建一个变量 `ninetyDaysInSeconds = 90*24*60*60;` 来用于 `timeInSeconds`。 Replit 已经启用了 hsts。 要覆盖它的设置，你需要在配置对象中把 “force” 字段设置为 true。 我们将拦截并在对其进行检查测试后恢复 Replit 请求头。

注意：在自定义网站上配置 HTTPS 需要获得一个域名，以及一个 SSL/TLS 证书。

# --hints--

helmet.hsts() 中间件应该被正确安装。

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

maxAge 应该等于 7776000 秒（90 天）。

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
