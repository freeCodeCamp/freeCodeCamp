---
id: 587d824f367417b2b2512c5a
title: Chai-HTTP を使用して API レスポンスで機能テストを実行するⅢ - PUT メソッド
challengeType: 2
forumTopicId: 301590
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iii---put-method
---

# --description--

注意点として、このプロジェクトは <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> にあるスタータープロジェクトをベースに構築されているか、または <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> からクローンされています。

`PUT` リクエストをテストする時、一緒にデータを送信することがよくあります。 `PUT` リクエストに含まれるデータは、リクエストボディと呼ばれます。

`PUT` リクエストと JSON オブジェクトを `'/travellers'` エンドポイントへ送信するために、`chai-http` プラグインの `put` メソッドと `send` メソッドを使用することができます。

```js
chai
  .request(server)
  .put('/travellers')
  .send({
    "surname": [last name of a traveller of the past]
  })
  ...
```

するとルートは次のように応答します。

```json
{
  "name": [first name],
  "surname": [last name],
  "dates": [birth - death years]
}
```

`'/travellers'` エンドポイントへの異なるレスポンスについては、サーバーのコードを参照してください。

# --instructions--

`tests/2_functional-tests.js` 内で、`'Send {surname: "Colombo"}'` テスト  (`// #3`) を変更し、`put` メソッドと `send` メソッドを使用して `'/travellers'` エンドポイントをテストしてください。

PUT リクエストで、次の JSON オブジェクトを送信してください。

```json
{
  "surname": "Colombo"
}
```

`request.end` コールバック内で、以下を確認してください。

1.  `status` は、`200` でなければなりません。
2.  `type` は、`application/json` でなければなりません。
3.  `body.name` は、`Cristoforo` でなければなりません。
4.  `body.surname` は、`Colombo` でなければなりません。

上記のアサーション順序に従ってください (この順序を想定しています)。 また、完了したら必ず `assert.fail()` を削除してください。

# --hints--

すべてのテストが成功する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
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
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
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
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
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

`res.body.name` が `'Cristoforo'` かどうかをテストする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'equal');
      assert.equal(data.assertions[2].args[0], 'res.body.name');
      assert.match(data.assertions[2].args[1], /('|")Cristoforo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

`res.body.surname` が `'Colombo'` かどうかをテストする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'equal');
      assert.equal(data.assertions[3].args[0], 'res.body.surname');
      assert.match(data.assertions[3].args[1], /('|")Colombo\1/);
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
