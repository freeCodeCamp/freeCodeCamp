---
id: 587d824a367417b2b2512c45
title: 匿名留言板
challengeType: 4
forumTopicId: 301568
dashedName: anonymous-message-board
---

# --description--

構建一個功能上與此相似的全棧式 JavaScript 應用程序：<https://anonymous-message-board.freecodecamp.rocks/>。

在這個項目中，你將使用以下方法之一編寫你的代碼：

-   克隆[這個 GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-messageboard/) 並在本地完成你的項目。
-   使用 [我們的 Replit 啓動項目](https://replit.com/github/freeCodeCamp/boilerplate-project-messageboard)來完成你的項目。
-   使用一個你喜歡的站點生成器來完成項目。 需要確定包含了我們 GitHub 倉庫的所有文件。

完成本項目後，請將一個正常運行的 demo（項目演示）託管在可以公開訪問的平臺。 然後將 URL 提交到 `Solution Link` 中。 此外，還可以將項目的源碼提交到 `GitHub Link` 中。

# --instructions--

1.  當準備寫測試和數據庫連接字符串時，設置`NODE_ENV`爲不帶引號的變量（在`.env`文件中）。
2.  建議在 `routes/api.js` 中創建控制器/處理器並處理路由。
3.  你將在 `server.js` 中添加任何安全功能。

在 `tests/2_functional-tests.js` 中編寫下以下測試：

-   創建一個新的主題：發送 POST 請求到 `/api/threads/{board}`。
-   查看最近的 10 個主題，每個主題有 3 個回覆：發送 GET 請求到 `/api/threads/{board}`
-   使用錯誤密碼刪除主題：使用錯誤的`delete_password`向`/api/threads/{board}`發出DELETE請求
-   用正確的密碼刪除一個主題：向`/api/threads/{board}`發出DELETE請求，並提供有效的`delete_password`。
-   報告一個主題：發送 PUT 請求到 `/api/threads/{board}`。
-   創建一個新的回覆：發送 POST 請求到 `/api/replies/{board}`。
-   查看一個帶有所有回覆的主題：發送 GET 請求到`/api/replies/{board}`。
-   使用錯誤密碼刪除一個回覆：使用無效的`delete_password`向`/api/replies/{board}`發出DELETE請求。
-   使用正確密碼刪除一個回覆：使用有效的`delete_password`向`/api/replies/{board}`發出DELETE請求。
-   報告一個回覆：發送 PUT 請求到 `/api/replies/{board}`。

# --hints--

提交自己的項目，而不是示例的 URL。

```js
(getUserInput) => {
  assert(
    !/.*\/anonymous-message-board\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

只允許你的網站在你自己的頁面上以 iFrame 方式加載。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-frame-options']?.includes('SAMEORIGIN'));
};
```

不允許 DNS 預取。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-dns-prefetch-control']?.includes('off'));
};
```

只允許你的網站爲你自己的頁面發送 referrer 請求頭。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['referrer-policy']?.includes('same-origin'));
};
```

你可以向 `/api/threads/{board}` 發送一個 POST 請求，其中包括 `text` 和 `delete_password` 的表單數據。 保存的數據庫記錄將至少有 `_id`、`text`、`created_on`(date & time)、`bumped_on`(date & time, starts same as `created_on`)、`reported`（布爾值）、`delete_password`、& `replies`（數組）。

```js
async (getUserInput) => {
  const date = new Date();
  const text = `fcc_test_${date}`;
  const deletePassword = 'delete_me';
  const data = { text, delete_password: deletePassword };
  const url = getUserInput('url');
  const res = await fetch(url + '/api/threads/fcc_test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.ok) {
    const checkData = await fetch(url + '/api/threads/fcc_test');
    const parsed = await checkData.json();
    try {
      assert.equal(parsed[0].text, text);
      assert.isNotNull(parsed[0]._id);
      assert.equal(new Date(parsed[0].created_on).toDateString(), date.toDateString());
      assert.equal(parsed[0].bumped_on, parsed[0].created_on);
      assert.isArray(parsed[0].replies);
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

你可以向 `/api/replies/{board}` 發送一個 POST 請求，其中包括字段 `text`、`delete_password` & `thread_id`。 這將更新 `bumped_on` 日期到評論日期。 在主題的 `replies` 數組中，將保存一個對象，至少有 `_id`、`text`、`created_on`、`delete_password`、& `reported` 這些屬性。

```js

```

你可以向 `/api/threads/{board}` 發送一個 GET 請求。 返回的將是一個數組，包括論壇上最近的 10 個被回覆的主題，及每個主題最新的 3 個回帖。 `reported` 和 `delete_password` 字段將不會被髮送到客戶端。

```js

```

你可以向 `/api/replies/{board}?thread_id={thread_id}` 發送一個 GET 請求。 返回的將是帶有所有的回覆的整個主題，不包括與之前測試相同的客戶端字段。

```js

```

你可以向 `/api/threads/{board}` 發送一個 DELETE 請求，並傳遞 `thread_id` & `delete_password` 來刪除該線程。 返回的將是字符串 `incorrect password` 或 `success`。

```js

```

你可以向 `/api/replies/{board}` 發送一個 DELETE 請求，並傳遞 `thread_id`、`reply_id`、& `delete_password`。 返回的將是字符串 `incorrect password` 或 `success`。 成功後，`reply_id` 的文本將更改爲 `[deleted]`。

```js

```

你可以向 `/api/threads/{board}` 發送一個 PUT 請求，並傳遞 `thread_id`。 返回的將是字符串 `success`。 `thread_id` 回覆的 `reported` 值將改爲 `true`。

```js

```

你可以通過向 `/api/replies/{board}` 發送 PUT 請求並傳遞 `thread_id` & `reply_id`。 返回的將是字符串 `success`。 `reply_id` 的 `reported` 值將被改變爲 `true`。

```js

```

所有 10 項功能測試都已完成並通過。

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
