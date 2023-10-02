---
id: 587d7fb3367417b2b2512bfb
title: '如何使用 package.json ——所有 Node.js 项目或 npm 包的核心'
challengeType: 2
forumTopicId: 301528
dashedName: how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package
---

# --description--

你可以采用下面的任意一种编写代码的方式来完成这些挑战：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">这个 GitHub 仓库</a>，并在本地完成这些挑战。
- 使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-npm" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 上的初始化项目</a>来完成这些挑战。
- 使用你选择的网站生成器来完成项目。 需要包含我们 GitHub 仓库的所有文件。

如果你使用 Replit，请按照以下步骤设置项目：

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。

当你完成后，请将一个确保正常运行的 demo（项目演示）托管在可以公开访问的平台上。 然后将 demo 的 URL 提交到 Solution Link 字段中。

`package.json` 文件是所有 Node.js 项目和 npm 包的枢纽， 它存储有关项目的信息，就像 HTML 文档中的 `head` 部分描述网页内容一样。 它由单个 JSON 对象组成，并以键值对的形式存储项目信息， 且至少包含两个必填字段 `name` 和 `version`，但是最好提供有关项目的其他信息，这将对用户或者维护者有所帮助。

如果你查看项目的文件树，那么可以在文件树的最外层找到 `package.json`。 在接下来的几个挑战中你将完善这个文件。

在这个文件中最常见的信息之一是 `author` 字段， 它说明了项目的创建者，可以包含一个带有联系人信息或其他信息的字符串或对象。 对于较大的项目，建议使用对象；但是在我们的项目中，一个简单的字符串就够了，比如下面的例子：

```json
"author": "Jane Doe",
```

# --instructions--

在 `package.json` 文件中加入你的名字作为项目的 `author`。

**注意：**你正在写 JSON，所有的字段名必须用双引号（"）包裹，也必须用逗号（,）分割。

# --hints--

`package.json` 应该有一个有效的 “author” 键。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.author, '"author" is missing');
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
