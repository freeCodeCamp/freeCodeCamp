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

如果你使用 Replit，請按照以下步驟設置項目：

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。

當你完成後，請將一個確保正常運行的 demo（項目演示）託管在可以公開訪問的平臺上。 然後將 demo 的 URL 提交到 Solution Link 字段中。

模板引擎使你可以在應用程序中使用靜態模板文件（例如用 *Pug* 編寫的文件）。 在運行時，模版引擎會用服務端的真實數據替換掉模版文件中的變量。 然後將模版轉譯成發送給客戶端的 HTML 靜態文件。 這樣可以輕鬆地構造 HTML 頁面，允許在頁面直接顯示變量內容而不需要從客戶端發送 API 請求。

`pug@~3.0.0` 已經被安裝，並且在你項目的 `package.json` 文件中作爲依賴。

Express 需要知道你正在使用哪個模板引擎。 使用 `set` 方法來分配 `pug` 作爲 `view engine` 屬性的值：

```javascript
app.set('view engine', 'pug');
```

在那之後， 添加另一個 `set` 方法來設置你的 `app` 的 `views` 屬性，指向 `./views/pug` 目錄。 這告訴 Express 要渲染所有與那個目錄相關的視圖。

最後，在主頁的路由中使用 `res.render()`，傳遞 `index` 作爲第一個參數。 這將渲染 `pug` 模板。

如果全部按計劃進行，你的應用主頁將不再留空。 相反，它將顯示一條消息，表明你已經成功渲染了Pug 模板！

完成上述要求後，請提交你的頁面鏈接。 如果你遇到錯誤，可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-a-template-engine-1" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目</a>。

# --hints--

項目中應使用 Pug 作爲依賴。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'pug',
    'Your project should list "pug" as a dependency'
  );
}
```

View 引擎應該是 Pug。

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.['view engine'], "pug");
}
```

你應該將應用程序的 `views` 屬性設置爲 `./views/pug`。

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.views, "./views/pug");
}
```

使用正確的 ExpressJS 方法渲染來自響應的索引頁。

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /FCC Advanced Node and Express/gi,
        'You successfully rendered the Pug template!'
      );
    }
```

Pug 應該正常運行。

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /pug-success-message/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
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
