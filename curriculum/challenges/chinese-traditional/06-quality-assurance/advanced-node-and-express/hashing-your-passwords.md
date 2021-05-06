---
id: 58a25c98f9fc0f352b528e7f
title: 哈希密碼
challengeType: 2
forumTopicId: 301553
dashedName: hashing-your-passwords
---

# --description--

回過頭來看信息安全，你也許記得在數據庫中存儲明文密碼是*絕對*禁止的。 現在，我們需要引入 BCrypt 來解決這個問題。

添加 BCrypt 作爲依賴，並在服務端請求它。 你需要在兩個步驟中使用哈希運算：註冊和保存新賬戶，以及登錄時檢查密碼是否正確。

目前處理註冊的路由中，我們是這樣把密碼添加到數據庫的：`password: req.body.password`。 保存哈希值的一個簡單方式是在數據庫邏輯中添加 `const hash = bcrypt.hashSync(req.body.password, 12);`，然後把 `req.body.password` 替換爲 `password: hash`。

最後，在驗證邏輯中，我們已經有這樣一段代碼執行檢查：`if (password !== user.password) { return done(null, false); }`。 現在存儲的密碼 `user.password` 已經是哈希值了。 在對現有代碼進行修改前，注意目前的語句是如何檢查如果密碼**不**匹配，就返回未認證的。 牢記這一點，你的代碼應該是如下，檢查輸入的密碼是否與哈希相對照：

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

當你需要存儲密碼時，這樣做可以有效地提升網站的安全性。

完成上述要求後，請提交你的頁面鏈接。 如果你遇到了問題，可以參考[這裏](https://gist.github.com/camperbot/dc16cca09daea4d4151a9c36a1fab564)的答案。

# --hints--

應存在 BCrypt 依賴。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'bcrypt',
        'Your project should list "bcrypt" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

應正確地引入和調用 BCrypt。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
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
