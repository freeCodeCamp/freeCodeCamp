---
id: 587d824f367417b2b2512c5a
title: 使用 Chai-HTTP III 的 PUT 方法对 API 请求运行功能测试
challengeType: 2
forumTopicId: 301590
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iii---put-method
---

# --description--

请注意，本项目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化项目的基础上进行开发，你也可以从 <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

当你测试一个 `PUT` 请求时，你经常会随同它一起发送数据。 你在 `PUT` 请求中包含的数据被称为请求的主体。

要将 `PUT` 请求和 JSON 对象发送到 `'/travellers'` 端点，你可以使用 `chai-http` 插件的 `put` 和 `send` 方法：

```js
chai
  .request(server)
  .put('/travellers')
  .send({
    "surname": [last name of a traveller of the past]
  })
  ...
```

并且路由响应如下：

```json
{
  "name": [first name],
  "surname": [last name],
  "dates": [birth - death years]
}
```

请参阅服务器代码以了解对 `'/travellers'` 端点的不同响应。

# --instructions--

在 `tests/2_functional-tests.js` 中，更改 `'Send {surname: "Colombo"}'` 测试（`// #3`），并使用 `put` 和 `send` 方法来测试 `'/travellers'` 端点。

在你的 PUT 请求中发送以下 JSON 对象。

```json
{
  "surname": "Colombo"
}
```

在 `request.end` 的返回中检查以下情况：

1.  `status` 应该是 `200`
2.  `type` 应该是 `application/json`
3.  `body.name` 应该是 `Cristoforo`
4.  `body.surname` 应该是 `Colombo`

请按照以上顺序书写断言，顺序错误会影响系统判定。 此外，请确保在完成后删除 `assert.fail()`。

# --hints--

应通过所有测试。

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

应该测试 `res.status` 为 200。

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

应该测试 `res.type` 是否为 `'application/json'`。

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

你应该测试 `res.body.name` 是否为 `'Cristoforo'`。

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

你应该测试 `res.body.surname` 是否为 `'Colombo'`。

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
