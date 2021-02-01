---
id: 587d824a367417b2b2512c43
title: 个人图书馆
challengeType: 4
videoUrl: ''
dashedName: personal-library
---

# --description--

构建一个功能类似于此的完整堆栈JavaScript应用程序： [https](https://fuzzy-mink.glitch.me/) ： [//spark-cathedral.glitch.me/](https://fuzzy-mink.glitch.me/) 。在这个项目上工作将涉及您在我们的入门项目上在Glitch上编写代码。完成此项目后，您可以将公共故障网址（到应用程序的主页）复制到此屏幕进行测试！您可以选择在另一个平台上编写项目，但必须公开显示我们的测试。使用[此链接](https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-library/)在Glitch上启动此项目或在GitHub上克隆[此存储库](https://github.com/freeCodeCamp/boilerplate-project-library/) ！如果您使用Glitch，请记住将项目链接保存到安全的地方！

# --hints--

我的网站上的任何内容都不会缓存在我的客户端中。

```js

```

标题会说该网站由'PHP 4.2.0'提供支持，即使它不是（作为安全措施）。

```js

```

我可以将标题发布到/ api / books以添加书籍，并返回将是具有标题和唯一\_id的对象。

```js

```

我可以获取/ api / books来检索包含title，\_id和commentcount的所有书籍的数组。

```js

```

我可以使用/ api / books / {id}来检索包含\_title，\_id和注释数组的书的单个对象（如果没有注释，则为空数组）。

```js

```

我可以在/ api / books / {id}上发表评论，为书籍添加评论，并返回类似于get / api / books / {id}的书籍对象，包括新评论。

```js

```

我可以删除/ api / books / {\_ id}从集合中删除一本书。如果成功，返回将“删除成功”。

```js

```

如果我试图要求一本不存在的书，我将被退回'没有书存在'。

```js

```

我可以向/ api / books发送删除请求以删除数据库中的所有书籍。如果成功，返回将是“完全删除成功”。

```js

```

所有6项功能测试都是完整的并且通过。

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
