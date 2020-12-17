---
id: 587d824a367417b2b2512c44
title: 股票价格检查
challengeType: 4
videoUrl: ''
---

# --description--

构建一个功能类似于此的完整堆栈JavaScript应用程序： [https](https://sphenoid-crater.glitch.me/) ： [//giant-chronometer.glitch.me/](https://sphenoid-crater.glitch.me/) 。在这个项目上工作将涉及您在我们的入门项目上在Glitch上编写代码。完成此项目后，您可以将公共故障网址（到应用程序的主页）复制到此屏幕进行测试！您可以选择在另一个平台上编写项目，但必须公开显示我们的测试。使用[此链接](https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-stockchecker/)在Glitch上启动此项目或在GitHub上克隆[此存储库](https://github.com/freeCodeCamp/boilerplate-project-stockchecker/) ！如果您使用Glitch，请记住将项目链接保存到安全的地方！

# --hints--

将内容安全策略设置为仅允许从服务器加载脚本和css。

```js

```

我可以使用包含纳斯达克股票代码的表格数据获得/ api /股票价格并收回一个对象stockData。

```js

```

在stockData中，我可以看到股票（字符串，股票代码），价格（字符串格式的小数）和喜欢（int）。

```js

```

我也可以传递像true（boolean）这样的字段来将我的喜欢添加到股票中。每个IP应该只接受1个。

```js

```

如果我传递2只股票，则返回对象将是一个包含股票信息的数组。而不是喜欢，它将显示两者上的rel_likes（两只股票之间的差异）。

```js

```

获得当前价格的一个好方法是使用以下外部API（用您的股票替换“GOOG”）：https：//finance.google.com/finance/info？q = NASDAQ％3AOGOOG

```js

```

所有5个功能测试都已完成并通过。

```js

```

# --solutions--

