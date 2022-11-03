---
id: 587d7fb0367417b2b2512bed
title: 认识 Node 的控制台
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

你可以采用下面的任意一种编写代码的方式来完成这些挑战：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">这个 GitHub 仓库</a>，并在本地完成这些挑战。
- 使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-express" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 上的初始化项目</a>来完成这些挑战。
- 使用你选择的网站生成器来完成项目。 需要包含我们 GitHub 仓库的所有文件。

完成本项目后，请将一个正常运行的 demo（项目演示）托管在可以公开访问的平台。 然后在 `Solution Link` 字段中提交它的 URL。

在开发过程中，能够随时看到代码的运行结果是非常重要的。

Node 只是一个 JavaScript 环境。 与客户端 JavaScript 一样，你可以使用控制台显示有用的调试信息。 在本地计算机上，你可以在终端中输出调试信息。 在 Replit 上，右侧边栏会默认打开一个终端。

我们建议在做这些挑战题时保持终端打开的状态。 通过这些终端的输出，你可能会发现这些错误的本质原因。

# --instructions--

修改 `myApp.js` 文件，在控制台打印出 “Hello World”。

# --hints--

控制台应该输出 `"Hello World"`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/hello-console').then(
    (data) => {
      assert.isTrue(data.passed, '"Hello World" is not in the server console');
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
