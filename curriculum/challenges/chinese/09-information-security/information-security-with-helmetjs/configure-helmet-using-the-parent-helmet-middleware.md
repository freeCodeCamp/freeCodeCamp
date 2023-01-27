---
id: 587d8249367417b2b2512c40
title: 使用 helmet() 中间件来配置 Helmet
challengeType: 2
forumTopicId: 301575
dashedName: configure-helmet-using-the-parent-helmet-middleware
---

# --description--

请注意，本项目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化项目的基础上进行开发，你也可以从 <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

`app.use(helmet())` 将自动包括上面介绍的所有中间件，除了 `noCache()` 和 `contentSecurityPolicy()`，但如果有必要，这些可以被启用。 你也可以使用配置对象，单独禁用或配置任何其他中间件。

**例如：**

```js
app.use(helmet({
  frameguard: {         // configure
    action: 'deny'
  },
  contentSecurityPolicy: {    // enable and configure
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ['style.com'],
    }
  },
  dnsPrefetchControl: false     // disable
}))
```

为了教学目的和便于测试，我们分别介绍了每个中间件。 使用“父”`helmet()` 中间件很容易在真实项目中实现。

# --hints--

没有测试 - 这是一个描述性的挑战

```js
assert(true);
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
