---
id: 587d8249367417b2b2512c3f
title: 使用 helment.contentSecurityPolicy() 设置内容安全策略
challengeType: 2
forumTopicId: 301585
dashedName: set-a-content-security-policy-with-helmet-contentsecuritypolicy
---

# --description--

请注意，本项目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化项目的基础上进行开发，你也可以从 <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

在这个挑战中，我们要重点讨论现代浏览器中一种能有效减轻安全风险和防御很多种类型常见攻击的安全防护。 通过设置和配置内容安全策略，你可以防止在页面中无意中注入任何内容。 这会让你的应用远离 XSS 漏洞、恶意追踪、恶意 frames 和很多其他攻击。 CSP 通过配置资源白名单来避免这些问题。 你可以给任何一种类型的页面资源（脚本、样式文件、字体、frames、媒体文件等）做这个配置。 它支持很多指令，所以网站管理员可以做细致的控制。 更多详情请参考 HTML 5 Rocks 和 KeyCDN。 不幸的是，一些旧的浏览器不支持 CSP。

默认的指令很容易受到攻击, 所以设置 defaultSrc 指令作为降级方案很重要。 Helmet 同时支持 defaultSrc 和 default-src 命名规范。 降级方案可以应用在大部分指令上。

# --instructions--

在这个练习中，使用 `helmet.contentSecurityPolicy()`。 通过添加一个 `directives` 对象来配置它。 在该对象中，将 `defaultSrc` 设置为 `["'self'"]`（允许的来源列表必须是一个数组），以便默认只信任你的网站地址。 同时设置 `scriptSrc` 指令，以便你只允许从你的网站（`'self'`）和域名 `'trusted-cdn.com'` 下载脚本。

提示：在 `'self'` 关键词中，单引号也是关键词的一部分，所以你应该用双引号来包起它才能正常工作。

# --hints--

应正确安装 helmet.contentSecurityPolicy() 中间件。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'csp');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

你的 csp 配置不正确。 defaultSrc 应为 ["'self'"]，并且 scriptSrc 应为 ["'self'", 'trusted-cdn.com']

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      var cspHeader = Object.keys(data.headers).filter(function (k) {
        return (
          k === 'content-security-policy' ||
          k === 'x-webkit-csp' ||
          k === 'x-content-security-policy'
        );
      })[0];
      assert.equal(
        data.headers[cspHeader],
        "default-src 'self'; script-src 'self' trusted-cdn.com"
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
