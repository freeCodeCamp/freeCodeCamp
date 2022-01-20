---
id: 587d7fb5367417b2b2512c03
title: キャレット文字を使用して依存関係の最新の MINOR バージョンを使用する
challengeType: 2
forumTopicId: 301531
dashedName: use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency
---

# --description--

前回のチャレンジで学んだチルダと同じように、npm では依存関係の最新の PATCH をインストールできます。npm でキャレット (`^`) を使用すると、将来のアップデートもインストールできます。 両者の違いは、キャレットでは MINOR アップデートと PATCH の両方が可能であることです。

moment の現在のバージョンを「~2.10.2」にすると、npm で最新の 2.10.x バージョンをインストールできます。 代わりにバージョン プレフィックスとしてキャレット (^) を使用すると、npm では任意の 2.x.x バージョンへ更新できます。

```json
"package": "^1.3.8"
```

この記述では、パッケージを任意の 1.x.x バージョンへ更新できます。

# --instructions--

依存関係内の moment のバージョンのプレフィックスとしてキャレット (`^`) を使用し、npm によって任意の新しい MINOR リリースへ更新できるようにしてください。

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

「moment」バージョンは、「^2.x.x」と一致する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies.moment,
        /^\^2\./,
        'Wrong version of "moment". It should be ^2.10.2'
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
