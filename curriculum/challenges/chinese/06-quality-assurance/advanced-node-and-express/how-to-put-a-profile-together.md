---
id: 5895f70ef9fc0f352b528e6b
title: 如何将 Profile 放在一起
challengeType: 2
forumTopicId: 301554
---

# --description--

现在，只有通过验证的用户才能进入 */profile* 页面，这样我们就可以在页面上使用 'req.user' 里的信息了。

请在变量中包含 *username* 键，值为 'req.user.username'，并通过 render 方法传给 profile 页面。然后在 'profile.pug' 页面，添加这行 `h2.center#welcome Welcome, #{username}!` 代码来创建 class 为 `center`、id 为 `welcome` 且文本内容为 'Welcome, ' 后加用户名的 h2 元素。

以及，请在 profile 里添加 */logout* 链接，后续会用于处理用户退出登录的逻辑：`a(href='/logout') Logout`

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 [这里](https://gist.github.com/camperbot/136b3ad611cc80b41cab6f74bb460f6a) 的答案。

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

