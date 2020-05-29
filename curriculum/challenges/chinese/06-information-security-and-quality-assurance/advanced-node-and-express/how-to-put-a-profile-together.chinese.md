---
id: 5895f70ef9fc0f352b528e6b
title: How to Put a Profile Together
challengeType: 2
isHidden: false
forumTopicId: 301554
localeTitle: 如何将 Profile 放在一起
---

## Description
<section id='description'>
注意，本项目在<a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/'>这个 Glitch 项目</a>的基础上进行开发，你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a> 上克隆。
现在，只有通过验证的用户才能进入 <em>/profile</em> 页面，这样我们就可以在页面上使用 'req.user' 里的信息了。
请在变量中包含 <em>username</em> 键，值为 'req.user.username'，并通过 render 方法传给 profile 页面。然后在 'profile.pug' 页面，添加这行<code>h2.center#welcome Welcome, #{username}!</code>代码来创建类为<code>center</code>、id 为<code>welcome</code>且文本内容为 'Welcome, ' 后加用户名的 h2 元素。
以及，请在 profile 里添加 <em>/logout</em> 链接，后续会用于处理用户退出登录的逻辑：<code>a(href='/logout') Logout</code>
完成上述要求后，你就可以在左边提交你的页面链接。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应在 Pug render 中给 /profile 传一个变量。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /\/views\/pug\/profile[^]*username:( |)req.user.username/gi, 'You should be passing the variable username with req.user.username into the render function of the profile page'); }, xhr => { throw new Error(xhr.statusText); })

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
