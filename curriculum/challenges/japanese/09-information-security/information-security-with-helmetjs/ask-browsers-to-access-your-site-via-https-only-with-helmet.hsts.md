---
id: 587d8248367417b2b2512c3c
title: helmet.hsts() を使用して、HTTPS 経由でサイトにアクセスするようブラウザーに指示する
challengeType: 2
forumTopicId: 301573
dashedName: ask-browsers-to-access-your-site-via-https-only-with-helmet-hsts
---

# --description--

注意点として、このプロジェクトは [Replit](https://replit.com/github/freeCodeCamp/boilerplate-infosec) にある次のスタータープロジェクトをベースに構築されているか、または [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) からクローンされています。

HTTP Strict Transport Security (HSTS) は、プロトコルのダウングレード攻撃や Cookie のハイジャックからウェブサイトを保護するのに役立つウェブセキュリティポリシーです。 自分のウェブサイトが HTTPS 経由でのアクセスに対応している場合、ユーザーのブラウザーに対して、安全でない HTTP の使用を避けるよう求めることができます。 Strict-Transport-Security ヘッダーを設定することで、ブラウザーに対して、指定された期間、以降のリクエストで HTTPS を使用するよう指示します。 このポリシーは、最初のリクエスト後に発生するリクエストに対して有効になります。

# --instructions--

今後 90 日間 HTTPS を使用するように `helmet.hsts()` を設定してください。 config オブジェクト `{maxAge: timeInSeconds, force: true}` を渡してください。 変数 `ninetyDaysInSeconds = 90*24*60*60;` を作成し、 `timeInSeconds` に使用することができます。 Replit ではすでに hsts が有効になっています。 この設定を上書きするには、config オブジェクトの "force" フィールドを true に設定する必要があります。 Replit のヘッダーをインターセプトし、テストのために検査した後、復元します。

注：カスタムのウェブサイトで HTTPS を設定するには、ドメインと SSL/TLS 証明書を取得する必要があります。

# --hints--

helmet.hsts() ミドルウェアを正しくマウントする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'hsts');
      assert.property(data.headers, 'strict-transport-security');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

maxAge を 7776000 秒 (90 日) にする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.match(
        data.headers['strict-transport-security'],
        /^max-age=7776000;?/
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
