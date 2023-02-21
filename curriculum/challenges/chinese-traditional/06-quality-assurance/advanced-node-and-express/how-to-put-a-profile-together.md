---
id: 5895f70ef9fc0f352b528e6b
title: 如何將 Profile 放在一起
challengeType: 2
forumTopicId: 301554
dashedName: how-to-put-a-profile-together
---

# --description--

現在你可以確保訪問 `/profile` 的用戶身份已被驗證，你可以使用你的頁面上包含在 `req.user` 中的信息。

傳遞一個包含值爲 `req.user.username` 的屬性 `username` 的對象，作爲個人主頁視圖的 `render` 方法的第二個參數。

然後轉到你的 `profile.pug` 視圖，在現有 `h1` 元素下添加以下行，並且在同一級別縮進：

```pug
h2.center#welcome Welcome, #{username}!
```

這創建了一個 `h2` 元素，具有 `center` 類和包含文本 `Welcome,` 和用戶名的 id `welcome`。

另外，在 `profile.pug`中，添加一個指向 `/logout` 路由的鏈接，它將託管取消用戶認證的邏輯：

```pug
a(href='/logout') Logout
```

完成之後，提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#how-to-put-a-profile-together-9" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目</a>。

# --hints--

你應該正確地在 `/profile` 中添加一個 Pug 渲染變量。

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
