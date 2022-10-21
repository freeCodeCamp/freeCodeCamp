---
id: 5895f70cf9fc0f352b528e65
title: 設置 Passport
challengeType: 2
forumTopicId: 301565
dashedName: set-up-passport
---

# --description--

現在我們來創建 *Passport*，最終我們需要用它來實現用戶註冊和登錄。 除了 Passport，我們還會用 Express-session 來處理 session（會話）。 Express-session 有許多高級特性，但我們暫時只需要瞭解其基礎功能。 在客戶端，我們可以用這個中間件把 session id 儲存到 cookie。同時，我們可以在服務器上通過這個 id 訪問 session 數據。 通過這種方式，我們無需把用戶的個人賬號信息存到 cookie，來完成用戶的驗證。只需要用這個 id 作爲 *key* 來訪問服務器上用戶的數據即可。

`passport@~0.4.1` 和 `express-session@~1.17.1` 已經安裝，並且在你的 `package.json` 文件中均被列爲依賴項。

現在，你需要配置 session 並初始化 Passport。 請先創建變量 “session” 和 “passport” 來分別引入 “express-session” 和 “passport”。

爲了讓 express 應用可以使用 session，我們需要添加一些基礎選項。 請在 .env 文件中添加字段 “SESSION_SECRET”，並給它賦一個隨機值， 便於加密 cookie、計算哈希。

```js
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
```

還有，我們需要讓 express **使用** “passport.initialize()” 和 “passport.session()”。 （例如，`app.use(passport.initialize());`）。

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以<a href="https://gist.github.com/camperbot/4068a7662a2f9f5d5011074397d6788c" target="_blank" rel="noopener noreferrer nofollow">查看已執行項目的當前進度</a>。

# --hints--

應添加 Passport 和 Express-session 作爲依賴。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
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
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

依賴應正確引入。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport("|')/gi,
        'You should have required passport'
      );
      assert.match(
        data,
        /require.*("|')express-session("|')/gi,
        'You should have required express-session'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Express app 可以使用新的依賴。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.initialize/gi,
        'Your express app should use "passport.initialize()"'
      );
      assert.match(
        data,
        /passport.session/gi,
        'Your express app should use "passport.session()"'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

應正確設置 Session 和會話密碼。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /secret *: *process\.env(\.SESSION_SECRET|\[(?<q>"|')SESSION_SECRET\k<q>\])/g,
        'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET'
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
