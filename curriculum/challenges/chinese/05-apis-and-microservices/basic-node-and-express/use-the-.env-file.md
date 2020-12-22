---
id: 587d7fb1367417b2b2512bf2
title: 使用 .env 文件
challengeType: 2
forumTopicId: 301521
---

# --description--

`.env`文件是一个隐藏文件，用于将环境变量传给应用程序。这是一个私密文件，除了你之外没人可以访问它，它可以用来存储你想保持私有或者隐藏的数据。举个例子，可以存储第三方服务 API 密钥或者数据库 URI。你也可以使用它来存储配置选项。通过设置配置选项，你可以改变应用程序的行为，而无需重写一些代码。

在应用程序中可以通过`process.env.VAR_NAME`访问到环境变量。`process.env`是 Node 程序中的一个全局对象，可以给这个变量传字符串。按照惯例，变量名都是大写的，单词之间用下划线隔开。`.env`是一个 shell 文件，因此不需要用给变量名和值加引号。还有一点需要注意，当你给变量赋值时，等号周围不能有空格，举个例子：`VAR_NAME=value`。通常来讲，每一个变量会单独定义在新的一行。

# --instructions--

让我们添加一个环境变量作为配置选项。

在`.env`文件中保存变量`MESSAGE_STYLE=uppercase`。它的作用是，告诉上一次挑战中的路由处理程序，当我们 GET 方法请求 /JSON 时，如果`process.env.MESSAGE_STYLE`的值为`uppercase`，那么返回的对象则应该是`{"message": "HELLO JSON"}`.

# --hints--

客户端响应`/json`的值，应该随着环境变量`MESSAGE_STYLE`的变化而改变

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

