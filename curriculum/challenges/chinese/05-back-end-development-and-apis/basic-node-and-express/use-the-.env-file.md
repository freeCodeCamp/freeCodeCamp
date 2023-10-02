---
id: 587d7fb1367417b2b2512bf2
title: 使用 .env 文件
challengeType: 2
forumTopicId: 301521
dashedName: use-the--env-file
---

# --description--

`.env` 文件是一个用于将环境变量传给应用程序的隐藏文件， 这是一个除了开发者之外没人可以访问的私密文件，它可以用来存储你想保密或者隐藏的数据， 例如，它可以存储第三方服务的 API 密钥或者数据库 URI， 也可以使用它来存储配置选项， 通过设置配置选项，你可以改变应用程序的行为，而无需重写一些代码。

在应用程序中可以通过 `process.env.VAR_NAME` 访问到环境变量。 `process.env` 对象是 Node 程序中的一个全局对象，可以给这个变量传字符串。 习惯上，变量名全部大写，单词之间用下划线分隔。 `.env` 是一个 shell 文件，因此不需要用给变量名和值加引号。 还有一点需要注意，当你给变量赋值时等号两侧不能有空格，例如：`VAR_NAME=value`。 通常来讲，每一个变量定义会独占一行。

# --instructions--

添加一个环境变量作为配置选项。

在项目根目录创建一个 `.env` 文件，并存储变量 `MESSAGE_STYLE=uppercase`。

然后，在你在上个挑战中创建的 `/json` GET 路由处理程序中访问 `process.env.MESSAGE_STYLE`，并且如果变量等于 `uppercase`，将响应对象的 `message` 转换为大写。 响应对象应该是 `{"message": "Hello json"}` or `{"message": "HELLO JSON"}`，取决于 `MESSAGE_STYLE` 的值。 请注意，因为我们的测试运行的方式，你必须阅读路由处理器**里面**（而不是外面）`process.env.MESSAGE_STYLE` 的值。

**注意：** 如果你正在使用 Replit，你无法创建一个 `.env` 文件。 相反，使用内置的 <dfn>SECRETS</dfn> 标签添加变量。

如果你在本地工作，你将需要 `dotenv` 包。 它将环境变量从你的 `.env` 文件加载到 `process.env` 中。 `dotenv` 包已经安装，并且在你项目的 `package.json` 文件中。 在你的 `myApp.js` 文件的顶端，添加 `require('dotenv').config()` 以加载环境变量。

# --hints--

端点 `/json` 的响应应该根据环境变量 `MESSAGE_STYLE` 改变

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/use-env-vars').then(
    (data) => {
      assert.isTrue(
        data.passed,
        'The response of "/json" does not change according to MESSAGE_STYLE'
      );
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
