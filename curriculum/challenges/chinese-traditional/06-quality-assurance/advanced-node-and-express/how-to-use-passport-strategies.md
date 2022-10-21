---
id: 5895f70df9fc0f352b528e69
title: 如何使用 Passport 策略
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

在提供的 `index.pug` 文件裏有一個登錄表單。 因爲這個表單中存在行內 JavaScript 代碼 `if showLogin`，因此它是隱藏的。 因爲變量 `showLogin` 未定義，所以表單不會渲染。 在該頁面的 `res.render` 裏，給 `showLogin: true` 對象添加一個新的變量。 當你刷新頁面，就會看到表單！ 表單設置爲 `/login` 的 **POST**，因此我們在這裏接收 POST 請求並驗證用戶。

在這個挑戰中，你需要爲 POST 請求添加路由 `/login`。 爲了用這個路由進行驗證，你需要在發送請求響應之前添加一箇中間件。 中間件應作爲參數添加到用於處理請求的函數 `function(req,res)` 之前。 對於 passport 的驗證中間件，應這樣調用：`passport.authenticate('local')`。

`passport.authenticate` 也接收選項作爲參數，例如 `{ failureRedirect: '/' }` 就很有用，請記得添加到你的代碼中。 如果中間件驗證通過，響應應該是將用戶重定向到 `/profile`，並渲染 `profile.pug`。

如果驗證通過，用戶對象將會儲存到 `req.user` 中。

這時，由於我們還沒有實現註冊功能，如果你在表單裏輸入了用戶名和密碼，路由將會重定向到主頁 `/`，在服務端將會打印 `'User {USERNAME} attempted to log in.'`。

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以<a href="https://gist.github.com/camperbot/7ad011ac54612ad53188b500c5e99cb9" target="_blank" rel="noopener noreferrer nofollow">查看已執行項目的當前進度</a>。

# --hints--

server.js 中應正確執行所有步驟。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /showLogin:( |)true/gi,
        'You should be passing the variable "showLogin" as true to your render function for the homepage'
      );
      assert.match(
        data,
        /failureRedirect:( |)('|")\/('|")/gi,
        'Your code should include a failureRedirect to the "/" route'
      );
      assert.match(
        data,
        /login[^]*post[^]*local/gi,
        'You should have a route for login which accepts a POST and passport.authenticates local'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

到 /login 的 POST 請求應重定向到 /。

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/login').then(
    (data) => {
      assert.match(
        data,
        /Looks like this page is being rendered from Pug into HTML!/gi,
        'A login attempt at this point should redirect to the homepage since we do not have any registered users'
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
