---
id: 587d7fb3367417b2b2512bfb
title: 'Node.js プロジェクトまたは npm パッケージの中心となる package.json を使用する'
challengeType: 2
forumTopicId: 301528
dashedName: how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package
---

# --description--

チャレンジに取り組むにあたり、以下の方法のうち 1 つを用いてコードを記述します。

- <a href="https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank" rel="noopener noreferrer nofollow">GitHub リポジトリ</a>をクローンし、ローカル環境でプロジェクトを完了させる。
- <a href="https://replit.com/github/freeCodeCamp/boilerplate-npm" target="_blank" rel="noopener noreferrer nofollow">Replit スタータープロジェクト</a>を使用して、チャレンジを完了させる。
- 使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

Replit を使用する場合は、下記の手順でプロジェクトをセットアップしてください。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。

完了したら、プロジェクトの動作デモをどこか公開の場にホストしてください。 そして「回答のリンク」欄に、デモの URL を提出してください。

`package.json` ファイルは、Node.js プロジェクトまたは npm パッケージの中心となります。 It stores information about your project, similar to how the `head` section of an HTML document describes the content of a webpage. ファイルは単一の JSON オブジェクトで構成され、そこに情報がキーと値のペアで保存されます。 There are only two required fields; `name` and `version`, but it’s good practice to provide additional information about your project that could be useful to future users or maintainers.

If you look at the file tree of your project, you will find the `package.json` file on the top level of the tree. 以降のチャレンジではこのファイルに改良を加えていきます。

このファイルで最もよく使われる情報の 1 つは、`author` フィールドです。 これはプロジェクトの作成者を指定するもので、連絡先などの詳細を記した文字列またはオブジェクトで構成できます。 より大きなプロジェクトではオブジェクトが推奨されますが、このプロジェクトでは次の例のような単純な文字列を使用します。

```json
"author": "Jane Doe",
```

# --instructions--

Add your name as the `author` of the project in the `package.json` file.

**注: ** JSON を記述しているので、すべてのフィールド名に二重引用符 (") を使用し、コンマ (,) で区切る必要があります。

# --hints--

`package.json` should have a valid "author" key

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.author, '"author" is missing');
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
