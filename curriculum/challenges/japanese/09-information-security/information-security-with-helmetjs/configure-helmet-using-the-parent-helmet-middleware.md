---
id: 587d8249367417b2b2512c40
title: '「親」の helmet() ミドルウェアを使用して Helmet を構成する'
challengeType: 2
forumTopicId: 301575
dashedName: configure-helmet-using-the-parent-helmet-middleware
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`app.use(helmet())` では、前に紹介したすべてのミドルウェアが自動的にインクルードされますが、`noCache()` と `contentSecurityPolicy()` は除外されます。しかし、必要に応じてこれらを有効にすることができます。 config オブジェクトを使用して、他のミドルウェアを個別に無効化または構成することもできます。

**例:**

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

説明の都合上、またテストのしやすさを考慮して、各ミドルウェアを別々に紹介しました。 実際のプロジェクトでは「親」の `helmet()` ミドルウェアを簡単に実装して使用できます。

# --hints--

テストはありません。説明のみのチャレンジです。

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
