---
id: 587d7fb3367417b2b2512bfb
title: '如何使用 package.json ——所有 Node.js 項目或 npm 包的核心'
challengeType: 2
forumTopicId: 301528
dashedName: how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package
---

# --description--

你可以採用下面的任意一種編寫代碼的方式來完成這些挑戰：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成這些挑戰。
- 使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-npm" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 上的初始化項目</a>來完成這些挑戰。
- 使用你選擇的網站生成器來完成項目。 需要包含我們 GitHub 倉庫的所有文件。

如果你使用 Replit，請按照以下步驟設置項目：

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。

當你完成後，請將一個確保正常運行的 demo（項目演示）託管在可以公開訪問的平臺上。 然後將 demo 的 URL 提交到 Solution Link 字段中。

`package.json` 文件是所有 Node.js 項目和 npm 包的樞紐， 它存儲有關項目的信息，就像 HTML 文檔中的 `head` 部分描述網頁內容一樣。 它由單個 JSON 對象組成，並以鍵值對的形式存儲項目信息， 且至少包含兩個必填字段 `name` 和 `version`，但是最好提供有關項目的其他信息，這將對用戶或者維護者有所幫助。

如果你查看項目的文件樹，那麼可以在文件樹的最外層找到 `package.json`。 在接下來的幾個挑戰中你將完善這個文件。

在這個文件中最常見的信息之一是 `author` 字段， 它說明了項目的創建者，可以包含一個帶有聯繫人信息或其他信息的字符串或對象。 對於較大的項目，建議使用對象；但是在我們的項目中，一個簡單的字符串就夠了，比如下面的例子：

```json
"author": "Jane Doe",
```

# --instructions--

在 `package.json` 文件中加入你的名字作爲項目的 `author`。

**注意：**你正在寫 JSON，所有的字段名必須用雙引號（"）包裹，也必須用逗號（,）分割。

# --hints--

`package.json` 應該有一個有效的 “author” 鍵。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.author, '"author" is missing');
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
