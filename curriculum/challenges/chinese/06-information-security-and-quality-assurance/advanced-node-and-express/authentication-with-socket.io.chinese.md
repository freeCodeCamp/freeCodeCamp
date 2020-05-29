---
id: 589fc831f9fc0f352b528e77
title: Authentication with Socket.IO
challengeType: 2
isHidden: false
forumTopicId: 301548
localeTitle: 用 Socket.IO 进行身份验证
---

## Description
<section id='description'>
注意，本项目在<a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/'>这个 Glitch 项目</a>的基础上进行开发，你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-socialauth/'>GitHub</a> 上克隆。
目前，我们还无法确定连接到服务器的用户身份。虽然 req.user 包含用户信息，但这个只在用户直接与服务器交互（即不通过 web socket 访问服务器资源）时产正。当我们的用户通过 web socket 与服务器连接时，由于不存在 req 对象，因此我们无法获取用户数据。解决这个问题的方法之一是通过读取和解析请求中包含 passport session 的 cookie，然后反序列化，进而获取用户信息对象。幸运的是，npm 上有可以让这个复杂的流程简单化的库。
<hr>添加 'passport.socketio' 作为依赖，然后赋值给 'passportSocketIo'。
现在我们只需要做一些简单的配置，然后让 Socket.IO 使用它就可以了。请注意，这部分代码应添加在目前的 socket 代码之前，不应添加在目前的连接事件监听中：

```js
io.use(passportSocketIo.authorize({
  cookieParser: cookieParser,
  key:          'express.sid',
  secret:       process.env.SESSION_SECRET,
  store:        sessionStore
}));
```

你也可以为验证设置回调函数，为它传入 'success' 或 'fail'。这个函数会在用户尝试连接并完成验证后调用。
现在，我们可以通过<code>socket.request.user</code>访问用户数据。例如，现在你在代码中添加以下内容：<code>console.log('user ' + socket.request.user.name + ' connected');</code>。这样我们就可以在服务端的控制台打印出通过 socket 连接到服务器的用户信息。
完成上述要求后，你就可以在左边提交你的页面链接。如果运行出错，你可以在 <a href='https://gist.github.com/JosephLivengood/a9e69ff91337500d5171e29324e1ff35'>here</a> 这里检查这个项目的完成代码。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应添加 passportSocketIo 作为依赖。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'passport.socketio', 'Your project should list "passport.socketio" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 应正确引入 passportSocketIo 并实例化。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => { assert.match(data, /require\((['"])passport\.socketio\1\)/gi, 'You should correctly require and instantiate "passport.socketio"');}, xhr => { throw new Error(xhr.statusText); })
  - text: 应正确配置 passportSocketIo。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io\.use\(\s*\w+\.authorize\(/, 'You should register "passport.socketio" as socket.io middleware and provide it correct options'); }, xhr => { throw new Error(xhr.statusText); })

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
