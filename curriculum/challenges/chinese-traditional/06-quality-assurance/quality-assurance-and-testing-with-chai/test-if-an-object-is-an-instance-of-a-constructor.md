---
id: 587d824e367417b2b2512c57
title: 測試對象是否是構造函數的實例
challengeType: 2
forumTopicId: 301605
dashedName: test-if-an-object-is-an-instance-of-a-constructor
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`#instanceOf` 斷言一個對象是一個構造器的實例。

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#18` in the `Objects` suite, change each `assert` to either `assert.instanceOf` or `assert.notInstanceOf` to make the test pass (should evaluate to `true`). 不要修改傳給斷言的參數。

# --hints--

應通過所有測試。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

應該爲第一個斷言選擇正確的方法：`instanceOf` 或 `notInstanceOf`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'notInstanceOf',
        'myCar is not an instance of Plane'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

應該爲第二個斷言選擇正確的方法：`instanceOf` 或 `notInstanceOf`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'instanceOf',
        'airlinePlane is an instance of Plane'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

應該爲第三個斷言選擇正確的方法：`instanceOf` 或 `notInstanceOf`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'instanceOf',
        'everything is an Object in JavaScript...'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

應該爲第四個斷言選擇正確的方法：`instanceOf` 或 `notInstanceOf`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'notInstanceOf',
        'myCar.wheels is not an instance of String'
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
