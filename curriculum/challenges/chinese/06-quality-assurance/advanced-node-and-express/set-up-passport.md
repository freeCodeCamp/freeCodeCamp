---
id: 5895f70cf9fc0f352b528e65
challengeType: 2
forumTopicId: 301565
title: 设置 Passport
---

## Description
<section id='description'>

现在我们来创建 <em>Passport</em>，最终我们需要用它来实现用户注册和登录。除了 Passport，我们还会用 express-session 来处理 session（会话）。在客户端，我们可以用这个中间件把 session id 储存到 cookie。同时，我们可以在服务器上通过这个 id 访问 session 数据。通过这种方式，我们无需把用户的个人信息存到 cookie 来只完成用户的验证，只需要用这个 id 作为 <em>key</em> 来访问服务器上用户的数据即可。

为了在你的项目中使用 Passport，首先你需要在 package.json 文件中添加依赖：<code>"passport": "^0.3.2"</code>

此外，还需要添加 express-session 作为依赖，就像这样：<code>"express-session": "^1.15.0"</code>。express-session 有许多高级特性，但我们暂时只需要了解其基础功能。

现在，我们需要配置 session 并初始化 Passport。请先创建变量 <code>session</code> 和 <code>passport</code> 来引入 express-session 和 passport。

为了让 express 应用可以使用 session，我们需要添加一些基础选项。请在 .env 文件中添加字段 'SESSION_SECRET'，并给它赋一个随机值，便于加密 cookie、计算哈希。

```js
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
```

还有，我们需要让 express 使用 <code>passport.initialize()</code> 和 <code>passport.session()</code>。为此，你可以这样写：<code>app.use(passport.initialize());</code>。

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 <a href='https://gist.github.com/camperbot/4068a7662a2f9f5d5011074397d6788c' target='_blank'>这里</a> 的答案。

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
