---
id: 58966a17f9fc0f352b528e6d
title: Registration of New Users
challengeType: 2

videoUrl: ''
localeTitle: Registration of New Users
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
  - text: 注册路由和显示主页。
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /showRegistration:( |)true/gi, "你应该给首页的 render 方法传入一个对象，其中 "showRegistration" 的值为 true。"); assert.match(data, /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi, "应有一个可以接收注册用户 POST 请求的路由，它应该调用 findOne 及参数 "username: req.body.username" 查询数据库。"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: 注册功能应可以正常运行。
    testString: 'getUserInput => $.ajax({url: getUserInput("url")+ "/register",data: {username: "freeCodeCampTester", password: "freeCodeCampTester"},crossDomain: true, type: "POST", xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Profile/gi, "用户应可以注册，并在注册成功后跳转到 profile 页。注意，测试失败后，直到测试成功为止，会一直清除数据库。"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: 登录功能应可以正常运行。
    testString: 'getUserInput => $.ajax({url: getUserInput("url")+ "/login",data: {username: "freeCodeCampTester", password: "freeCodeCampTester"}, type: "POST", xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Profile/gi, "如果之前的测试成功，登录也应该成功且会跳转到 profile 页。注意，在这个测试之后会清除数据库。"); assert.match(data, /freeCodeCampTester/gi, "个人信息页应该正确显示包含用户名的欢迎信息。"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: 退出登录功能应可以正常运行。
    testString: 'getUserInput => $.ajax({url: getUserInput("url")+ "/logout", type: "GET", xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, "退出登录应重定向至主页。"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: 退出登录后，profile 页面应无法访问。
    testString: 'getUserInput => $.ajax({url: getUserInput("url")+ "/profile", type: "GET", crossDomain: true, xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, "退出登录后，尝试访问 profile 页应跳转到主页。"); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              