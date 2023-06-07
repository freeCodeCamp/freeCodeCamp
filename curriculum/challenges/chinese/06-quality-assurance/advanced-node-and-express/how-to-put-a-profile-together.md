---
id: 5895f70ef9fc0f352b528e6b
title: 如何将 Profile 放在一起
challengeType: 2
forumTopicId: 301554
dashedName: how-to-put-a-profile-together
---

# --description--

现在你可以确保访问 `/profile` 的用户身份已被验证，你可以使用你的页面上包含在 `req.user` 中的信息。

传递一个包含值为 `req.user.username` 的属性 `username` 的对象，作为个人主页视图的 `render` 方法的第二个参数。

然后转到你的 `profile.pug` 视图，在现有 `h1` 元素下添加以下行，并且在同一级别缩进：

```pug
h2.center#welcome Welcome, #{username}!
```

这创建了一个 `h2` 元素，具有 `center` 类和包含文本 `Welcome,` 和用户名的 id `welcome`。

另外，在 `profile.pug`中，添加一个指向 `/logout` 路由的链接，它将托管取消用户认证的逻辑：

```pug
a(href='/logout') Logout
```

完成之后，提交你的页面链接。 如果你在运行时遇到错误，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#how-to-put-a-profile-together-9" target="_blank" rel="noopener noreferrer nofollow">查看已完成的项目</a>。

# --hints--

你应该正确地在 `/profile` 中添加一个 Pug 渲染变量。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /username:( |)req.user.username/,
    'You should be passing the variable username with req.user.username into the render function of the profile page'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
