---
id: 587d7fb2367417b2b2512bf7
title: Use body-parser to Parse POST Requests
localeTitle: 使用body-parser来解析POST请求
challengeType: 2
---

## Description
<section id='description'> 除了GET之外还有另一个常见的http动词，它是POST。 POST是用于使用HTML表单发送客户端数据的默认方法。在REST约定中，POST用于发送数据以在数据库中创建新项目（新用户或新博客文章）。我们在这个项目中没有数据库，但我们将学习如何处理POST请求。 在这些请求中，数据不会出现在URL中，它隐藏在请求正文中。这是HTML请求的一部分，也称为有效负载。由于HTML是基于文本的，即使您没有看到数据，也不意味着它们是秘密的。 HTTP POST请求的原始内容如下所示： 
<blockquote>POST /path/subpath HTTP/1.0<br>From: john@example.com<br>User-Agent: someBrowser/1.0<br>Content-Type: application/x-www-form-urlencoded<br>Content-Length: 20<br>name=John+Doe&age=25</blockquote> 正如您所见，正文被编码为查询字符串。这是HTML表单使用的默认格式。使用Ajax，我们还可以使用JSON来处理具有更复杂结构的数据。还有另一种编码类型：multipart / form-data。这个用于上传二进制文件。 在本练习中，我们将使用urlencoded主体。 要解析来自POST请求的数据，您必须安装一个包：body-parser。该软件包允许您使用一系列中间件，这些中间件可以解码不同格式的数据。请参阅<a href="https://github.com/expressjs/body-parser" target="_blank" >此处</a>的文档。 
</section>

## Instructions
<section id='instructions'> 
在package.json中安装body-parser模块。然后在文件的顶部需要它。将其存储在名为bodyParser的变量中。 
<code>bodyParser.urlencoded({extended: false})</code>返回处理url编码数据的中间件。<strong>注意：</strong><code>extended=false</code>是一个配置选项，告诉解析器使用经典编码。使用它时，值可以只是字符串或数组。扩展版本允许更多的数据灵活性，但它被JSON击败。将<code>app.use()</code>传递给前一个方法调用返回的函数。像往常一样，必须在需要它的所有路由之前安装中间件。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该安装'body-parser'中间件
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/add-body-parser'').then(data => { assert.isAbove(data.mountedAt, 0, ''"body-parser" is not mounted correctly'') }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
