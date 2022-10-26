---
id: 5895f70df9fc0f352b528e6a
title: 創建新的中間件
challengeType: 2
forumTopicId: 301551
dashedName: create-new-middleware
---

# --description--

無論是否登錄，任何用戶都可以通過輸入 url 而跳轉到 `/profile`。 爲了解決這個問題，我們需要在 profile 頁面渲染之前進行用戶驗證。 這就是一個很棒的創建中間件的示例。

這個挑戰的目標是創建 `ensureAuthenticated(req, res, next)` 中間件方法，通過在 `request` 上調用 passports 的`isAuthenticated` 方法，可以檢查 `req.user` 是否定義，從而確定用戶是否通過認證。 如果用戶已通過驗證，就會調用 `next()`，否則我們應重定向到主頁並讓用戶登錄。 該中間件的實現如下：

```js
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
```

然後，在 profile 頁面請求中，添加 *ensureAuthenticated* 作爲中間件，放在 get 請求（包含渲染頁面的函數）的參數之前。

```js
app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render(process.cwd() + '/views/pug/profile');
 });
```

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以<a href="https://gist.github.com/camperbot/ae49b8778cab87e93284a91343da0959" target="_blank" rel="noopener noreferrer nofollow">查看已執行項目的當前進度</a>。

# --hints--

應把 ensureAuthenticated 中間件添加到 /profile 路由中。

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

如果沒有通過驗證，對 /profile 的 GET 請求應重定向到 /。

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
