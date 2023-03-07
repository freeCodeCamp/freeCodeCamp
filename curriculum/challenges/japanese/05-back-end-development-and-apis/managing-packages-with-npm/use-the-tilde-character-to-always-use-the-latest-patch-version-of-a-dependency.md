---
id: 587d7fb5367417b2b2512c02
title: チルダ文字を使用して常に依存関係の最新の PATCH バージョンを使用する
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

前回のチャレンジでは、npm に特定のバージョンのパッケージのみを含めるよう指示しました。 この方法は、プロジェクトのさまざまな部分について互いの互換性を保つ必要がある場合に、依存関係を固定するのに便利です。 しかし、ほとんどのケースではバグ修正を省くのは好ましくありません。これは、 バグ修正には重要なセキュリティパッチが含まれていることが多く、適用しても現在の動作を壊すことはない (だろうと考える) からです。

依存関係のバージョンの前にプレフィックスとしてチルダ (`~`) 文字を付けると、npm の依存関係を最新の PATCH バージョンに更新することができます。 Here's an example of how to allow updates to any `1.3.x` version.

```json
"package": "~1.3.8"
```

# --instructions--

In the package.json file, your current rule for how npm may upgrade `@freecodecamp/example` is to use a specific version (`1.2.13`). But now, you want to allow the latest `1.2.x` version.

依存関係内の `@freecodecamp/example` のバージョンの前にプレフィックスとしてチルダ (`~`) 文字を使用し、npm によって新しい _patch_ リリースに更新されるようにしてください。

**注:** バージョン番号自体は変更しないでください。

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

`"@freecodecamp/example"` のバージョンは `"~1.2.13"` である必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^\~1\.2\.13/,
        'Wrong version of "@freecodecamp/example". It should be ~1.2.13'
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
