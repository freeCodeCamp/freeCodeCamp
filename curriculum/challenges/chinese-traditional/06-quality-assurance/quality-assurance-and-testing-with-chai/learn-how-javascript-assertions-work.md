---
id: 587d824a367417b2b2512c46
title: 瞭解 JavaScript 斷言的工作原理
challengeType: 2
forumTopicId: 301589
dashedName: learn-how-javascript-assertions-work
---

# --description--

你可以採用下面的任意一種方式完成這些挑戰：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">這個 GitHub 倉庫</a>，並在本地完成這些挑戰。
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete these challenges.
- 使用一個你喜歡的站點生成器來完成項目。 需要確定包含了我們 GitHub 倉庫的所有文件。

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#1` in the `Basic Assertions` suite, change each `assert` to either `assert.isNull` or `assert.isNotNull` to make the test pass (should evaluate to `true`). 不要修改傳入斷言的參數。

# --hints--

應通過所有測試。

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

請爲第一個斷言選擇正確的方法——`isNull` 或 `isNotNull`。

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

請爲第二個斷言選擇正確的方法——`isNull` 或 `isNotNull`。

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
