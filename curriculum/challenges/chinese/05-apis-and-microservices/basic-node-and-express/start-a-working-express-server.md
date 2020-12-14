---
id: 587d7fb0367417b2b2512bee
challengeType: 2
forumTopicId: 301519
title: 启动一个 Express 服务器
---

## Description
<section id='description'>
在 myApp.js 文件的前两行中，你可以看到创建一个 Express 应用对象是很简单的。这个 Express 对象有几个方法，在这些挑战中，我们将会学习它们更多的方法。一个基础的方法是<code>app.listen(port)</code>。它告诉服务器监听指定的端口，并且让这个服务处于运行状态。你可以在文件的底部看到它们。它在注释里面，因为出于测试原因，我们需要知道这个应用正在后台运行。你想要添加的所有代码，都放在这两部分之间。Glitch 将端口号存储在环境变量<code>process.env.PORT</code>中。它的值是<code>3000</code>。
让我们在服务端输出第一个字符串！在 Express 中，路由采用这种结构：<code>app.METHOD(PATH, HANDLER)</code>。<code>METHOD</code>是小写的 http 方法。<code>PATH</code>是服务器上的相对路径（它是一个字符串，甚至是正则表达式）<code>HANDLER</code>是 Express 匹配路由时调用的处理函数。
处理函数采用这种形式：<code>function(req, res) {...}</code>，在这个处理函数的参数中<code>req</code>是请求对象。<code>res</code>是响应对象。举个例子，处理函数：

```js
function(req, res) {
  res.send('Response String');
}
```

将会响应一个字符串 'Response String'。
</section>

## Instructions
<section id='instructions'>
当 GET 请求根路由（ "/" ）时，使用<code>app.get()</code>方法端响应一个 "Hello Express" 字符串。
<strong>注意：</strong> 在 Glitch 中点击 "Show Live" 按钮，通过查看日志确保你的代码正常运行，然后在浏览器中查看结果。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'app 应该输出 "Hello Express" 字符串'
    testString: 'getUserInput => $.get(getUserInput(''url'')).then(data => { assert.equal(data, ''Hello Express'', ''Your app does not serve the text "Hello Express"''); }, xhr => { throw new Error(xhr.responseText); })'

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
