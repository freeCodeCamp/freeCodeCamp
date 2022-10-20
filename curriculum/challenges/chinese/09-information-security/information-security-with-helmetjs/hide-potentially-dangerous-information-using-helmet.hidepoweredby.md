---
id: 587d8247367417b2b2512c37
title: 使用 helmet.hidePoweredBy() 隐藏潜在的危险信息
challengeType: 2
forumTopicId: 301580
dashedName: hide-potentially-dangerous-information-using-helmet-hidepoweredby
---

# --description--

请注意，本项目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化项目的基础上进行开发，你也可以从 <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

如果黑客发现你的网站是用 Express 搭建的，那么他们就可以利用 Express 或 Node 现存的漏洞来攻击你的网站。 `X-Powered-By: Express` 默认在来自 Express 的每个请求中被发送。 使用 `helmet.hidePoweredBy()` 中间件来移除 X-Powered-By 头。

# --hints--

应正确地安装 helmet.hidePoweredBy() 中间件

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'hidePoweredBy');
      assert.notEqual(data.headers['x-powered-by'], 'Express');
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
