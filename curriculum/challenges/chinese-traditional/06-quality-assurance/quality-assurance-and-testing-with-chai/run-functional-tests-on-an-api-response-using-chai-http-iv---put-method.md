---
id: 587d824f367417b2b2512c5b
title: 使用 Chai-HTTP IV 的 PUT 方法對 API 響應運行功能測試
challengeType: 2
forumTopicId: 301591
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iv---put-method
---

# --description--

請注意，本項目在[這個 Replit 項目](https://replit.com/github/freeCodeCamp/boilerplate-mochachai)的基礎上進行開發。你也可以從 [GitHub](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 上克隆。 這個練習與上一個類似， 我們詳細看看。

你已經看到了它是如何完成的，現在你需要從零開始搭建。

# --instructions--

在 `tests/2_functional-tests.js` 中，修改 `'send {surname: "da Verrazzano"}'` 測試（`// #4`）。

發送以下 JSON 響應作爲有效載荷到 `/travellers` 路徑：

```json
{
  "surname": "da Verrazzano"
}
```

在 `request.end` 返回中檢查以下情況：

1.  `status`
2.  `type`
3.  `body.name`
4.  `body.surname`

請按照以上順序書寫斷言，順序錯誤會影響系統判定。 完成後請務必刪除 `assert.fail()`。

# --hints--

需要通過所有測試。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

需要測試 “res.status” 是否爲 200。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'equal');
      assert.equal(data.assertions[0].args[0], 'res.status');
      assert.equal(data.assertions[0].args[1], '200');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

需要測試 “res.type” 是否爲 “application/json”。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'equal');
      assert.equal(data.assertions[1].args[0], 'res.type');
      assert.match(data.assertions[1].args[1], /('|")application\/json\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

需要測試 “res.body.name” 爲 “Giovanni”。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'equal');
      assert.equal(data.assertions[2].args[0], 'res.body.name');
      assert.match(data.assertions[2].args[1], /('|")Giovanni\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

需要測試 “res.body.surname” 是否爲 “da Verrazzano”。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'equal');
      assert.equal(data.assertions[3].args[0], 'res.body.surname');
      assert.match(data.assertions[3].args[1], /('|")da Verrazzano\1/);
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
