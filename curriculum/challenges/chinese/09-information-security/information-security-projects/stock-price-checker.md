---
id: 587d824a367417b2b2512c44
title: 股票价格查看器
challengeType: 4
forumTopicId: 301572
dashedName: stock-price-checker
---

# --description--

构建一个 JavaScript 的全栈应用，在功能上与这个应用相似：<a href="https://stock-price-checker.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://stock-price-checker.freecodecamp.rocks/</a>。

由于所有可靠的股票价格 API 都需要一个 API 密钥，我们已经建立了一个解决方案。 使用 <a href="https://stock-price-checker-proxy.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://stock-price-checker-proxy.freecodecamp.rocks/</a> 获取最新的股票价格信息，而无需注册你自己的密钥。

可以采用下面的任意一种方式完成这个挑战：

-   克隆<a href="https://github.com/freeCodeCamp/boilerplate-project-stockchecker/" target="_blank" rel="noopener noreferrer nofollow">这个 GitHub 仓库</a>，并在本地完成你的项目。
-   使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-project-stockchecker" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 上的初始化项目</a>来完成你的项目。
-   使用你选择的网站生成器来完成项目。 需要包含我们 GitHub 仓库的所有文件。

如果你使用 Replit，请按照以下步骤设置项目：

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。

当你完成后，请将一个确保正常运行的 demo（项目演示）托管在可以公开访问的平台上。 然后将 demo 的 URL 提交到 Solution Link 字段中。 也可以将项目的源码链接提交到 GitHub Link 字段中。

# --instructions--

1.  将 `NODE_ENV` 设置为 `test`，不带引号，并将 `DB` 设为你的 MongoDB 连接字符串。
2.  在 `routes/api.js` 中完成项目，或者通过创建一个处理程序/控制器来完成项目
3.  添加安全功能到 `server.js`。
4.  在 `tests/2_functional-tests.js` 中创建所有的功能测试

**注意** 隐私考虑：由于每个 IP 只能接受一个赞（like），你必须保存 IP 地址。 必须遵守数据隐私法规，例如《通用数据保护条例》。 一个选项是获得保存用户数据的权限，但是匿名化则要简单得多。 对于此挑战，请记住在将 IP 地址保存到数据库之前对其进行匿名化。 如果你想知道如何做到这一点，你可以选择散列数据、截断它、或将 IP 地址的一部分设置为 0。

在 `tests/2_functional-tests.js` 中编写以下测试：

-   查看股价：发送 GET 请求到 `/api/stock-prices/`
-   查看一个股票并关注它：发送 GET 请求到 `/api/stock-prices/`
-   查看同一只股票并再次发送关注：发送 GET 请求到 `/api/stock-prices/`
-   查看两只股票：发送 GET 请求到 `/api/stock-prices/`
-   查看两只股票并关注它：发送 GET 请求到 `/api/stock-prices/`

# --hints--

你可以提交你自己的项目，而不是示例的 URL。

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

`stockData` 属性包括字符串 `stock`、数字 `price`，以及数字 `likes`。

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

你也可以将 `like` 字段作为 `true`（布尔值）传递，将你的偏好添加到股票中。 每个 IP 应该只接受 1 个赞（like）。

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
