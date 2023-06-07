---
id: 5895f70cf9fc0f352b528e67
title: 实现 Passport 用户的序列化
challengeType: 2
forumTopicId: 301556
dashedName: implement-the-serialization-of-a-passport-user
---

# --description--

你没有加载一个实际的用户对象，因为数据库没有设置好。 当你启动服务器时，连接到数据库一次，并在应用程序的整个生命周期中保持持久连接。 为此，你需要在环境变量 `MONGO_URI` 中添加你的数据库连接字符串（比如：`mongodb+srv://<username>:<password>@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority`）。 我们会在 `connection.js` 文件中调用它。

*如果你在 MongoDB Atlas 设置免费数据库时遇到问题，请查看这个<a href="https://chinese.freecodecamp.org/news/get-started-with-mongodb-atlas/" target="_blank" rel="noopener noreferrer nofollow">教程</a>。*

现在你想要连接到数据库，然后开始监听请求。 这样做的目的是在连接数据库之前或者出现数据库错误时，不接收任何请求。 要实现这一点，你需要在以下代码中包含序列化和应用的路由：

```javascript
myDB(async client => {
  const myDataBase = await client.db('database').collection('users');

  // Be sure to change the title
  app.route('/').get((req, res) => {
    // Change the response to render the Pug template
    res.render('index', {
      title: 'Connected to Database',
      message: 'Please login'
    });
  });

  // Serialization and deserialization here...

  // Be sure to add this...
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('index', { title: e, message: 'Unable to connect to database' });
  });
});
// app.listen out here...
```

记得要取消 `deserializeUser` 中 `myDataBase` 的注释，并把 `doc` 添加到 `done(null, null)`。

完成上述要求后，请提交你的页面链接。 如果你在运行时遇到错误，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implement-the-serialization-of-a-passport-user-5" target="_blank" rel="noopener noreferrer nofollow">查看已完成的项目</a>。

# --hints--

应存在数据库连接。

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /Connected to Database/gi,
    'You successfully connected to the database!'
  );
}
```

序列化应正确使用数据库，应用 `doc` 调用 `done(null, null)`。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /null,\s*doc/gi,
    'The callback in deserializeUser of (null, null) should be altered to (null, doc)'
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
