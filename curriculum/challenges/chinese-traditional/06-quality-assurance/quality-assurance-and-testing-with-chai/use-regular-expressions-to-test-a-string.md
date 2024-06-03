---
id: 587d824d367417b2b2512c54
title: 使用正則表達式測試字符串
challengeType: 2
forumTopicId: 301608
dashedName: use-regular-expressions-to-test-a-string
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`match()` 斷言一個值匹配一個正則表達式（第二個參數）。

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#15` in the `Strings` suite, change each `assert` to either `assert.match` or `assert.notMatch` to make the test pass (should evaluate to `true`). 不要修改傳給斷言的參數。

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
