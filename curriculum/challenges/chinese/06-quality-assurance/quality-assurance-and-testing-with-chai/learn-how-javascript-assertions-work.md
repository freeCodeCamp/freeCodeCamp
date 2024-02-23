---
id: 587d824a367417b2b2512c46
title: 了解 JavaScript 断言的工作原理
challengeType: 2
forumTopicId: 301589
dashedName: learn-how-javascript-assertions-work
---

# --description--

你可以采用下面的任意一种方式完成这些挑战：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">这个 GitHub 仓库</a>，并在本地完成这些挑战。
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete these challenges.
- 使用一个你喜欢的站点生成器来完成项目。 需要确定包含了我们 GitHub 仓库的所有文件。

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#1` in the `Basic Assertions` suite, change each `assert` to either `assert.isNull` or `assert.isNotNull` to make the test pass (should evaluate to `true`). 不要修改传入断言的参数。

# --hints--

应通过所有测试。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

请为第一个断言选择正确的方法——`isNull` 或 `isNotNull`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'isNull', 'Null is null');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

请为第二个断言选择正确的方法——`isNull` 或 `isNotNull`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'isNotNull', '1 is not null');
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
