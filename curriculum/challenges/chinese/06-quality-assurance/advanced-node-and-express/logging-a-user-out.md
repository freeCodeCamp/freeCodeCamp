---
id: 58965611f9fc0f352b528e6c
challengeType: 2
forumTopicId: 301560
title: 用户退出登录
---

## Description
<section id='description'>

创建退出登录的逻辑是比较简单的。只要用户尝试退出登录，路由就应重定向到主页，而不应该显示任何其他页面。

在 passport 里，只需要在重定向前调用 <code>req.logout();</code> 即可完成用户的退出登录。

```js
app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});
```

你可能注意到我们还没有处理 404 错误，这个错误码代表页面无法找到。在 Node.js 中我们通常会用如下的中间件来处理，请在所有路由之后添加这段代码：

```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 <a href='https://gist.github.com/camperbot/c3eeb8a3ebf855e021fd0c044095a23b' target='_blank'>这里</a> 的答案。

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>req.Logout</code> 应在 <code>/logout</code> 中调用。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /req.logout/gi, 'You should be calling req.logout() in your /logout route'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 退出登录后应重定向到主页 /
    testString: getUserInput => $.get(getUserInput('url')+ '/logout') .then(data => { assert.match(data, /Home page/gi, 'When a user logs out they should be redirected to the homepage'); }, xhr => { throw new Error(xhr.statusText); })

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
