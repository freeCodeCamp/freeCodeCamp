---
id: 587d7fb2367417b2b2512bf6
title: クライアントからクエリパラメーター入力を取得する
challengeType: 2
forumTopicId: 301512
dashedName: get-query-parameter-input-from-the-client
---

# --description--

クライアントから入力を取得するもう一つの一般的な方法として、クエリ文字列を使用してルートパスの後にデータをエンコードすることができます。 クエリ文字列は、疑問符 (?) で区切られ、field=value のペアを含みます。 各ペアはアンパサンド (&) で区切られます。 Express では、クエリ文字列のデータを解析し、`req.query` オブジェクトを設定することができます。 パーセント (%) などのいくつかの文字は URL に含めることができないので、送信する前に別の形式にエンコードする必要があります。 JavaScript の API を使用する場合は、そうした文字をエンコード/デコードするために特定のメソッドを使用できます。

<blockquote>route_path: '/library'<br>actual_request_URL: '/library?userId=546&#x26;bookId=6754' <br>req.query: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

API エンドポイントを構築し、`GET /name` でマウントしてください。 JSON ドキュメントで応答し、構造体 `{ name: 'firstname lastname'}` を受け取ってください。 ファーストネームおよびラストネームのパラメーターは、`?first=firstname&last=lastname` などのクエリ文字列にエンコードする必要があります。

** 注: ** 以下の演習では、同じ `/name` ルートパスで、POST リクエストからデータを受け取ります。 必要に応じて、メソッド `app.route(path).get(handler).post(handler)` を使用できます。 このシンタックスにより、同じパスルート上で異なる動詞ハンドラーをチェーンすることができます。 入力する文字数が少しだけ減り、コードがわかりやすくなります。

# --hints--

テスト 1: API エンドポイントは、`/name` エンドポイントが `?first=Mick&last=Jagger` を使用して呼び出された場合 `{ "name": "Mick Jagger" }` を返します。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?first=Mick&last=Jagger').then(
    (data) => {
      assert.equal(
        data.name,
        'Mick Jagger',
        'Test 1: "GET /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

テスト 2: API エンドポイントは、`/name` エンドポイントが `?first=Keith&last=Richards` を使用して呼び出された場合 `{ "name": "Keith Richards" }` を返します。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?last=Richards&first=Keith').then(
    (data) => {
      assert.equal(
        data.name,
        'Keith Richards',
        'Test 2: "GET /name" route does not behave as expected'
      );
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
