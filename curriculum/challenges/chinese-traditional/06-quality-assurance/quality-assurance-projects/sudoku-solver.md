---
id: 5e601bf95ac9d0ecd8b94afd
title: 數獨求解器
challengeType: 4
forumTopicId: 462357
dashedName: sudoku-solver
---

# --description--

構建一個 JavaScript 全棧應用，在功能上與 <a href="https://sudoku-solver.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://sudoku-solver.freecodecamp.rocks/</a> 類似。 可以採用下面的任意一種方式完成這個挑戰：

-   克隆<a href="https://github.com/freecodecamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成你的項目。
-   使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 上的初始化項目</a>來完成你的項目。
-   使用一個你喜歡的站點生成器來完成項目。 需要確定包含了我們 GitHub 倉庫的所有文件。

如果你使用 Replit，請按照以下步驟設置項目：

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。

當你完成後，請將一個確保正常運行的 demo（項目演示）託管在可以公開訪問的平臺上。 然後將 demo 的 URL 提交到 Solution Link 字段中。 也可以將項目的源碼鏈接提交到 GitHub Link 字段中。

# --instructions--

- 所有解謎邏輯都可以進入 `/controllers/sudoku-solver.js`
  - `validate` 函數應該使用給定的解謎字符串，然後檢查它是否是 81 個有效的輸入字符。
  - `check` 函數應對棋盤的 *current* 進行驗證。
  - `solve` 函數應該處理任何給定的解謎字符串，而不僅僅是測試輸入和解決方法。 你需要寫出解決這個問題的邏輯。
- 所有路由邏輯都可以進入 `/routes/api.js`
- 閱讀 `/controllers` 中的 `puzzle-strings.js` 文件來了解一些應用程序應該解決的示例謎題
- 在 `.env` 文件中將 `NODE_ENV` 設置爲 `test` （沒有引號），運行這個頁面的挑戰測試。
- 使用 `npm run test` 命令在 console 中運行測試。 按 Ctrl+Shift+P（在 Mac 上是 Cmd+Shift+P），並輸入 “open shell”，打開 Replit 控制檯

在 `tests/1_unit-tests.js` 中寫下以下測試：

-   邏輯處理 81 個字符的解謎字符串
-   邏輯處理無效的解謎字符串（不是 1-9 或 `.`）
-   邏輯處理一個長度不是 81 個字符的解謎字符串
-   邏輯處理有效行的位置
-   邏輯處理無效行的位置
-   邏輯處理有效列的位置
-   邏輯處理無效列的位置
-   邏輯處理一個有效的區域（3x3 網格）
-   邏輯處理一個無效的區域（3x3 網格）
-   有效解謎字符串通過 solver
-   無效解謎字符串無法通過 solver
-   Solver 返回一個不完整謎題的的預期解決方案

在 `tests/2_functional-tests.js` 中編寫下以下測試：

-   用有效的解謎字符串解決一個謎題：POST 請求到 `/api/solve`
-   用缺失的解謎字符串解決一個謎題：POST 請求到 `/api/solve`
-   用無效字符解決一個謎題：POST 請求到 `/api/solve`
-   用不正確的長度解決一個謎題：POST 請求到 `/api/solve`
-   解決一個無法解決的謎題：POST 請求到 `/api/solve`
-   檢查所有字段的解謎位置：POST 請求到 `/api/check`
-   用單個位置衝突檢查解謎位置：POST 請求到 `/api/check`
-   檢查一個有多個位置衝突的解謎位置：POST 請求到 `/api/check`
-   檢查與所有位置衝突的解謎位置：POST 請求到 `/api/check`
-   檢查缺失所需字段的解謎位置：POST 請求到 `/api/check`
-   檢查一個有無效字符的解謎位置：POST 請求到 `/api/check`
-   檢查不正確長度的解謎位置：POST 請求到 `/api/check`
-   檢查一個無效的放置座標的解謎位置：POST 請求到 `/api/check`
-   檢查具有無效的放置值的解謎位置：POST 請求到 `/api/check`

# --hints--

你應該提交自己的項目，而不是示例的 URL。

```js
(getUserInput) => {
  const url = getUserInput('url');
  assert(!/.*\/sudoku-solver\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

你可以發送 `POST` 請求到 `/api/solve`，使用包含 `puzzle` 的表單數據，這將是一個包含數字（1-9）和點號的字符串組合，`.` 表示空格。 返回的對象將包含一個 `solution` 屬性與解決的謎題。

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

如果提交給 `/api/solve` 的對象缺失 `puzzle`，返回的值將是 `{ error: 'Required field missing' }`。

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

如果提交給 `/api/solve` 謎題包含非數字或點號的值，返回的值將是 `{ error: 'Invalid characters in puzzle' }`。

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

如果提交給 `/api/solve` 的謎題大於或小於 81 個字符，返回的值將是 `{ error: 'Expected puzzle to be 81 characters long' }`。

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

如果提交給 `/api/solve` 的謎題無效或無法解決，返回的值將是 `{ error: 'Puzzle cannot be solved' }`。

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

你可以發送 `POST` 請求到 `/api/check`，包含 `puzzle`、`coordinate` 和 `value` 的對象，其中 `coordinate` 是表示行的字母 A-I，後跟表示列的數字 1-9，而 `value` 是 1-9 的數字。

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

發送 `POST` 請求到 `/api/check`，返回值是一個包含 `valid` 屬性的對象，如果數字可能放置在提供的座標中則是 `true`，否則是 `false`。 如果錯誤，返回的對象還將包含一個 `conflict` 屬性，它是一個字符串 `"row"`、`"column"`，和/或 取決於哪個區域使位置無效的 `"region"` 。

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

如果提交給 `/api/check` 的 `value` 已放置在該 `coordinate` 上的 `puzzle`中，如果 `value` 不衝突，則返回的是 `valid` 屬性爲 `true` 的對象。

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

如果提交給 `/api/check` 的謎題包含非數字或點號的值，返回的值將是 `{ error: 'Invalid characters in puzzle' }`。

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

如果提交給 `/api/check` 的謎題大於或小於 81 個字符，返回的值將是 `{ error: 'Expected puzzle to be 81 characters long' }`。

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

如果提交給 `/api/check` 的對象缺失 `puzzle`、`coordinate` 或 `value`，那麼返回的值將是 `{ error: 'Required field(s) missing' }`。

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

如果提交給 `api/check` 的座標不指向現有的網格單元格，返回的值將是 `{ error: 'Invalid coordinate'}`。

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

如果提交給 `/api/check` 的 `value` 不是一個介於 1 到 9 之間的數字，則返回的值將是 `{ error: 'Invalid value' }`。

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

所有 12 項單元測試都已完成並通過。

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

所有 14 項功能測試都已完成並通過。

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
