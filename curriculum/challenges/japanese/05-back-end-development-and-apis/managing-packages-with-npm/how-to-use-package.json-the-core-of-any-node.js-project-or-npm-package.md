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

完了したら、プロジェクトの動作デモをどこか公開の場にホストしてください。 そして、`Solution Link` フィールドでデモへの URL を送信してください。

`package.json` ファイルは、Node.js プロジェクトまたは npm パッケージの中心となります。 HTML ドキュメントの &lt;head> セクションでウェブページの内容を記述するのと同じように、このファイルにはプロジェクトに関する情報を保存します。 ファイルは単一の JSON オブジェクトで構成され、そこに情報がキーと値のペアで保存されます。 必須のフィールドは「name」と「version」の 2 つのみですが、将来のユーザーや保守作業者に役立つように、プロジェクトに関する追加情報を記述しておくことをお勧めします。

プロジェクトのファイルツリーを見ると、package.json ファイルはツリーの最上位のレベルにあります。 以降のチャレンジではこのファイルに改良を加えていきます。

このファイルで最も一般的な情報の 1 つは、 `author` フィールドです。 これはプロジェクトの作成者を指定するもので、連絡先などの詳細を記した文字列またはオブジェクトで構成できます。 より大きなプロジェクトではオブジェクトが推奨されますが、このプロジェクトでは次の例のような単純な文字列を使用します。

```json
"author": "Jane Doe",
```

# --instructions--

package.json ファイルで、プロジェクトの `author` の名前を追加してください。

**注: ** JSON を記述しているので、すべてのフィールド名で二重引用符 (") を使用し、コンマ (,) で区切る必要があります。

# --hints--

package.json で、有効な「author」キーを記述する必要があります。

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
