---
id: 587d7fb5367417b2b2512c01
title: セマンティック バージョニングを理解して npm の依存関係を管理する
challengeType: 2
forumTopicId: 301529
dashedName: manage-npm-dependencies-by-understanding-semantic-versioning
---

# --description--

package.json ファイルの依存関係セクションにある npm パッケージの `Versions` は、いわゆるセンマティック バージョニング (SemVer) と呼ばれる決まりに従っています。SemVer とは、依存関係の管理を容易にすることを目的としたソフトウェアバージョン管理の業界標準です。 npm に公開されるライブラリ、フレームワークおよびその他のツールでは、プロジェクトを更新する場合にどのような変更がプロジェクトに加えられるのかを明確に伝えるために、SemVer を使用する必要があります。

SemVer を理解しておくと、外部の依存関係を使用するソフトウェアを開発する場合 (ほとんどの場合はそうです) に役立ちます。 将来、これらの数字を理解しておけば、昨日まで動いていたものが今日になって突然動かなくなった理由を理解できなくても、誤ってプロジェクトに破壊的な変更を加えることはなくなります。 公式ウェブサイトによれば、センマティック バージョニングの仕組みは以下のようになっています。

```json
"package": "MAJOR.MINOR.PATCH"
```

互換性のない API 変更を加える場合は、MAJOR バージョンをインクリメントする必要があります。 後方互換性のある方法で機能を追加する場合は、MINOR バージョンをインクリメントする必要があります。 後方互換性のあるバグ修正を行う場合は、PATCH バージョンをインクリメントする必要があります。 つまり、PATCH はバグ修正であり、MINOR は新機能の追加ですが、どちらも以前の機能を壊すことはありません。 最後に、MAJOR は、以前のバージョンでは動作しないような変更を追加します。

# --instructions--

`package.json` ファイルの依存関係セクションで、`@freecodecamp/example` のバージョンを変更して、MAJOR バージョンを 1 に、MINOR バージョンを 2 に、PATCH バージョンを 13 にしてください。

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

`"@freecodecamp/example"` のバージョンは `"1.2.13"` である必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.equal(
        packJson.dependencies["@freecodecamp/example"],
        '1.2.13',
        'Wrong version of "@freecodecamp/example". It should be 1.2.13'
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
