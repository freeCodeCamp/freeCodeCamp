---
id: 587d824c367417b2b2512c4e
title: 測試一個值是否小於或等於另一個值
challengeType: 2
forumTopicId: 301606
dashedName: test-if-one-value-is-below-or-at-least-as-large-as-another
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

# --instructions--

在 `tests/1_unit-tests.js` 中，在 `Comparisons` 套件裏標有 `#9` 的測試中，將每個 `assert` 改成 `assert.isBelow` 或 `assert.isAtLeast` 方法，讓測試通過（結果應該返回 `true`）。 不要修改傳給斷言的參數。

# --hints--

應通過所有測試。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

應該爲第一個斷言選擇正確的方法：`isBelow` 或 `isAtLeast`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'isAtLeast',
        '5 is at least (>=) 5'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

應該爲第二個斷言選擇正確的方法：`isBelow` 或 `isAtLeast`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isAtLeast',
        '2 * Math.random() is at least 0'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

應該爲第三個斷言選擇正確的方法：`isBelow` 或 `isAtLeast`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'isBelow', '1 is smaller than 2');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

應該爲第四個斷言選擇正確的方法：`isBelow` 或 `isAtLeast`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'isBelow',
        '2/3 (0.6666) is smaller than 1'
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
