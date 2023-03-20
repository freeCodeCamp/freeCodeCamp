---
id: 587d7fb6367417b2b2512c06
title: 安装和设置 Mongoose
challengeType: 2
forumTopicId: 301540
dashedName: install-and-set-up-mongoose
---

# --description--

你可以采用下面的任意一种编写代码的方式来完成这些挑战：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-mongomongoose/" target="_blank" rel="noopener noreferrer nofollow">这个 GitHub 仓库</a>，并在本地完成这些挑战。
- 使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-mongomongoose" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 上的初始化项目</a>来完成这些挑战。
- 使用你选择的网站生成器来完成项目。 需要包含我们 GitHub 仓库的所有文件。

如果你使用 Replit，请按照以下步骤设置项目：

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。

当你完成后，请将一个确保正常运行的 demo（项目演示）托管在可以公开访问的平台上。 然后将 demo 的 URL 提交到 Solution Link 字段中。

在这个挑战中，你将建立一个 MongoDB Atlas 数据库并导入连接到它所需的软件包。

按照<a href='https://https://www.freecodecamp.org/chinese/news/get-started-with-mongodb-atlas/' target="_blank" rel="noopener noreferrer nofollow">这篇教程</a>在 MongoDB Atlas 创建一个托管数据库。

# --instructions--

`mongoose@^5.11.15` 已添加到你项目的 `package.json` 文件中。 首先，在 `myApp.js` 中请求 mongoose 为 `mongoose`。 接下来，创建一个 `.env` 文件并向其中添加一个 `MONGO_URI` 变量。 变量的值为你的 MongoDB Atlas 数据库 URI。 应用单引号或双引号包裹 URI。请记住，环境变量 `=` 两边不能有空格。 例如，`MONGO_URI='VALUE'`。

**注意：**如果你使用的是 Replit，则无法创建 `.env` 文件。 相反，使用内置的 <dfn>SECRETS</dfn> 选项卡来添加变量。 在使用 <em>SECRETS</em> 选项卡时，<em>不要</em>将值括在引号中。

When you are done, connect to the database by calling the `connect` method within your `myApp.js` file by using the following syntax:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

“mongoose version ^5.11.15” 依赖项应该在 package.json 中。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongoose');
      assert.match(
        packJson.dependencies.mongoose,
        /^\^5\.11\.15/,
        'Wrong version of "mongoose". It should be ^5.11.15'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应使用 “mongoose” 连接数据库。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/is-mongoose-ok').then(
    (data) => {
      assert.isTrue(data.isMongooseOk, 'mongoose is not connected');
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
