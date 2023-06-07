---
id: 587d8247367417b2b2512c39
title: >-
  helmet.xssFilter() を使用してクロスサイトスクリプティング (XSS) 攻撃のリスクを軽減する
challengeType: 2
forumTopicId: 301583
dashedName: mitigate-the-risk-of-cross-site-scripting-xss-attacks-with-helmet-xssfilter
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

クロスサイトスクリプティング (XSS) はよくある攻撃の一種で、セッションの cookie やパスワードなどの機密データを盗む目的で、悪意のあるスクリプトを脆弱なページに挿入するものです。

XSS 攻撃のリスクを軽減するための基本的なルールはシンプルで、「ユーザーの入力を決して信用しない」ことです。 開発者は外部からのすべての入力を常にサニタイズ (洗浄) する必要があります。 そうした入力には、フォームからのデータ、GET クエリ URL からのデータ、さらには POST ボディからのデータなどがあります。 サニタイズとは、&lt;、> といったの危険性のある文字を検出してエンコードすることです。

最新のブラウザーでは、より優れたソフトウェア戦略が採用されており、リスクの軽減に役立つ可能性があります。 多くの場合、それらは http ヘッダーを介して設定できます。

X-XSS-Protection HTTP ヘッダーは、基本的な保護機能です。 ブラウザーは、ヒューリスティック (発見的) フィルターを使用して、挿入される可能性のあるスクリプトを検出します。 このヘッダーが有効であると、ブラウザーによってスクリプトコードが変更され、コードが無害化されます。 ただし、サポートはまだ限定的です。

# --instructions--

`helmet.xssFilter()` を使用して、サーバーに送信される入力をサニタイズしてください。

# --hints--

helmet.xssFilter() ミドルウェアを正しくマウントする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'xXssProtection');
      assert.property(data.headers, 'x-xss-protection');
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
