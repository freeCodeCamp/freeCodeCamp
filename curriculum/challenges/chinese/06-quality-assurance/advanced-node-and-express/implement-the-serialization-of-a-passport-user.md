---
id: 5895f70cf9fc0f352b528e67
challengeType: 2
forumTopicId: 301556
title: 实现 Passport 用户的序列化
---

## Description

<section id='description'>

截至目前，我们还没有配置完数据库，因此还无法加载用户数据。实现这个的方式很多，但对于我们的项目，一旦服务器启动，那么只要有 app 实例在运行，数据库就应一直处于连接状态。

为此，你需要在环境变量 <code>MONGO_URI</code> 中添加你的数据库地址（比如：<code>mongodb+srv://:@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority</code>），我们会在 <em>connection.js</em> 中调用它。

_你可以在 <a href='https://www.mongodb.com/cloud/atlas' target='_blank'>MongoDB Atlas</a> 创建一个免费的数据库。_

在连接数据库之后，我们才能让服务器开始监听请求，这样做可以保证服务器在数据库连接前或数据库发生错误时不接受任何请求。为此，我们需要这样写：

```js
myDB(async client => {
  const myDataBase = await client.db('database').collection('users');

  // Be sure to change the title
  app.route('/').get((req, res) => {
    //Change the response to render the Pug template
    res.render('pug', {
      title: 'Connected to Database',
      message: 'Please login'
    });
  });

  // Serialization and deserialization here...

  // Be sure to add this...
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('pug', { title: e, message: 'Unable to login' });
  });
});
// app.listen out here...
```

记得要取消 deserializeUser 中 <code>myDataBase</code> 的注释，并把 <code>doc</code> 添加到 <code>done(null, null)</code>。

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 <a href='https://gist.github.com/camperbot/175f2f585a2d8034044c7e8857d5add7' target='_blank'>这里</a> 的答案。

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: 应存在数据库连接。
    testString: getUserInput => $.get(getUserInput('url')+ '/') .then(data => { assert.match(data, /Connected to Database/gi, 'You successfully connected to the database!'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 反序列化应正确使用，且应正确调用 <code>done(null, null)</code>。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /null,\s*doc/gi, 'The callback in deserializeUser of (null, null) should be altered to (null, doc)'); }, xhr => { throw new Error(xhr.statusText); })
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
