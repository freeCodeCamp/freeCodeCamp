---
id: 587d824f367417b2b2512c5c
title: 使用無頭瀏覽器模擬操作
challengeType: 2
dashedName: simulate-actions-using-a-headless-browser
---

# --description--

請注意，本項目在[這個 Replit 項目](https://replit.com/github/freeCodeCamp/boilerplate-mochachai)的基礎上進行開發。你也可以從 [GitHub](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 上克隆。

在接下來的挑戰中，我們將使用名爲 “Headless Browser（無頭瀏覽器）” 的設備模擬人與頁面的交互。

無頭瀏覽器是沒有圖形用戶界面的 Web 瀏覽器。 這種工具對於測試網頁特別有用，因爲它能夠以與瀏覽器相同的方式呈現和理解 HTML、CSS 和 JavaScript。

針對這些挑戰，我們使用 Zombie.JS。 它是一個輕量級瀏覽器，完全基於 JS，而不需要額外的二進制文件來安裝。 這個特性使我們可以在 Replit 等環境中使用它。 還有許多其他（更強大的）選擇。

Mocha 允許你在實際測試之前準備一些代碼運行的基礎。 這可能有助於例如在數據庫中創建項目，用於連續測試。

使用無頭瀏覽器，在進行實際測試之前，我們需要**訪問**我們將要檢查的頁面。 `suiteSetup` “hook” 僅在套件啓動時執行。 其他不同的鉤子類型可以在每次測試之前、每次測試之後或者在套件的末尾執行。 更多信息請參閱 Mocha 文檔。

# --instructions--

在 `tests/2_functional-tests.js`中，緊接着 `Browser` 聲明之後，將你的項目 URL 添加到變量的 `site` 屬性：

```js
Browser.site = 'https://sincere-cone.gomix.me'; // Your URL here
```

如果你在本地環境中測試，則替換上面的代碼爲：

```js
Browser.localhost('example.com', process.env.PORT || 3000);
```

在 `tests/2_functional-tests.js` 中，在 `'Functional Tests with Zombie.js'` 套件的底部，使用以下代碼實例化一個新的 `Browser` 對象：

```js
const browser = new Browser();
```

然後，通過以下代碼，使用 `suiteSetup` 鉤子把 `browser` 指向 `/` 路由：

```js
suiteSetup(function(done) {
  return browser.visit('/', done);
});
```

# --hints--

應通過所有測試。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional').then(
    (data) => {
      data.slice(0, 4).forEach((test) => {
        assert.equal(test.state, 'passed');
      })
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
