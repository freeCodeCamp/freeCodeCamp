---
id: 587d824a367417b2b2512c46
title: 瞭解 JavaScript 斷言的工作原理
challengeType: 2
forumTopicId: 301589
dashedName: learn-how-javascript-assertions-work
---

# --description--

你可以採用下面的任意一種方式完成這些挑戰：

- 克隆[這個 GitHub 倉庫](https://github.com/freeCodeCamp/boilerplate-mochachai/)並在本地完成項目。
- 使用[我們在 Repl.it 上的初始化項目](https://repl.it/github/freeCodeCamp/boilerplate-mochachai)來完成這些挑戰。
- 使用一個你喜歡的站點生成器來完成項目。 需要確定包含了我們 GitHub 倉庫的所有文件。

完成本項目後，請將一個正常運行的 demo（項目演示）託管在可以公開訪問的平臺。 然後在 `Solution Link` 框中提交你的項目 URL。

# --instructions--

在 `tests/1_unit-tests.js` 文件下 `Basic Assertions` suite 內註釋爲 `#1` 的地方，將每一個 `assert` 更改爲 `assert.isNull` 或 `assert.isNotNull` 以使測試通過（應該返回 `true`）。 不要改變傳入斷言的參數。

# --hints--

所有測試都應該通過。

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

請爲第一個斷言選擇正確的方法— `isNull` 或 `isNotNull`。

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

請爲第二個斷言選擇正確的方法— `isNull` 或 `isNotNull`。

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
