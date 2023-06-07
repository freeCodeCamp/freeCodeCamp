---
id: 587d7fb2367417b2b2512bf7
title: 使用 body-parser 來解析 POST 請求
challengeType: 2
forumTopicId: 301520
dashedName: use-body-parser-to-parse-post-requests
---

# --description--

除了 GET 還有另一個常見的 HTTP 動詞，即 POST。 POST 是使用 HTML 表單發送客戶端數據的默認方法。 在 REST 規範中，POST 常用於發送數據以在數據庫中創建新項目（新用戶或新博客文章）。 在這個項目中沒有使用數據庫，但下面將學習如何處理 POST 請求。

在這些類型的請求中，數據不會出現在 URL 中，而是隱藏在請求正文中。 請求正文也是 HTML 請求的一部分，被稱爲負載。 即使數據在 URL 中是不可見的，也不意味着它是私有的。 要了解原因，請觀察 HTTP POST 請求的原始內容：

```http
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20

name=John+Doe&age=25
```

正如你所看到的，正文被編碼成類似查詢字符串的形式， 這是 HTML 表單使用的默認格式。 我們還可以通過 Ajax 使用 JSON 來處理具有更復雜結構的數據。 還有另一種類型的編碼：multipart/form-data， 它被用來上傳二進制文件。 在本練習中，你將使用 URL 編碼的正文。 要解析來自 POST 請求的數據，你必須使用 `body-parser` 包。 這個包包含一套可以解碼不同格式數據的中間件。

# --instructions--

`body-parser` 已經安裝並且在你項目的 `package.json` 文件中。 在 `myApp.js` 文件的頂部包含（`require`）它，並將其存儲在名爲 `bodyParser` 的變量中。 `bodyParser.urlencoded({extended: false})` 返回處理 URL 編碼數據的中間件。 將上一個方法調用返回的函數傳遞給 `app.use()`。 像往常一樣，中間件必須在所有依賴它的路由之前安裝。

**注意：** `extended` 是一個配置選項, 告訴 `body-parser` 需要使用哪個解析。 當 `extended=false` 時，它使用經典編碼 `querystring` 庫。 當 `extended=true`時，它使用 `qs` 庫進行解析。

當使用 `extended=false` 時，值可以只是字符串或數組。 使用 `querystring` 時返回的對象並不繼承的 JavaScript `Object`，這意味着 `hasOwnProperty`、`toString` 等函數將不可用。 拓展版本的數據更加靈活，但稍遜於 JSON。

# --hints--

應該掛載 “body-parser” 中間件

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/add-body-parser').then(
    (data) => {
      assert.isAbove(
        data.mountedAt,
        0,
        '"body-parser" is not mounted correctly'
      );
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
