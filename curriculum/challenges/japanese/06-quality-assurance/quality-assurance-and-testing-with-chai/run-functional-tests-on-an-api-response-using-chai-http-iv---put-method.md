---
id: 587d824f367417b2b2512c5b
title: Chai-HTTP を使用して API レスポンスで機能テストを実行する Ⅳ - PUT メソッド
challengeType: 2
forumTopicId: 301591
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iv---put-method
---

# --description--

注意点として、このプロジェクトは <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> にあるスタータープロジェクトをベースに構築されているか、または <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> からクローンされています。

この演習は、前回のものと似ています。

`PUT` リクエストをテストする方法が分かったので、テストを最初から実行してみましょう。

# --instructions--

`tests/2_functional-tests.js` 内で、`'Send {surname: "da Verrazzano"}'` テスト  (`// #4`) を変更し、`put` メソッドと `send` メソッドを使用して `'/travellers'` エンドポイントをテストしてください。

PUT リクエストで、以下の JSON オブジェクトを送信してください。

```json
{
  "surname": "da Verrazzano"
}
```

`request.end` コールバック内で、以下を確認してください。

1.  `status` は、`200` でなければなりません。
2.  `type` は、 `application/json` でなければなりません。
3.  `body.name` は、`Giovanni` でなければなりません。
4.  `body.surname` は、`da Verrazzano` でなければなりません。

上記のアサーション順序に従ってください (この順序を想定しています)。 また、完了したら必ず `assert.fail()` を削除してください。

# --hints--

すべてのテストが成功する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

`res.status` が 200 かどうかをテストする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
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

`res.type` が `'application/json'` かどうかをテストする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'equal');
      assert.equal(data.assertions[1].args[0], 'res.type');
      assert.match(data.assertions[1].args[1], /('|")application\/json\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

`res.body.name` が `'Giovanni'` かどうかをテストする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'equal');
      assert.equal(data.assertions[2].args[0], 'res.body.name');
      assert.match(data.assertions[2].args[1], /('|")Giovanni\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

`res.body.surname` が `'da Verrazzano'` かどうかをテストする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'equal');
      assert.equal(data.assertions[3].args[0], 'res.body.surname');
      assert.match(data.assertions[3].args[1], /('|")da Verrazzano\1/);
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
