---
id: 5895f70df9fc0f352b528e69
challengeType: 2
forumTopicId: 301555
title: 如何使用 Passport 策略
---

## Description
<section id='description'>

在提供的 index.pug 文件里有一个登录表单。因为这个表单中存在行内 JavaScript 代码 <code>if showLogin</code>，因此它是隐藏的。因为 showLogin 未定义，所以表单不会渲染。如果在该页面的 <code>res.render()</code> 里添加一个包含 <code>showLogin: true</code> 的对象，你就可以在刷新页面后看到表单。当你点击 login 时，表单会向服务器的 <em>/login</code> 发送 POST 请求，此时服务器端就可以接受 POST 请求信息并进行用户验证。

在这个挑战中，你需要为 POST 请求添加路由<code>/login</code>。为了用这个路由进行验证，你需要添加一个中间件，中间件应作为参数添加到用于处理请求的回调函数 <code>function(req,res)</code> 之前。对于 passport 的验证中间件，应这样调用：<code>passport.authenticate('local')</code>。

<em>passport.authenticate</em> 也接收选项作为参数，这些选项用于设置验证，例如<code>{ failureRedirect: '/' }</code>就很有用，请记得添加到你的代码中。如果中间件验证通过，我们就应该提供相应的后续处理。在这个挑战中，我们需要让用户重定到 <em>/profile</em>，这样 <code>profile.pug</code> 页面就会渲染。

如果验证通过，用户对象将会储存到 <em>req.user</em> 中。

这时，如果你在表单里输入了用户名和密码，路由将会重定向到主页 <em>/</em>，在服务端将会打印 'User {USERNAME} attempted to log in.'，由于现在我们还没有实现注册功能，因此所有登录尝试都会失败。

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 <a href='https://gist.github.com/camperbot/7ad011ac54612ad53188b500c5e99cb9' target='_blank'>这里</a> 的答案。

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: server.js 中应正确执行所有步骤。
    testString:  getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /showLogin:( |)true/gi, 'You should be passing the variable "showLogin" as true to your render function for the homepage'); assert.match(data, /failureRedirect:( |)('|")\/('|")/gi, 'Your code should include a failureRedirect to the "/" route'); assert.match(data, /login[^]*post[^]*local/gi, 'You should have a route for login which accepts a POST and passport.authenticates local'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 到 /login 的 POST 请求应重定向到 /
    testString: getUserInput => $.post(getUserInput('url')+ '/login') .then(data => { assert.match(data, /Looks like this page is being rendered from Pug into HTML!/gi, 'A login attempt at this point should redirect to the homepage since we do not have any registered users'); }, xhr => { throw new Error(xhr.statusText); })

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
