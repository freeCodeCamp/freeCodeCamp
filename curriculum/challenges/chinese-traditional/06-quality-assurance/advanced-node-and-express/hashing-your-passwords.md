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

Currently on your registration route, you insert a user's plaintext password into the database like so: `password: req.body.password`. Hash the passwords instead by adding the following before your database logic: `const hash = bcrypt.hashSync(req.body.password, 12);`, and replacing the `req.body.password` in the database saving with just `password: hash`.

On your authentication strategy, you check for the following in your code before completing the process: `if (password !== user.password) return done(null, false);`. 現在存儲的密碼 `user.password` 已經是哈希值了。 在對現有代碼進行修改前，注意目前的語句是如何檢查如果密碼**不**匹配，就返回未認證的。 With this in mind, change that code to look as follows to properly check the password entered against the hash:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

That is all it takes to implement one of the most important security features when you have to store passwords.

完成上述要求後，請提交你的頁面鏈接。 If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#hashing-your-passwords-1" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

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
