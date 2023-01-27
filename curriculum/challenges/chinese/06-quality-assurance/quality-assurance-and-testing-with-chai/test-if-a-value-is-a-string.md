---
id: 587d824d367417b2b2512c52
title: 测试某个值是否为字符串
challengeType: 2
forumTopicId: 301599
dashedName: test-if-a-value-is-a-string
---

# --description--

请注意，本项目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化项目的基础上进行开发，你也可以从 <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

`isString` 或 `isNotString` 断言一个值是否为字符串。

# --instructions--

在 `tests/1_unit-tests.js` 中，`Strings` 套件里标有 `#13` 的测试下，将每个 `assert` 改成 `assert.isString` 或 `assert.isNotString` 方法，通过测试（结果应该返回 `true`）。 不要修改传给断言的参数。

# --hints--

应通过所有测试。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该为第一个断言选择正确的方法：`isString` 或 `isNotString`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'isNotString',
        'A float number is not a string'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该为第二个断言选择正确的方法：`isString` 或 `isNotString`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isString',
        'environment vars are strings (or undefined)'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该为第三个断言选择正确的方法：`isString` 或 `isNotString`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=12').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'isString', 'A JSON is a string');
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
