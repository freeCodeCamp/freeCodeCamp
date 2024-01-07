---
id: 587d7fb0367417b2b2512bed
title: 認識 Node 的控制檯
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

你可以採用下面的任意一種編寫代碼的方式來完成這些挑戰：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成這些挑戰。
- 使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-express" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 上的初始化項目</a>來完成這些挑戰。
- 使用你選擇的網站生成器來完成項目。 需要包含我們 GitHub 倉庫的所有文件。

如果你使用 Replit，請按照以下步驟設置項目：

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。

當你完成後，請將一個確保正常運行的 demo（項目演示）託管在可以公開訪問的平臺上。 然後將 demo 的 URL 提交到 Solution Link 字段中。

在開發過程中，能夠隨時看到代碼的運行結果是非常重要的。

Node 只是一個 JavaScript 環境。 與客戶端 JavaScript 一樣，你可以使用控制檯顯示有用的調試信息。 在你的本地計算機上，你可以在終端中看到控制檯輸出。 在 Replit 上，右側邊欄會默認打開一個終端。

我們建議在做這些挑戰題時保持終端打開的狀態。 通過閱讀終端的輸出，你可以看到可能發生的任何錯誤。

# --instructions--

修改 `myApp.js` 文件，在控制檯打印出 “Hello World”。

# --hints--

控制檯應該輸出 `"Hello World"`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/hello-console').then(
    (data) => {
      assert.isTrue(data.passed, '"Hello World" is not in the server console');
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
