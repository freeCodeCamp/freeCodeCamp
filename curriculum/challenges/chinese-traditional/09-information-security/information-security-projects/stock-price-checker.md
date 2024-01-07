---
id: 587d824a367417b2b2512c44
title: 股票價格查看器
challengeType: 4
forumTopicId: 301572
dashedName: stock-price-checker
---

# --description--

構建一個 JavaScript 的全棧應用，在功能上與這個應用相似：<a href="https://stock-price-checker.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://stock-price-checker.freecodecamp.rocks/</a>。

由於所有可靠的股票價格 API 都需要一個 API 密鑰，我們已經建立了一個解決方案。 使用 <a href="https://stock-price-checker-proxy.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://stock-price-checker-proxy.freecodecamp.rocks/</a> 獲取最新的股票價格信息，而無需註冊你自己的密鑰。

可以採用下面的任意一種方式完成這個挑戰：

-   克隆<a href="https://github.com/freeCodeCamp/boilerplate-project-stockchecker/" target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成你的項目。
-   使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-project-stockchecker" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 上的初始化項目</a>來完成你的項目。
-   使用你選擇的網站生成器來完成項目。 需要包含我們 GitHub 倉庫的所有文件。

如果你使用 Replit，請按照以下步驟設置項目：

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。

當你完成後，請將一個確保正常運行的 demo（項目演示）託管在可以公開訪問的平臺上。 然後將 demo 的 URL 提交到 Solution Link 字段中。 也可以將項目的源碼鏈接提交到 GitHub Link 字段中。

# --instructions--

1.  將 `NODE_ENV` 設置爲 `test`，不帶引號，並將 `DB` 設爲你的 MongoDB 連接字符串。
2.  在 `routes/api.js` 中完成項目，或者通過創建一個處理程序/控制器來完成項目
3.  添加安全功能到 `server.js`。
4.  在 `tests/2_functional-tests.js` 中創建所有的功能測試

**注意** 隱私考慮：由於每個 IP 只能接受一個贊（like），你必須保存 IP 地址。 必須遵守數據隱私法規，例如《通用數據保護條例》。 一個選項是獲得保存用戶數據的權限，但是匿名化則要簡單得多。 對於此挑戰，請記住在將 IP 地址保存到數據庫之前對其進行匿名化。 如果你想知道如何做到這一點，你可以選擇散列數據、截斷它、或將 IP 地址的一部分設置爲 0。

在 `tests/2_functional-tests.js` 中編寫以下測試：

-   查看股價：發送 GET 請求到 `/api/stock-prices/`
-   查看一個股票並關注它：發送 GET 請求到 `/api/stock-prices/`
-   查看同一只股票並再次發送關注：發送 GET 請求到 `/api/stock-prices/`
-   查看兩隻股票：發送 GET 請求到 `/api/stock-prices/`
-   查看兩隻股票並關注它：發送 GET 請求到 `/api/stock-prices/`

# --hints--

你可以提交你自己的項目，而不是示例的 URL。

```js
(getUserInput) => {
  assert(
    !/.*\/stock-price-checker\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

將內容安全策略設置爲僅允許從服務器加載腳本和 CSS。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("script-src 'self'")
  );
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("style-src 'self'")
  );
};
```

你可以向 `/api/stock-prices` 發送一個 `GET` 請求，將納斯達克股票代碼賦值給 `stock` 查詢參數。 返回的對象將包含一個名爲 `stockData` 的屬性。

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  assert.property(parsed, 'stockData');
};
```

`stockData` 屬性包括字符串 `stock`、數字 `price`，以及數字 `likes`。

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker.price, 'number');
  assert.typeOf(ticker.likes, 'number');
  assert.typeOf(ticker.stock, 'string');
};
```

你也可以將 `like` 字段作爲 `true`（布爾值）傳遞，將你的偏好添加到股票中。 每個 IP 應該只接受 1 個贊（like）。

```js

```

如果你傳遞了兩隻股票，返回值將是一個包含這兩隻股票信息的數組。 它將會顯示對於兩個 `stockData` 對象的 `rel_likes`（兩隻股票所獲得的贊同數的區別），而不是 `likes`。

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG&stock=MSFT'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker, 'array');
  assert.property(ticker[0], 'rel_likes');
  assert.property(ticker[1], 'rel_likes');
};
```

所有 5 項功能測試都已完成並通過。

```js
async (getUserInput) => {
  const tests = await fetch(getUserInput('url') + '/_api/get-tests');
  const parsed = await tests.json();
  assert.isTrue(parsed.length >= 5);
  parsed.forEach((test) => {
    assert.equal(test.state, 'passed');
  });
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
