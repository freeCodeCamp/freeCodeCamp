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

正如你所看到的，正文被編碼成類似查詢字符串的形式， 這是 HTML 表單使用的默認格式。 我們還可以通過 Ajax 使用 JSON 來處理具有更復雜結構的數據。 還有另一種類型的編碼：multipart/form-data， 它被用來上傳二進制文件。 在本練習中，我們將使用 URL 編碼請求正文。 要解析來自 POST 請求的數據，你必須安裝 `body-parser` 包， 這個包包含一套可以解碼不同格式數據的中間件。

# --instructions--

在 `package.json` 中安裝 `body-parser` 模塊， 然後在文件頂部 `require` 進來， 用變量 `bodyParser` 保存它。 通過中間件的 `bodyParser.urlencoded({extended: false})` 方法處理 URL 編碼數據， Pass the function returned by the previous method call to `app.use()`. As usual, the middleware must be mounted before all the routes that depend on it.

**Note:** `extended` is a configuration option that tells `body-parser` which parsing needs to be used. When `extended=false` it uses the classic encoding `querystring` library. When `extended=true` it uses `qs` library for parsing.

When using `extended=false`, values can be only strings or arrays. The object returned when using `querystring` does not prototypically inherit from the default JavaScript `Object`, which means functions like `hasOwnProperty`, `toString` will not be available. The extended version allows more data flexibility, but it is outmatched by JSON.

# --hints--

The 'body-parser' middleware should be mounted

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
