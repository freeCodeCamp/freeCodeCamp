---
id: 587d8249367417b2b2512c40
title: 使用 helmet() 中间件来配置 Helmet
challengeType: 2
forumTopicId: 301575
dashedName: configure-helmet-using-the-parent-helmet-middleware
---

# --description--

请注意，本项目在 [这个 Repl.it 项目](https://repl.it/github/freeCodeCamp/boilerplate-infosec) 的基础上进行开发。你也可以从 [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) 上克隆。

`app.use(helmet())` 会自动加载除了 `noCache()` 和 `contentSecurityPolicy()` 以外的，上面所有提到的中间件。但如果需要的话，我们也可以手动加入这两个中间件。通过修改配置对象，你还可以启用或禁用其它中间件。

<h3>示例：</h3>

```js
app.use(helmet({
  frameguard: {         // 配置
    action: 'deny'
  },
  contentSecurityPolicy: {    // 启用并配置
    directives: {
      defaultSrc: ["self"],
      styleSrc: ['style.com'],
    }
  },
  dnsPrefetchControl: false     // 禁用
}))
```

为了方便教学和测试，我们会一个一个地引入中间件。但在实际项目中，通过使用父级的 `helmet()` 来实现是最清晰和简洁的。

# --hints--

没有测试—这是一个介绍关卡

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
