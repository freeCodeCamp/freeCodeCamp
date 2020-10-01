---
id: 589690e6f9fc0f352b528e6e
challengeType: 2
forumTopicId: 301549
title: 使用模块清理项目
---

## Description
<section id='description'>

目前，我们把所有的代码都放到了 server.js 文件里，这会导致代码难以维护，且扩展性差。
现在让我们来创建两个新文件：<code>routes.js</code> 和 <code>auth.js</code>
在每个文件的开头，我们都需要写上这段代码：

```js
module.exports = function (app, myDataBase) {

}
```

然后，在 server.js 文件的开头，我们需要像这样引入文件：<code>const routes = require('./routes.js');</code>
在成功连接数据库之后，我们需要像这样进行实例化：<code>routes(app, myDataBase)</code>。
最后，我们需要把所有路由相关的代码从 server.js 移动到新文件 routes.js。不要忘了，<code>ensureAuthenticated</code> 方法的定义也要移动到新文件中，这个是我们在之前的挑战中，为在路由中判断用户是否已登录创建的函数。然后，我们还需要在 routes.js 文件开头添加所需要的依赖，如：<code>const passport = require('passport');</code>。

如果在这些步骤后没有报错，那么恭喜你，你已成功地从 server.js 文件中分离出了路由文件（**尽管 catch 那部分还是包含了路由的逻辑**）。

现在，我们来把 server.js 中与验证相关的代码分离到 auth.js 中，例如序列化，设置验证策略等。请正确添加依赖，并在 server.js 中调用<code>auth(app,myDataBase)</code>。另外，由于我们的注册路由依赖 passport，所以我们需要先调用<code>auth(app, myDataBase)</code>，再调用<code>routes(app, myDataBase)</code>。

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 <a href='https://gist.github.com/camperbot/2d06ac5c7d850d8cf073d2c2c794cc92' target='_blank'>这里</a> 的答案。

Submit your page when you think you've got it right. If you're running into errors, you can check out an example of the completed project <a href='https://gist.github.com/camperbot/2d06ac5c7d850d8cf073d2c2c794cc92' target='_blank'>here</a>.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应正确引入新文件。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require\s*\(('|")\.\/routes(\.js)?\1\)/gi, 'You should have required your new files'); assert.match(data, /client.db[^]*routes/gi, 'Your new modules should be called after your connection to the database'); }, xhr => { throw new Error(xhr.statusText); })

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
