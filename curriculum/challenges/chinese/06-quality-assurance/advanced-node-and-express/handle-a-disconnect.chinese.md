---
id: 589fc831f9fc0f352b528e76
title: Handle a Disconnect
challengeType: 2
videoUrl: ''
localeTitle: 处理断开连接
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a>克隆的。您可能会注意到，到目前为止，您只增加了用户数。处理用户断开连接就像处理初始连接一样简单，除了区别在于你必须在每个套接字上监听它而不是在整个服务器上监听它。 <hr>为此，请在现有的连接侦听器中添加一个侦听器，该侦听器在没有数据传递的情况下侦听套接字上的“disconnect”。您只需登录用户已断开连接的控制台即可测试此功能。 <code>socket.on(&#39;disconnect&#39;, () =&gt; { /*anything you want to do on disconnect*/ });</code>要确保客户端持续获得当前用户的更新计数，您应该在断开连接时将currentUsers减少1，然后使用更新的计数发出&#39;user count&#39;事件！ <strong>注意</strong> <br>就像&#39;disconnect&#39;一样，套接字可以向服务器发出的所有其他事件应该在我们定义了&#39;socket&#39;的连接监听器中处理。当您认为自己已经做对时，请提交您的页面。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 服务器处理与套接字的事件断开连接
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /socket.on.*('|")disconnect('|")/gi, ''); }, xhr => { throw new Error(xhr.statusText); })
  - text: 您的客户正在侦听“用户计数”事件
    testString: getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.on.*('|")user count('|")/gi, 'Your client should be connection to server with the connection defined as socket'); }, xhr => { throw new Error(xhr.statusText); })

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
