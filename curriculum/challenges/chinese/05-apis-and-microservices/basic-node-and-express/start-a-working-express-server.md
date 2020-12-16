---
id: 587d7fb0367417b2b2512bee
title: 启动一个 Express 服务器
challengeType: 2
forumTopicId: 301519
---

# --description--

在 myApp.js 文件的前两行中，你可以看到创建一个 Express 应用对象是很简单的。这个 Express 对象有几个方法，在这些挑战中，我们将会学习它们更多的方法。一个基础的方法是`app.listen(port)`。它告诉服务器监听指定的端口，并且让这个服务处于运行状态。你可以在文件的底部看到它们。它在注释里面，因为出于测试原因，我们需要知道这个应用正在后台运行。你想要添加的所有代码，都放在这两部分之间。Glitch 将端口号存储在环境变量`process.env.PORT`中。它的值是`3000`。

让我们在服务端输出第一个字符串！在 Express 中，路由采用这种结构：`app.METHOD(PATH, HANDLER)`。`METHOD`是小写的 http 方法。`PATH`是服务器上的相对路径（它是一个字符串，甚至是正则表达式）`HANDLER`是 Express 匹配路由时调用的处理函数。

处理函数采用这种形式：`function(req, res) {...}`，在这个处理函数的参数中`req`是请求对象。`res`是响应对象。举个例子，处理函数：

```js
function(req, res) {
  res.send('Response String');
}
```

将会响应一个字符串 'Response String'。

# --instructions--

当 GET 请求根路由（ "/" ）时，使用`app.get()`方法端响应一个 "Hello Express" 字符串。

**注意：** 在 Glitch 中点击 "Show Live" 按钮，通过查看日志确保你的代码正常运行，然后在浏览器中查看结果。

# --hints--

app 应该输出 "Hello Express" 字符串

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.equal(
        data,
        'Hello Express',
        'Your app does not serve the text "Hello Express"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

