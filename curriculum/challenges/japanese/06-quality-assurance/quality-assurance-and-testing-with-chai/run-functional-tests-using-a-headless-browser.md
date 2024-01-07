---
id: 587d8250367417b2b2512c5d
title: ヘッドレスブラウザーを使用して機能テストを実行する
challengeType: 2
forumTopicId: 301595
dashedName: run-functional-tests-using-a-headless-browser
---

# --description--

注意点として、このプロジェクトは <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> にあるスタータープロジェクトをベースに構築されているか、または <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> からクローンされています。

ページに入力フォームがあります。 AJAX リクエストとして、`PUT /travellers` エンドポイントへデータを送信します。

リクエストが正常に完了すると、クライアントコードは、情報を含む `<div>` を、DOM へのレスポンスに追加します。

以下は、Zombie.js を使用してフォームとやり取りする方法の例です。

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

まず、`browser` オブジェクトの `fill` メソッドにより、フォームの `surname` フィールドに値 `'Polo'` を入力します。 `fill` は promise を返すので、そこから `then` でつなぎます。

`then` コールバック内で、`browser` オブジェクトの `pressButton` メソッドを使用して、フォームの `submit` イベントリスナーを呼び出します。 `pressButton` メソッドは非同期です。

その後、AJAX リクエストからレスポンスを受信すると、いくつかのアサーションが実行され、以下が確定します。

1.  レスポンスのステータスは、`200` です。
2.  `<span id='name'></span>` 要素内のテキストは、`'Marco'` と一致します。
3.  `<span id='surname'></span>` 要素内のテキストは、`'Polo'` と一致します。
4.  `1` という内容の `<span id='dates'></span>` 要素があります。

最後に、`done` コールバックを呼び出します。これは非同期テストのために必要です。

# --instructions--

`tests/2_functional-tests.js` 内の `'Submit the surname "Colombo" in the HTML form'` テスト (`// #5`) で、以下を自動化してください。

1.  フォームに姓 `Colombo` を入力します。
2.  送信ボタンを押します。

`pressButton` コールバック内で以下を実行してください。

1.  ステータスが OK `200` であることをアサートします。
2.  要素 `span#name` 内のテキストが `'Cristoforo'` であることをアサートします。
3.  要素 `span#surname` 内のテキストが `'Colombo'` であることをアサートします。
4.  要素 `span#dates` が存在し、そのカウントが `1` であることをアサートします。

`assert.fail()` 呼び出しを削除することを忘れないでください。

# --hints--

すべてのテストが成功する必要があります。

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

ヘッドレスブラウザーのリクエストが成功したことをアサートする必要があります。

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

要素 `span#name` 内のテキストが `'Cristoforo'` であることをアサートする必要があります。

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

要素 `span#surname` 内のテキストが `'Colombo'` であることをアサートする必要があります。

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

要素 `span#dates` が存在し、カウントが 1 であることをアサートする必要があります。

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
