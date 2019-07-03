---
id: 589fc832f9fc0f352b528e79
title: Send and Display Chat Messages
challengeType: 2

videoUrl: ''
localeTitle: Send and Display Chat Messages
---

## Description
<section id='description'>
注意，本项目在<a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/'>这个 Glitch 项目</a>的基础上进行开发，你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a> 上克隆。
你可以在应用的模版引擎中使用静态模板文件（如那些写在<em>Pug</em>里的）。在运行时，模版引擎会用服务端的真实数据替换掉模版文件中的变量，然后将模版转译成发送给客户端的 HTML 静态文件。这样可以轻松地构造 HTML 页面，允许在页面直接显示变量内容而不需要发送 API 请求。
为了在项目中使用 <em>Pug</em>，你需要在 package.json 中添加依赖<code>"pug": "^0.1.0"</code>
为了在 Node/Express 中使用 pug 作为模版引擎，你需要在 express 中将 <b>app</b> 的 “view-engine” 设置为 “pug”，就像这样：<code>app.set('view engine', 'pug')</code>。
最后, 你需要使用<code>res.render</code>方法渲染 <em>views/pug/index.pug</em> 页面来作为路由请求的返回。
如果一切顺利，刷新一下应用的主页就可以看到 Pug 成功加载的提示，这时你就可以提交你的页面了。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '服务端应监听 "chat message"，且应在监听到后 emit。'
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /socket.on.*("|")chat message("|")[^]*io.emit.*("|")chat message("|").*name.*message/gi, "服务端应监听 "chat message" 事件，然后把包含 name 和 message 字段的事件发送给所有已连接的用户。"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: '客户端应正确处理和展示从 "chat message" 事件发来的新数据。'
    testString: 'getUserInput => $.get(getUserInput("url")+ "/public/client.js") .then(data => { assert.match(data, /socket.on.*("|")chat message("|")[^]*messages.*li/gi, "应在客户端监听 "chat message" 事件，且在回调函数中为 #messages 添加列表项。"); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              