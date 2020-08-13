---
id: 5895f70df9fc0f352b528e6a
title: Create New Middleware
challengeType: 2
videoUrl: ''
localeTitle: 创建新的中间件
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a>克隆的。同样，任何用户都可以通过输入网址来查看/配置他们是否通过身份验证。我们希望通过在呈现配置文件页面之前检查用户是否首先进行身份验证来防止这种情况。这是何时创建中间件的完美示例。这里的挑战是创建中间件功能<code>ensureAuthenticated(req, res, next)</code> ，它将检查用户是否通过调用护照进行身份验证isAuthenticated对<em>请求</em>进行检查，然后检查<em>req.user</em>是否定义。如果是，那么应该调用<em>next（）</em> ，否则我们只需通过重定向到我们的主页来回复请求即可登录。该中间件的实现是： <pre> function ensureAuthenticated（req，res，next）{
  if（req.isAuthenticated（））{
      return next（）;
  }
  res.redirect（ &#39;/&#39;）;
}; </pre>现在，在包含呈现页面的函数的get请求的参数之前，将<em>ensureAuthenticated</em>作为中间件添加到配置文件页面的请求中。 <pre> app.route（ &#39;/简档&#39;）
  .get（ensureAuthenticated，（req，res）=&gt; {
       res.render（process.cwd（）+&#39;/ views / pug / profile&#39;）;
  }）; </pre>当您认为自己已经做对时，请提交您的页面。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 中间件确保应该在我们的/配置文件路由上实现
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /ensureAuthenticated[^]*req.isAuthenticated/gi, 'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'); assert.match(data, /profile[^]*get[^]*ensureAuthenticated/gi, 'Your ensureAuthenticated middleware should be attached to the /profile route'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 正确的Get请求/配置文件重定向到/因为我们未经过身份验证
    testString: getUserInput => $.get(getUserInput('url')+ '/profile') .then(data => { assert.match(data, /Home page/gi, 'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in'); }, xhr => { throw new Error(xhr.statusText); })

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
