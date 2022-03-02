---
id: 587d7fb4367417b2b2512bfe
title: package.json にライセンスを追加する
challengeType: 2
forumTopicId: 301523
dashedName: add-a-license-to-your-package-json
---

# --description--

`license` フィールドでは、プロジェクトに対して許可することをユーザーに知らせます。

オープンソース プロジェクトのライセンスは MIT や BSD などが一般的です。 ライセンス情報は必須ではありません。ほとんどの国の著作権法では、特に断りがない限り、著作者に所有権が与えられます。 しかし、ユーザーができることとできないことを常に明確に記述しておくことを推奨します。 ライセンスフィールドの例を次に示します。

```json
"license": "MIT",
```

# --instructions--

プロジェクトの package.json ファイル内の `license` フィールドを適切に記述してください。

# --hints--

package.json で、有効な「license」キーを記述する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.license, '"license" is missing');
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
