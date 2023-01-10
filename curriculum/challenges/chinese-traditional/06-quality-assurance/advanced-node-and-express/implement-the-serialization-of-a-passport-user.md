---
id: 5895f70cf9fc0f352b528e67
title: 實現 Passport 用戶的序列化
challengeType: 2
forumTopicId: 301556
dashedName: implement-the-serialization-of-a-passport-user
---

# --description--

你沒有加載一個實際的用戶對象，因爲數據庫沒有設置好。 當你啓動服務器時，連接到數據庫一次，並在應用程序的整個生命週期中保持持久連接。 爲此，你需要在環境變量 `MONGO_URI` 中添加你的數據庫連接字符串（比如：`mongodb+srv://<username>:<password>@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority`）。 我們會在 `connection.js` 文件中調用它。

*如果你在 MongoDB Atlas 設置免費數據庫時遇到問題，請查看這個<a href="https://chinese.freecodecamp.org/news/get-started-with-mongodb-atlas/" target="_blank" rel="noopener noreferrer nofollow">教程</a>。*

現在你想要連接到數據庫，然後開始監聽請求。 這樣做的目的是在連接數據庫之前或者出現數據庫錯誤時，不接收任何請求。 要實現這一點，你需要在以下代碼中包含序列化和應用的路由：

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

記得要取消 `deserializeUser` 中 `myDataBase` 的註釋，並把 `doc` 添加到 `done(null, null)`。

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implement-the-serialization-of-a-passport-user-5" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目</a>。

# --hints--

應存在數據庫連接。

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

序列化應正確使用數據庫，應用 `doc` 調用 `done(null, null)`。

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
