---
id: 587d7fb1367417b2b2512bf1
title: 特定のルート上で JSON を提供する
challengeType: 2
forumTopicId: 301517
dashedName: serve-json-on-a-specific-route
---

# --description--

HTML サーバーは HTML を提供しますが、API はデータを提供します。 <dfn>REST</dfn> (REpresentational State Transfer) API では、クライアントがサーバーの詳細を知らなくても、簡単な方法でデータ交換ができます。 クライアントで知る必要があるのは、リソースのある場所 (URL) と、そこで実行したいアクション (動詞) だけです。 GET 動詞は、情報を取得するだけで何も変更を加えない場合に使用します。 最近では、ウェブでの情報の操作に使用するデータ形式として JSON が好まれています。 簡単に言えば、JSON は JavaScript オブジェクトを文字列として表現する便利な手段であり、簡単に送信することができます。

シンプルな API として、パス `/json` で JSON で応答するルートを作成してみましょう。 いつものように `app.get()` メソッドを使用できます。 ルートハンドラートの中で、メソッド `res.json()` を使用し、オブジェクトを引数として渡します。 このメソッドは、リクエスト-レスポンス ループを閉じ、データを返します。 バックグラウンドでは、有効な JavaScript オブジェクトを文字列に変換します。そして、適切なヘッダーを設定して、JSON を提供しようとしていることをブラウザーに伝え、データを返します。 有効なオブジェクトには通常の構造体 `{key: data}` があります。 `data` は、数値、文字列、ネストされたオブジェクトまたは配列です。 `data` はまた、変数または関数呼び出しの結果になることもあり、その場合は文字列に変換される前に評価されます。

# --instructions--

オブジェクト `{"message": "Hello json"}` を JSON 形式のレスポンスとして、`/json` ルートへの GET リクエストに提供します。 ブラウザーから `your-app-url/json` にアクセスすると、画面にメッセージが表示されます。

# --hints--

エンドポイント `/json` は JSON オブジェクト `{"message": "Hello json"}` を提供する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/json').then(
    (data) => {
      assert.equal(
        data.message,
        'Hello json',
        "The '/json' endpoint does not serve the right data"
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
