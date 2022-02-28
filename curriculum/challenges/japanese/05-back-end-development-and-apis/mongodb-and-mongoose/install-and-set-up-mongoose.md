---
id: 587d7fb6367417b2b2512c06
title: Mongoose をインストールして設定する
challengeType: 2
forumTopicId: 301540
dashedName: install-and-set-up-mongoose
---

# --description--

チャレンジに取り組むにあたり、以下の方法のうち 1 つを用いてコードを記述します。

- [GitHub レポジトリ](https://github.com/freeCodeCamp/boilerplate-mongomongoose/)をクローンし、ローカル環境でチャレンジを完了させる。
- [Replit 始動プロジェクト](https://replit.com/github/freeCodeCamp/boilerplate-mongomongoose)を使用してチャレンジを完了させる。
- 使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

完了したら、プロジェクトの動作デモをどこか公開の場にホストしてください。 そして、`Solution Link` フィールドでデモへの URL を送信してください。

このチャレンジでは、MongoDB の Atlas データベースを設定し、それに接続するために必要なパッケージをインポートします。

<a href='https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/' rel='noopener noreferrer' target='_blank'>チュートリアル</a>に従い、ホストされたデータベースを MongoDB Atlas に設定してください。

# --instructions--

`mongodb@~3.6.0` と `mongoose@~5.4.0` をプロジェクトの `package.json` に追加してください。 次に、`myApp.js` で `mongoose` を require してください。 `.env` ファイルを作成し、`MONGO_URI` 変数を追加してください。 変数の値は、MongoDB Atlas データベースの URI である必要があります。 URI は一重引用符または二重引用符で囲んでください。また、環境変数では `=` の前後に空白を使用できないことに注意してください。 たとえば、`MONGO_URI='VALUE'` などとします。 完了したら、次のシンタックスを使用してデータベースに接続してください。

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

「mongodb」依存関係が package.json にある必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongodb');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

「mongoose」依存関係が package.json にある必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongoose');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

「mongoose」をデータベースに接続する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/is-mongoose-ok').then(
    (data) => {
      assert.isTrue(data.isMongooseOk, 'mongoose is not connected');
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
