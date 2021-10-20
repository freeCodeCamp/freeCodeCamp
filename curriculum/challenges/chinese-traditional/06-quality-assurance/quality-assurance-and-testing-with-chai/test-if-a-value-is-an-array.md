---
id: 587d824d367417b2b2512c50
title: 測試某個值是否爲數組
challengeType: 2
forumTopicId: 301600
dashedName: test-if-a-value-is-an-array
---

# --description--

請注意，本項目在[這個 Replit 項目](https://replit.com/github/freeCodeCamp/boilerplate-mochachai)的基礎上進行開發。你也可以從 [GitHub](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 上克隆。

# --instructions--

在 `tests/1_unit-tests.js` 中，`Arrays` 套件裏標有 `#11` 的測試下，將每個 `assert` 改成 `assert.isArray` 或 `assert.isNotArray` 方法，通過測試（結果應該返回 `true`）。 不要改變傳入斷言的參數。

# --hints--

不應有未通過的測試

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

請選擇正確的斷言——`isArray` 或 `isNotArray`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'isArray',
        'String.prototype.split() returns an Array'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

請選擇正確的斷言——`isArray` 或 `isNotArray`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isNotArray',
        'Array.prototype.indexOf() returns a number'
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
