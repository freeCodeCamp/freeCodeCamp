---
id: 589fc830f9fc0f352b528e74
title: Set up the Environment
challengeType: 2
isHidden: false
forumTopicId: 301566
localeTitle: 设置环境
---

## Description
<section id='description'>
注意，本项目在<a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/'>这个 Glitch 项目</a>的基础上进行开发，你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-socialauth/'>GitHub</a> 上克隆。
现在，我们需要添加 Socket.IO 作为依赖，在你的代码中引入，给它传入参数 http 并实例化，将其命名为<code>io</code>，就像这样：<code>const io = require('socket.io')(http);</code>
我们需要处理的第一件事是监听从客户端发出的连接事件，我们可以调用 <em>on</em> 方法来监听具体的事件。它接收两个参数：一个是发出的事件的标题字符串，另一个是后续用来传递数据的回调函数。在这个回调函数中，我们用 <em>socket</em> 来代表它所包含的数据。简单来说，socket 就是指已连接到服务器的客户端。
在我们服务器代码中，只需要在注释间添加以下内容即可：

```js
io.on('connection', socket => {
  console.log('A user has connected');
});
```

对于发出连接事件的客户端，只需要在 client.js 中添加以下内容：

```js
/*global io*/
var socket = io();
```

注意，这个 client.js 文件是在用户通过验证后加载到客户端的。在这个文件中，我们没有定义 io 变量，但第一行的注释会阻止运行时产生的报错。然后，我们在 chat.pug 的页面上已经为你添加好了 Socket.IO 库的 CDN。
现在你可以尝试启动你的 app 并登录，你会看到服务器的控制台中打印了 'A user has connected'
<strong>注意：</strong><br>只有在连接到处于同一个 url/server 上的 socket 时，<code>io()</code>才可以正常执行。如果需要连接到外部的 socket，就需要这样调用：<code>io.connect('URL');</code>。
完成上述要求后，你就可以在左边提交你的页面链接。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应添加 Socket.IO 作为依赖。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'socket.io', 'Your project should list "socket.io" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Socket.IO 应正确地引入和实例化。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => {assert.match(data, /io.*=.*require.*('|")socket.io('|").*http/gi, 'You should correctly require and instantiate socket.io as io.');}, xhr => { throw new Error(xhr.statusText); })
  - text: Socket.IO 应监听连接。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io.on.*('|")connection('|").*socket/gi, 'io should listen for "connection" and socket should be the 2nd arguments variable'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 客户端应连接到服务器。
    testString: getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.*=.*io/gi, 'Your client should be connection to server with the connection defined as socket'); }, xhr => { throw new Error(xhr.statusText); })

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
