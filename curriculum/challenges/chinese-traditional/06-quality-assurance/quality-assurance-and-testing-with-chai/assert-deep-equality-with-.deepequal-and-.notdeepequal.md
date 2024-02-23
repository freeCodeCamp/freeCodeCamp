---
id: 587d824c367417b2b2512c4c
title: 用 Assert.deepEqual() 和 Assert.notDeepEqual() 斷言深度相等
challengeType: 2
forumTopicId: 301587
dashedName: assert-deep-equality-with--deepequal-and--notdeepequal
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>  or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`deepEqual()` 斷言兩個對象是否深度相等。

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#7` in the `Equality` suite, change each `assert` to either `assert.deepEqual` or `assert.notDeepEqual` to make the test pass (should evaluate to `true`). 不要改變傳入斷言的參數。

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
