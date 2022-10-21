---
id: 5895f700f9fc0f352b528e63
title: 設置模板引擎
challengeType: 2
forumTopicId: 301564
dashedName: set-up-a-template-engine
---

# --description--

你可以採用下面的任意一種方式完成這些挑戰：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-advancednode/" target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成這些挑戰。
- 使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-advancednode" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 上的初始化項目</a>來完成這些挑戰。
- 使用一個你選擇的站點生成器來完成項目。 需要確定包含了我們 GitHub 倉庫的所有文件。

完成本項目後，請將一個正常運行的 demo（項目演示）託管在可以公開訪問的平臺。 然後在 `Solution Link` 框中提交你的項目 URL。

你可以在應用的模版引擎中使用靜態模板文件（如那些寫在 *Pug* 裏的）。 在運行時，模版引擎會用服務端的真實數據替換掉模版文件中的變量， 然後將模版轉譯成發送給客戶端的 HTML 靜態文件。 這樣可以輕鬆地構造 HTML 頁面，允許在頁面直接顯示變量內容而不需要從客戶端發送 API 請求。

`pug@~3.0.0` 已經被安裝，並且在你項目的 `package.json` 文件中作爲依賴。

Express 需要知道你正在使用哪個模板引擎。 我們將使用 `set` 方法來分配 `pug` 作爲 `view engine` 屬性的值： `app.set('view engine', 'pug')`。

在正確渲染 `views/pug` 目錄中的索引文件之後，加載頁面。

要渲染 `pug` 模板，你需要在 `/` 路由中使用 `res.render()`。 將文件路徑作爲參數傳遞到方法的 `views/pug` 目錄。 這個路徑可以是相對路徑（相對於 views），也可以是絕對路徑，不需要文件擴展。

如果一切按計劃進行，你的應用程序主頁將不再是空白的，並將顯示一條信息，表明你已經成功地渲染了 Pug 模板！

完成以上要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以<a href="https://gist.github.com/camperbot/3515cd676ea4dfceab4e322f59a37791" target="_blank" rel="noopener noreferrer nofollow">查看已執行項目的當前進度</a>。

# --hints--

項目中應使用 Pug 作爲依賴。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'pug',
        'Your project should list "pug" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

View 引擎應該是 Pug。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /('|")view engine('|"),( |)('|")pug('|")/gi,
        'Your project should set Pug as a view engine'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

使用正確的 ExpressJS 方法渲染來自響應的索引頁。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /FCC Advanced Node and Express/gi,
        'You successfully rendered the Pug template!'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Pug 應該正常運行。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /pug-success-message/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
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
