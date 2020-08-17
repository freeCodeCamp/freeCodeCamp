---
id: 589a69f5f9fc0f352b528e71
title: Implementation of Social Authentication II
challengeType: 2
videoUrl: ''
localeTitle: 社会认证的实施II
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socialauth/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-socialauth/">GitHub</a>克隆的。设置Github身份验证的最后一部分是创建策略本身。为此，您需要将&#39;passport-github&#39;的依赖项添加到项目中，并将其作为GithubStrategy，例如<code>const GitHubStrategy = require(&#39;passport-github&#39;).Strategy;</code> 。要设置Github策略，你必须告诉<b>护照</b> <b>使用</b>实例化的<b>GithubStrategy</b> ，它接受2个参数：一个对象（包含<em>clientID</em> ， <em>clientSecret</em>和<em>callbackURL</em> ）和一个在成功验证用户时要调用的函数，我们将确定如果用户是新用户以及最初要保存在用户数据库对象中的字段。这在许多策略中很常见，但有些可能需要更多信息，如特定策略的github README所述;例如，Google也需要一个<em>范围</em>来确定您的请求所返回的信息类型，并要求用户批准此类访问。我们正在实施的当前策略<a>在此处</a>列出<a>了</a>它的用法，但我们将在freeCodeCamp上完成所有这些工作！以下是您的新战略应该如何看待这一点： <pre> passport.use（new GitHubStrategy（{
    clientID：process.env.GITHUB_CLIENT_ID，
    clientSecret：process.env.GITHUB_CLIENT_SECRET，
    callbackURL：/ * INSERT CALLBACK URL在这里输入GITHUB * /
  }，
  function（accessToken，refreshToken，profile，cb）{
      的console.log（配置文件）;
      //这里的数据库逻辑带有包含我们用户对象的回调
  }
））; </pre>您的身份验证还不会成功，并且实际上会抛出错误，没有数据库逻辑和回调，但如果您尝试它，它应该将您的Github配置文件记录到您的控制台！当您认为自己已经做对时，请提交您的页面。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 依赖性增加了
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'passport-github', 'Your project should list "passport-github" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 需要依赖性
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require.*("|')passport-github("|')/gi, 'You should have required passport-github'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 到目前为止，Github策略设置正确
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /passport.use.*new GitHubStrategy/gi, 'Passport should use a new GitHubStrategy'); assert.match(data, /callbackURL:( |)("|').*("|')/gi, 'You should have a callbackURL'); assert.match(data, /process.env.GITHUB_CLIENT_SECRET/g, 'You should use process.env.GITHUB_CLIENT_SECRET'); assert.match(data, /process.env.GITHUB_CLIENT_ID/g, 'You should use process.env.GITHUB_CLIENT_ID'); }, xhr => { throw new Error(xhr.statusText); })

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
