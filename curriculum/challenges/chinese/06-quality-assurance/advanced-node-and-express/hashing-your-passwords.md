---
id: 58a25c98f9fc0f352b528e7f
title: 哈希密码
challengeType: 2
forumTopicId: 301553
dashedName: hashing-your-passwords
---

# --description--

回过头来看信息安全，你也许记得在数据库中存储明文密码是*绝对*禁止的。 现在，我们需要引入 BCrypt 来解决这个问题。

`bcrypt@~5.0.0` has already been added as a dependency, so require it in your server. 你需要在两个步骤中使用哈希运算：注册和保存新账户，以及登录时检查密码是否正确。

目前处理注册的路由中，我们是这样把密码添加到数据库的：`password: req.body.password`。 保存哈希值的一个简单方式是在数据库逻辑中添加 `const hash = bcrypt.hashSync(req.body.password, 12);`，然后把 `req.body.password` 替换为 `password: hash`。

最后，在验证逻辑中，我们已经有这样一段代码执行检查：`if (password !== user.password) { return done(null, false); }`。 现在存储的密码 `user.password` 已经是哈希值了。 在对现有代码进行修改前，注意目前的语句是如何检查如果密码**不**匹配，就返回未认证的。 牢记这一点，你的代码应该是如下，检查输入的密码是否与哈希相对照：

```js
if (!bcrypt.compareSync(password, user.password)) { 
  return done(null, false);
}
```

当你需要存储密码时，这样做可以有效地提升网站的安全性。

完成上述要求后，请提交你的页面链接。 If you're running into errors, you can <a href="https://gist.github.com/camperbot/dc16cca09daea4d4151a9c36a1fab564" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

应存在 BCrypt 依赖。

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

应正确地引入和调用 BCrypt。

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
