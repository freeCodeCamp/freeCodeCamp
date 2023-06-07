---
id: 587d7fb4367417b2b2512c00
title: npm から外部パッケージを使用してプロジェクトを拡張する
challengeType: 2
forumTopicId: 301527
dashedName: expand-your-project-with-external-packages-from-npm
---

# --description--

パッケージマネージャーを使用する最大の理由の 1 つは、強力な依存関係管理です。 新しいコンピューターでプロジェクトを準備する場合、そのたびにすべての依存関係を手動で確認する必要はなく、npm が自動的にすべてをインストールしてくれます。 しかし、npm はプロジェクトに必要なものをどのようにして正確に知ることができるのでしょうか？ package.json ファイルの `dependencies` セクションを見てください。

このセクションには、プロジェクトが必要とするパッケージが次のような形式で保存されています。

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}

```

# --instructions--

Add version `1.1.0` of the `@freecodecamp/example` package to the `dependencies` field of your `package.json` file.

**注:** `@freecodecamp/example` は、学習用のツールとして使用する架空のパッケージです。

# --hints--

`"dependencies"` に `"@freecodecamp/example"` を含める必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        '@freecodecamp/example',
        '"dependencies" does not include "@freecodecamp/example"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

`"@freecodecamp/example"` のバージョンは `"1.1.0"` である必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^[\^\~]?1\.1\.0/,
        'Wrong version of "@freecodecamp/example" installed. It should be 1.1.0'
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
