---
id: 587d824d367417b2b2512c54
title: 使用正則表達式測試字符串
challengeType: 2
forumTopicId: 301608
dashedName: use-regular-expressions-to-test-a-string
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

`match()` 斷言一個值匹配一個正則表達式（第二個參數）。

# --instructions--

在 `tests/1_unit-tests.js` 中，`Strings` 套件裏標有 `#15` 的測試下，將每個 `assert` 改成 `assert.match` 或 `assert.notMatch` 方法，通過測試（結果應該返回 `true`）。 不要修改傳給斷言的參數。

# --hints--

應通過所有測試。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=14').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

應該爲第一個斷言選擇正確的方法：`match` 或 `notMatch`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=14').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'match',
        "'# name:John Doe, age:35' matches the regex"
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

應該爲第二個斷言選擇正確的方法：`match` 或 `notMatch`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=14').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'notMatch',
        "'# name:Paul Smith III, age:twenty-four' does not match the regex (the age must be numeric)"
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
