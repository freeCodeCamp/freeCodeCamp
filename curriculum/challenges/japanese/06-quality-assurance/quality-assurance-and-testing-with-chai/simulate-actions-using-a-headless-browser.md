---
id: 587d824f367417b2b2512c5c
title: ヘッドレスブラウザーを使用してアクションをシミュレートする
challengeType: 2
dashedName: simulate-actions-using-a-headless-browser
---

# --description--

注意点として、このプロジェクトは <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> にあるスタータープロジェクトをベースに構築されているか、または <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> からクローンされています。

次のチャレンジでは、ヘッドレスブラウザーを使用してページと人間のやり取りをシミュレートします。

ヘッドレスブラウザーは、GUI を持たないウェブブラウザーです。 通常のブラウザーと同じように、HTML、CSS、および JavaScript をレンダーして解釈することができます。 特にウェブページのテストに役立ちます。

以降のチャレンジでは、Zombie.js を使用します。これは、追加のバイナリをインストールしなくても動作する軽量のヘッドレスブラウザーです。 この機能により、Replit のような限られた環境で使用できます。 ただし、他にも多くの高機能なヘッドレスブラウザーがあります。

Mocha では、実際のテストが実行される前にコードを実行できます。 これは、以降のテストで使用するデータベースへのエントリの追加などの操作を行うのに便利です。

ヘッドレスブラウザーでテストを行う前に、テストを行うページに**アクセス**してください。

`suiteSetup` フックは、テストスイートの始めに一度だけ実行されます。

他にも、各テストの前、各テストの後、またはテストスイートの終わりにコードを実行できるいくつかのフックタイプがあります。 詳細については、Mocha のドキュメントを参照してください。

# --instructions--

`tests/2_functional-tests.js` の中の `Browser` 宣言の直後で、変数の `site` プロパティにプロジェクトの URL を追加してください。

```js
Browser.site = 'https://boilerplate-mochachai.your-username.repl.co'; // Your URL here
```

次に、`'Functional Tests with Zombie.js'` スイートのルートレベルで、次のコードを使用して `Browser` オブジェクトの新しいインスタンスを生成してください。

```js
const browser = new Browser();
```

そして、次のコードを使用して、`suiteSetup`フックで `browser` を `/` ルートに移動させてください。

```js
suiteSetup(function(done) {
  return browser.visit('/', done);
});
```

# --hints--

すべてのテストが成功する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.state, 'passed');
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
