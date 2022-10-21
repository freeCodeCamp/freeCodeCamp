---
id: 587d824e367417b2b2512c58
title: 使用 Chai-HTTP 在 API 端上運行功能測試
challengeType: 2
forumTopicId: 301593
dashedName: run-functional-tests-on-api-endpoints-using-chai-http
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

Mocha 允許你使用名爲 `chai-http` 的插件測試異步操作，例如調用 API 端點。

以下是使用 `chai-http` 測試名爲 `'GET /hello?name=[name] => "hello [name]"'` 的套件的示例：

```js
suite('GET /hello?name=[name] => "hello [name]"', function () {
  test('?name=John', function (done) {
    chai
      .request(server)
      .get('/hello?name=John')
      .end(function (err, res) {
        assert.equal(res.status, 200, 'Response status should be 200');
        assert.equal(res.text, 'hello John', 'Response should be "hello John"');
        done();
      });
  });
});
```

該測試向服務器發送一個 `GET` 請求，並將名稱作爲 URL 查詢字符串（`?name=John`）。 在`end` 方法的回調函數中，接收到響應對象（`res`）幷包含 `status` 屬性。

第一個 `assert.equal` 檢查狀態是否爲 `200`。 第二個 `assert.equal` 檢查響應字符串（`res.text`）是否爲 `"hello John"`。

同時，請注意測試的回調函數中的 `done` 參數。 在測試結束時，調用它且不帶參數，是發出異步操作完成所必需的信號。

# --instructions--

在 `tests/2_functional-tests.js` 中，修改 `'Test GET /hello with no name'` 測試（`// #1`），對響應的 `status` 和 `text` 使用斷言來通過測試。 不要改變傳遞給斷言的參數。

不應該有任何 URL 查詢。 如果沒有名稱 URL 查詢，端點將使用 `hello Guest` 進行響應。

# --hints--

應通過所有測試。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
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
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
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

應該測試 `res.text` == `'hello Guest'`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'equal');
      assert.equal(data.assertions[1].args[0], 'res.text');
      assert.match(data.assertions[1].args[1], /('|")hello Guest\1/);
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
