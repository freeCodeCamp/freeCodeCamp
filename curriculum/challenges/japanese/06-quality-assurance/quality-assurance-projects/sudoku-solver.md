---
id: 5e601bf95ac9d0ecd8b94afd
title: 数独ソルバー
challengeType: 4
forumTopicId: 462357
dashedName: sudoku-solver
---

# --description--

<a href="https://sudoku-solver.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://sudoku-solver.freecodecamp.rocks/</a> と同じような機能を持つ、フルスタック JavaScript アプリを構築してください。 プロジェクトに取り組むにあたり、以下の方法のうち 1 つを用いてコードを記述します。

-   <a href="https://github.com/freecodecamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow">GitHub リポジトリ</a>をクローンし、ローカル環境でチャレンジを完了させる。
-   <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow">Replit スタータープロジェクト</a>を使用して、プロジェクトを完了させる。
-   使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

Replit を使用する場合は、下記の手順でプロジェクトをセットアップしてください。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。

完了したら、プロジェクトの動作デモをどこか公開の場にホストしてください。 そして「回答のリンク」欄に、デモの URL を提出してください。 必要に応じて、プロジェクトのソースコードへのリンクも「GitHub のリンク」欄に提出してください。

# --instructions--

- すべてのパズルロジックを `/controllers/sudoku-solver.js` に記述してください。
  - `validate` 関数は、与えられたパズル文字列を受け取り、入力に 81 の有効な文字があるか確認する必要があります。
  - 一連の `check` 関数は、ボードの*現在の*状態を確認する必要があります。
  - `solve` 関数は、テスト入力と解答だけでなく、与えられた任意の有効なパズル文字列を解く処理を行う必要があります。 パズルを解くためのロジックを記述することが求められます。
- すべてのルーティングロジックを `/routes/api.js` に記述してください。
- アプリで解くべきパズルのサンプルについては、`/controllers` の `puzzle-strings.js` ファイルを参照してください。
- このページのテストを実行するには、`.env` ファイル内で `NODE_ENV` を `test` (引用符は付けない) に設定してください。
- コンソールでテストを実行するには、コマンド `npm run test` を使用してください。 Replit コンソールを開くには、Ctrl+Shift+P (Macの場合はCmd) を押して「open shell」と入力してください。

`tests/1_unit-tests.js` に以下のテストを記述してください。

-   ロジックが、81 文字の有効なパズル文字列を処理する場合
-   ロジックが、(1～9 でも `.` でもない) 無効な文字が含まれているパズル文字列を処理する場合
-   ロジックが、長さが 81 文字ではないパズル文字列を処理する場合
-   ロジックが、有効な行の配置を処理する場合
-   ロジックが、無効な行の配置を処理する場合
-   ロジックが、有効な列の配置を処理する場合
-   ロジックが、無効な列の配置を処理する場合
-   ロジックが、有効な領域 (3x3 グリッド) の配置を処理する場合
-   ロジックが、無効な領域 (3x3 グリッド) の配置を処理する場合
-   有効なパズルの文字列が、ソルバーをパスすること
-   無効なパズル文字列が、ソルバーをパスしないこと
-   不完全なパズルの場合に、ソルバーが期待される解答を返すこと

`tests/2_functional-tests.js` に以下のテストを記述してください。

-   有効なパズル文字列のパズルを解く: `/api/solve` への POST リクエスト
-   パズル文字列が不足している状態でパズルを解く: `/api/solve` への POST リクエスト
-   無効な文字があるパズルを解く: `/api/solve` への POST リクエスト
-   誤った長さのパズルを解く: `/api/solve` への POST リクエスト
-   解くことができないパズルを解く: `/api/solve` への POST リクエスト
-   すべてのフィールドがある状態でパズル配置をチェックする: `/api/check` への POST リクエスト
-   1 種類の配置の競合が発生しているパズル配置をチェックする: `/api/check` への POST リクエスト
-   複数種類の配置の競合が発生しているパズル配置をチェックする: `/api/check` への POST リクエスト
-   全種類の配置の競合が発生しているパズル配置をチェックする: `/api/check` への POST リクエスト
-   必須フィールドがない状態でパズル配置をチェックする: `/api/check`への POST リクエスト
-   無効な文字がある状態でパズル配置をチェックする: `/api/check` への POST リクエスト
-   長さに誤りがある状態でパズル配置をチェックする: `/api/check` への POST リクエスト
-   無効な配置座標を使用してパズル配置をチェックする: `/api/check` への POST リクエスト
-   無効な配置の値を使用してパズル配置をチェックする: `/api/check` への POST リクエスト

# --hints--

サンプルの URL ではなく、自分で作成したプロジェクトを提出する必要があります。

```js
(getUserInput) => {
  const url = getUserInput('url');
  assert(!/.*\/sudoku-solver\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

数字 (1～9) と空白を表すピリオド `.` の組み合わせを含む文字列である `puzzle` を含むフォームデータを使用して、`POST` `/api/solve` を実行することができます。 返されるオブジェクトには、パズルの解答を含む `solution` プロパティが含まれます。

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

`/api/solve` へ送信されたオブジェクトに `puzzle` がない場合、戻り値は `{ error: 'Required field missing' }` になります。

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

`/api/solve` へ送信されたパズルに数字でもピリオドでもない値が含まれている場合、戻り値は `{ error: 'Invalid characters in puzzle' }` になります。

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

`/api/solve` へ送信されたパズルの文字数が 81 文字より多いまたは少ない場合、戻り値は `{ error: 'Expected puzzle to be 81 characters long' }` になります。

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

`/api/solve` へ送信されたパズルが無効もしくは解けない場合、戻り値は `{ error: 'Puzzle cannot be solved' }` になります。

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

`puzzle`、`coordinate` および `value` を含むオブジェクトを `/api/check` に `POST` できます。`coordinate` は行を示す文字 A～I で、その後に列を示す 1～9 の数字が続きます。`value` は 1～9 の数字です。

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

`/api/check` への `POST` の戻り値は、`valid` プロパティを含むオブジェクトになります。このプロパティは、指定された座標に数字を配置できる場合は `true` になり、そうでない場合は `false` になります。 false の場合、返されるオブジェクトには `conflict` プロパティも含まれます。このプロパティは、文字列 `"row"`、`"column"`、`"region"` の任意の組み合わせを含む配列になります (どれが原因で配置が無効となっているかによって変わります)。

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

`/api/check` へ送信された `value` がすでに `puzzle` のその `coordinate` に配置されている場合、戻り値は `valid` プロパティを含むオブジェクトになり、このプロパティの値は `value` が競合していなければ `true` となります。

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

`/api/check` へ送信されたパズルに数字でもピリオドでもない値が含まれている場合、戻り値は `{ error: 'Invalid characters in puzzle' }` になります。

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

`/api/check` へ送信されたパズルが 81 文字より多いか少ない場合、戻り値は `{ error: 'Expected puzzle to be 81 characters long' }` になります。

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

`/api/check` へ送信されたオブジェクトに `puzzle`、`coordinate` もしくは `value` がない場合、戻り値は、`{ error: 'Required field(s) missing' }` になります。

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

`api/check` へ送信された座標が既存のグリッドセルを指し示していない場合、戻り値は `{ error: 'Invalid coordinate'}` になります。

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

`/api/check` へ送信された `value` が 1 から 9 の数字でない場合、戻り値は `{ error: 'Invalid value' }` になります。

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

12 件のユニットテストがすべて記述され、成功する状態になっています。

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

14 件の機能テストがすべて記述され、成功する状態になっています。

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
