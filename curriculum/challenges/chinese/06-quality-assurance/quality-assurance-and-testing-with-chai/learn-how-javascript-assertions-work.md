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
- 使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 上的初始化项目</a>来完成这些挑战。
- 使用一个你喜欢的站点生成器来完成项目。 需要确定包含了我们 GitHub 仓库的所有文件。

如果你使用 Replit，请按照以下步骤设置项目：

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。

当你完成后，请将一个确保正常运行的 demo（项目演示）托管在可以公开访问的平台上。 然后将 demo 的 URL 提交到 Solution Link 字段中。

# --instructions--

在 `tests/1_unit-tests.js` 文件下 `Basic Assertions` suite 内注释为 `#1` 的地方，将每一个 `assert` 更改为 `assert.isNull` 或 `assert.isNotNull`，以使测试通过（应该返回 `true`）。 不要修改传入断言的参数。

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
