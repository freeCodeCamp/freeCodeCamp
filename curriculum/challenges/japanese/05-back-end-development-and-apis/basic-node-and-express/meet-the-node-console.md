---
id: 587d7fb0367417b2b2512bed
title: Node コンソールに触れる
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

チャレンジに取り組むにあたり、以下の方法のうち 1 つを用いてコードを記述します。

- <a href="https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">GitHub リポジトリ</a>をクローンし、ローカル環境でプロジェクトを完了させる。
- <a href="https://replit.com/github/freeCodeCamp/boilerplate-express" target="_blank" rel="noopener noreferrer nofollow">Replit スタータープロジェクト</a>を使用して、チャレンジを完了させる。
- 使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

Replit を使用する場合は、下記の手順でプロジェクトをセットアップしてください。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。

完了したら、プロジェクトの動作デモをどこか公開の場にホストしてください。 そして「回答のリンク」欄に、デモの URL を提出してください。

開発プロセスでは、コード内で何が起きているかを確認できることが重要です。

Node は単なる JavaScript 環境にすぎません。 クライアントサイド JavaScript と同様に、コンソールを使用して有用なデバッグ情報を表示できます。 ローカルマシンでは、ターミナルでコンソール出力を確認できます。 Replit では、デフォルトで右側のペインにターミナルが開きます。

チャレンジの作業中はターミナルを開いたままにしておくことをお勧めします。 ターミナルの出力を見て、発生したエラーを確認することができます。

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
