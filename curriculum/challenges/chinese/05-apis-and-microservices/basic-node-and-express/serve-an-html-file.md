---
id: 587d7fb0367417b2b2512bef
title: 服务 HTML 文件
challengeType: 2
forumTopicId: 301516
dashedName: serve-an-html-file
---

# --description--

我们可以使用`res.sendFile(path)`方法来响应一个文件。你可以把响应一个文件的方法放到路由处理程序中：`app.get('/', ...)`。在后台，这个方法会根据你想发送的文件的类型，设置适当的 headers 头信息来告诉浏览器如何处理它。然后它会读取并发送文件。此方法需要文件的绝对路径。我们建议你使用 Node.js 的全局变量`__dirname`来计算出这个文件的绝对路径。

```js
absolutePath = __dirname + relativePath/file.ext
```

# --instructions--

要发送的文件是`/views/index.html`。在 app 中点击 "Show Live" 按钮，你会看到一个大的 HTML 标题（以及我们稍后将使用的表单…），目前它们还没有任何样式。

**注意:**你可以编辑上一个挑战的解题代码，或者创建一个新的挑战。如果你重写了之前的代码，请注意 Express 会从上到下重新解析对应的路由方法。它执行第一个匹配的路由处理方法。你必须注释掉前面的代码，否则服务器还是响应之前的字符串。

# --hints--

app 应该响应 views/index.html 文件

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.match(
        data,
        /<h1>.*<\/h1>/,
        'Your app does not serve the expected HTML'
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
