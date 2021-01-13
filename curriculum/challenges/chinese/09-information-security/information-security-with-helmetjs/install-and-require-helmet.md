---
id: 587d8247367417b2b2512c36
title: 安装和引入 Helmet
challengeType: 2
forumTopicId: 301581
dashedName: install-and-require-helmet
---

# --description--

请注意，本项目在 [这个 Repl.it 项目](https://repl.it/github/freeCodeCamp/boilerplate-infosec) 的基础上进行开发。你也可以从 [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) 上克隆。

Helmet 通过配置不同的 HTTP header 信息来使你的 Express 应用更加安全。

# --instructions--

安装版本号为 `3.21.3` 的 Helmet，并引入它。

# --hints--

`package.json` 中应存在版本号为 `3.21.3` 的 `helmet` 依赖项

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.dependencies.helmet === '3.21.3');
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
