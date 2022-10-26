---
id: 587d824e367417b2b2512c58
title: 使用 Chai-HTTP 在 API 端上运行功能测试
challengeType: 2
forumTopicId: 301593
dashedName: run-functional-tests-on-api-endpoints-using-chai-http
---

# --description--

请注意，本项目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化项目的基础上进行开发，你也可以从 <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

Mocha 允许你使用名为 `chai-http` 的插件测试异步操作，例如调用 API 端点。

以下是使用 `chai-http` 测试名为 `'GET /hello?name=[name] => "hello [name]"'` 的套件的示例：

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

该测试向服务器发送一个 `GET` 请求，并将名称作为 URL 查询字符串（`?name=John`）。 在`end` 方法的回调函数中，接收到响应对象（`res`）并包含 `status` 属性。

第一个 `assert.equal` 检查状态是否为 `200`。 第二个 `assert.equal` 检查响应字符串（`res.text`）是否为 `"hello John"`。

同时，请注意测试的回调函数中的 `done` 参数。 在测试结束时，调用它且不带参数，是发出异步操作完成所必需的信号。

# --instructions--

在 `tests/2_functional-tests.js` 中，修改 `'Test GET /hello with no name'` 测试（`// #1`），对响应的 `status` 和 `text` 使用断言来通过测试。 不要改变传递给断言的参数。

不应该有任何 URL 查询。 如果没有名称 URL 查询，端点将使用 `hello Guest` 进行响应。

# --hints--

应通过所有测试。

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

应该测试 `res.status` 为 200。

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

应该测试 `res.text` == `'hello Guest'`。

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
