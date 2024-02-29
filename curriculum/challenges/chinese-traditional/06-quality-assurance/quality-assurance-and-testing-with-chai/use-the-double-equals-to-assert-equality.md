---
id: 587d824b367417b2b2512c4a
title: 用兩個等號斷言相等
challengeType: 2
forumTopicId: 301609
dashedName: use-the-double-equals-to-assert-equality
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`equal()` 使用 `==` 比較對象。

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#5` in the `Equality` suite, change each `assert` to either `assert.equal` or `assert.notEqual` to make the test pass (should evaluate to `true`). 不要修改傳給斷言的參數。

# --hints--

應通過所有測試。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

應該爲第一個斷言選擇正確的方法：`equal` 或 `notEqual`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'equal',
        'Numbers are coerced into strings with == '
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

應該爲第二個斷言選擇正確的方法：`equal` 或 `notEqual`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'notEqual',
        ' == compares object references'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

應該爲第三個斷言選擇正確的方法：`equal` 或 `notEqual`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'equal',
        "6 * '2' is 12 ! It should be equal to '12'"
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

應該爲第四個斷言選擇正確的方法：`equal` 或 `notEqual`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=4').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'notEqual', "6 + '2' is '62'...");
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
