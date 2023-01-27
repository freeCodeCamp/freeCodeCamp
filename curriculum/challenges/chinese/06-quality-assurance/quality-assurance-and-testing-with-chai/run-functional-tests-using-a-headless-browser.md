---
id: 587d8250367417b2b2512c5d
title: 使用无头浏览器运行功能测试
challengeType: 2
forumTopicId: 301595
dashedName: run-functional-tests-using-a-headless-browser
---

# --description--

请注意，本项目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化项目的基础上进行开发，你也可以从 <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

在页面上有一个输入表单。 它将数据作为 AJAX 请求发送到 `PUT /travellers` 端点。

当请求成功完成后，客户端代码将一个包含响应信息的 `<div>` 附加到 DOM 中。

下面是一个如何使用 Zombie.js 与表单互动的例子。

```js
test('Submit the surname "Polo" in the HTML form', function (done) {
  browser.fill('surname', 'Polo').then(() => {
    browser.pressButton('submit', () => {
      browser.assert.success();
      browser.assert.text('span#name', 'Marco');
      browser.assert.text('span#surname', 'Polo');
      browser.assert.elements('span#dates', 1);
      done();
    });
  });
});
```

首先， `browser` 对象的 `fill` 方法在表格的 `surname` 字段中填入值 `'Polo'`。 `fill` 返回一个 promise，所以 `then` 被链接起来。

在 `then` 回调中，`browser` 对象的 `pressButton` 方法用于调用表单的 `submit` 的事件侦听器。 `pressButton` 方法是异步的。

然后，一旦收到来自 AJAX 请求的响应，就会做出一些断言来确认：

1.  响应状态是 `200`
2.  `<span id='name'></span>` 元素的文本是 `'Marco'`
3.  `<span id='surname'></span>` 元素的文本是 `'Polo'`
4.  有 `1` 个 `<span id='dates'></span>` 元素。

最后，执行 `done`，这是异步测试所必需的。

# --instructions--

在 `tests/2_functional-tests.js` 中，在 `'Submit the surname "Colombo" in the HTML form'` 测试（`// #5`），自动执行以下操作：

1.  在表格中填写姓氏 `Colombo`。
2.  点击提交按钮

在 `pressButton` 回调中：

1.  断言状态是正常的 `200`。
2.  断言元素 `span#name` 中的文本是 `'Cristoforo'`。
3.  断言元素 `span#surname` 中的文本是 `'Colombo'`。
4.  断言有 `span#dates` 元素，它们的计数是 `1`。

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

应断言元素 `span#name` 中的文本是 `'Cristoforo'`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
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

应断言元素 `span#surname` 中的文本是 `'Colombo'`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
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

应该断言元素 `span#dates` 存在，且它的值为 1。

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
