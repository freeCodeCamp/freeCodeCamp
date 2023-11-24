---
id: 587d824b367417b2b2512c47
title: 测试变量或函数是否已定义
challengeType: 2
forumTopicId: 301602
dashedName: test-if-a-variable-or-function-is-defined
---

# --description--

请注意，本项目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化项目的基础上进行开发，你也可以从 <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#2` in the `Basic Assertions` suite, change each `assert` to either `assert.isDefined()` or `assert.isUndefined()` to make the test pass (should evaluate to `true`). 不要修改传给断言的参数。

# --hints--

应通过所有测试。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该为第一个断言选择正确的方法：`isDefined` 或 `isUndefined`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'isDefined',
        'Null is not undefined'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该为第二个断言选择正确的方法：`isDefined` 或 `isUndefined`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isUndefined',
        'Undefined is undefined'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该为第三个断言选择正确的方法：`isDefined` 或 `isUndefined`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'isDefined',
        'A string is not undefined'
      );
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
