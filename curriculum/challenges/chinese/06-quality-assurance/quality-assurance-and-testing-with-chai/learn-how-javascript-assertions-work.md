---
id: 587d824a367417b2b2512c46
title: 了解 JavaScript 断言的工作原理
challengeType: 2
forumTopicId: 301589
dashedName: learn-how-javascript-assertions-work
---

# --description--

你可以采用下面的任意一种方式完成这些挑战：

- 克隆[这个 GitHub 仓库](https://github.com/freeCodeCamp/boilerplate-mochachai/)并在本地完成项目。
- 使用[我们在 Repl.it 上的初始化项目](https://repl.it/github/freeCodeCamp/boilerplate-mochachai)来完成这些挑战。
- 使用一个你喜欢的站点生成器来完成项目。 需要确定包含了我们 GitHub 仓库的所有文件。

完成本项目后，请将一个正常运行的 demo（项目演示）托管在可以公开访问的平台。 然后在 `Solution Link` 框中提交你的项目 URL。

# --instructions--

在 `tests/1_unit-tests.js` 文件下 `Basic Assertions` suite 内注释为 `#1` 的地方，将每一个 `assert` 更改为 `assert.isNull` 或 `assert.isNotNull` 以使测试通过（应该返回 `true`）。 不要改变传入断言的参数。

# --hints--

所有测试都应该通过。

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

请为第一个断言选择正确的方法— `isNull` 或 `isNotNull`。

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

请为第二个断言选择正确的方法— `isNull` 或 `isNotNull`。

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
