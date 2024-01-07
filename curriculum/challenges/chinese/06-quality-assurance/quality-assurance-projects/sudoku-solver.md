---
id: 5e601bf95ac9d0ecd8b94afd
title: 数独求解器
challengeType: 4
forumTopicId: 462357
dashedName: sudoku-solver
---

# --description--

构建一个 JavaScript 全栈应用，在功能上与 <a href="https://sudoku-solver.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://sudoku-solver.freecodecamp.rocks/</a> 类似。 可以采用下面的任意一种方式完成这个挑战：

-   克隆<a href="https://github.com/freecodecamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow">这个 GitHub 仓库</a>，并在本地完成你的项目。
-   使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 上的初始化项目</a>来完成你的项目。
-   使用一个你喜欢的站点生成器来完成项目。 需要确定包含了我们 GitHub 仓库的所有文件。

如果你使用 Replit，请按照以下步骤设置项目：

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。

当你完成后，请将一个确保正常运行的 demo（项目演示）托管在可以公开访问的平台上。 然后将 demo 的 URL 提交到 Solution Link 字段中。 也可以将项目的源码链接提交到 GitHub Link 字段中。

# --instructions--

- 所有解谜逻辑都可以进入 `/controllers/sudoku-solver.js`
  - `validate` 函数应该使用给定的解谜字符串，然后检查它是否是 81 个有效的输入字符。
  - `check` 函数应对棋盘的 *current* 进行验证。
  - `solve` 函数应该处理任何给定的解谜字符串，而不仅仅是测试输入和解决方法。 你需要写出解决这个问题的逻辑。
- 所有路由逻辑都可以进入 `/routes/api.js`
- 阅读 `/controllers` 中的 `puzzle-strings.js` 文件来了解一些应用程序应该解决的示例谜题
- 在 `.env` 文件中将 `NODE_ENV` 设置为 `test` （没有引号），运行这个页面的挑战测试。
- 使用 `npm run test` 命令在 console 中运行测试。 按 Ctrl+Shift+P（在 Mac 上是 Cmd+Shift+P），并输入 “open shell”，打开 Replit 控制台

在 `tests/1_unit-tests.js` 中写下以下测试：

-   逻辑处理 81 个字符的解谜字符串
-   逻辑处理无效的解谜字符串（不是 1-9 或 `.`）
-   逻辑处理一个长度不是 81 个字符的解谜字符串
-   逻辑处理有效行的位置
-   逻辑处理无效行的位置
-   逻辑处理有效列的位置
-   逻辑处理无效列的位置
-   逻辑处理一个有效的区域（3x3 网格）
-   逻辑处理一个无效的区域（3x3 网格）
-   有效解谜字符串通过 solver
-   无效解谜字符串无法通过 solver
-   Solver 返回一个不完整谜题的的预期解决方案

在 `tests/2_functional-tests.js` 中编写下以下测试：

-   用有效的解谜字符串解决一个谜题：POST 请求到 `/api/solve`
-   用缺失的解谜字符串解决一个谜题：POST 请求到 `/api/solve`
-   用无效字符解决一个谜题：POST 请求到 `/api/solve`
-   用不正确的长度解决一个谜题：POST 请求到 `/api/solve`
-   解决一个无法解决的谜题：POST 请求到 `/api/solve`
-   检查所有字段的解谜位置：POST 请求到 `/api/check`
-   用单个位置冲突检查解谜位置：POST 请求到 `/api/check`
-   检查一个有多个位置冲突的解谜位置：POST 请求到 `/api/check`
-   检查与所有位置冲突的解谜位置：POST 请求到 `/api/check`
-   检查缺失所需字段的解谜位置：POST 请求到 `/api/check`
-   检查一个有无效字符的解谜位置：POST 请求到 `/api/check`
-   检查不正确长度的解谜位置：POST 请求到 `/api/check`
-   检查一个无效的放置坐标的解谜位置：POST 请求到 `/api/check`
-   检查具有无效的放置值的解谜位置：POST 请求到 `/api/check`

# --hints--

你应该提交自己的项目，而不是示例的 URL。

```js
(getUserInput) => {
  const url = getUserInput('url');
  assert(!/.*\/sudoku-solver\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

你可以发送 `POST` 请求到 `/api/solve`，使用包含 `puzzle` 的表单数据，这将是一个包含数字（1-9）和点号的字符串组合，`.` 表示空格。 返回的对象将包含一个 `solution` 属性与解决的谜题。

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output =
    '769235418851496372432178956174569283395842761628713549283657194516924837947381625';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'solution');
  assert.equal(parsed.solution, output);
};
```

