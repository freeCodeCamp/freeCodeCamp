---
id: 5895f70cf9fc0f352b528e66
title: 用户对象的序列化
challengeType: 2
forumTopicId: 301563
---

# --description--

序列化和反序列化在身份认证中是很重要的概念。序列化一个对象就是将其内容转换成一个体积很小的 *key*，后续可以通过这个 *key* 反序列化为原始对象。这样，服务器就可以在用户未登录时识别用户，或者说给这个用户一个唯一标识，用户也不需要在每次访问不同页面时都给服务器发送用户名和密码。

我们需要用到序列化和反序列化的方法来进行配置。passport 为我们提供了 `passport.serializeUser( OURFUNCTION )` 和 `passport.deserializeUser( OURFUNCTION )` 两个方法。

code>serializeUser方法接收两个参数，分别是表示用户的对象和一个回调函数。其中，回调函数的返回值应为这个用户的唯一标识符：最简单的写法就是让它返回用户的`_id`，这个`_id`属性是 MongoDB 为用户创建的唯一字段。类似地，反序列化也接收两个参数，分别是在序列化时生成的标识符以及一个回调函数。在回调函数里，我们需要根据根据传入的标识符（比如 \_id）返回表示用户的对象。为了在 MongoDB 中通过 query（查询语句）获取 `_id` 字段，首先我们需要引入 MongoDB 的`ObjectID`方法：`const ObjectID = require('mongodb').ObjectID;`；然后调用它：`new ObjectID(THE_ID)`。当然，这一切的前提都是先引入 MongoDB 作为依赖。你可以在下面的例子中看到：

```js
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, null);
  });
});
```

注意：在完全配置好 MongoDB 前，`deserializeUser` 会抛出错误。因此，现在请先注释掉上面的代码，在 `deserializeUser` 中仅调用 `done(null, null)` 即可。

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 [这里](https://gist.github.com/camperbot/7068a0d09e61ec7424572b366751f048) 的答案。

# --hints--

应存在正确的 `serializeUser` 方法。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.serializeUser/gi,
        'You should have created your passport.serializeUser function'
      );
      assert.match(
        data,
        /null,\s*user._id/gi,
        'There should be a callback in your serializeUser with (null, user._id)'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

应存在正确的 `deserializeUser` 方法。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.deserializeUser/gi,
        'You should have created your passport.deserializeUser function'
      );
      assert.match(
        data,
        /null,\s*null/gi,
        'There should be a callback in your deserializeUser with (null, null) for now'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

MongoDB 应作为项目的依赖。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'mongodb',
        'Your project should list "mongodb" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

注释掉的代码中应包含 `ObjectId`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')mongodb\1/gi,
        'You should have required mongodb'
      );
      assert.match(
        data,
        /new ObjectID.*id/gi,
        'Even though the block is commented out, you should use new ObjectID(id) for when we add the database'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

# --solutions--

