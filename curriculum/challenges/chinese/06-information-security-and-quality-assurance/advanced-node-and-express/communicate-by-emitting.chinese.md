---
id: 589fc831f9fc0f352b528e75
title: Communicate by Emitting
challengeType: 2
isHidden: false
forumTopicId: 301550
localeTitle: 通过 Emitting 通信
---

## Description
<section id='description'>
注意，本项目在<a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/'>这个 Glitch 项目</a>的基础上进行开发，你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-socialauth/'>GitHub</a> 上克隆。
<dfn>Emit</dfn> 是你会用到的，最常见的通信方式。如果我们从服务器发送信息给 'io'，就相当于把事件的名称和数据发送给了所有处于连接状态的 socket。我们可以利用这个特性实现这样的功能：只要有新用户连接到服务器，我们就可以把目前连接的总用户数发给所有已连接的用户，这样所有用户随时都可以看到实时的在线人数。
<hr>首先，我们需要在监听连接的地方之前添加一个用于追踪用户数的变量：<code>var currentUsers = 0;</code>
然后，只要有人连接到服务器，我们需要在发出用户数量之前先给这个变量加 1：<code>++currentUsers;</code>
最后，在监听连接的地方发出（emit）该事件即可。这个事件应命名为 'user count'，且数据应该为 'currentUsers'：<code>io.emit('user count', currentUsers);</code>
<hr>接下来，我们还需要让客户端监听从服务端发出的事件。为此，我们还是需要用到 <em>on</em> 这个方法：

```js
socket.on('user count', function(data){
  console.log(data);
});
```

现在你可以尝试启动你的 app 并登录，你会看到在客户端的控制台打印出了 1，这就表示目前连接到服务器的用户数为 1。你可以试着通过打开多个 app 来验证数量是否会增加。
完成上述要求后，你就可以在左边提交你的页面链接。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应定义 currentUsers
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => {assert.match(data, /currentUsers/gi, 'You should have variable currentUsers defined');}, xhr => { throw new Error(xhr.statusText); })
  - text: 服务器应在有新的连接时 emit 当前用户数量。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io.emit.*('|")user count('|").*currentUsers/gi, 'You should emit "user count" with data currentUsers'); }, xhr => { throw new Error(xhr.statusText); })
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
