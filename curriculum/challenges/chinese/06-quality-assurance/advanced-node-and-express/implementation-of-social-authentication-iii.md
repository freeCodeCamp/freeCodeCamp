---
id: 589a8eb3f9fc0f352b528e72
title: 实现第三种社交登录
challengeType: 2
forumTopicId: 301558
dashedName: implementation-of-social-authentication-iii
---

# --description--

验证策略的最后一部分是处理从 GitHub 返回的个人信息。 如果用户存在，我们就需要从数据库中读取用户数据并在 profile 页面加载；否则，我们需要把用户信息添加到数据库。 GitHub 在用户信息中为我们提供了独一无二的 *id*，我们可以通过序列化的 id 在数据库中搜索用户（已实现）。 以下是这个逻辑的实现示例，我们应该把它传到新策略的第二个参数，就是目前 `console.log(profile);` 的下方：

```js
myDataBase.findOneAndUpdate(
  { id: profile.id },
  {
    $setOnInsert: {
      id: profile.id,
      username: profile.username,
      name: profile.displayName || 'John Doe',
      photo: profile.photos[0].value || '',
      email: Array.isArray(profile.emails)
        ? profile.emails[0].value
        : 'No public email',
      created_on: new Date(),
      provider: profile.provider || ''
    },
    $set: {
      last_login: new Date()
    },
    $inc: {
      login_count: 1
    }
  },
  { upsert: true, new: true },
  (err, doc) => {
    return cb(null, doc.value);
  }
);
```

`findOneAndUpdate` 的作用是在数据库中查询对象并更新， 如果对象不存在，将插入对象，然后我们可以在回调方法里获取到插入的新对象。 在这个例子中，我们会设置 `last_login`，而且总会为 `login_count` 加 `1`。只有在插入一个新对象（新用户）时，我们才会初始化这些字段。 另外，还需要注意默认值的使用。 有时返回的用户信息可能不全，可能是因为用户没有填写，也可能是因为用户选择不公开一部分信息。 在这种情况下，我们需要进行相应的处理，以防我们的 app 报错。

你现在应该可以登录你的应用了， 试试吧！

完成上述要求后，你可以在下方提交你的页面链接。 如果你在运行时遇到错误，可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-iii-5" target="_blank" rel="noopener noreferrer nofollow">查看已完成的项目</a>。

# --hints--

GitHub 策略应配置完成。

```js
async (getUserInput) => {
  const url = new URL("/_api/auth.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /GitHubStrategy[^]*myDataBase/gi,
    'Strategy should use now use the database to search for the user'
  );
  assert.match(
    data,
    /GitHubStrategy[^]*cb/gi,
    'Strategy should return the callback function "cb"'
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
