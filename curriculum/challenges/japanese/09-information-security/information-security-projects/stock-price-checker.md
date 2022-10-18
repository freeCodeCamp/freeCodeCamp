---
id: 587d824a367417b2b2512c44
title: 株価チェッカー
challengeType: 4
forumTopicId: 301572
dashedName: stock-price-checker
---

# --description--

Build a full stack JavaScript app that is functionally similar to this: <a href="https://stock-price-checker.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://stock-price-checker.freecodecamp.rocks/</a>.

信頼できる株価 API の利用にはすべて API キーが必要になるため、ここでは回避策を用意しました。 Use <a href="https://stock-price-checker-proxy.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://stock-price-checker-proxy.freecodecamp.rocks/</a> to get up-to-date stock price information without needing to sign up for your own key.

プロジェクトに取り組むにあたり、以下の方法のうち 1 つを用いてコードを記述します。

-   Clone <a href="https://github.com/freeCodeCamp/boilerplate-project-stockchecker/" target="_blank" rel="noopener noreferrer nofollow">this GitHub repo</a> and complete your project locally.
-   Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-stockchecker" target="_blank" rel="noopener noreferrer nofollow">our Replit starter project</a> to complete your project.
-   使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

完了したら、プロジェクトの動作デモをどこか公開の場にホストしてください。 そして、`Solution Link` フィールドでデモへの URL を送信してください。 必要に応じて、`GitHub Link` フィールドでプロジェクトのソースコードへのリンクを送信してください。

# --instructions--

1.  `NODE_ENV` を引用符なしの `test` に設定し、`DB` を MongoDB 接続文字列に設定します。
2.  `routes/api.js` でプロジェクトを完成させるか、ハンドラー/コントローラーを作成します。
3.  `server.js` にセキュリティ機能を追加します。
4.  `tests/2_functional-tests.js` にすべての機能テストを作成します。

**注**: プライバシーに対する注意事項: 1 つの IP に対して 1 つの「いいね！」しか受け付けないという条件があるため、IP アドレスを保存する必要があります。 一般データ保護規則などのデータプライバシー関連の法令を遵守することが重要です。 ユーザーのデータを保存するための権限を取得するという方法もありますが、データを匿名化した方がはるかに簡単です。 このチャレンジでは、データベースに保存する前に必ず IP アドレスを匿名化してください。 その方法として、データをハッシュ化する、切り詰める、IP アドレスの一部を 0 にする、などが考えられます。

次のテストを `tests/2_functional-tests.js` に記述してください。

-   1 つの株式を表示: `/api/stock-prices/` への GET リクエスト
-   1 つの株式を表示して「いいね！」をクリック: `/api/stock-prices/` への GET リクエスト
-   もう一度同じ株式を表示して「いいね！」をクリック: `/api/stock-prices/` への GET リクエスト
-   2 つの株式を表示: `/api/stock-prices/` への GET リクエスト
-   2 つの株式を表示して「いいね！」をクリック: `/api/stock-prices/` への GET リクエスト

# --hints--

サンプルの URL ではなく、自分で作成したプロジェクトを提供することができます。

```js
(getUserInput) => {
  assert(
    !/.*\/stock-price-checker\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

コンテンツセキュリティポリシーを設定して、自分のサーバーからのスクリプトや CSS の読み込みのみを許可するようにしてください。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("script-src 'self'")
  );
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("style-src 'self'")
  );
};
```

`GET` リクエストを `/api/stock-prices` に送信し、NASDAQ 株式表示記号を `stock` クエリパラメーターに渡すことができます。 返されるオブジェクトには、`stockData` というプロパティが含まれます。

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  assert.property(parsed, 'stockData');
};
```

`stockData` プロパティには、文字列としての `stock` 記号、数値としての `price`、数値としての `likes` が含まれています。

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker.price, 'number');
  assert.typeOf(ticker.likes, 'number');
  assert.typeOf(ticker.stock, 'string');
};
```

また、`like` フィールドに `true` (ブール値) を渡すと、その株式の「いいね！」が増えます。 「いいね！」は、1 つの IP につき 1 回のみ受け付ける必要があります。

```js

```

2 つの株式を渡した場合、返される値は 2 つの株式に関する情報を持つ配列となります。 `likes` の代わりに、両方の `stockData` オブジェクトの `rel_likes` (両株式の「いいね！」の差) を表示します。

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG&stock=MSFT'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker, 'array');
  assert.property(ticker[0], 'rel_likes');
  assert.property(ticker[1], 'rel_likes');
};
```

5 種類の機能テストがすべて完了して、合格です。

```js
async (getUserInput) => {
  const tests = await fetch(getUserInput('url') + '/_api/get-tests');
  const parsed = await tests.json();
  assert.isTrue(parsed.length >= 5);
  parsed.forEach((test) => {
    assert.equal(test.state, 'passed');
  });
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
