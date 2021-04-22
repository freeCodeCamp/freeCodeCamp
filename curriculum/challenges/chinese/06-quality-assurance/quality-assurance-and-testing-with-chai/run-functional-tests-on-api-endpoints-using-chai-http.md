---
id: 587d824e367417b2b2512c58
title: 使用 Chai-HTTP 在 API 端上运行功能测试
challengeType: 2
forumTopicId: 301593
dashedName: run-functional-tests-on-api-endpoints-using-chai-http
---

# --description--

请注意，本项目在[这个 Repl.it 项目](https://repl.it/github/freeCodeCamp/boilerplate-mochachai)的基础上进行开发。你也可以从 [GitHub](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 上克隆。

Mocha 允许测试异步操作。 有一个差异， 你能发现它吗？

我们可以使用一个叫作 `chai-http` 的插件测试 API 端点。 让我们看看它是如何工作的。 请记住，API 调用是异步的。

以下是使用 `chai-http` 测试 `'GET /hello?name=[name] => "hello [name]"'` 套件的例子。 测试通过 `GET` 请求在 url 查询字符串 `?name=John` 中发送一个名称字符串给 `server`。 在 `end` 方法的回调函数中，接收包含 `status` 属性的响应对象（`res`）。 第一个 `assert.equal` 检查状态是否为 `200`。 第二个 `assert.equal` 检查响应字符串 `res.text` 是否为 `"hello John"`。

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

请注意测试的回调函数中的 `done` 参数。 在没有传入参数的情况下调用它，是成功完成异步任务所必需的。

# --instructions--

在 `tests/2_functional-tests.js` 中，修改 `'Test GET /hello with no name'` 测试（`// #1`），对 `status` 和 `text` 使用断言。 不要修改传给断言的参数。

不要在 query 中传入 name，端点将会返回 `hello Guest`。

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

应测试 “res.status” 是否为 200。

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

应测试 “res.text“ 是否为 ”hello Guest“。

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
