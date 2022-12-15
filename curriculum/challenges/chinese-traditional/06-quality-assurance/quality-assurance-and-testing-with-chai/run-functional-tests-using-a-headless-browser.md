---
id: 587d8250367417b2b2512c5d
title: 使用無頭瀏覽器運行功能測試
challengeType: 2
forumTopicId: 301595
dashedName: run-functional-tests-using-a-headless-browser
---

# --description--

請注意，本項目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化項目的基礎上進行開發，你也可以從 <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

在頁面上有一個輸入表單。 它將數據作爲 AJAX 請求發送到 `PUT /travellers` 端點。

當請求成功完成後，客戶端代碼將一個包含響應信息的 `<div>` 附加到 DOM 中。

下面是一個如何使用 Zombie.js 與表單互動的例子。

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

首先， `browser` 對象的 `fill` 方法在表格的 `surname` 字段中填入值 `'Polo'`。 `fill` 返回一個 promise，所以 `then` 被鏈接起來。

在 `then` 回調中，`browser` 對象的 `pressButton` 方法用於調用表單的 `submit` 的事件偵聽器。 `pressButton` 方法是異步的。

然後，一旦收到來自 AJAX 請求的響應，就會做出一些斷言來確認：

1.  響應狀態是 `200`
2.  `<span id='name'></span>` 元素的文本是 `'Marco'`
3.  `<span id='surname'></span>` 元素的文本是 `'Polo'`
4.  有 `1` 個 `<span id='dates'></span>` 元素。

最後，執行 `done`，這是異步測試所必需的。

# --instructions--

在 `tests/2_functional-tests.js` 中，在 `'Submit the surname "Colombo" in the HTML form'` 測試（`// #5`），自動執行以下操作：

1.  在表格中填寫姓氏 `Colombo`。
2.  點擊提交按鈕

在 `pressButton` 回調中：

1.  斷言狀態是正常的 `200`。
2.  斷言元素 `span#name` 中的文本是 `'Cristoforo'`。
3.  斷言元素 `span#surname` 中的文本是 `'Colombo'`。
4.  斷言有 `span#dates` 元素，它們的計數是 `1`。

不要忘記刪除 `assert.fail()` 調用。

# --hints--

應通過所有測試。

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

應斷言無頭瀏覽器成功執行請求。

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

應斷言元素 `span#name` 中的文本是 `'Cristoforo'`。

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

應斷言元素 `span#surname` 中的文本是 `'Colombo'`。

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

應該斷言元素 `span#dates` 存在，且它的值爲 1。

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
