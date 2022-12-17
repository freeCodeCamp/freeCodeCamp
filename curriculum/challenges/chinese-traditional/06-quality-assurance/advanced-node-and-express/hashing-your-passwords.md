---
id: 58a25c98f9fc0f352b528e7f
title: 哈希密碼
challengeType: 2
forumTopicId: 301553
dashedName: hashing-your-passwords
---

# --description--

回過頭來看信息安全，你也許記得在數據庫中存儲明文密碼是*絕對*禁止的。 現在，我們需要引入 BCrypt 來解決這個問題。

`bcrypt@~5.0.0` 已被添加爲依賴項，在你的服務器中請求它。 你需要在兩個步驟中使用哈希運算：註冊和保存新賬戶，以及登錄時檢查密碼是否正確。

目前在你的註冊路徑上，你將把用戶的純文本密碼插入數據庫中：`password: req.body.password`。 通過在你的數據庫邏輯前添加 `const hash = bcrypt.hashSync(req.body.password, 12);`，並在數據庫存儲中將 `req.body.password` 替換爲 `password: hash`，來哈希密碼。

在你的驗證策略上，你在完成過程之前在代碼中檢查：`if (password !== user.password) return done(null, false);`。 現在存儲的密碼 `user.password` 已經是哈希值了。 在對現有代碼進行修改前，注意目前的語句是如何檢查如果密碼**不**匹配，就返回未認證的。 考慮到這一點，將該代碼修改如下，以便根據哈希值正確檢查輸入的密碼。

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

當你必須存儲密碼時，這就是實現最重要的安全功能之一的全部內容。

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#hashing-your-passwords-1" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目</a>。

# --hints--

應存在 BCrypt 依賴。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json()
  assert.property(
    packJson.dependencies,
    'bcrypt',
    'Your project should list "bcrypt" as a dependency'
  );
}
```

應正確地引入和調用 BCrypt。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')bcrypt\1/gi,
    'You should have required bcrypt'
  );
  assert.match(
    data,
    /bcrypt.hashSync/gi,
    'You should use hash the password in the registration'
  );
  assert.match(
    data,
    /bcrypt.compareSync/gi,
    'You should compare the password to the hash in your strategy'
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
