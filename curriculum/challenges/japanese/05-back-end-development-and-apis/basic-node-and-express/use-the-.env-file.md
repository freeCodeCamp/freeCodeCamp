---
id: 587d7fb1367417b2b2512bf2
title: .env ファイルを使用する
challengeType: 2
forumTopicId: 301521
dashedName: use-the--env-file
---

# --description--

`.env` ファイルは、アプリケーションに環境変数を渡すために使用される隠しファイルです。 これは非公開ファイルであり、あなた以外誰もアクセスできません。 プライベートまたは非公開にしたいデータを保存する場合に使用することができます。 たとえば、外部サービスの API キーやデータベースの URI を保存できます。 また、設定オプションを保存する場合にも使用できます。 設定オプションを設定することで、コードを書き換えずにアプリの動作を変更できます。

環境変数にはアプリから `process.env.VAR_NAME` としてアクセスできます。 `process.env` オブジェクトは、グローバルの Node オブジェクトであり、変数は文字列として渡されます。 慣例により、変数名はすべて大文字で、単語はアンダースコアで区切られます。 `.env` はシェルファイルなので、名前や値を引用符で囲む必要はありません。 また、変数に値を割り当てる場合、等号記号の両側に空白を付けることはできず、`VAR_NAME=value` のようにする必要があります。 通常は、それぞれの変数定義を別々の行に記述します。

# --instructions--

環境変数を設定オプションとして追加しましょう。

プロジェクトディレクトリのルートに `.env` ファイルを作成し、変数 `MESSAGE_STYLE=uppercase` を保存してください。

次に、前のチャレンジで作成した `/json` GET ルートハンドラーで、`process.env.MESSAGE_STYLE` にアクセスし、変数が `uppercase` に等しい場合にレスポンスオブジェクトの `message` を大文字に変換してください。 レスポンスオブジェクトは、 `MESSAGE_STYLE` の値に応じて、`{"message": "Hello json"}` または `{"message": "HELLO JSON"}` のいずれかにする必要があります。 テストの都合上、`process.env.MESSAGE_STYLE` の値はルートハンドラーの外側ではなく**内側**で読み取る必要がありますので注意してください。

** 注: ** Replit を使用している場合は、 `.env` ファイルを作成することはできません。 代わりに、組み込みの <dfn>SECRETS</dfn> タブを使用して変数を追加してください。

ローカル環境で作業している場合は、`dotenv` パッケージが必要です。 このパッケージにより、環境変数が `.env` ファイルから `process.env` に読み込まれます。 `dotenv` パッケージはすでにインストールされており、プロジェクトの `package.json` ファイルに含まれています。 `myApp.js` ファイルの先頭に `require('dotenv').config()` を追加して、環境変数を読み込んでください。

# --hints--

エンドポイント `/json` のレスポンスを、環境変数 `MESSAGE_STYLE` に従って変更する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/use-env-vars').then(
    (data) => {
      assert.isTrue(
        data.passed,
        'The response of "/json" does not change according to MESSAGE_STYLE'
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
