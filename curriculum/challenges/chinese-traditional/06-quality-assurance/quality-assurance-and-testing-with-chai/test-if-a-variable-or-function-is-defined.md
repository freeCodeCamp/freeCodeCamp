---
id: 587d824b367417b2b2512c47
title: 測試變量或函數是否已定義
challengeType: 2
forumTopicId: 301602
dashedName: test-if-a-variable-or-function-is-defined
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

# --instructions--

在 `tests/1_unit-tests.js` 中，`Basic Assertions` 套件中標註爲 `#2` 的測試下，修改每個 `assert` 爲 `assert.isDefined()` 或 `assert.isUndefined()`，通過測試（結果應爲 `true`）。 不要修改傳給斷言的參數。

# --hints--

應通過所有測試。

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

應該爲第一個斷言選擇正確的方法：`isDefined` 或 `isUndefined`。

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

應該爲第二個斷言選擇正確的方法：`isDefined` 或 `isUndefined`。

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

應該爲第三個斷言選擇正確的方法：`isDefined` 或 `isUndefined`。

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
