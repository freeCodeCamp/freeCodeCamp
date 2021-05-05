---
id: 58965611f9fc0f352b528e6c
title: 用戶退出登錄
challengeType: 2
forumTopicId: 301560
dashedName: logging-a-user-out
---

# --description--

創建退出登錄的邏輯是比較簡單的。 只要用戶嘗試退出登錄，路由就應重定向到主頁，而不應該顯示任何其他頁面。

在 passport 裏，只需要在重定向前調用 `req.logout();` 即可完成用戶的退出登錄。

```js
app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});
```

你可能注意到我們還沒有處理 404 錯誤，這個錯誤碼代表頁面無法找到。 在 Node 中我們通常會用如下的中間件來處理。 請在所有路由之後添加這段代碼：

```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```

完成上述要求後，請提交你的頁面鏈接。 如果你遇到了問題，可以參考[這裏](https://gist.github.com/camperbot/c3eeb8a3ebf855e021fd0c044095a23b)的答案。

# --hints--

`req.Logout` 應在 `/logout` 路由中調用。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /req.logout/gi,
        'You should be calling req.logout() in your /logout route'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

退出登錄後應重定向到主頁 /。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/logout').then(
    (data) => {
      assert.match(
        data,
        /Home page/gi,
        'When a user logs out they should be redirected to the homepage'
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
