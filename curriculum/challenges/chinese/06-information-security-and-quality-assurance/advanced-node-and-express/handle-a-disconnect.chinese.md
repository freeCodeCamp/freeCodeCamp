---
id: 589fc831f9fc0f352b528e76
title: Handle a Disconnect
challengeType: 2
isHidden: false
forumTopicId: 301552
localeTitle: 处理连接断开
---

## Description
<section id='description'>
注意，本项目在<a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/'>这个 Glitch 项目</a>的基础上进行开发，你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-socialauth/'>GitHub</a> 上克隆。
你也许注意到，目前为止我们只处理用户数量的增加，没有处理减少。事实上，处理用户断开连接也很简单。区别在于，新连接的监听是发生在整个服务器上，但连接断开的监听是发生在每个 socket 上。
<hr>为此，我们需要在目前的监听回调里面监听 socket 断开连接的事件。在断开连接的回调函数中，我们可以不传任何参数，但你可以在这里添加连接断开的测试代码：<code>socket.on('disconnect', () => { /* 在这里添加连接断开的测试代码 */ });</code>
为确保客户端可以看到实时的用户数量，显然，我们应该在用户断开时让 currentUsers 减 1，然后发送 'user count' 事件，并使用修改后的用户数量。
<strong>注意：</strong><br>和 'disconnect' 类似，所有 socket 可以发送到服务器的事件，我们都应该在有 'socket' 定义的连接监听器里处理。
完成上述要求后，你就可以在左边提交你的页面链接。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 服务器应处理断开 socket 连接的事件。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /socket.on.*('|")disconnect('|")/gi, ''); }, xhr => { throw new Error(xhr.statusText); })
  - text: '客户端应监听 "user count" 事件。'
    testString: getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.on.*('|")user count('|")/gi, 'Your client should be connection to server with the connection defined as socket'); }, xhr => { throw new Error(xhr.statusText); })

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
