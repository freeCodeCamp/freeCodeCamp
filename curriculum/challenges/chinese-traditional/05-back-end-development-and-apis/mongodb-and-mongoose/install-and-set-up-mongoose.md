---
id: 587d7fb6367417b2b2512c06
title: 安裝和設置 Mongoose
challengeType: 2
forumTopicId: 301540
dashedName: install-and-set-up-mongoose
---

# --description--

你可以採用下面的任意一種編寫代碼的方式來完成這些挑戰：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-mongomongoose/" target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成這些挑戰。
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-mongomongoose/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete these challenges.
- 使用你選擇的網站生成器來完成項目。 需要包含我們 GitHub 倉庫的所有文件。

在這個挑戰中，你將建立一個 MongoDB Atlas 數據庫並導入連接到它所需的軟件包。

按照<a href='https://https://www.freecodecamp.org/chinese/news/get-started-with-mongodb-atlas/' target="_blank" rel="noopener noreferrer nofollow">這篇教程</a>在 MongoDB Atlas 創建一個託管數據庫。

# --instructions--

`mongoose@^5.11.15` 已添加到你項目的 `package.json` 文件中。 首先，在 `myApp.js` 中請求 mongoose 爲 `mongoose`。 接下來，創建一個 `.env` 文件並向其中添加一個 `MONGO_URI` 變量。 變量的值爲你的 MongoDB Atlas 數據庫 URI。 應用單引號或雙引號包裹 URI。請記住，環境變量 `=` 兩邊不能有空格。 例如，`MONGO_URI='VALUE'`。

完成後，使用以下語法在你的 `myApp.js` 文件中調用 `connect` 方法，連接到數據庫：

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

“mongoose version ^5.11.15” 依賴項應該在 package.json 中。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongoose');
      assert.match(
        packJson.dependencies.mongoose,
        /^\^5\.11\.15/,
        'Wrong version of "mongoose". It should be ^5.11.15'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

應使用 “mongoose” 連接數據庫。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/is-mongoose-ok').then(
    (data) => {
      assert.isTrue(data.isMongooseOk, 'mongoose is not connected');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
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
