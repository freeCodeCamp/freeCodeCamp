---
id: 58965611f9fc0f352b528e6c
title: 用戶退出登錄
challengeType: 2
forumTopicId: 301560
dashedName: logging-a-user-out
---

# --description--

創建退出登錄的邏輯是比較簡單的。 The route should just unauthenticate the user, and redirect to the home page instead of rendering any view.

In passport, unauthenticating a user is as easy as just calling `req.logout()` before redirecting. Add this `/logout` route to do that:

```js
app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});
```

You may have noticed that you are not handling missing pages (404). 在 Node 中我們通常會用如下的中間件來處理。 請在所有路由之後添加這段代碼：

```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```

完成上述要求後，請提交你的頁面鏈接。 If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#logging-a-user-out-10" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

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

`/logout` should redirect to the home page.

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
