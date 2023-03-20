---
id: 587d8247367417b2b2512c38
title: 使用 helmet.frameguard() 降低点击劫持的风险
challengeType: 2
forumTopicId: 301582
dashedName: mitigate-the-risk-of-clickjacking-with-helmet-frameguard
---

# --description--

请注意，本项目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化项目的基础上进行开发，你也可以从 <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

你的网页可能在未经你同意的情况下被放在 `<frame>` 或 `<iframe>` 中。 这可能会导致点击劫持攻击等情况。 点击劫持是一种欺骗用户的技术，使其与用户认为不同的页面进行互动。 This can be obtained by executing your page in a malicious context, by means of iframing. In that context, a hacker can put a hidden layer over your page. 隐藏的按钮可以被用来运行坏的脚本。 该中间件设置 X-Frame-Options 头。 它限制了谁可以把你的网站放在一个框架里。 它有三种模式：DENY、SAMEORIGIN 和 ALLOW-FROM。

我们不需要让我们的应用程序可以被嵌入。

# --instructions--

使用 `helmet.frameguard()` 时应传递配置对象 `{action: 'deny'}`。

# --hints--

应正确加载 helmet.frameguard() 中间件

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(
        data.appStack,
        'frameguard',
        'helmet.frameguard() middleware is not mounted correctly'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

helmet.frameguard() 'action' 应该设置为 “DENY”

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.property(data.headers, 'x-frame-options');
      assert.equal(data.headers['x-frame-options'], 'DENY');
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
