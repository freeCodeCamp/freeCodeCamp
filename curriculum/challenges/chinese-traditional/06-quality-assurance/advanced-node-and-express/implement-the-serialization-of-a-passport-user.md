---
id: 5895f70cf9fc0f352b528e67
title: 實現 Passport 用戶的序列化
challengeType: 2
forumTopicId: 301556
dashedName: implement-the-serialization-of-a-passport-user
---

# --description--

截至目前，我們還沒有配置完數據庫，因此還無法加載用戶數據。 實現這個的方式很多，但對於我們的項目，一旦服務器啓動，那麼只要有 app 實例在運行，數據庫就應一直處於連接狀態。 爲此，你需要在環境變量 `MONGO_URI` 中添加你的數據庫地址（比如：`mongodb+srv://:@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority`）。 我們會在 `connection.js` 文件中調用它。

*If you are having issues setting up a free database on MongoDB Atlas, check out <a href="https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/" target="_blank" rel="noopener noreferrer nofollow">tutorial</a>.*

現在我們想要連接到數據庫，然後開始監聽請求。 這樣做的目的是在連接數據庫之前或者出現數據庫錯誤時，不接收任何請求。 要實現這一點，你需要在以下代碼中包含序列化和應用的路由：

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

記得要取消 `deserializeUser` 中 `myDataBase` 的註釋，並把 `doc` 添加到 `done(null, null)`。

完成上述要求後，請提交你的頁面鏈接。 If you're running into errors, you can <a href="https://gist.github.com/camperbot/175f2f585a2d8034044c7e8857d5add7" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

應存在數據庫連接。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /Connected to Database/gi,
        'You successfully connected to the database!'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

序列化應正確使用數據庫，應用 `doc` 調用 `done(null, null)`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /null,\s*doc/gi,
        'The callback in deserializeUser of (null, null) should be altered to (null, doc)'
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
