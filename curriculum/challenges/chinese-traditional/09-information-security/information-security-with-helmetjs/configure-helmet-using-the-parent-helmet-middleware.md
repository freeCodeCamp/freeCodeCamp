---
id: 587d8249367417b2b2512c40
title: 使用 helmet() 中間件來配置 Helmet
challengeType: 2
forumTopicId: 301575
dashedName: configure-helmet-using-the-parent-helmet-middleware
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

`app.use(helmet())` 將自動包括上面介紹的所有中間件，除了 `noCache()` 和 `contentSecurityPolicy()`，但如果有必要，這些可以被啓用。 你也可以使用配置對象，單獨禁用或配置任何其他中間件。

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

爲了教學目的和便於測試，我們分別介紹了每個中間件。 使用“父”`helmet()` 中間件很容易在真實項目中實現。

# --hints--

沒有測試 - 這是一個描述性的挑戰

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
