---
id: 5895f70df9fc0f352b528e68
title: Authentication Strategies
challengeType: 2
videoUrl: ''
localeTitle: 认证策略
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a>克隆的。策略是一种验证用户的方法。您可以使用策略允许用户根据本地保存的信息（如果您首先注册）或从Google或Github等各种提供商进行身份验证。对于这个项目，我们将制定一个本地战略。要查看的策略100的列表，请访问网站护照<a href="http://passportjs.org/">这里</a> 。将<em>passport-local</em>添加为依赖项并将其添加到服务器，如下所示： <code>const LocalStrategy = require(&#39;passport-local&#39;);</code>现在，您必须告诉护照<b>使用</b>实例化的LocalStartegy对象，并定义一些设置。确保这一点以及此时的所有内容都封装在数据库连接中，因为它依赖于它！ <pre> passport.use（新的LocalStrategy（
  function（用户名，密码，已完成）{
    db.collection（&#39;users&#39;）。findOne（{username：username}，function（err，user）{
      console.log（&#39;用户&#39;+用户名+&#39;试图登录。&#39;）;
      if（err）{return done（err）; }
      if（！user）{return done（null，false）; }
      if（password！== user.password）{return done（null，false）; }
      return done（null，user）;
    }）;
  }
））; </pre>这是我们尝试在本地验证某人时要采取的过程。首先，它尝试使用输入的用户名在我们的数据库中查找用户，然后检查要匹配的密码，最后如果没有弹出我们检查过的错误，如错误的密码，则返回用户对象，它们是认证。许多策略都是使用不同的设置设置的，一般来说，根据该策略库中的README很容易设置它。一个很好的例子是Github策略，我们不需要担心用户名或密码，因为用户将被发送到Github的auth页面进行身份验证，只要他们登录并同意，然后Github返回他们的个人资料我们用。在下一步中，我们将设置如何实际调用身份验证策略以根据表单数据验证用户！如果您认为自己已经完成了这一点，请提交您的页面。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Passport-local是一种依赖
    testString:  getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'passport-local', 'Your project should list "passport-local " as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Passport-local正确需要和设置
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require.*("|')passport-local("|')/gi, 'You should have required passport-local'); assert.match(data, /new LocalStrategy/gi, 'You should have told passport to use a new strategy'); assert.match(data, /findOne/gi, 'Your new local strategy should use the findOne query to find a username based on the inputs'); }, xhr => { throw new Error(xhr.statusText); })

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
