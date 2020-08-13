---
id: 58a25c98f9fc0f352b528e7f
title: Hashing Your Passwords
challengeType: 2
videoUrl: ''
localeTitle: 哈希密码
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a>克隆的。回到信息安全部分，您​​可能还记得存储明文密码<em>永远不会</em>好。现在是时候实施BCrypt来解决这个问题了。 <hr>将BCrypt添加为依赖项并在服务器中将其需要。您需要在两个关键区域处理散列：您在哪里处理注册/保存新帐户以及在登录时检查密码是否正确。目前在我们的注册路线上，您将用户的密码插入数据库，如下所示： <code>password: req.body.password</code> 。实现保存哈希的一种简单方法是在数据库逻辑<code>var hash = bcrypt.hashSync(req.body.password, 12);</code>之前添加以下内容<code>var hash = bcrypt.hashSync(req.body.password, 12);</code>并使用<code>password: hash</code>替换数据库保存中的<code>req.body.password</code> 。最后在我们的身份验证策略中，我们在完成流程之前在代码中检查以下内容： <code>if (password !== user.password) { return done(null, false); }</code> 。完成之前的更改后，现在<code>user.password</code>是一个哈希。在更改现有代码之前，请注意语句如何检查密码是否不相等，然后返回未经过身份验证的密码。考虑到这一点，您的代码可能如下所示，以正确检查针对哈希输入的密码： <code>if (!bcrypt.compareSync(password, user.password)) { return done(null, false); }</code>这是所有需要实现的最重要的安全功能之一，当你有来存储密码！当您认为自己已经做对时，请提交您的页面。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: BCrypt是一种依赖
    testString:  getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'bcrypt', 'Your project should list "bcrypt" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: BCrypt正确需要并实施
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require.*("|')bcrypt("|')/gi, 'You should have required bcrypt'); assert.match(data, /bcrypt.hashSync/gi, 'You should use hash the password in the registration'); assert.match(data, /bcrypt.compareSync/gi, 'You should compare the password to the hash in your strategy'); }, xhr => { throw new Error(xhr.statusText); })

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
