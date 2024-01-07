---
id: 589690e6f9fc0f352b528e6e
title: 使用模块清理项目
challengeType: 2
forumTopicId: 301549
dashedName: clean-up-your-project-with-modules
---

# --description--

目前，我们把所有的代码都放到了 `server.js` 文件里， 这会导致代码难以维护，且扩展性差。 现在让我们来创建两个新文件：`routes.js` 和 `auth.js`。

在每个文件的开头，我们都需要写上这段代码：

```js
module.exports = function (app, myDataBase) {

}
```

然后，在 server.js 文件的开头，像这样引入文件：`const routes = require('./routes.js');`。在成功连接数据库之后，像这样进行实例化：`routes(app, myDataBase)`。

最后，把所有路由相关的代码从 server.js 移动到新文件。 不要忘了，`ensureAuthenticated` 方法的定义也要移动到新文件中，这个是我们在之前的挑战中，为在路由中判断用户是否已登录创建的函数。 然后，在 `routes.js`文件开头添加所需要的依赖，如：`const passport = require('passport');`。

如果在这些步骤后没有报错，那么你已成功地从 server.js 文件中分离出了路由文件（**除了 catch block 中的路由**）！

在你的 `auth.js` 文件中做同样的事情，所有与认证有关的事情，如序列化和本地策略的设置，并从你的服务器文件中删除它们。 请正确添加依赖，并在 server.js 中调用 `auth(app, myDataBase)`。

完成上述要求后，请提交你的页面链接。 如果你在运行时出现错误，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#clean-up-your-project-with-modules-2" target="_blank" rel="noopener noreferrer nofollow">查看已完成的项目示例</a>。

# --hints--

应该有模块。

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require\s*\(('|")\.\/routes(\.js)?\1\)/gi,
    'You should have required your new files'
  );
  assert.match(
    data,
    /client\s*\.db[^]*routes/gi,
    'Your new modules should be called after your connection to the database'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
