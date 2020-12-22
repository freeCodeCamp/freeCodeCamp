---
id: 5895f70df9fc0f352b528e68
title: 身份验证策略
challengeType: 2
forumTopicId: 301547
---

# --description--

现在，我们需要构建验证用户的策略，策略的选择有很多。比如，如果我们已经让用户在注册时填写了用户信息，那我们就可以基于这些信息验证；或者也可以引入第三方登录，如 Google 或者 Github。为此，你可以参考 [Passports 中提供的策略插件](http://passportjs.org/)。对于这个项目的验证策略，我们会采用自己搭建的方式完成。

首先，我们需要引入 *passport-local* 作为依赖，然后将它添加到服务器，就像这样：`const LocalStrategy = require('passport-local');`

然后，我们需要让 passport 使用实例化的本地策略对象。请注意，接下来的所有代码都应写在连接数据库的回调中，因为它们的执行都依赖数据库。

```js
passport.use(new LocalStrategy(
  function(username, password, done) {
    myDataBase.findOne({ username: username }, function (err, user) {
      console.log('User '+ username +' attempted to log in.');
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (password !== user.password) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

这就是我们的用户验证逻辑：首先根据用户输入的用户名在数据库中寻找用户；然后检查密码是否匹配；最后如果没有发生错误，那么就会返回用户对象并通过验证。 我们也可以采用上面链接中提供的验证策略，一般来说，根据该策略仓库中的 README 来进行配置就足够了。一个很好的例子是 Github 策略，在该策略中，我们不需要写用户名或密码的相关验证逻辑，因为用户将被引导到 Github 页面进行验证。只要他们登录并同意，Github 就会返回他们的个人信息供我们使用。 以上就是本次挑战的内容。在下一个挑战中，我们会基于表单数据调用上面写好的验证策略。 完成上述要求后，你可以在下方提交你的页面链接。

# --hints--

你的项目需要使用 `passport-local` 作为依赖。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport-local',
        'Your project should list "passport-local " as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

应正确地引入和设置 `passport-local`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport-local("|')/gi,
        'You should have required passport-local'
      );
      assert.match(
        data,
        /new LocalStrategy/gi,
        'You should have told passport to use a new strategy'
      );
      assert.match(
        data,
        /findOne/gi,
        'Your new local strategy should use the findOne query to find a username based on the inputs'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

# --solutions--

