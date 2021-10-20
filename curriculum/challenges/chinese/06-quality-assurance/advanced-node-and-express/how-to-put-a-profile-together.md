---
id: 5895f70ef9fc0f352b528e6b
title: 如何将 Profile 放在一起
challengeType: 2
forumTopicId: 301554
dashedName: how-to-put-a-profile-together
---

# --description--

现在，我们能确保访问 `/profile` 页面的用户都是经过验证的，这样我们就可以在页面上使用 `req.user` 里的信息了。

传递一个包含属性 `username` 且属性值为 `req.user.username` 的对象，作为 profile 页面的 render 方法的第二个参数。 然后在 `profile.pug`页面，将下面的代码添加到现有的 `h1` 元素下方，处在同一级别的缩进。

```pug
h2.center#welcome Welcome, #{username}!
```

这样就创建了一个 `h2` 元素，具有 '`center`' class，和包含文本 '`Welcome,`' 的 id '`welcome`'，以及 username（用户名）。

另外，在 `profile.pug` 中，添加一个指向 `/logout` 路由的链接，它将托管一个未认证用户的逻辑。

```pug
a(href='/logout') Logout
```

完成上述要求后，请提交你的页面链接。 如果你遇到了问题，可以参考[这里](https://gist.github.com/camperbot/136b3ad611cc80b41cab6f74bb460f6a)的答案。

# --hints--

应在 Pug render 中给 /profile 传一个变量。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /username:( |)req.user.username/gi,
        'You should be passing the variable username with req.user.username into the render function of the profile page'
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
