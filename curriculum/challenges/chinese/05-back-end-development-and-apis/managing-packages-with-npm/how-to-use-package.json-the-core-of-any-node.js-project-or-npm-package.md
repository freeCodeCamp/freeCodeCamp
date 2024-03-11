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
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete these challenges.
- 使用你选择的网站生成器来完成项目。 需要包含我们 GitHub 仓库的所有文件。

`package.json` 文件是所有 Node.js 项目和 npm 包的枢纽， It stores information about your project. 它由单个 JSON 对象组成，并以键值对的形式存储项目信息， There are only two required fields; `name` and `version`, but it’s good practice to provide additional information.

You can create the `package.json` file from the terminal using the `npm init` command. This will run a guided setup. Using `npm init` with the `-y` flag will generate the file without having it ask any questions, `npm init -y`.

如果你查看项目的文件树，那么可以在文件树的最外层找到 `package.json`。 在接下来的几个挑战中你将完善这个文件。

在这个文件中最常见的信息之一是 `author` 字段， 它说明了项目的创建者，可以包含一个带有联系人信息或其他信息的字符串或对象。 对于较大的项目，建议使用对象；但是在我们的项目中，一个简单的字符串就够了，比如下面的例子：

```json
"author": "Jane Doe",
```

# --instructions--

在 `package.json` 文件中加入你的名字作为项目的 `author`。

**注意：**你正在写 JSON，所有的字段名必须用双引号（"）包裹，也必须用逗号（,）分割。

If you are using Gitpod, make sure the app is running and the preview window is open. Copy the preview window's URL and paste it into the Solution Link input below.

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
