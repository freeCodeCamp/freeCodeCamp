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
- 使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-mongomongoose" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 上的初始化項目</a>來完成這些挑戰。
- 使用你選擇的網站生成器來完成項目。 需要包含我們 GitHub 倉庫的所有文件。

如果你使用 Replit，請按照以下步驟設置項目：

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。

當你完成後，請將一個確保正常運行的 demo（項目演示）託管在可以公開訪問的平臺上。 然後將 demo 的 URL 提交到 Solution Link 字段中。

在這個挑戰中，你將建立一個 MongoDB Atlas 數據庫並導入連接到它所需的軟件包。

按照<a href='https://https://www.freecodecamp.org/chinese/news/get-started-with-mongodb-atlas/' target="_blank" rel="noopener noreferrer nofollow">這篇教程</a>在 MongoDB Atlas 創建一個託管數據庫。

# --instructions--

`mongoose@^5.11.15` 已添加到你項目的 `package.json` 文件中。 首先，在 `myApp.js` 中請求 mongoose 爲 `mongoose`。 接下來，創建一個 `.env` 文件並向其中添加一個 `MONGO_URI` 變量。 變量的值爲你的 MongoDB Atlas 數據庫 URI。 應用單引號或雙引號包裹 URI。請記住，環境變量 `=` 兩邊不能有空格。 例如，`MONGO_URI='VALUE'`。

**注意：**如果你使用的是 Replit，則無法創建 `.env` 文件。 相反，使用內置的 <dfn>SECRETS</dfn> 選項卡來添加變量。 在使用 <em>SECRETS</em> 選項卡時，<em>不要</em>將值括在引號中。

When you are done, connect to the database by calling the `connect` method within your `myApp.js` file by using the following syntax:

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
