---
id: 589fc831f9fc0f352b528e77
title: Authentication with Socket.IO
challengeType: 2
videoUrl: ''
localeTitle: 使用Socket.IO进行身份验证
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a>克隆的。目前，您无法确定谁连接到您的Web套接字。虽然&#39;req.user&#39;对用户对象进行了容器处理，但只有当您的用户与Web服务器进行交互并且使用Web套接字时，您才没有req（请求），因此没有用户数据。解决知道谁连接到您的Web套接字的问题的一种方法是解析和解码包含护照会话的cookie，然后对其进行反序列化以获取用户对象。幸运的是，NPM上有一个包，只是为了将一次复杂的任务变成简单的事情！ <hr>将“passport.socketio”添加为依赖项，并将其命名为“passportSocketIo”。现在我们只需要告诉Socket.IO使用它并设置选项。确保在现有套接字代码之前添加它，而不是在现有连接侦听器中添加。对于您的服务器，它应如下所示： <pre> io.use（passportSocketIo.authorize（{
  cookieParser：cookieParser，
  key：&#39;express.sid&#39;，
  secret：process.env.SESSION_SECRET，
  store：sessionStore
}））; </pre>您还可以选择将“成功”和“失败”与在客户端尝试连接时身份验证过程完成后调用的函数一起传递。现在可以在套接字对象上以<code>socket.request.user</code>访问用户对象。例如，现在您可以添加以下内容： <code>console.log(&#39;user &#39; + socket.request.user.name + &#39; connected&#39;);</code>它将登录已连接的服务器控制台！当您认为自己已经做对时，请提交您的页面。如果您遇到错误，可以<a href="https://gist.github.com/JosephLivengood/a9e69ff91337500d5171e29324e1ff35">在此处</a>查看项目。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: passportSocketIo是一个依赖项
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'passport.socketio', 'Your project should list "passport.socketio" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: passportSocketIo是正确需要的
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => { assert.match(data, /require\((['"])passport\.socketio\1\)/gi, 'You should correctly require and instantiate "passport.socketio"');}, xhr => { throw new Error(xhr.statusText); })
  - text: passportSocketIo已正确设置
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io\.use\(.+\.authorize\(/gi, 'You should register "passport.socketio" as socket.io middleware and provide it correct options'); }, xhr => { throw new Error(xhr.statusText); })

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
