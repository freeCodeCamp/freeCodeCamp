---
id: 589690e6f9fc0f352b528e6e
title: 使用模塊清理項目
challengeType: 2
forumTopicId: 301549
dashedName: clean-up-your-project-with-modules
---

# --description--

目前，我們把所有的代碼都放到了 `server.js` 文件裏， 這會導致代碼難以維護，且擴展性差。 現在讓我們來創建兩個新文件：`routes.js` 和 `auth.js`。

在每個文件的開頭，我們都需要寫上這段代碼：

```js
module.exports = function (app, myDataBase) {

}
```

然後，在 server.js 文件的開頭，像這樣引入文件：`const routes = require('./routes.js');`。在成功連接數據庫之後，像這樣進行實例化：`routes(app, myDataBase)`。

最後，把所有路由相關的代碼從 server.js 移動到新文件。 不要忘了，`ensureAuthenticated` 方法的定義也要移動到新文件中，這個是我們在之前的挑戰中，爲在路由中判斷用戶是否已登錄創建的函數。 然後，在 `routes.js`文件開頭添加所需要的依賴，如：`const passport = require('passport');`。

如果在這些步驟後沒有報錯，那麼你已成功地從 server.js 文件中分離出了路由文件（**除了 catch block 中的路由**）！

在你的 `auth.js` 文件中做同樣的事情，所有與認證有關的事情，如序列化和本地策略的設置，並從你的服務器文件中刪除它們。 請正確添加依賴，並在 server.js 中調用 `auth(app, myDataBase)`。

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時出現錯誤，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#clean-up-your-project-with-modules-2" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目示例</a>。

# --hints--

應該有模塊。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require\s*\(('|")\.\/routes(\.js)?\1\)/gi,
    'You should have required your new files'
  );
  assert.match(
    data,
    /client\s*\.db[^]*routes/gi,
    'Your new modules should be called after your connection to the database'
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
