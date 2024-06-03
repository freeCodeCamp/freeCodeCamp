---
id: 587d824b367417b2b2512c49
title: 真かどうかをテストする
challengeType: 2
forumTopicId: 301596
dashedName: test-for-truthiness
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`isTrue()` は、ブール値 `true` かどうかをテストし、`isNotTrue()` は、ブール値 `true` 以外の値である場合にテストにパスします。

```js
assert.isTrue(true, 'This will pass with the boolean value true');
assert.isTrue('true', 'This will NOT pass with the string value "true"');
assert.isTrue(1, 'This will NOT pass with the number value 1');
```

`isFalse()` と `isNotFalse()` もあり、ブール値 `false` かどうかを調べること以外は対応する true 版のメソッドと同様に動作します。

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#4` in the `Basic Assertions` suite, change each `assert` to either `assert.isTrue` or `assert.isNotTrue` to make the test pass (should evaluate to `true`). アサートに渡された引数を変更しないでください。

# --hints--

すべてのテストが成功する必要があります。

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

最初のアサーションに対して、正しいメソッドを選ぶ必要があります - `isTrue` もしくは `isNotTrue` です。

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

2 番目のアサーションに対して、正しいメソッドを選ぶ必要があります - `isTrue` もしくは `isNotTrue` です。

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

3 番目のアサーションに対して、正しいメソッドを選ぶ必要があります - `isTrue` もしくは `isNotTrue` です。

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
