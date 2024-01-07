---
id: 587d7fb6367417b2b2512c06
title: Mongoose をインストールして設定する
challengeType: 2
forumTopicId: 301540
dashedName: install-and-set-up-mongoose
---

# --description--

チャレンジに取り組むにあたり、以下の方法のうち 1 つを用いてコードを記述します。

- <a href="https://github.com/freeCodeCamp/boilerplate-mongomongoose/" target="_blank" rel="noopener noreferrer nofollow">GitHub リポジトリ</a>をクローンし、ローカル環境でプロジェクトを完了させる。
- <a href="https://replit.com/github/freeCodeCamp/boilerplate-mongomongoose" target="_blank" rel="noopener noreferrer nofollow">Replit スタータープロジェクト</a>を使用して、チャレンジを完了させる。
- 使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

Replit を使用する場合は、下記の手順でプロジェクトをセットアップしてください。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。

完了したら、プロジェクトの動作デモをどこか公開の場にホストしてください。 そして「回答のリンク」欄に、デモの URL を提出してください。

このチャレンジでは、MongoDB の Atlas データベースを設定し、それに接続するために必要なパッケージをインポートします。

<a href='https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/' target="_blank" rel="noopener noreferrer nofollow">チュートリアル</a>に従い、MongoDB Atlas にホストされたデータベースを設定してください。

# --instructions--

`mongoose@^5.11.15` をプロジェクトの `package.json` ファイルに追加してあります。 まず、`myApp.js` で `mongoose` を require してください。 次に、`.env` ファイルを作成し、`MONGO_URI` 変数を追加してください。 変数の値は、あなたの MongoDB Atlas データベースの URI である必要があります。 URI は一重引用符または二重引用符で囲んでください。また、環境変数では `=` の前後に空白を使用できないことに注意してください。 たとえば、`MONGO_URI='VALUE'` などとします。

** 注: **Replit を使用している場合は、`.env` ファイルを作成することはできません。 代わりに、組み込みの <dfn>SECRETS</dfn> タブを使用して変数を追加してください。 <em>SECRETS</em> タブを使用する場合は、値を引用符で<em>囲まないで</em>ください。

When you are done, connect to the database by calling the `connect` method within your `myApp.js` file by using the following syntax:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

"mongoose version ^5.11.15" という依存関係が package.json に存在する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongoose');
      assert.match(
        packJson.dependencies.mongoose,
        /^\^5\.11\.15/,
        'Wrong version of "mongoose". It should be ^5.11.15'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

"mongoose" をデータベースに接続する必要があります。

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