如果提交给 `/api/solve` 的对象缺失 `puzzle`，返回的值将是 `{ error: 'Required field missing' }`。

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Required field missing';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ notpuzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

如果提交给 `/api/solve` 谜题包含非数字或点号的值，返回的值将是 `{ error: 'Invalid characters in puzzle' }`。

```js
async (getUserInput) => {
  const input =
    'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid characters in puzzle';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

如果提交给 `/api/solve` 的谜题大于或小于 81 个字符，返回的值将是 `{ error: 'Expected puzzle to be 81 characters long' }`。

```js
async (getUserInput) => {
  const inputs = [
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.',
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6...'
  ];
  const output = 'Expected puzzle to be 81 characters long';
  for (const input of inputs) {
    const data = await fetch(getUserInput('url') + '/api/solve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

如果提交给 `/api/solve` 的谜题无效或无法解决，返回的值将是 `{ error: 'Puzzle cannot be solved' }`。

```js
async (getUserInput) => {
  const input =
    '9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Puzzle cannot be solved';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

你可以发送 `POST` 请求到 `/api/check`，包含 `puzzle`、`coordinate` 和 `value` 的对象，其中 `coordinate` 是表示行的字母 A-I，后跟表示列的数字 1-9，而 `value` 是 1-9 的数字。

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '7';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isTrue(parsed.valid);
};
```

发送 `POST` 请求到 `/api/check`，返回值是一个包含 `valid` 属性的对象，如果数字可能放置在提供的坐标中则是 `true`，否则是 `false`。 如果错误，返回的对象还将包含一个 `conflict` 属性，它是一个字符串 `"row"`、`"column"`，和/或 取决于哪个区域使位置无效的 `"region"` 。

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '1';
  const conflict = ['row', 'column'];
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isFalse(parsed.valid);
  assert.property(parsed, 'conflict');
  assert.include(parsed.conflict, 'row');
  assert.include(parsed.conflict, 'column');
};
```

如果提交给 `/api/check` 的 `value` 已放置在该 `coordinate` 上的 `puzzle`中，如果 `value` 不冲突，则返回的是 `valid` 属性为 `true` 的对象。

```js
async (getUserInput) => {
  const input =
  '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'C3';
  const value = '2';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isTrue(parsed.valid);
};
```

如果提交给 `/api/check` 的谜题包含非数字或点号的值，返回的值将是 `{ error: 'Invalid characters in puzzle' }`。

```js
async (getUserInput) => {
  const input =
    'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '1';
  const output = 'Invalid characters in puzzle';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

如果提交给 `/api/check` 的谜题大于或小于 81 个字符，返回的值将是 `{ error: 'Expected puzzle to be 81 characters long' }`。

```js
async (getUserInput) => {
  const inputs = [
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.',
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6...'
  ];
  const coordinate = 'A1';
  const value = '1';
  const output = 'Expected puzzle to be 81 characters long';
  for (const input of inputs) {
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

如果提交给 `/api/check` 的对象缺失 `puzzle`、`coordinate` 或 `value`，那么返回的值将是 `{ error: 'Required field(s) missing' }`。

```js
async (getUserInput) => {
  const inputs = [
    {
      puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
      value: '1',
    },
    {
      puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
      coordinate: 'A1',
    },
    {
      coordinate: 'A1',
      value: '1'
    }
  ];
  for (const input of inputs) {
    const output = 'Required field(s) missing';
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input)
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

如果提交给 `api/check` 的坐标不指向现有的网格单元格，返回的值将是 `{ error: 'Invalid coordinate'}`。

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid coordinate';
  const coordinates = ['A0', 'A10', 'J1', 'A', '1', 'XZ18'];
  const value = '7';
  for (const coordinate of coordinates) {
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

如果提交给 `/api/check` 的 `value` 不是一个介于 1 到 9 之间的数字，则返回的值将是 `{ error: 'Invalid value' }`。

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid value';
  const coordinate = 'A1';
  const values = ['0', '10', 'A'];
  for (const value of values) {
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

所有 12 项单元测试都已完成并通过。

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter((test) => {
      return !!test.context.match(/Unit\s*Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 12, 'At least 12 tests passed');
    unitTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

所有 14 项功能测试都已完成并通过。

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter((test) => {
      return !!test.context.match(/Functional\s*Tests/gi);
    });
    assert.isAtLeast(functTests.length, 14, 'At least 14 tests passed');
    functTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
