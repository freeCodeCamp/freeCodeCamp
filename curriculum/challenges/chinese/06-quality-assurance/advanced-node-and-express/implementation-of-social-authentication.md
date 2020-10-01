---
id: 589a69f5f9fc0f352b528e70
challengeType: 2
forumTopicId: 301559
title: 实现社交账号登陆 (1)
---

## Description
<section id='description'>

第三方用户验证的实现逻辑如下：<ol><li>在用户点击按钮或者链接后，进入验证页面，通过第三方平台（如 GitHub）来进行用户验证。</li><li>需要在路由中调用<code>passport.authenticate('github')</code>，跳转至 GitHub 验证页面。</li><li>页面跳转到 GitHub 上，如果用户未登录 GitHub，就需要在这里进行登录。登录成功后，会出现向用户申请访问权限的确认页。</li><li>如果用户同意访问，则用户会回到我们提供的回调地址，带着 GitHub 那边提供的用户信息回到我们的 app 中。</li><li>验证已完成。在我们的应用中，我们需要查询这个用户是否已经存在。如果是新用户，那我们需要把他的用户信息存储到数据库。</li></ol>

在 OAuth 验证策略中，我们至少需要提供 <em>Client ID</em> 和 <em>Client Secret</em>，这样第三方平台就会获悉验证请求的来源，以及这个来源是否有效。为此，需要去我们使用的第三方验证平台（比如 GitHub）获取这两个字段的值。注意，我们获取到的这个值是唯一的，且仅对我们的当前 app 有效——<b>因此，千万不要分享给别人</b>，更不要上传到公共仓库或者直接写在代码里。通常，我们会在 <em>.env</em> 文件里配置，并在 Node.js 里通过：<code>process.env.GITHUB_CLIENT_ID</code>获取。对于这次挑战，我们将会使用 GitHub 作为验证平台。

首先，你需要进入账户设置里的 <a href='https://github.com/settings/developers'>Developer settings</a>板块，然后在 OAuth Apps 获取 <em>Client ID</em> 和 <em>Client Secret</em>。点击 'Register a new application'，设置你的应用名称，然后把你的 glitch 主页地址（<b>注意，不是项目代码的地址</b>）粘贴到 Homepage URL。然后，回调 url 需要设置成上面 Homepage URL 里你粘贴的地址，但后面要加上 '/auth/github/callback'。这样在用户通过 Github 验证后才能跳转到我们指定的页面。别忘了，我们还需要在 .env 文件里配置好 'GITHUB_CLIENT_ID' 和 'GITHUB_CLIENT_SECRET'。

然后，请在你现在的项目里，为 /auth/github 和 /auth/github/callback 创建两个接收 GET 请求的路由。第一个只需要通过 passport 来调用 'github' 验证，第二个需要调用 passport 来验证 'github'，但需要在失败时跳转回主页 '/'，成功是跳转到用户页面 '/profile'。跳转的逻辑与上一个项目中的逻辑一样。

例如 '/auth/github/callback' 应该像我们处理在上一个项目中一般的登录一样：

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 <a href='https://gist.github.com/camperbot/1f7f6f76adb178680246989612bea21e' target='_blank'>这里</a> 的答案。

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 路由 /auth/github 应正确配置。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/routes.js') .then(data => { assert.match(data, /('|")\/auth\/github('|")[^]*get.*passport.authenticate.*github/gi, 'Route auth/github should only call passport.authenticate with github'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 路由 /auth/github/callback 应正确配置。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/routes.js') .then(data => { assert.match(data, /('|")\/auth\/github\/callback('|")[^]*get.*passport.authenticate.*github.*failureRedirect:( |)("|')\/\2/gi, 'Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home'); }, xhr => { throw new Error(xhr.statusText); })

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
