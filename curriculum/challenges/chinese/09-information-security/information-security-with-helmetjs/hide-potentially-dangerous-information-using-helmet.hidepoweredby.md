---
id: 587d8247367417b2b2512c37
title: 使用 helmet.hidePoweredBy() 隐藏潜在的危险信息
challengeType: 2
forumTopicId: 301580
dashedName: hide-potentially-dangerous-information-using-helmet-hidepoweredby
---

# --description--

请注意，本项目在 [这个 Repl.it 项目](https://repl.it/github/freeCodeCamp/boilerplate-infosec) 的基础上进行开发。你也可以从 [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) 上克隆。

如果黑客发现你的网站是用 Express 搭建的，那么他们就可以利用 Express 或 Node 现存的漏洞来攻击你的网站。`X-Powered-By: Express` 默认情况下会添加到所有响应的 header。不过 `helmet.hidePoweredBy()` 中间件可以帮你把 header 中的 X-Powered-By 字段移除。你甚至可以把它设置成其它的值来骗过黑客，比如 `app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))`

# --hints--

应正确地加载 helmet.hidePoweredBy() 中间件

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
