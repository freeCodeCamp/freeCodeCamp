---
id: 5895f70cf9fc0f352b528e65
title: Set up Passport
challengeType: 2
isHidden: false
forumTopicId: 301565
localeTitle: 设置 Passport
---

## Description
<section id='description'>
注意，本项目在<a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/'>这个 Glitch 项目</a>的基础上进行开发，你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a> 上克隆。
现在我们来创建 <em>Passport</em>，最终我们需要用它来实现用户注册和登录。除了 Passport，我们会用 express-session 来处理 session（会话）。在客户端，我们可以用这个中间件把会话 id 储存到 cookie，并可以通过服务器上的 id 访问会话数据。通过这种方式，我们可以无需把用户信息存到 cookie 来完成用户的验证。
为了在你的项目中使用 Passport，首先你需要在 package.json 文件中添加依赖：<code>"passport": "^0.3.2"</code>
此外，还需要添加 express-session 作为依赖，就像这样：<code>"express-session": "^1.15.0"</code>。express-session 有许多高级特性，但我们暂时只需要了解其基础特性。
现在，我们需要配置 session 并初始化 Passport。请先创建变量<code>session</code>和<code>passport</code>引入 express-session 和 passport。
为了让 express 应用可以使用 session，我们需要添加一些基础选项。请在 .env 文件中添加字段<code>SESSION_SECRET</code>，并给它赋一个随机值，便于加密 cookie、计算哈希。

```js
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));
```

还有，我们需要让 express 使用<code>passport.initialize()</code>和<code>passport.session()</code>。为此，你需要这样写：<code>app.use(passport.initialize());</code>。
完成之后就可以提交你的页面了。如果运行出错，你可以在<a href='https://gist.github.com/JosephLivengood/338a9c5a326923c3826a666d430e65c3'>这里</a>检查项目的完成情况。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应添加 Passort 和 express-session 作为依赖。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'passport', 'Your project should list "passport" as a dependency'); assert.property(packJson.dependencies, 'express-session', 'Your project should list "express-session" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 依赖应正确引入。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require.*("|')passport("|')/gi, 'You should have required passport'); assert.match(data, /require.*("|')express-session("|')/gi, 'You should have required express-session'); }, xhr => { throw new Error(xhr.statusText); })
  - text: express 应调用 passport 的方法。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /passport.initialize/gi, 'Your express app should use "passport.initialize()"'); assert.match(data, /passport.session/gi, 'Your express app should use "passport.session()"'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 应正确设置 session 和 session secret。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /secret:( |)process.env.SESSION_SECRET/gi, 'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET'); }, xhr => { throw new Error(xhr.statusText); })

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
