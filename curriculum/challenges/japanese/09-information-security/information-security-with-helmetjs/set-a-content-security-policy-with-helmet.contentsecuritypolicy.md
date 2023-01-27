---
id: 587d8249367417b2b2512c3f
title: helmet.contentSecurityPolicy() を使用してコンテンツセキュリティポリシーを設定する
challengeType: 2
forumTopicId: 301585
dashedName: set-a-content-security-policy-with-helmet-contentsecuritypolicy
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

このチャレンジでは、最新のブラウザーでさまざまなタイプの攻撃のリスクや影響を大幅に軽減することができる、新しい有望な防御方法を紹介します。 コンテンツセキュリティポリシー (CSP) を設定および構成すると、意図しないものがページに挿入されるのを防ぐことができます。 これにより、XSS の脆弱性、望ましくないトラッキング、悪意のあるフレームなどのさまざまな攻撃からアプリが保護されます。 CSP を機能させるには、信頼できるコンテンツソースの許可リストを定義します。 これらは、ウェブページが必要とするリソースの種類ごと (スクリプト、スタイルシート、フォント、フレーム、メディアなど) に構成できます。 複数のディレクティブを利用できるため、ウェブサイトの所有者はきめ細かい制御が可能です。 詳細については、HTML 5 Rocks、KeyCDN を参照してください。 Unfortunately CSP is unsupported by older browsers.

デフォルトでは、ディレクティブは制限が緩く設定されているため、defaultSrc ディレクティブをフォールバックとして設定することが重要です。 Helmet は、defaultSrc と default-src の両方の命名スタイルをサポートしています。 フォールバックは、指定されていないほとんどのディレクティブに適用されます。

# --instructions--

この課題では `helmet.contentSecurityPolicy()` を使用してください。 `directives` オブジェクトを追加してポリシーを構成してください。 オブジェクトの中で、`defaultSrc` を `["'self'"]` に設定し (ソースの許可リストは配列である必要があります)、デフォルトで自分のウェブサイトのアドレスだけを信頼するようにしてください。 また、`scriptSrc` ディレクティブを設定して、自分のウェブサイト (`'self'`) とドメイン `'trusted-cdn.com'` からのスクリプトのダウンロードのみを許可してください。

ヒント: `'self'` キーワードでは、シングルクォートがキーワード自体の一部となっているため、有効にするにはダブルクォートで囲む必要があります。

# --hints--

helmet.contentSecurityPolicy() ミドルウェアを正しくマウントする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'csp');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

csp の config は正しくありません。 defaultSrc を ["'self'"] にし、scriptSrc を ["'self'", 'trusted-cdn.com'] にする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      var cspHeader = Object.keys(data.headers).filter(function (k) {
        return (
          k === 'content-security-policy' ||
          k === 'x-webkit-csp' ||
          k === 'x-content-security-policy'
        );
      })[0];
      assert.equal(
        data.headers[cspHeader],
        "default-src 'self'; script-src 'self' trusted-cdn.com"
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
