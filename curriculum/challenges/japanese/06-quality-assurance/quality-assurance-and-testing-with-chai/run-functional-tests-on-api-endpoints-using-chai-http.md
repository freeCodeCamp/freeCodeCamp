---
id: 587d824e367417b2b2512c58
title: Chai-HTTP を使用して API エンドポイントの機能テストを実行する
challengeType: 2
forumTopicId: 301593
dashedName: run-functional-tests-on-api-endpoints-using-chai-http
---

# --description--

注意点として、このプロジェクトは <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> にあるスタータープロジェクトをベースに構築されているか、または <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> からクローンされています。

Mocha では、`chai-http` というプラグインを使用して API エンドポイントへの呼び出しのような非同期操作をテストできます。

`chai-http` を使用して `'GET /hello?name=[name] => "hello [name]"'` というスイートをテストする例を次に示します。

```js
suite('GET /hello?name=[name] => "hello [name]"', function () {
  test('?name=John', function (done) {
    chai
      .request(server)
      .keepOpen()
      .get('/hello?name=John')
      .end(function (err, res) {
        assert.equal(res.status, 200, 'Response status should be 200');
        assert.equal(res.text, 'hello John', 'Response should be "hello John"');
        done();
      });
  });
});
```

テストでは、サーバーへ `GET` リクエストを送信し、名前を URL クエリ文字列 (`?name=John`) として指定します。 `end` メソッドのコールバック関数では、レスポンスオブジェクト (`res`) を受信します。レスポンスオブジェクトには `status` プロパティが含まれています。

最初の `assert.equal` は、ステータスが `200` に等しいかどうかを確認します。 2 番目の `assert.equal` は、レスポンス文字列 (`res.text`) が `"hello John"` と等しいことを確認します。

また、テストのコールバック関数の `done` パラメーターに注意してください。 非同期操作が完了したことを示すために、この関数をテストの最後に引数なしで呼び出す必要があります。

Finally, note the `keepOpen` method just after the `request` method. Normally you would run your tests from the command line, or as part of an automated integration process, and you could let `chai-http` start and stop your server automatically.

However, the tests that run when you submit the link to your project require your server to be up, so you need to use the `keepOpen` method to prevent `chai-http` from stopping your server.

# --instructions--

Within `tests/2_functional-tests.js`, alter the `'Test GET /hello with no name'` test (`// #1`) to assert the `status` and the `text` of the response to make the test pass. Do not alter the arguments passed to the asserts.

There should be no URL query. Without a name URL query, the endpoint responds with `hello Guest`.

# --hints--

All tests should pass

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should test for `res.status` == 200

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'equal');
      assert.equal(data.assertions[0].args[0], 'res.status');
      assert.equal(data.assertions[0].args[1], '200');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should test for `res.text` == `'hello Guest'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'equal');
      assert.equal(data.assertions[1].args[0], 'res.text');
      assert.match(data.assertions[1].args[1], /('|")hello Guest\1/);
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
