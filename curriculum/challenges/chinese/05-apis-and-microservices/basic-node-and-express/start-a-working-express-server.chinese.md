---
id: 587d7fb0367417b2b2512bee
title: Start a Working Express Server
localeTitle: 启动Working Express服务器
challengeType: 2
---

## Description
<section id='description'> 在myApp.js文件的前两行中，您可以看到如何轻松创建Express应用程序对象。这个对象有几种方法，我们将在这些挑战中学到很多方法。一个基本方法是<code>app.listen(port)</code> 。它告诉您的服务器侦听给定端口，使其处于运行状态。您可以在文件底部看到它。这是内部评论，因为出于测试原因，我们需要应用程序在后台运行。您可能想要添加的所有代码都介于这两个基本部分之间。 Glitch将端口号存储在环境变量<code>process.env.PORT</code> 。它的价值是<code>3000</code> 。 让我们的第一个字符串！在Express中，路由采用以下结构： <code>app.METHOD(PATH, HANDLER)</code> 。 METHOD是小写的http方法。 PATH是服务器上的相对路径（它可以是字符串，甚至是正则表达式）。 HANDLER是Express匹配路由时调用的功能。 处理程序采用表单<code>function(req, res) {...}</code> ，其中req是请求对象，res是响应对象。例如，处理程序
<blockquote>function(req, res) {<br> res.send('Response String');<br>}</blockquote> 将提供字符串'Response String'。 
</section>

## Instructions
<section id='instructions'> 
使用<code>app.get()</code>方法为字符串Hello Express提供服务，以匹配/ root路径的GET请求。通过查看日志确保您的代码正常工作，然后在浏览器中查看结果，单击Glitch UI中的“Show Live”按钮。 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的应用应该提供字符串'Hello Express'
    testString: 'getUserInput => $.get(getUserInput(''url'')).then(data => { assert.equal(data, ''Hello Express'', ''Your app does not serve the text "Hello Express"''); }, xhr => { throw new Error(xhr.responseText); })'

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
