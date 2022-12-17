---
id: 5895f70df9fc0f352b528e68
title: 身份驗證策略
challengeType: 2
forumTopicId: 301547
dashedName: authentication-strategies
---

# --description--

策略是認證用戶的一種方式。 如果你讓用戶在註冊時填寫了用戶信息，那你就可以基於這些信息進行驗證。或者也可以引入第三方登錄，如 Google 或者 Github。 在這個項目中，我們將使用 Passport 中間件。 Passport 提供了一套全面的策略，支持使用用戶名和密碼、GitHub、谷歌等進行認證。

`passport-local@~1.0.0` 已經被添加爲依賴項。 將其添加到你的服務器，如下所示：

```javascript
const LocalStrategy = require('passport-local');
```

然後，需要讓 passport **使用**一個實例化的 `LocalStrategy` 對象，這個對象的一些設置已完成。 請注意，接下來的所有代碼都應寫在連接數據庫的回調中，因爲它們的執行都依賴數據庫。

```javascript
passport.use(new LocalStrategy((username, password, done) => {
  myDataBase.findOne({ username: username }, (err, user) => {
    console.log(`User ${username} attempted to log in.`);
    if (err) return done(err);
    if (!user) return done(null, false);
    if (password !== user.password) return done(null, false);
    return done(null, user);
  });
}));
```

這是定義當你試圖在本地驗證某人時要使用的程序： 首先，它試圖在你的數據庫中找到一個具有輸入的用戶名的用戶。 然後檢查密碼是否匹配。 最後，如果沒有彈出你檢查的錯誤（例如，一個錯誤的密碼），返回 `user` 對象，並且它們已經被驗證。

許多策略是通過不同的設置來制定的。 一般來說，很容易根據該策略的倉庫中的 README 來建立它。 一個很好的例子是 GitHub 策略。在該策略中，你不需要寫用戶名或密碼的相關驗證邏輯，因爲用戶將被引導到 GitHub 頁面進行驗證。 只要用戶登錄並同意，GitHub 就會返回用戶的個人信息供你使用。

下一步，你將根據表單數據設置如何實際調用認證策略來驗證用戶。

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#authentication-strategies-6" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目</a>。

# --hints--

需要使用 passport-local 作爲依賴。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport-local',
    'Your project should list "passport-local " as a dependency'
  );
}
```

應該正確地引入和配置 Passport-local。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')passport-local("|')/,
    'You should have required passport-local'
  );
  assert.match(
    data,
    /new LocalStrategy/,
    'You should have told passport to use a new strategy'
  );
  assert.match(
    data,
    /findOne/,
    'Your new local strategy should use the findOne query to find a username based on the inputs'
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
