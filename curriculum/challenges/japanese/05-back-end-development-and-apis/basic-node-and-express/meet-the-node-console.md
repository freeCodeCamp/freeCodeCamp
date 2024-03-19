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
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete these challenges.
- 使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

開発プロセスでは、コード内で何が起きているかを確認できることが重要です。

Node は単なる JavaScript 環境にすぎません。 クライアントサイド JavaScript と同様に、コンソールを使用して有用なデバッグ情報を表示できます。 ローカルマシンでは、ターミナルでコンソール出力を確認できます。 On Gitpod, a terminal is open at the bottom of the editor by default.

チャレンジの作業中はターミナルを開いたままにしておくことをお勧めします。 ターミナルの出力を見て、発生したエラーを確認することができます。

The server must be restarted after making changes to its files.

You can stop the server from the terminal using `Ctrl + C` and start it using Node directly (`node mainEntryFile.js`) or using a run script in the `package.json` file with `npm run`.

For example, the `"start": "node server.js"` script would be run from the terminal using `npm run start`.

To implement server auto restarting on file save Node provides the `--watch` flag you can add to your start script `"start": "node --watch server.js"` or you can install an npm package like `nodemon`. We will leave this to you as an exercise.

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
