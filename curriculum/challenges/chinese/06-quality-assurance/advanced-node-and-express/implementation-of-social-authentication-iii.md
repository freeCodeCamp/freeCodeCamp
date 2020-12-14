---
id: 589a8eb3f9fc0f352b528e72
challengeType: 2
forumTopicId: 301558
title: 实现社交账号登陆 (3)
---

## Description
<section id='description'>

验证策略的最后一部分是处理从 GitHub 返回的个人信息。如果用户存在，我们就需要从数据库中读取用户数据并在 profile 页面加载；否则，我们需要把用户信息添加到数据库。GitHub 在用户信息中为我们提供了独一无二的 <em>id</em>，我们可以通过序列化的 id 在数据库中搜索用户（已实现）。以下是这个逻辑的实现示例，我们应该把它传到新策略的第二个参数，就是目前 <code>console.log(profile);</code> 的下方：

```js
myDataBase.findAndModify(
  {id: profile.id},
  {},
  {$setOnInsert:{
    id: profile.id,
    name: profile.displayName || 'John Doe',
    photo: profile.photos[0].value || '',
    email: Array.isArray(profile.emails) ? profile.emails[0].value : 'No public email',
    created_on: new Date(),
    provider: profile.provider || ''
  },$set:{
    last_login: new Date()
  },$inc:{
    login_count: 1
  }},
  {upsert:true, new: true},
  (err, doc) => {
    return cb(null, doc.value);
  }
);
```

<code>findAndModify</code> 的作用是在数据库中查询对象并更新，如果对象不存在，我们也可以 <code>upsert</code>（注，upsert 可以理解为 update + insert）它，然后我们可以在回调方法里获取到插入数据后的新对象。在这个例子中，我们会把 last_login 设置成为 now，而且总会为 login_count 加 1。只有在插入一个新对象（新用户）时，我们才会初始化这些字段。另外，还需要注意默认值的使用。有时返回的用户信息可能不全，可能是因为用户没有填写，也可能是因为用户选择不公开一部分信息。在这种情况下，我们需要进行相应的处理，以防我们的 app 报错。

你现在应该可以登录你的应用了，试试吧。

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 <a href='https://gist.github.com/camperbot/183e968f0e01d81dde015d45ba9d2745' target='_blank'>这里</a> 的答案。

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: GitHub 策略应配置完成。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/auth.js') .then(data => { assert.match(data, /GitHubStrategy[^]*myDataBase/gi, 'Strategy should use now use the database to search for the user'); assert.match(data, /GitHubStrategy[^]*return cb/gi, 'Strategy should return the callback function "cb"'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
