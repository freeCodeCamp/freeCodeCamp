---
id: 587d824e367417b2b2512c58
title: 使用 Chai-HTTP 在 API 端上運行功能測試
challengeType: 2
forumTopicId: 301593
dashedName: run-functional-tests-on-api-endpoints-using-chai-http
---

# --description--

請注意，本項目在[這個 Repl.it 項目](https://repl.it/github/freeCodeCamp/boilerplate-mochachai)的基礎上進行開發。你也可以從 [GitHub](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 上克隆。

Mocha 允許測試異步操作。 有一個差異， 你能發現它嗎？

我們可以使用一個叫作 `chai-http` 的插件測試 API 端點。 讓我們看看它是如何工作的。 請記住，API 調用是異步的。

以下是使用 `chai-http` 測試 `'GET /hello?name=[name] => "hello [name]"'` 套件的例子。 測試通過 `GET` 請求在 url 查詢字符串 `?name=John` 中發送一個名稱字符串給 `server`。 在 `end` 方法的回調函數中，接收包含 `status` 屬性的響應對象（`res`）。 第一個 `assert.equal` 檢查狀態是否爲 `200`。 第二個 `assert.equal` 檢查響應字符串 `res.text` 是否爲 `"hello John"`。

```js
suite('GET /hello?name=[name] => "hello [name]"', function () {
  test("?name=John", function (done) {
    chai
      .request(server)
      .get("/hello?name=John")
      .end(function (err, res) {
        assert.equal(res.status, 200, "response status should be 200");
        assert.equal(
          res.text,
          "hello John",
          'response should be "hello John"'
        );
        done();
      });
  });
```

請注意測試的回調函數中的 `done` 參數。 在沒有傳入參數的情況下調用它，是成功完成異步任務所必需的。

# --instructions--

在 `tests/2_functional-tests.js` 中，修改 `'Test GET /hello with no name'` 測試（`// #1`），對 `status` 和 `text` 使用斷言。 不要修改傳給斷言的參數。

不要在 query 中傳入 name，端點將會返回 `hello Guest`。

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

應測試 “res.status” 是否爲 200。

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

應測試 “res.text“ 是否爲 ”hello Guest“。

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
