---
id: 587d7fb2367417b2b2512bf7
title: POST リクエストを解析するためにボディパーサーを使用する
challengeType: 2
forumTopicId: 301520
dashedName: use-body-parser-to-parse-post-requests
---

# --description--

GET のほかにもう一つ一般的な HTTP 動詞があります。それは、POST です。 POST は、HTML フォームを使用してクライアントデータを送信するために使用するデフォルトのメソッドです。 REST の慣例では、POST は、データベースに新しいアイテム (新規ユーザー、または新しいブログ投稿) を作成するためのデータを送信する場合に使用します。 このプロジェクトにはデータベースはありませんが、ひとまず POST リクエストの処理方法について説明します。

このようなリクエストでは、データは URL には表示されず、リクエストボディに隠されています。 ボディは HTTP リクエストの一部であり、ペイロードとも呼ばれます。 URL にデータが表示されていなくても、データが非公開であるとは限りません。 その理由を理解するため、HTTP POST リクエストの処理前の内容を見てみましょう。

```http
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20

name=John+Doe&age=25
```

ご覧のように、ボディはクエリ文字列のようにエンコードされています。 これは、HTML のフォームで使用されるデフォルトの形式です。 Ajax では、JSON を使用してもっと複雑な構造のデータを処理することもできます。 また、multipart/form-data という別のエンコーディングタイプもあります。 これは、バイナリファイルをアップロードする場合に使用します。 この演習では、URL エンコードされたボディを使用します。 POST リクエストからのデータを解析するには、`body-parser` パッケージを使用する必要があります。 このパッケージでは、さまざまな形式でデータをデコードできる一連のミドルウェアを使用できます。

# --instructions--

`body-parser` はすでにインストールされており、プロジェクトの `package.json` ファイルに含まれています。 `myApp.js` ファイルの先頭でそれを `require` し、`bodyParser` という名前の変数に格納してください。 URL エンコードされたデータを処理するミドルウェアは、`bodyParser.urlencoded({extended: false})` によって返されます。 前のメソッド呼び出しで返された関数を `app.use()` に渡してください。 いつものように、ミドルウェアはそれに依存するすべてのルートよりも前にマウントする必要があります。

**注:** `extended` は、解析を使用する必要があるかどうかを `body-parser` に伝える設定オプションです。 `extended=false` の場合は、従来のエンコーディング `querystring` ライブラリを使用します。 `extended=true` の場合は、解析に `qs` ライブラリを使用します。

`extended=false` を使用する場合、値は文字列または配列のみとなります。 `querystring` を使用する場合に返されるオブジェクトは、デフォルトの JavaScript `Object` のプロトタイプを継承しません。つまり、`hasOwnProperty` や `toString` などの関数は利用できなくなります。 extended が有効な場合は、データの柔軟性が高まりますが、その点では JSON のほうが優れています。

# --hints--

「body-parser」ミドルウェアをマウントする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/add-body-parser').then(
    (data) => {
      assert.isAbove(
        data.mountedAt,
        0,
        '"body-parser" is not mounted correctly'
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
