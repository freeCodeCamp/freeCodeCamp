---
id: 5895f70df9fc0f352b528e69
title: 如何使用 Passport 策略
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

在提供的 `index.pug` 文件中，有一個登錄表格。 它被隱藏了，因爲內聯的 JavaScript `if showLogin` 和在它之後縮進的表單。

在頁面的 `res.render` 中，爲對象添加一個新變量：`showLogin: true`。 當你刷新你的頁面時，應該能看到表單！ 此表單被設置爲 `/login` 上的 **POST**。 所以，你應該在這裏設置接受 POST 請求並認證用戶。

對於這個挑戰，你應該添加路由 `/login` 來接受 POST 請求。 要驗證此路由，你需要添加一箇中間件，然後發送回覆。 這可以通過在你的響應之前向中間件傳遞另一個參數來實現。 要使用的中間件是 `passport.authenticate('local')`。

`passport.authenticate` 也可以把一些選項作爲參數，例如 `{ failureRedirect: '/' }`，這非常有用，因此也要確保增加這一點。 在使用中間件後添加一個響應（只有在認證中間件通過後纔會被調用），將用戶重定向到 `/profile`。 添加該路由，讓它呈現視圖 `profile.pug`。

如果認證成功，用戶對象將被保存在 `req.user`。

現在，如果你在表單中輸入用戶名和密碼，它應該重定向到主頁 `/`，你的服務器的控制檯應該顯示 `'User {USERNAME} attempted to log in.'`，因爲目前未註冊的用戶無法登錄。

完成後，提交你的頁面鏈接。 如果你在運行時遇到錯誤，可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#how-to-use-passport-strategies-7" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目</a>。

# --hints--

所有步驟都應該在 `server.js` 中正確實現。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /showLogin:( |)true/,
    'You should be passing the variable "showLogin" as true to your render function for the homepage'
  );
  assert.match(
    data,
    /failureRedirect:( |)('|")\/('|")/,
    'Your code should include a failureRedirect to the "/" route'
  );
  assert.match(
    data,
    /login[^]*post[^]*local/,
    'You should have a route for login which accepts a POST and passport.authenticates local'
  );
}
```

`/login` 的 POST 請求應該正確重定向到 `/`。

```js
async (getUserInput) => {
  const url = new URL("/login", getUserInput("url"));
  const res = await fetch(url, { method: 'POST' });
  const data = await res.text();
  assert.match(
    data,
    /Looks like this page is being rendered from Pug into HTML!/,
    'A login attempt at this point should redirect to the homepage since we do not have any registered users'
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
