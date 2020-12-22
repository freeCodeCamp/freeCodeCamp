---
id: 587d8248367417b2b2512c3d
title: 使用 helmet.dnsPrefetchControl() 禁用 DNS 预获取
challengeType: 2
forumTopicId: 301577
---

# --description--

请注意，本项目在 [这个 Repl.it 项目](https://repl.it/github/freeCodeCamp/boilerplate-infosec) 的基础上进行开发。你也可以从 [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) 上克隆。

为了提高性能，大部分浏览器都会为页面上的链接预先加载 DNS 记录。这样当用户点击一个链接的时候浏览器已经知道其 IP 地址了。但这也会造成 DNS 服务的过度使用（如果你有一个百万用户数量级的大型网站）、隐私问题（窃听者可以借此推测出你在访问哪个页面）、页面统计数据准确性（有些没访问过的链接会被标记成已访问）。如果你对安全性要求比较高，你应该禁用 DNS 预加载。当然，这样做会让你损失一些性能。

# --hints--

应正确加载 helmet.dnsPrefetchControl() 中间件

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'dnsPrefetchControl');
      assert.equal(data.headers['x-dns-prefetch-control'], 'off');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

