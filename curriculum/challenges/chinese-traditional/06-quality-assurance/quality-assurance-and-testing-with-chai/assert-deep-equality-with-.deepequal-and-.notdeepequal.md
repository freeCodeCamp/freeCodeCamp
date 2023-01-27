---
id: 587d824c367417b2b2512c4c
title: 用 Assert.deepEqual() 和 Assert.notDeepEqual() 斷言深度相等
challengeType: 2
forumTopicId: 301587
dashedName: assert-deep-equality-with--deepequal-and--notdeepequal
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

`deepEqual()` 斷言兩個對象是否深度相等。

# --instructions--

在 `tests/1_unit-tests.js` 中，在標有 `#7` 的 `Equality` 套件裏，將每個 `assert` 替換成 `assert.deepEqual` 或 `assert.notDeepEqual`，讓測試通過（應該返回 `true`）。 不要改變傳入斷言的參數。

# --hints--

不應有未通過的測試

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

請爲第一個斷言選擇正確的方法 — `deepEqual` 或 `notDeepEqual`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'deepEqual',
        'The order of the keys does not matter'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

請爲第二個斷言選擇正確的方法 — `deepEqual` 或 `notDeepEqual`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'notDeepEqual',
        'The position of elements within an array does matter'
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
