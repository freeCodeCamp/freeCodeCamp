---
id: 587d824b367417b2b2512c49
title: 测试真实性
challengeType: 2
forumTopicId: 301596
dashedName: test-for-truthiness
---

# --description--

请注意，本项目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化项目的基础上进行开发，你也可以从 <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

`isTrue()` 仅当给出的值为 Boolean 的 `true` 时可以通过测试；`isNotTrue()` 则会在给出除 `true` 以外的值时通过测试。

```js
assert.isTrue(true, 'This will pass with the boolean value true');
assert.isTrue('true', 'This will NOT pass with the string value "true"');
assert.isTrue(1, 'This will NOT pass with the number value 1');
```

`isFalse()` 和 `isNotFalse()` 同样存在，与上面提到的两个方法类似，只不过它们针对值为 `false` 的布尔值。

# --instructions--

在 `tests/1_unit-tests.js` 中，`Basic Assertions` 套件中标注为 `#4` 的测试下，修改每个 `assert` 为 `assert.isTrue` 或 `assert.isNotTrue`，通过测试（结果应为 `true`）。 不要修改传入断言的参数。

# --hints--

应通过所有测试。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该为第一个断言选择正确的方法：`isTrue` 或 `isNotTrue`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'isTrue', 'True is true');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该为第二个断言选择正确的方法：`isTrue` 或 `isNotTrue`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isTrue',
        'Double negation of a truthy value is true'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该为第三个断言选择正确的方法：`isTrue` 或 `isNotTrue`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'isNotTrue',
        'A truthy object is not true - neither is a false one'
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
