---
id: 587d8250367417b2b2512c5d
title: 使用無頭瀏覽器運行功能測試
challengeType: 2
forumTopicId: 301595
dashedName: run-functional-tests-using-a-headless-browser
---

# --description--

請注意，本項目在[這個 Replit 項目](https://replit.com/github/freeCodeCamp/boilerplate-mochachai)的基礎上進行開發。你也可以從 [GitHub](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 上克隆。

在 HTML 主視圖中有一個輸入表格。 它發送數據到 `PUT /travellers` 端點，我們在上面的 Ajax 請求中使用。 當請求成功完成時，客戶端代碼會給 DOM 增加一個包含調用返回信息的 `<div>`。 下面的例子展示瞭如何使用這個表格：

```js
test('#test - submit the input "surname" : "Polo"', function (done) {
  browser.fill('surname', 'Polo').pressButton('submit', function () {
    browser.assert.success();
    browser.assert.text('span#name', 'Marco');
    browser.assert.text('span#surname', 'Polo');
    browser.assert.elements('span#dates', 1);
    done();
  });
}
```

首先， `browser` 對象的 `fill` 方法在表格的 `surname` 字段中填入值 `'Polo'`。 緊接着，`pressButton` 方法調用表單的 `submit` 事件監聽器。 `pressButton` 方法是異步的。

收到 AJAX 請求的響應之後，會有幾項斷言確認：

1.  響應狀態是 `200`
2.  `<span id='name'></span>` 元素的文本是 `'Marco'`
3.  `<span id='surname'></span>` 元素的文本是 `'Polo'`
4.  有 `1` 個 `<span id='dates'></span>` 元素。

最後，執行 `done`，這是異步測試所必需的。

# --instructions--

在 `tests/2_functional-tests.js` 中，`'submit "surname" : "Colombo" - write your e2e test...'` 測試（`// #5`），自動化填入和提交表單：

1.  填寫表單
2.  點擊 `'submit'` 按鈕提交表單

在回調中：

1.  斷言狀態是正常的 `200`
2.  斷言元素 `span#name` 中的文本是 `'Cristoforo'`
3.  斷言元素 `span#surname` 元素中的文本是 `'Colombo'`
4.  斷言有 `span#dates` 元素，它們的計數是 `1`

不要忘記刪除 `assert.fail()` 調用。

# --hints--

應通過所有測試。

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

應該斷言無頭瀏覽器請求成功。

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

應該斷言元素 “span#name” 中的文字爲 “Cristoforo”。

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

應該斷言元素 “span#surname” 中的文字爲 “Colombo”。

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

應該斷言元素 “span#dates” 存在，且它的值爲 1。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
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
