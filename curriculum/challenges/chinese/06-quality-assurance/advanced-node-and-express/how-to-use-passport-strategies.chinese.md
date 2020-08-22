---
id: 5895f70df9fc0f352b528e69
title: How to Use Passport Strategies
challengeType: 2
videoUrl: ''
localeTitle: 如何使用Passport策略
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a>克隆的。在提供的index.pug文件中，实际上有一个登录表单。它之前已被隐藏，因为内联javascript <code>if showLogin</code>的形式缩进后。在showLogin作为变量从未定义之前，它从未呈现包含该表单的代码块。继续在该页面的res.render上向对象<code>showLogin: true</code>添加一个新变量。刷新页面时，您应该看到表单！此表单设置为<b>POST</b> on <em>/ login，</em>因此我们应该设置此接受POST并验证用户身份。对于此挑战，您应添加路由/登录以接受POST请求。要在此路由上进行身份验证，您需要添加中间件才能发送响应。这是通过在您的<code>function(req,res)</code>之前使用中间件传递另一个参数来完成的！要使用的中间件是<code>passport.authenticate(&#39;local&#39;)</code> 。 <em>passport.authenticate</em>也可以将一些选项作为参数，例如： <code>{ failureRedirect: &#39;/&#39; }</code>这非常有用，所以一定要添加它。作为使用中间件后的响应（只有在身份验证中间件通过时才会调用）应该是将用户重定向到<em>/ profile，</em>并且该路由应该呈现视图&#39;profile.pug&#39;。如果身份验证成功，则用户对象将保存在<em>req.user中</em> 。现在，如果您在表单中输入用户名和密码，它应该重定向到主页<em>/</em>并且在服务器的控制台中应该是&#39;用户{USERNAME}尝试登录&#39;。因为我们目前无法登录未注册的用户。当您认为自己已经做对时，请提交您的页面。如果您遇到错误，可以<a href="https://gist.github.com/JosephLivengood/8a335d1a68ed9170da02bb9d8f5b71d5">在这里查看</a>到目前为止完成的项目。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有步骤都在server.js中正确实现
    testString:  getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /showLogin:( |)true/gi, 'You should be passing the variable "showLogin" as true to your render function for the homepage'); assert.match(data, /failureRedirect:( |)('|")\/('|")/gi, 'Your code should include a failureRedirect to the "/" route'); assert.match(data, /login[^]*post[^]*local/gi, 'You should have a route for login which accepts a POST and passport.authenticates local'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 对/ login的POST请求正确重定向到/
    testString: getUserInput => $.post(getUserInput('url')+ '/login') .then(data => { assert.match(data, /Looks like this page is being rendered from Pug into HTML!/gi, 'A login attempt at this point should redirect to the homepage since we do not have any registered users'); }, xhr => { throw new Error(xhr.statusText); })

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
