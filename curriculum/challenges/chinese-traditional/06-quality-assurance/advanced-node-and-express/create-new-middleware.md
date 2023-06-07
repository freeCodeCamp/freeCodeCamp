---
id: 5895f70df9fc0f352b528e6a
title: 創建新的中間件
challengeType: 2
forumTopicId: 301551
dashedName: create-new-middleware
---

# --description--

就像現在這樣，任何用戶都可以直接進入 `/profile`，不管他們是否已經通過認證，只要輸入 URL 就可以了。 你想通過在呈現個人資料頁面之前首先檢查用戶是否經過認證來防止這種情況。 這就是一個很棒的創建中間件的示例。

這裏的挑戰是創建中間件函數 `ensureAuthenticated(req, res, next)`，它將通過在檢查 `req.user` 是否被定義的 `request` 上調用 Passport 的 `isAuthenticated` 方法檢查用戶是否已認證。 如果是的話，那麼 `next()` 應該被調用。 否則，你可以直接用一個重定向到你的主頁來回應請求，以便登錄。

此中間件的實現是：

```javascript
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
```

創建上述中間件函數，然後在 GET 請求參數之前，將 `ensureAuthenticated` 作爲中間件傳遞，以請求個人資料頁面。

```javascript
app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render('profile');
 });
```

完成之後提交你的頁面。 如果你在運行時遇到錯誤，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#create-new-middleware-8" target="_blank" rel="noopener noreferrer nofollow">查看到此爲止的項目完成情況</a>。

# --hints--

中間件 `ensureAuthenticated` 應該被實現，並附加到 `/profile` 路由。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /ensureAuthenticated[^]*req.isAuthenticated/,
    'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'
  );
  assert.match(
    data,
    /profile[^]*get[^]*ensureAuthenticated/,
    'Your ensureAuthenticated middleware should be attached to the /profile route'
  );
}
```

未認證的 GET 請求 `/profile` 應該正確重定向到 `/`。

```js
async (getUserInput) => {
  const url = new URL("/profile", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /Home page/,
    'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in'
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
