---
id: 587d824f367417b2b2512c5c
title: 使用无头浏览器模拟操作
challengeType: 2
dashedName: simulate-actions-using-a-headless-browser
---

# --description--

请注意，本项目在[这个 Repl.it 项目](https://repl.it/github/freeCodeCamp/boilerplate-mochachai)的基础上进行开发。你也可以从 [GitHub](https://repl.it/github/freeCodeCamp/boilerplate-mochachai) 上克隆。

在接下来的挑战中，我们将使用名为 “Headless Browser（无头浏览器）” 的设备模拟人与页面的交互。

无头浏览器是没有图形用户界面的 Web 浏览器。 这种工具对于测试网页特别有用，因为它能够以与浏览器相同的方式呈现和理解 HTML、CSS 和 JavaScript。

针对这些挑战，我们使用 Zombie.JS。 它是一个轻量级浏览器，完全基于 JS，而不需要额外的二进制文件来安装。 这个功能使我们可以在 Repl.it 等环境中使用它。 还有许多其他（更强大的）选择。

Mocha 允许你在实际测试之前准备一些代码运行的基础。 这可能有助于例如在数据库中创建项目，用于连续测试。

使用无头浏览器，在进行实际测试之前，我们需要**访问**我们将要检查的页面。 `suiteSetup` “hook” 仅在套件启动时执行。 其他不同的钩子类型可以在每次测试之前、每次测试之后或者在套件的末尾执行。 更多信息请参阅 Mocha 文档。

# --instructions--

在 `tests/2_functional-tests.js`中，紧接着 `Browser` 声明之后，将你的项目 URL 添加到变量的 `site` 属性：

```js
Browser.site = 'https://sincere-cone.gomix.me'; // Your URL here
```

如果你在本地环境中测试，则替换上面的代码为：

```js
Browser.localhost('example.com', process.env.PORT || 3000);
```

在 `tests/2_functional-tests.js` 中，在 `'Functional Tests with Zombie.js'` 套件的底部，使用以下代码实例化一个新的 `Browser` 对象：

```js
const browser = new Browser();
```

然后，通过以下代码，使用 `suiteSetup` 钩子把 `browser` 指向 `/` 路由：

```js
suiteSetup(function(done) {
  return browser.visit('/', done);
});
```

# --hints--

应通过所有测试。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional').then(
    (data) => {
      data.slice(0, 4).forEach((test) => {
        assert.equal(test.state, 'passed');
      })
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
