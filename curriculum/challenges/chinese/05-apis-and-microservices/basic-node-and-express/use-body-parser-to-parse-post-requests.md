---
id: 587d7fb2367417b2b2512bf7
challengeType: 2
forumTopicId: 301520
title: 使用 body-parser 来解析POST请求
---

## Description
<section id='description'>
除了 GET 还有另一个常见的 http 动词，它是 POST。POST 是使用 HTML 表单发送客户端数据的默认方法。在 REST 规范中，POST 常用于发送数据，以便在数据库中创建新项目（新用户或新博客文章）。我们在这个项目中没有使用数据库，我们将学习如何处理 POST 请求。
在这些类型的请求中，数据不会出现在 URL 中，而是隐藏在请求正文中。这也是 HTML 请求的一部分，被称为负载。因为 HTML 是基于文本的，你看不到数据，这并不意味着它们是加密的。HTTP POST 请求的原始内容如下所示：

```http
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20
name=John+Doe&age=25
```

正如你所看到的，正文被编码成了查询字符串。这是 HTML 表单使用的默认格式。使用 Ajax，我们还可以使用 JSON 来处理具有更复杂结构的数据。还有另一种类型的编码：multipart/form-data。它用来上传二进制文件。
在本练习中，我们将使用网址编码 body。要解析来自 POST 请求的数据，你必须安装一个包：body-parser。这个包允许你使用一套可以解码不同格式数据的中间件，在<a href="https://github.com/expressjs/body-parser" target="_blank" >这里</a>查看文档。
</section>

## Instructions
<section id='instructions'>
在 package.json 中安装 body-parser 模块，然后在文件顶部 require 进来，用变量 bodyParser 保存它。
处理 URL 编码数据通过中间件的<code>bodyParser.urlencoded({extended: false})</code>方法。<code>extended=false</code>是一个配置选项，告诉解析器使用经典编码。当你使用它时，值只能是字符串或者数组。继承版使用起来数据更加灵活，它比 JSON 更好。传递给<code>app.use()</code>上一次方法调用返回的函数。通常中间件必须挂载在所有需要它的路由之前。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '"body-parser" 中间件应该被挂载'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/add-body-parser'').then(data => { assert.isAbove(data.mountedAt, 0, ''"body-parser" is not mounted correctly'') }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
