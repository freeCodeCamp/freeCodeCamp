---
id: 587d8247367417b2b2512c36
title: 安装和引入 Helmet
challengeType: 2
forumTopicId: 301581
dashedName: install-and-require-helmet
---

# --description--

你可以采用下面的任意一种编写代码的方式来完成这些挑战：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">这个 GitHub 仓库</a>，并在本地完成这些挑战。
- 使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 上的初始化项目</a>来完成这些挑战。
- 使用你选择的网站生成器来完成项目。 需要包含我们 GitHub 仓库的所有文件。

如果你使用 Replit，请按照以下步骤设置项目：

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。

当你完成后，请将一个确保正常运行的 demo（项目演示）托管在可以公开访问的平台上。 然后将 demo 的 URL 提交到 Solution Link 字段中。

Helmet 通过设置各种 HTTP 头来保护你的 Express 应用程序。

# --instructions--

你在这些课程中写的所有代码都在 `myApp.js` 文件中，在初始代码之间。 不要改变或删除我们为你添加的代码。

Helmet `3.21.3` 版已经安装完毕，所以在 `myApp.js` 中请求它作为 `helmet`。

# --hints--

`helmet` 版本 `3.21.3` 应该在 `package.json` 中。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      const packJson = JSON.parse(data);
      const helmet = packJson.dependencies.helmet;
      assert(helmet === '3.21.3' || helmet === '^3.21.3');
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
