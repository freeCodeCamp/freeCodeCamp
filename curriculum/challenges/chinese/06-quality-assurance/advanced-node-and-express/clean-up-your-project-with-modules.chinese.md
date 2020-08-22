---
id: 589690e6f9fc0f352b528e6e
title: Clean Up Your Project with Modules
challengeType: 2
videoUrl: ''
localeTitle: 使用模块清理项目
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a>克隆的。现在你拥有的一切都在你的server.js文件中。这可能导致难以管理不易扩展的代码。创建2个新文件：Routes.js和Auth.js两者都应该从以下代码开始： <pre> module.exports = function（app，db）{
<p> } </p></pre>现在位于服务器文件的顶部，需要这样的文件： <code>const routes = require(&#39;./routes.js&#39;);</code>在您与数据库建立成功连接之后，实例化它们中的每一个如下： <code>routes(app, db)</code>最后，获取服务器中的所有路由并将它们粘贴到新文件中并从服务器文件中删除它们。也可以使用ensureAuthenticated，因为我们专门为路由创建了中间件功能。您现在必须正确添加所使用的依赖项，例如<code>const passport = require(&#39;passport&#39;);</code> ，在routes.js文件中导出行的最上方。继续添加它们直到不再存在错误，并且您的服务器文件不再有任何路由！现在在auth.js文件中执行相同的操作，其中包含与身份验证相关的所有内容，例如序列化和本地策略的设置，并从服务器文件中删除它们。确保添加依赖项并在同一位置调用服务器中的<code>auth(app,db)</code> 。确保<code>routes(app, db)</code> <code>auth(app, db)</code>之前有<code>auth(app, db)</code> <code>routes(app, db)</code>因为我们的注册路由取决于发起的护照！恭喜 - 您已经处于Advanced Node和Express的这一部分的末尾，并且有一些漂亮的代码可供展示！当您认为自己已经做对时，请提交您的页面。如果您遇到错误，可以<a href="https://glitch.com/#!/project/delicious-herring">在此处查看</a>已完成项目的示例。 <p></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 存在的模块
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require\s*\(('|")\.\/routes(\.js)?\1\)/gi, 'You should have required your new files'); assert.match(data, /mongo.connect[^]*routes/gi, 'Your new modules should be called after your connection to the database'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
