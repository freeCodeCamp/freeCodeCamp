---
id: 5f8884f4c46685731aabfc41
title: 使用 无头浏览器 II 运行功能测试
challengeType: 2
forumTopicId: 301594
dashedName: run-functional-tests-using-a-headless-browser-ii
---

# --description--

请注意，本项目在[这个 Replit 项目](https://replit.com/github/freeCodeCamp/boilerplate-mochachai)的基础上进行开发。你也可以从 [GitHub](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 上克隆。

# --instructions--

在 `tests/2_functional-tests.js` 中，`'submit "surname" : "Vespucci" - write your e2e test...'` 测试（`// #6`），自动化填写和提交表单：

1.  在表单中填写 `Vespucci` 的 `surname`。
2.  点击 `'submit'` 按钮提交表单

在回调中：

1.  断言状态是正常的 `200`
2.  断言元素 `span#name` 中的文本是 `'Amerigo'`
3.  断言元素 `span#surname` 元素中的文本是 `'Vespucci'`
4.  断言有 `span#dates` 元素，它们的计数是 `1`

不要忘记删除 `assert.fail()` 调用。

# --hints--

应通过所有测试。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应断言无头浏览器成功执行请求。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'browser.success');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应断言元素 “span#surname” 中的文本为 “Vespucci”。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'browser.text');
      assert.match(data.assertions[1].args[0], /('|")span#name\1/);
      assert.match(data.assertions[1].args[1], /('|")Amerigo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应断言元素 “span#surname” 中的文本为 “Vespucci”。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'browser.text');
      assert.match(data.assertions[2].args[0], /('|")span#surname\1/);
      assert.match(data.assertions[2].args[1], /('|")Vespucci\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该断言元素 “span#dates” 存在，且它的值为 1。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'browser.elements');
      assert.match(data.assertions[3].args[0], /('|")span#dates\1/);
      assert.equal(data.assertions[3].args[1], 1);
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
