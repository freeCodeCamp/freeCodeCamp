---
id: 589fc830f9fc0f352b528e74
challengeType: 2
forumTopicId: 301566
title: 设置环境
---

## Description

<section id='description'>

在接下来的挑战中，我们将会用到 <code>chat.pug</code> 文件。首先，你需要在你的 <code>routes.js</code> 文件中为 <code>/chat</code> 添加一个处理 GET 请求的路由，并给它传入 <code>ensureAuthenticated</code>。在回调函数中，我们需要让它 render <code>chat.pug</code> 文件，并在响应中包含 <code>{ user: req.user }</code> 信息。现在，请修改 <code>/auth/github/callback</code> 路由，让它可以像这样设置 user_id：<code>req.session.user_id = req.user.id</code>，并在设置完成后重定向至 <code>/chat</code>。

我们还需要添加 <code>html</code> 和 <code>socket.io</code> 两个依赖项，并且像这样引入：

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

现在我们的 _express_ 应用已经包含了 _http_ 服务，接下来我们需要监听 _http_ 服务的事件。为此，我们需要把 <code>app.listen</code> 更新为 <code>http.listen</code>。

我们需要处理的第一件事是监听从客户端发出的连接事件，我们可以调用 <dfn>on</dfn> 方法来监听具体的事件。它接收两个参数：一个是发出的事件的标题字符串，另一个是后续用来传递数据的回调函数。在这个回调函数中，我们用 <em>socket</em> 来代表它所包含的数据。简单来说，socket 就是指已连接到服务器的客户端。

为了可以监听服务器的连接事件，我们在数据库连接的部分加入如下代码：

```javascript
io.on('connection', socket => {
  console.log('A user has connected');
});
```

对于发出连接事件的客户端，只需要在 <code>client.js</code> 中添加以下内容：

```js
/*global io*/
let socket = io();
```

注意，这个 <code>client.js</code> 文件是在用户通过验证后才加载到客户端的。在这个文件中，我们没有定义 io 变量，但第一行的注释会阻止运行时产生的报错。不过，我们在 chat.pug 的页面上已经为你添加好了 Socket.IO 库的 CDN。

现在你可以重启一下你的 app，尝试一下验证用户，然后你应该会看到服务器的 console 里输出了 'A user has connected'。

<strong>注意：</strong>只有在连接到处于同一个 url/server 上的 socket 时，<code>io()</code>才可以正常执行。如果需要连接到外部的 socket，就需要这样调用：<code>io.connect('URL');</code>。

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 <a href='https://gist.github.com/camperbot/aae41cf59debc1a4755c9a00ee3859d1' target='_blank'>这里</a> 的答案。

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
  - text: 应正确引入 <code>http</code>，并示例化为 <code>http</code>。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /http.*=.*require.*('|")http\1/gi, 'Your project should list "html" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 应正确引入 <code>socket.io</code>，并示例化为 <code>io</code>。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => {assert.match(data, /io.*=.*require.*('|")socket.io\1.*http/gi, 'You should correctly require and instantiate socket.io as io.');}, xhr => { throw new Error(xhr.statusText); })
  - text: Socket.IO 应监听连接。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io.on.*('|")connection\1.*socket/gi, 'io should listen for "connection" and socket should be the 2nd arguments variable'); }, xhr => { throw new Error(xhr.statusText); })
  - text:  客户端应连接到服务器。
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
