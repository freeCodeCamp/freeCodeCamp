---
id: 5895f70df9fc0f352b528e6a
title: 创建新的中间件
challengeType: 2
forumTopicId: 301551
dashedName: create-new-middleware
---

# --description--

无论是否登录，任何用户都可以通过输入 url 而跳转到 `/profile`。 为了解决这个问题，我们需要在 profile 页面渲染之前进行用户验证。 这就是一个很棒的创建中间件的示例。

这个挑战的目标是创建 `ensureAuthenticated(req, res, next)` 中间件方法，通过在 `request` 上调用 passports 的`isAuthenticated` 方法，可以检查 `req.user` 是否定义，从而确定用户是否通过认证。 如果用户已通过验证，就会调用 `next()`，否则我们应重定向到主页并让用户登录。 该中间件的实现如下：

```js
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
```

然后，在 profile 页面请求中，添加 *ensureAuthenticated* 作为中间件，放在 get 请求（包含渲染页面的函数）的参数之前。

```js
app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render(process.cwd() + '/views/pug/profile');
 });
```

完成上述要求后，请提交你的页面链接。 如果你遇到了问题，可以参考[这里](https://gist.github.com/camperbot/ae49b8778cab87e93284a91343da0959)的答案。

# --hints--

应把 ensureAuthenticated 中间件添加到 /profile 路由中。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /ensureAuthenticated[^]*req.isAuthenticated/gi,
        'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'
      );
      assert.match(
        data,
        /profile[^]*get[^]*ensureAuthenticated/gi,
        'Your ensureAuthenticated middleware should be attached to the /profile route'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

如果没有通过验证，对 /profile 的 GET 请求应重定向到 /。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/profile').then(
    (data) => {
      assert.match(
        data,
        /Home page/gi,
        'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
