---
id: 587d8250367417b2b2512c5d
title: 使用无头浏览器运行功能测试
challengeType: 2
forumTopicId: 301595
dashedName: run-functional-tests-using-a-headless-browser
---

# --description--

请注意，本项目在[这个 Repl.it 项目](https://repl.it/github/freeCodeCamp/boilerplate-mochachai)的基础上进行开发。 你也可以从 [GitHub](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 上克隆。

在 HTML 主视图中有一个输入表格。 它发送数据到 `PUT /travellers` 端点，我们在上面的 Ajax 请求中使用。 当请求成功完成时，客户端代码会给 DOM 增加一个包含调用返回信息的 `<div>`。 下面的例子展示了如何使用这个表格：

```js
test('#test - submit the input "surname" : "Polo"', function (done) {
  browser.fill('surname', 'Polo').pressButton('submit', function () {
    browser.assert.success();
    browser.assert.text('span#name', 'Marco');
    browser.assert.text('span#surname', 'Polo');
    browser.assert.element('span#dates', 1);
    done();
  });
}
```

首先， `browser` 对象的 `fill` 方法在表格的 `surname` 字段中填入值 `'Polo'`。 紧接着，`pressButton` 方法调用表单的 `submit` 事件监听器。 `pressButton` 方法是异步的。

收到 AJAX 请求的响应之后，会有几项断言确认：

1.  响应状态是 `200`
2.  `<span id='name'></span>` 元素的文本是 `'Marco'`
3.  `<span id='surname'></span>` 元素的文本是 `'Polo'`
4.  有 `1` 个 `<span id='dates'></span>` 元素。

最后，执行 `done`，这是异步测试所必需的。

# --instructions--

在 `tests/2_functional-tests.js` 中，`'submit "surname" : "Colombo" - write your e2e test...'` 测试（`// #5`），自动化填入和提交表单：

1.  填写表单
2.  点击 `'submit'` 按钮提交表单

在回调中：

1.  断言状态是正常的 `200`
2.  断言元素 `span#name` 中的文本是 `'Cristoforo'`
3.  断言元素 `span#surname` 元素中的文本是 `'Colombo'`
4.  断言有 `span#dates` 元素，它们的计数是 `1`

不要忘记删除 `assert.fail()` 调用。

# --hints--

应通过所有测试。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该断言无头浏览器请求成功。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'browser.success');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该断言元素 “span#name” 中的文字为 “Cristoforo”。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'browser.text');
      assert.match(data.assertions[1].args[0], /('|")span#name\1/);
      assert.match(data.assertions[1].args[1], /('|")Cristoforo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该断言元素 “span#surname” 中的文字为 “Colombo”。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'browser.text');
      assert.match(data.assertions[2].args[0], /('|")span#surname\1/);
      assert.match(data.assertions[2].args[1], /('|")Colombo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应该断言元素 “span#dates” 存在，且它的值为 1。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'browser.element');
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
