---
id: 5895f70cf9fc0f352b528e65
title: Set up Passport
challengeType: 2
videoUrl: ''
localeTitle: 设置护照
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a>克隆的。是时候设置<em>Passport，</em>这样我们终于可以开始允许用户注册或登录帐户了！除了Passport，我们还将使用Express-session来处理会话。使用此中间件将会话ID保存为客户端中的cookie，并允许我们使用服务器上的该ID访问会话数据。这样，我们将个人帐户信息保留在客户端使用的cookie之外，以验证我们的服务器是否经过身份验证，并保留<em>密钥</em>以访问存储在服务器上的数据。要设置Passport以便在项目中使用，您需要先在package.json中将其作为依赖项添加。 <code>&quot;passport&quot;: &quot;^0.3.2&quot;</code>此外，现在还要将Express-session添加为依赖项。 Express-session拥有大量可以使用的高级功能，但现在我们只是要使用基础知识！ <code>&quot;express-session&quot;: &quot;^1.15.0&quot;</code>您需要立即设置会话设置并初始化Passport。一定要先创建变量&#39;session&#39;和&#39;passport&#39;，分别要求&#39;express-session&#39;和&#39;passport&#39;。要设置您要使用的快速应用程序使用会话，我们将仅定义几个基本选项。请务必将“SESSION_SECRET”添加到.env文件中，并为其提供随机值。这用于计算用于加密cookie的哈希值！ <pre> app.use（会话（{
  secret：process.env.SESSION_SECRET，
  resave：是的，
  saveUninitialized：true，
}））; </pre>您也可以继续告诉您的快递应用程序<b>使用</b> &#39;passport.initialize（）&#39;和&#39;passport.session（）&#39;。 （例如， <code>app.use(passport.initialize());</code> ）当您认为自己正确时，请提交您的页面。如果您遇到错误，可以<a href="https://gist.github.com/JosephLivengood/338a9c5a326923c3826a666d430e65c3">在这里查看</a>到目前为止完成的项目。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Passort和Express-session是依赖项
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'passport', 'Your project should list "passport" as a dependency'); assert.property(packJson.dependencies, 'express-session', 'Your project should list "express-session" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 正确要求依赖性
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require.*("|')passport("|')/gi, 'You should have required passport'); assert.match(data, /require.*("|')express-session("|')/gi, 'You should have required express-session'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Express应用程序使用新的依赖项
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /passport.initialize/gi, 'Your express app should use "passport.initialize()"'); assert.match(data, /passport.session/gi, 'Your express app should use "passport.session()"'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 正确设置会话和会话密钥
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /secret:( |)process.env.SESSION_SECRET/gi, 'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET'); }, xhr => { throw new Error(xhr.statusText); })

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
