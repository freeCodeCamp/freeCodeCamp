---
id: 587d7fb0367417b2b2512bef
title: Serve an HTML File
localeTitle: 提供HTML文件
challengeType: 2
---

## Description
<section id='description'> 我们可以使用<code>res.sendFile(path)</code>方法响应文件。 您可以将它放在<code>app.get('/', ...)</code>路由处理程序中。在幕后，此方法将根据其类型设置适当的标头，以指示您的浏览器如何处理您要发送的文件。然后它将读取并发送文件。此方法需要绝对文件路径。我们建议您使用Node全局变量<code>__dirname</code>来计算路径。 例如:

```js
absolutePath = __dirname + relativePath/file.ext
```

</section>

## Instructions
<section id='instructions'> 
要发送的文件是<code>/views/index.html</code> 。尝试“显示”你的应用程序，你应该看到一个很大的HTML标题（以及我们稍后将使用的表单......），没有应用任何样式。 

<strong>注意：</strong> 您可以编辑上一个挑战的解决方案，也可以创建一个新挑战。如果您创建新解决方案，请记住Express会从上到下评估路由。它执行第一个匹配的处理程序。您必须注释掉前面的解决方案，否则服务器将继续使用字符串进行响应。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的应用应该提供文件views / index.html
    testString: 'getUserInput => $.get(getUserInput(''url'')).then(data => { assert.match(data, /<h1>.*<\/h1>/, ''Your app does not serve the expected HTML''); }, xhr => { throw new Error(xhr.responseText); })'

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
