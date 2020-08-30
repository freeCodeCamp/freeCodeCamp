---
id: 5895f70ef9fc0f352b528e6b
title: How to Put a Profile Together
challengeType: 2
videoUrl: ''
localeTitle: 如何将配置文件放在一起
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a>克隆的。现在我们可以确保访问<em>/ profile</em>的用户已经过身份验证，我们可以使用页面上“req.user”中包含的信息！继续将包含变量<em>username</em> equaling&#39;req.user.username&#39;的对象传递到配置文件视图的render方法中。然后转到你的&#39;profile.pug&#39;视图并添加第<code>h2.center#welcome Welcome, #{username}!</code>行<code>h2.center#welcome Welcome, #{username}!</code>使用“center”类创建h2元素，并使用包含文本“Welcome”和用户名的id“welcome”创建！同样在配置文件中，添加指向<em>/ logout</em>的链接。该路由将托管用于取消身份验证用户的逻辑。 <code>a(href=&#39;/logout&#39;) Logout</code>当您认为自己正确时，请提交您的页面。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 正确地将Pug渲染变量添加到/ profile
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /\/views\/pug\/profile[^]*username:( |)req.user.username/gi, 'You should be passing the variable username with req.user.username into the render function of the profile page'); }, xhr => { throw new Error(xhr.statusText); })

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
