---
id: 587d824b367417b2b2512c49
title: 测试真实性
challengeType: 2
videoUrl: ''
---

# --description--

请注意，本项目在 [这个 Repl.it 项目](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 的基础上进行开发。你也可以从 [GitHub](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 上克隆。

`isTrue()` 仅当给出的值为 Boolean 的 `true` 时可以通过测试；`isNotTrue()` 则会在给出除 `true` 以外的值时通过测试。

```js
assert.isTrue(true, '可以通过，因为值的类型是布尔且值为 true');
assert.isTrue('true', '不能通过，因为值的类型是字符串);
assert.isTrue(1, '不过能通过，因为值是数字 1');
```

`isFalse()` 和 `isNotFalse()` 同样存在，表现与上面提到的两个方法类似。

# --instructions--

使用 `assert.isTrue()` 或 `assert.isNotTrue()` 让测试通过。

# --hints--

不应有未通过的测试

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

请选择正确的断言—isTrue 或 isNotTrue

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

请选择正确的断言—isTrue 或 isNotTrue

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

请选择正确的断言—isTrue 或 isNotTrue

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

