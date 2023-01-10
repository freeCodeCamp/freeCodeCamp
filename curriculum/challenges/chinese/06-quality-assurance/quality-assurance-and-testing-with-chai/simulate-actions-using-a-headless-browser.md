---
id: 587d824f367417b2b2512c5c
title: 使用无头浏览器模拟操作
challengeType: 2
dashedName: simulate-actions-using-a-headless-browser
---

# --description--

请注意，本项目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化项目的基础上进行开发，你也可以从 <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

在接下来的挑战中，你将使用无头浏览器模拟人类与页面的交互。

无头浏览器是没有 GUI 的 Web 浏览器。 它们能够以与常规浏览器相同的方式呈现和解释 HTML、CSS 和 JavaScript，这使得它们对于测试网页特别有用。

在下面的挑战中，你将使用Zombie.js，它是一个轻量级的无头浏览器，不依赖额外的二进制文件来安装。 这一特点使其可以在 Replit 这样的有限环境中使用。 但是还有许多其他更强大的无头浏览器选项。

Mocha 允许你在任何实际测试运行之前运行一些代码。 这对做一些事情很有用，比如向数据库添加条目，这些条目将在其余测试中使用。

使用无头浏览器，在运行测试之前，你需要 **访问** 你要测试的页面。

`suiteSetup` 钩子仅在测试套件开始时执行一次。

还有其他几种钩子类型，可以在每次测试前、每次测试后或测试套件结束时执行代码。 有关更多信息，请参阅 Mocha 文档。

# --instructions--

在 `tests/2_functional-tests.js` 中，紧跟在 `Browser` 声明之后，将你的项目 URL 添加到变量的 `site` 属性：

```js
Browser.site = 'https://boilerplate-mochachai.your-username.repl.co'; // Your URL here
```

然后在 `'Functional Tests with Zombie.js'` 套件的根级别，使用以下代码实例化 `Browser` 对象的新实例：

```js
const browser = new Browser();
```

并使用 `suiteSetup` 钩子将 `browser` 定向到带有以下代码的 `/` 路由：

```js
suiteSetup(function(done) {
  return browser.visit('/', done);
});
```

# --hints--

应通过所有测试。

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
