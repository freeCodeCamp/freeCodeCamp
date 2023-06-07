---
id: 5895f70cf9fc0f352b528e65
title: 設置 Passport
challengeType: 2
forumTopicId: 301565
dashedName: set-up-passport
---

# --description--

現在我們來創建 *Passport*，最終我們需要用它來實現用戶註冊和登錄。 除了 Passport，我們還會用 Express-session 來處理 session（會話）。 Express-session 有許多高級特性供你使用，但你暫時只需要瞭解其基礎功能。 在客戶端，我們可以用這個中間件把 session id 儲存到 cookie。同時，我們可以在服務器上通過這個 id 訪問 session 數據。 通過這種方式，你無需把用戶的個人賬號信息存到 cookie，來完成用戶的驗證。只需要用這個 id 作爲 *key* 來訪問服務器上用戶的數據即可。

`passport@~0.4.1` 和 `express-session@~1.17.1` 已經安裝，並且在你的 `package.json` 文件中均被列爲依賴項。

現在，你需要配置 session 並初始化 Passport。 首先，創建變量 `session` 和 `passport` 以便分別請求 `express-session` 和 `passport`。

然後，通過定義以下選項來設置你的 Express 應用程序來使用會話：

```javascript
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
```

請在 `.env` 文件中添加 `SESSION_SECRET`，並給它賦一個隨機值。 這是用來計算用於加密你的 cookie 的哈希值的！

在你做了所有這些後，告訴你的 Express 應用程序**使用** `passport.initialize()` 和 `passport.session()`。

完成後，提交你的頁面鏈接。 如果你遇到錯誤，可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-passport-3" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目</a>。

# --hints--

應添加 Passort 和 Express-session 作爲依賴。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport',
    'Your project should list "passport" as a dependency'
  );
  assert.property(
    packJson.dependencies,
    'express-session',
    'Your project should list "express-session" as a dependency'
  );
}
```

依賴應正確引入。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')passport("|')/,
    'You should have required passport'
  );
  assert.match(
    data,
    /require.*("|')express-session("|')/,
    'You should have required express-session'
  );
}
```

Express app 可以使用新的依賴。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(data, /passport\.initialize/, 'Your express app should use "passport.initialize()"');
  assert.match(data, /passport\.session/, 'Your express app should use "passport.session()"');
}
```

應正確設置 session 和 session secret。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /secret *:\s*process\.env(\.SESSION_SECRET|\[(?<q>"|')SESSION_SECRET\k<q>\])/,
    'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET'
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
