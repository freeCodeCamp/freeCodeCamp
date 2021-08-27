---
id: 587d824a367417b2b2512c44
title: 股票价格查看器
challengeType: 4
forumTopicId: 301572
dashedName: stock-price-checker
---

# --description--

构建一个 JavaScript 的全栈应用，在功能上与这个应用相似：<https://stock-price-checker.freecodecamp.rocks/>。

由于所有可靠的股票价格 API 都需要一个 API 密钥，我们已经建立了一个解决方案。 使用 [https://stock-price-checer-proxy.freecodecamp.rocks/](https://stock-price-checker-proxy.freecodecamp.rocks/) 获取最新的股票价格信息，而无需注册您自己的密钥。

可以采用下面的任意一种方式完成这个挑战：

-   克隆 [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-stockchecker/) 并在本地完成项目。
-   使用[我们的 Replit 启动项目](https://replit.com/github/freeCodeCamp/boilerplate-project-stockchecker)来完成你的项目。
-   使用你选择的网站生成器来完成项目。 需要包含我们 GitHub 仓库的所有文件。

完成本项目后，请将一个正常运行的 demo（项目演示）托管在可以公开访问的平台。 然后将 URL 提交到 `Solution Link` 中。 此外，还可以将项目的源码提交到 `GitHub Link` 中。

# --instructions--

1.  将 `NODE_ENV` 设置为 `test`，不带引号，并将 `DB` 设为你的 MongoDB 连接字符串。
2.  在 `routes/api.js` 中完成项目，或者通过创建一个处理程序/控制器来完成项目
3.  添加安全功能到 `server.js`。
4.  在 `tests/2_functional-tests.js` 中创建所有的功能测试

在 `tests/2_functional-tests.js` 中编写下以下测试：

-   查看股价：发送 GET 请求到 `/api/stock-prices/`
-   查看一个股票并关注它：发送 GET 请求到 `/api/stock-prices/`
-   查看同一只股票并再次发送关注：发送 GET 请求到 `/api/stock-prices/`
-   查看两只股票：发送 GET 请求到 `/api/stock-prices/`
-   查看两只股票并关注它：发送 GET 请求到 `/api/stock-prices/`

# --hints--

提交自己的项目，而不是示例的 URL。

```js
(getUserInput) => {
  assert(
    !/.*\/stock-price-checker\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

将内容安全策略设置为仅允许从服务器加载脚本和 CSS。

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

你可以向 `/api/stock-prices` 发送一个 `GET` 请求，将纳斯达克股票代码赋值给 `stock` 查询参数。 返回的对象将包含一个名为 `stockData` 的属性。

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  assert.property(parsed, 'stockData');
};
```

`stockData` 属性包括字符串 `stock` 代码、数字 `price`，以及数字 `likes`。

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

你也可以用作为 `true`（布尔值）来传递 `like` 字段，让你的偏好添加到股票中。 每个 IP 应该只接受 1 个赞。

```js

```

如果你传递了两只股票，返回值将是一个包含这两只股票信息的数组。 它将会显示对于两个 `stockData` 对象的 `rel_likes`（两只股票所获得的赞同数的区别），而不是 `likes`。

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

所有 5 项功能测试都已完成并通过。

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
