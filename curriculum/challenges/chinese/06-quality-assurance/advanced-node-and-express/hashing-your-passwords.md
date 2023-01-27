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

目前在你的注册路径上，你将把用户的纯文本密码插入数据库中：`password: req.body.password`。 通过在你的数据库逻辑前添加 `const hash = bcrypt.hashSync(req.body.password, 12);`，并在数据库存储中将 `req.body.password` 替换为 `password: hash`，来哈希密码。

在你的验证策略上，你在完成过程之前在代码中检查：`if (password !== user.password) return done(null, false);`。 现在存储的密码 `user.password` 已经是哈希值了。 在对现有代码进行修改前，注意目前的语句是如何检查如果密码**不**匹配，就返回未认证的。 考虑到这一点，将该代码修改如下，以便根据哈希值正确检查输入的密码。

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

当你必须存储密码时，这就是实现最重要的安全功能之一的全部内容。

完成上述要求后，请提交你的页面链接。 如果你在运行时遇到错误，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#hashing-your-passwords-1" target="_blank" rel="noopener noreferrer nofollow">查看已完成的项目</a>。

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
