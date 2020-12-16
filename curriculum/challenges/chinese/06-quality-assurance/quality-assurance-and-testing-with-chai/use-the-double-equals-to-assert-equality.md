---
id: 587d824b367417b2b2512c4a
title: 用两个等号断言相等
challengeType: 2
forumTopicId: 301609
---

# --description--

请注意，本项目在 [这个 Repl.it 项目](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 的基础上进行开发。你也可以从 [GitHub](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 上克隆。

`equal()` 使用 `==` 比较对象。

# --instructions--

使用 `assert.equal()` 或 `assert.notEqual()` 让所有测试通过。

# --hints--

不应有未通过的测试

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

请选择正确的断言—equal 或 notEqual

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

请选择正确的断言—equal 或 notEqual

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

请选择正确的断言—equal 或 notEqual

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

请选择正确的断言—equal 或 notEqual

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

