---
id: 5895f70df9fc0f352b528e6a
challengeType: 2
forumTopicId: 301551
title: 创建新的中间件
---

## Description
<section id='description'>

无论是否登录，或者哪怕用户试图访问其他页面，目前都会跳转到 <code>/profile</code>。为了解决这个问题，我们需要在 profile 页面渲染之前进行用户验证，创建中间件就可以实现这个功能。

这个挑战的目标是创建<code>ensureAuthenticated(req, res, next)</code>中间件方法，通过在 <em>request</em> 上调用 passports 的<code>isAuthenticated</code> 方法，我们可以检查 <em>req.user</em> 是否定义，从而确定用户是否通过认证。如果用户已通过验证，就会调用 <em>next()</em>，否则我们应重定向到主页并让用户登录。该中间件的实现如下：

```js
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
```

然后，我们需要把 <em>ensureAuthenticated</em> 中间件添加到处理请求的回调之前：

```js
app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render(process.cwd() + '/views/pug/profile');
 });
```

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 <a href='https://gist.github.com/camperbot/ae49b8778cab87e93284a91343da0959' target='_blank'>这里</a> 的答案。

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ensureAuthenticated</code> 中间件应添加到 <code>/profile</code>路由中。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /ensureAuthenticated[^]*req.isAuthenticated/gi, 'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'); assert.match(data, /profile[^]*get[^]*ensureAuthenticated/gi, 'Your ensureAuthenticated middleware should be attached to the /profile route'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 如果没有通过验证，对 /profile 的 GET 请求应重定向到 /
    testString: getUserInput => $.get(getUserInput('url')+ '/profile') .then(data => { assert.match(data, /Home page/gi, 'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in'); }, xhr => { throw new Error(xhr.statusText); })

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
