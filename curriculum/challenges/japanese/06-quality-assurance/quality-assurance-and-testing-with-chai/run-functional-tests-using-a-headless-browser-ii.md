---
id: 5f8884f4c46685731aabfc41
title: ヘッドレスブラウザーを使用して機能テストを実行するⅡ
challengeType: 2
forumTopicId: 301594
dashedName: run-functional-tests-using-a-headless-browser-ii
---

# --description--

注意点として、このプロジェクトは <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> にあるスタータープロジェクトをベースに構築されているか、または <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> からクローンされています。

# --instructions--

`tests/2_functional-tests.js` 内の `'Submit the surname "Vespucci" in the HTML form'` テスト (`// #6`) で、以下を自動化してください。

1.  フォームに姓 `Vespucci` を入力します。
2.  送信ボタンを押します。

`pressButton` コールバック内で以下を実行してください。

1.  ステータスが OK `200` であることをアサートします。
2.  要素 `span#name` 内のテキストが `'Amerigo'` であることをアサートします。
3.  要素 `span#surname` 内のテキストが `'Vespucci'` であることをアサートします。
4.  要素 `span#dates` が存在し、そのカウントが `1` であることをアサートします。

`assert.fail()` 呼び出しを削除することを忘れないでください。

# --hints--

すべてのテストが成功する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=6').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ヘッドレスブラウザーのリクエストが成功したことをアサートする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=6').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'browser.success');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

要素 `span#name` 内のテキストが `'Amerigo'` であることをアサートする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=6').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'browser.text');
      assert.match(data.assertions[1].args[0], /('|")span#name\1/);
      assert.match(data.assertions[1].args[1], /('|")Amerigo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

要素 `span#surname` 内のテキストが `'Vespucci'` であることをアサートする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=6').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'browser.text');
      assert.match(data.assertions[2].args[0], /('|")span#surname\1/);
      assert.match(data.assertions[2].args[1], /('|")Vespucci\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

要素 `span#dates` が存在し、そのカウントが 1 であることをアサートする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=6').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'browser.elements');
      assert.match(data.assertions[3].args[0], /('|")span#dates\1/);
      assert.equal(data.assertions[3].args[1], 1);
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
