---
id: 587d7fb0367417b2b2512bed
title: ノードコンソールを確認する
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

チャレンジに取り組むにあたり、以下の方法のうち 1 つを用いてコードを記述します。

- [GitHub レポジトリ](https://github.com/freeCodeCamp/boilerplate-express/)をクローンし、ローカル環境でチャレンジを完了させる。
- [Replit 始動プロジェクト](https://replit.com/github/freeCodeCamp/boilerplate-express)を使用してチャレンジを完了させる。
- 使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

完了したら、プロジェクトの動作デモをどこか公開の場にホストしてください。 そして、`Solution Link` フィールドでデモへの URL を送信してください。

開発プロセスでは、コード内で何が起きているかを確認できるようにすることが重要です。

Node は単なる JavaScript 環境にすぎません。 クライアントサイド JavaScript と同様に、コンソールを使用して有用なデバッグ情報を表示できます。 ローカルマシンでは、ターミナルでコンソール出力を確認できます。 Replit では、デフォルトで右側のペインにターミナルが開きます。

チャレンジの作業中はターミナルを開いたままにしておくことをお勧めします。 ターミナルの出力を読み取ることで、発生する可能性のあるエラーを確認することができます。

# --instructions--

`myApp.js` ファイルを変更して、コンソールログに「Hello World」と出力してください。

# --hints--

`"Hello World"` がコンソールに表示されます。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/hello-console').then(
    (data) => {
      assert.isTrue(data.passed, '"Hello World" is not in the server console');
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
