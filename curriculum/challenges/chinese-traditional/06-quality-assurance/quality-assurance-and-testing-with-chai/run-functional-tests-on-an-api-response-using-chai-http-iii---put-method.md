---
id: 587d824f367417b2b2512c5a
title: 使用 Chai-HTTP III 的 PUT 方法對 API 請求運行功能測試
challengeType: 2
forumTopicId: 301590
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iii---put-method
---

# --description--

請注意，本項目在 [這個 Repl.it 項目](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 的基礎上進行開發。你也可以從 [GitHub](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 上克隆。

接下來，我們將瞭解如何使用請求的 payload（body）發送數據。 我們需要測試一個 PUT 請求， `'/travellers'` 接收如下的 JSON 對象：

```json
{
  "surname": [last name of a traveller of the past]
}
```

路由響應如下：

```json
{
  "name": [first name], "surname": [last name], "dates": [birth - death years]
}
```

更多細節請查看服務器代碼。

# --instructions--

在 `tests/2_functional-tests.js` 中，修改 `'send {surname: "Colombo"}'` 測試（`// #3`）：

發送以下 JSON 響應作爲有效載荷：

```json
{
  "surname": "Colombo"
}
```

在 `request.end` 返回中檢查以下情況：

1.  `status`
2.  `type`
3.  `body.name`
4.  `body.surname`

請按照以上順序書寫斷言，順序錯誤會影響系統判定。 完成後，請務必移除 `assert.fail()`。

# --hints--

應通過所有測試。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

應測試 “res.status” 是否爲 200。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
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
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
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

需要測試 “res.body.name” 是否爲 “Cristoforo”。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'equal');
      assert.equal(data.assertions[2].args[0], 'res.body.name');
      assert.match(data.assertions[2].args[1], /('|")Cristoforo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

需要測試 “res.body.surname” 是否爲 “Colombo”。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'equal');
      assert.equal(data.assertions[3].args[0], 'res.body.surname');
      assert.match(data.assertions[3].args[1], /('|")Colombo\1/);
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
