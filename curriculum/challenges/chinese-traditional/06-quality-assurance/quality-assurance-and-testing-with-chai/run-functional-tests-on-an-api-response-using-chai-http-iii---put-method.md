---
id: 587d824f367417b2b2512c5a
title: 使用 Chai-HTTP III 的 PUT 方法對 API 請求運行功能測試
challengeType: 2
forumTopicId: 301590
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iii---put-method
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

當你測試一個 `PUT` 請求時，你經常會隨同它一起發送數據。 你在 `PUT` 請求中包含的數據被稱爲請求的主體。

要將 `PUT` 請求和 JSON 對象發送到 `'/travellers'` 端點，你可以使用 `chai-http` 插件的 `put` 和 `send` 方法：

```js
chai
  .request(server)
  .put('/travellers')
  .send({
    "surname": [last name of a traveller of the past]
  })
  ...
```

並且路由響應如下：

```json
{
  "name": [first name],
  "surname": [last name],
  "dates": [birth - death years]
}
```

請參閱服務器代碼以瞭解對 `'/travellers'` 端點的不同響應。

# --instructions--

在 `tests/2_functional-tests.js` 中，更改 `'Send {surname: "Colombo"}'` 測試（`// #3`），並使用 `put` 和 `send` 方法來測試 `'/travellers'` 端點。

在你的 PUT 請求中發送以下 JSON 對象。

```json
{
  "surname": "Colombo"
}
```

在 `request.end` 的返回中檢查以下情況：

1.  `status` 應該是 `200`
2.  `type` 應該是 `application/json`
3.  `body.name` 應該是 `Cristoforo`
4.  `body.surname` 應該是 `Colombo`

請按照以上順序書寫斷言，順序錯誤會影響系統判定。 此外，請確保在完成後刪除 `assert.fail()`。

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

應該測試 `res.status` 爲 200。

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

應該測試 `res.type` 是否爲 `'application/json'`。

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

你應該測試 `res.body.name` 是否爲 `'Cristoforo'`。

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

你應該測試 `res.body.surname` 是否爲 `'Colombo'`。

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
