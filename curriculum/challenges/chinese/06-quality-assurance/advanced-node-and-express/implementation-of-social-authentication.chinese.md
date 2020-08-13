---
id: 589a69f5f9fc0f352b528e70
title: Implementation of Social Authentication
challengeType: 2
videoUrl: ''
localeTitle: 社会认证的实施
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socialauth/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-socialauth/">GitHub</a>克隆的。此类身份验证在您的应用中遵循的基本路径是： <ol><li>用户单击按钮或链接将它们发送到我们使用特定策略进行身份验证的路由（EG.GitHub） </li><li>您的路由呼叫<code>passport.authenticate(&#39;github&#39;)</code> ，将其重定向到Github。 </li><li>用户登陆的页面，在Github上，允许他们登录，如果他们还没有。然后它要求他们批准从我们的应用程序访问他们的个人资料。 </li><li>然后，如果用户获得批准，则会使用他们的个人资料将该用户返回到我们的应用。 </li><li>它们现在已经过身份验证，您的应用应检查它是否为返回的配置文件，如果不是，则将其保存在数据库中。 </li></ol> OAuth策略要求您至少拥有<em>客户端ID</em>和<em>客户端密钥</em> ，以便他们验证身份验证请求的来源以及是否有效。这些是从您尝试使用Github实现身份验证的站点获得的，并且对您的应用程序是唯一的 - 它们不会被<b>共享</b> ，不应该上传到公共存储库或直接在您的代码中编写。通常的做法是将它们放在<em>.env</em>文件中并引用它们： <code>process.env.GITHUB_CLIENT_ID</code> 。对于这个挑战，我们将使用Github策略。 <em><em>从Github</em></em>获取您的<em>客户ID和密码<em>是在“开发者设置”下的帐户配置文件设置中完成的，然后是“ <a href="https://github.com/settings/developers">OAuth应用程序</a> ”。点击“注册一个新的应用程序”，为您的应用命名，将网址粘贴到您的故障主页（ <b>不是项目代码的网址</b> ），最后为回调网址，粘贴到与主页相同的网址，但使用&#39;/ auth / github / callback&#39;已添加。这是用户将被重定向到我们在Github上进行身份验证后处理的地方。将返回的信息保存为.env文件中的“GITHUB_CLIENT_ID”和“GITHUB_CLIENT_SECRET”。在重新混合的项目中，创建2条接受GET请求的路由：/ auth / github和/ auth / github / callback。第一个应该只调用护照来验证&#39;github&#39;，第二个应该调用护照来验证&#39;github&#39;，失败重定向到&#39;/&#39;然后如果成功重定向到&#39;/ profile&#39;（类似于我们的上一个项目）。 &#39;/ auth / github / callback&#39;应该如何看待的示例与我们在上一个项目中处理正常登录的方式类似：</em></em> <pre> <em><em>app.route（ &#39;/登录&#39;）
  .post（passport.authenticate（&#39;local&#39;，{failureRedirect：&#39;/&#39;}），（req，res）=&gt; {
    res.redirect（ &#39;/简档&#39;）;
  }）;</em></em> </pre> <em><em>当您认为自己已经做对时，请提交您的页面。如果您遇到错误，可以<a href="https://gist.github.com/JosephLivengood/28ea2cae7e1dc6a53d7f0c42d987313b">在此处</a>查看项目。</em></em> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Route / auth / github正确
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /('|")\/auth\/github('|")[^]*get.*passport.authenticate.*github/gi, 'Route auth/github should only call passport.authenticate with github'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Route / auth / github /回调正确
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /('|")\/auth\/github\/callback('|")[^]*get.*passport.authenticate.*github.*failureRedirect:( |)("|')\/("|')/gi, 'Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home'); }, xhr => { throw new Error(xhr.statusText); })

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
