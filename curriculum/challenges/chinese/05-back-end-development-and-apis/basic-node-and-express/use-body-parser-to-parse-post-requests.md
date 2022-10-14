---
id: 587d7fb2367417b2b2512bf7
title: 使用 body-parser 来解析 POST 请求
challengeType: 2
forumTopicId: 301520
dashedName: use-body-parser-to-parse-post-requests
---

# --description--

除了 GET 还有另一个常见的 HTTP 动词，即 POST。 POST 是使用 HTML 表单发送客户端数据的默认方法。 在 REST 规范中，POST 常用于发送数据以在数据库中创建新项目（新用户或新博客文章）。 在这个项目中没有使用数据库，但下面将学习如何处理 POST 请求。

在这些类型的请求中，数据不会出现在 URL 中，而是隐藏在请求正文中。 请求正文也是 HTML 请求的一部分，被称为负载。 即使数据在 URL 中是不可见的，也不意味着它是私有的。 要了解原因，请观察 HTTP POST 请求的原始内容：

```http
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20

name=John+Doe&age=25
```

正如你所看到的，正文被编码成类似查询字符串的形式， 这是 HTML 表单使用的默认格式。 我们还可以通过 Ajax 使用 JSON 来处理具有更复杂结构的数据。 还有另一种类型的编码：multipart/form-data， 它被用来上传二进制文件。 在本练习中，你将使用 URL 编码的正文。 要解析来自 POST 请求的数据，你必须使用 `body-parser` 包。 这个包包含一套可以解码不同格式数据的中间件。

# --instructions--

`body-parser` 已经安装并且在你项目的 `package.json` 文件中。 在 `myApp.js` 文件的顶部包含（`require`）它，并将其存储在名为 `bodyParser` 的变量中。 `bodyParser.urlencoded({extended: false})` 返回处理 URL 编码数据的中间件。 将上一个方法调用返回的函数传递给 `app.use()`。 像往常一样，中间件必须在所有依赖它的路由之前安装。

**注意：** `extended` 是一个配置选项, 告诉 `body-parser` 需要使用哪个解析。 当 `extended=false` 时，它使用经典编码 `querystring` 库。 当 `extended=true`时，它使用 `qs` 库进行解析。

当使用 `extended=false` 时，值可以只是字符串或数组。 使用 `querystring` 时返回的对象并不继承的 JavaScript `Object`，这意味着 `hasOwnProperty`、`toString` 等函数将不可用。 拓展版本的数据更加灵活，但稍逊于 JSON。

# --hints--

应该挂载 “body-parser” 中间件

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/add-body-parser').then(
    (data) => {
      assert.isAbove(
        data.mountedAt,
        0,
        '"body-parser" is not mounted correctly'
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
