---
id: bd7158d8c443edefaeb5bdef
title: 時間戳微服務
challengeType: 4
forumTopicId: 301508
dashedName: timestamp-microservice
---

# --description--

構建一個功能類似於此的全棧 JavaScript 應用程序：<a href="https://timestamp-microservice.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://timestamp-microservice.freecodecamp.rocks</a>。 在這個項目中，你將使用以下方法之一編寫你的代碼：

-   克隆<a href="https://github.com/freeCodeCamp/boilerplate-project-timestamp/"  target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成你的項目。
-   使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-project-timestamp"  target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 上的初始化項目</a>來完成你的項目。
-   使用你選擇的網站生成器來完成項目。 需要包含我們 GitHub 倉庫的所有文件。

如果你使用 Replit，請按照以下步驟設置項目：

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。

當你完成後，請將一個確保正常運行的 demo（項目演示）託管在可以公開訪問的平臺上。 然後將 demo 的 URL 提交到 Solution Link 字段中。 也可以將項目的源碼鏈接提交到 GitHub Link 字段中。

**注意：**時區轉換不是本項目的目的，因此假設所有發送的有效日期將使用 `new Date()` 解析爲 GMT 日期。

# --hints--

你應該提交自己的項目，而不是示例的 URL。

```js
(getUserInput) => {
  assert(
    !/.*\/timestamp-microservice\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

一個對 `/api/:date?` 的有效日期的請求應該返回一個 JSON 對象，該對象的 `unix` 鍵是輸入日期的 Unix 時間戳，單位是毫秒（數字類型）。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/2016-12-25').then(
    (data) => {
      assert.equal(
        data.unix,
        1482624000000,
        'Should be a valid unix timestamp'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

對具有有效日期的 `/api/:date?` 的請求應返回一個帶有 `utc` 鍵的 JSON 對象，該鍵是輸入日期的字符串，格式爲：`Thu, 01 Jan 1970 00:00:00 GMT`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/2016-12-25').then(
    (data) => {
      assert.equal(
        data.utc,
        'Sun, 25 Dec 2016 00:00:00 GMT',
        'Should be a valid UTC date string'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

對 `/api/1451001600000` 的請求應該返回 `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/1451001600000').then(
    (data) => {
      assert(
        data.unix === 1451001600000 &&
          data.utc === 'Fri, 25 Dec 2015 00:00:00 GMT'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

你的項目可以處理可以通過 `new Date(date_string)` 成功解析的日期。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/05 October 2011, GMT').then(
    (data) => {
      assert(
        data.unix === 1317772800000 &&
          data.utc === 'Wed, 05 Oct 2011 00:00:00 GMT'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

如果輸入的日期字符串無效，API 將返回一個具有結構 `{ error : "Invalid Date" }` 的對象。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/this-is-not-a-date').then(
    (data) => {
      assert.equal(data.error.toLowerCase(), 'invalid date');
    },
    (xhr) => {
      assert(xhr.responseJSON.error.toLowerCase() === 'invalid date');
    }
  );
```

一個空的日期參數應該返回一個帶有 `unix` 鍵的 JSON 對象中的當前時間。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api').then(
    (data) => {
      var now = Date.now();
      assert.approximately(data.unix, now, 20000);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

一個空日期參數應返回帶有 `utc` 鍵的 JSON 對象中的當前時間。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api').then(
    (data) => {
      var now = Date.now();
      var serverTime = new Date(data.utc).getTime();
      assert.approximately(serverTime, now, 20000);
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
