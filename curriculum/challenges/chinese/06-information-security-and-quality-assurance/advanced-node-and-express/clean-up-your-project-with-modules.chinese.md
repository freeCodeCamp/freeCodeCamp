---
id: 589690e6f9fc0f352b528e6e
title: Clean Up Your Project with Modules
challengeType: 2
isHidden: false
forumTopicId: 301549
localeTitle: 使用模块清理项目
---

## Description
<section id='description'>
注意，本项目在<a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/'>这个 Glitch 项目</a>的基础上进行开发，你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a> 上克隆。
目前，我们把所有的代码都放到了 server.js 文件里，这会导致代码难以维护，且扩展性差。
现在让我们来创建两个新文件：routes.js 和 auth.js。
在每个文件的开头，我们都需要写上这段代码：

```js
module.exports = function (app, db) {

}
```

然后，在 server.js 文件的开头，我们需要像这样引入文件：<code>const routes = require('./routes.js');</code>
在成功连接数据库之后，我们需要像这样进行实例化：<code>routes(app, db)</code>。
最后，我们需要把所有路由相关的代码从 server.js 移动到新文件 routes.js。不要忘了，<code>ensureAuthenticated</code>方法的定义也要移动到新文件中，这个是我们在之前的挑战中，为在路由中判断用户是否已登录创建的函数。然后，我们还需要在 routes.js 文件开头添加所需要的依赖，如：<code>const passport = require('passport');</code>。
如果在这些步骤后没有报错，那么恭喜你，你已成功地从 server.js 文件中分离出了路由文件。
现在，我们来把 server.js 中与验证相关的代码分离到 auth.js 中，例如序列化，设置验证策略等。请正确添加依赖，并在 server.js 中调用<code>auth(app,db)</code>。另外，由于我们的注册路由依赖 passport，所以我们需要先调用<code>auth(app, db)</code>，再调用<code>routes(app, db)</code>。
Node 和 Express 高级课程至此就告一段落了，你可以在此基础上继续优化和完善这个项目。但至少，现在你也有一些可以展示给大家看的代码了。完成上述要求后，你就可以在左边提交你的页面链接。如果运行出错，你可以在 <a href='https://glitch.com/#!/project/delicious-herring'>here</a> 这里检查你的项目完成情况。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应正确引入新文件。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require\s*\(('|")\.\/routes(\.js)?\1\)/gi, 'You should have required your new files'); assert.match(data, /mongo.connect[^]*routes/gi, 'Your new modules should be called after your connection to the database'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
