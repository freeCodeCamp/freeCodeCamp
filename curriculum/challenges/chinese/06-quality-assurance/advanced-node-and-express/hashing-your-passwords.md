---
id: 58a25c98f9fc0f352b528e7f
challengeType: 2
forumTopicId: 301553
title: 哈希密码
---

## Description
<section id='description'>

回过头来看信息安全，你也许记得在数据库中存储明文密码是<em>绝对</em>禁止的。现在，我们需要引入 BCrypt 来解决这个问题。

添加 BCrypt 作为依赖，并通过<code>require</code>添加到服务器代码中。你需要在两个步骤中使用哈希运算：注册和保存新账户，以及登录时检查密码是否正确。

目前处理注册的路由中，我们是这样把密码添加到数据库的：<code>password: req.body.password</code>。我们可以通过这段代码创建哈希值：<code>var hash = bcrypt.hashSync(req.body.password, 12);</code>，然后就可以把<code>passsword: req.body.password</code>替换为<code>password: hash</code>。

最后，在验证逻辑中，我们已经有这样一段代码执行检查：<code>if (password !== user.password) { return done(null, false); }</code>。但我们现在存储的密码<code>user.password</code>已经是哈希值了。由于目前的检测机制是密码不匹配时就返回未认证，因此修改后，用于比对用户密码哈希值的代码应该是这样：

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

当你需要存储密码时，这样做可以有效地提升网站的安全性。

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 <a href='https://gist.github.com/camperbot/dc16cca09daea4d4151a9c36a1fab564' target='_blank'>这里</a> 的答案。

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应存在 BCrypt 依赖。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'bcrypt', 'Your project should list "bcrypt" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: BCrypt 应正确地引入和调用。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require.*("|')bcrypt\1/gi, 'You should have required bcrypt'); assert.match(data, /bcrypt.hashSync/gi, 'You should use hash the password in the registration'); assert.match(data, /bcrypt.compareSync/gi, 'You should compare the password to the hash in your strategy'); }, xhr => { throw new Error(xhr.statusText); })

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
