---
id: 587d7fb3367417b2b2512bfc
title: package.json に説明を追加する
challengeType: 2
forumTopicId: 301522
dashedName: add-a-description-to-your-package-json
---

# --description--

正しい package.json ファイルを構成する次の部分は `description` フィールドです。これはプロジェクトに関する簡潔な説明です。

将来パッケージを npm に公開する予定がある場合は、ここにパッケージについて十分理解してもらえるだけの情報を入力してください。ユーザーがこのパッケージをインストールするかどうかを決める時の参考になるからです。 しかし、説明の用法はそれだけではなく、プロジェクトが何をするものなのかをまとめておくのに最適な場所です。 どの Node.js プロジェクトでも、他の開発者や将来の保守作業者、あるいは今後皆さん自身が、プロジェクトについて素早く理解できるようにしておくことが重要です。

プロジェクトの内容に関わらず、説明を記述しておくことをぜひ推奨します。 例を次に示します。

```json
"description": "A project that does something awesome",
```

# --instructions--

プロジェクトの package.json ファイルに `description` を追加してください。

**注: ** フィールド名には二重引用符 (") を使用し、複数フィールドの区切りにはコンマ (,) を使用してください。

# --hints--

package.json で、有効な「description」キーを記述する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.description, '"description" is missing');
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
