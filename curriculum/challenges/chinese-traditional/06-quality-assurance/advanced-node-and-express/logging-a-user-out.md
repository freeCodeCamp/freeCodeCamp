---
id: 58965611f9fc0f352b528e6c
title: 用戶退出登錄
challengeType: 2
forumTopicId: 301560
dashedName: logging-a-user-out
---

# --description--

創建退出登錄的邏輯是比較簡單的。 路由應該取消用戶的認證，並重定向到主頁，而不是渲染任何視圖。

在 passport 裏，只需要在重定向前調用 `req.logout()` 即可完成用戶的退出登錄。 添加 `/logout` 路由來實現：

```js
app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});
```

你可能已經注意到我們還沒有處理 404 錯誤，這個錯誤碼代表頁面無法找到。 在 Node 中我們通常會用如下的中間件來處理。 請在所有路由之後添加這段代碼：

```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#logging-a-user-out-10" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目</a>。

# --hints--

`req.logout()` 應在 `/logout` 路由中調用。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /req.logout/gi,
    'You should be calling req.logout() in your /logout route'
  );
}
```

`/logout` 應重定向到主頁。

```js
async (getUserInput) => {
  const url = new URL("/logout", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /Home page/gi,
    'When a user logs out they should be redirected to the homepage'
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
