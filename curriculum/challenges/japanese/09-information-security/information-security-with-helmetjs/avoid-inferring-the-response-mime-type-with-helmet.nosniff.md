---
id: 587d8248367417b2b2512c3a
title: helmet.noSnifff() を使用して、レスポンスの MIME タイプの推測を回避する
challengeType: 2
forumTopicId: 301574
dashedName: avoid-inferring-the-response-mime-type-with-helmet-nosniff
---

# --description--

注意点として、このプロジェクトは [Replit](https://replit.com/github/freeCodeCamp/boilerplate-infosec) にある次のスタータープロジェクトをベースに構築されているか、または [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) からクローンされています。 ブラウザーでコンテンツまたは MIME スニッフィングを使用すると、レスポンスの `Content-Type` ヘッダーを上書きし、暗黙のコンテンツタイプを使用してデータを推測し、処理することが可能になります。 これは便利な場合もありますが、危険な攻撃につながる可能性もあります。 このミドルウェアは、X-Content-Type-Options ヘッダーを `nosniff` に設定することで、提供された `Content-Type` を回避しないようにブラウザーに指示します。

# --instructions--

サーバーで `helmet.noSniff()` メソッドを使用してください。

# --hints--

helmet.noSniff() ミドルウェアを正しくマウントする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'nosniff');
      assert.equal(data.headers['x-content-type-options'], 'nosniff');
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
