---
id: 58a25c98f9fc0f352b528e7f
title: 哈希密码
challengeType: 2
forumTopicId: 301553
dashedName: hashing-your-passwords
---

# --description--

回过头来看信息安全，你也许记得在数据库中存储明文密码是*绝对*禁止的。 现在，我们需要引入 BCrypt 来解决这个问题。

`bcrypt@~5.0.0` 已被添加为依赖项，在你的服务器中请求它。 你需要在两个步骤中使用哈希运算：注册和保存新账户，以及登录时检查密码是否正确。

Currently on your registration route, you insert a user's plaintext password into the database like so: `password: req.body.password`. Hash the passwords instead by adding the following before your database logic: `const hash = bcrypt.hashSync(req.body.password, 12);`, and replacing the `req.body.password` in the database saving with just `password: hash`.

On your authentication strategy, you check for the following in your code before completing the process: `if (password !== user.password) return done(null, false);`. 现在存储的密码 `user.password` 已经是哈希值了。 在对现有代码进行修改前，注意目前的语句是如何检查如果密码**不**匹配，就返回未认证的。 With this in mind, change that code to look as follows to properly check the password entered against the hash:

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

That is all it takes to implement one of the most important security features when you have to store passwords.

完成上述要求后，请提交你的页面链接。 If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#hashing-your-passwords-1" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

应存在 BCrypt 依赖。

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

应正确地引入和调用 BCrypt。

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
