---
id: 587d8247367417b2b2512c36
title: Helmet を install して require する
challengeType: 2
forumTopicId: 301581
dashedName: install-and-require-helmet
---

# --description--

これらのチャレンジに取り組むにあたり、以下の方法のうち 1 つを用いてコードを記述します。

- [GitHub リポジトリ](https://github.com/freeCodeCamp/boilerplate-infosec/)をクローンし、ローカル環境でプロジェクトを完了させる。
- [Replit 始動プロジェクト](https://replit.com/github/freeCodeCamp/boilerplate-infosec)を使用して、チャレンジを完了させる。
- 使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

完了したら、プロジェクトの動作デモをどこか公開の場にホストしてください。 そして、`Solution Link` フィールドでデモへの URL を送信してください。

Helmet を使用すると、さまざまな HTTP ヘッダーを設定することができ、Express アプリケーションのセキュリティを確保するのに役立ちます。

# --instructions--

これらのレッスンで使用するコードはすべて、`myApp.js`ファイルの中で、最初に示したコードの行の間に記載されています。 追加したコードを変更したり削除したりしないでください。

Helmet のバージョン `3.21.3` をインストールし、require してください。 `npm install --save-exact package@version` を使用するか、`package.json` に直接追加することで、特定のバージョンのパッケージをインストールできます。

# --hints--

`helmet` のバージョン `3.21.3` を `package.json` に含める必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      const packJson = JSON.parse(data);
      const helmet = packJson.dependencies.helmet;
      assert(helmet === '3.21.3' || helmet === '^3.21.3');
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
