---
id: 587d7fb5367417b2b2512c02
title: チルダ文字を使用して常に依存関係の最新の PATCH バージョンを使用する
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

前回のチャレンジでは、npm に特定のバージョンのパッケージのみを含めるよう指示しました。 この方法は、プロジェクトのさまざまな部分について互いの互換性を保つ必要がある場合に、依存関係を固定するのに便利です。 しかし、ほとんどのケースではバグ修正を省くのは好ましくありません。これは、 バグ修正には重要なセキュリティパッチが含まれていることが多く、適用しても現在の動作を壊すことはない (だろうと考える) からです。

依存関係のバージョンの前にプレフィックスとしてチルダ (`~`) 文字を付けると、npm の依存関係を最新の PATCH バージョンに更新することができます。 1.3.x バージョンへのアップデートを許可する方法の例を次に示します。

```json
"package": "~1.3.8"
```

# --instructions--

package.json ファイルに、npm に許可する moment のアップグレード方法が示されていますが、現在のルールでは特定のバージョン (2.10.2) が使用されます。 しかし、ここでは最新の 2.10.x バージョンを許可したいとします。

依存関係内の moment のバージョンの前にプレフィックスとしてチルダ (`~`) 文字を使用し、npm によって新しい PATCH リリースに更新されるようにしてください。

**注:** バージョン番号自体は変更しないでください。

# --hints--

「dependencies」に「moment」を含める必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'moment',
        '"dependencies" does not include "moment"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

「moment」のバージョンを「~2.10.2」にする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies.moment,
        /^\~2\.10\.2/,
        'Wrong version of "moment". It should be ~2.10.2'
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
