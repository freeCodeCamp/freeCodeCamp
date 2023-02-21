---
id: 5895f700f9fc0f352b528e63
title: 设置模板引擎
challengeType: 2
forumTopicId: 301564
dashedName: set-up-a-template-engine
---

# --description--

你可以采用下面的任意一种方式完成这些挑战：

- 克隆<a href="https://github.com/freeCodeCamp/boilerplate-advancednode/" target="_blank" rel="noopener noreferrer nofollow">这个 GitHub 仓库</a>，并在本地完成这些挑战。
- 使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-advancednode" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 上的初始化项目</a>来完成这些挑战。
- 使用一个你选择的站点生成器来完成项目。 需要确定包含了我们 GitHub 仓库的所有文件。

如果你使用 Replit，请按照以下步骤设置项目：

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。

当你完成后，请将一个确保正常运行的 demo（项目演示）托管在可以公开访问的平台上。 然后将 demo 的 URL 提交到 Solution Link 字段中。

模板引擎使你可以在应用程序中使用静态模板文件（例如用 *Pug* 编写的文件）。 在运行时，模版引擎会用服务端的真实数据替换掉模版文件中的变量。 然后将模版转译成发送给客户端的 HTML 静态文件。 这样可以轻松地构造 HTML 页面，允许在页面直接显示变量内容而不需要从客户端发送 API 请求。

`pug@~3.0.0` 已经被安装，并且在你项目的 `package.json` 文件中作为依赖。

Express 需要知道你正在使用哪个模板引擎。 使用 `set` 方法来分配 `pug` 作为 `view engine` 属性的值：

```javascript
app.set('view engine', 'pug');
```

在那之后， 添加另一个 `set` 方法来设置你的 `app` 的 `views` 属性，指向 `./views/pug` 目录。 这告诉 Express 要渲染所有与那个目录相关的视图。

最后，在主页的路由中使用 `res.render()`，传递 `index` 作为第一个参数。 这将渲染 `pug` 模板。

如果全部按计划进行，你的应用主页将不再留空。 相反，它将显示一条消息，表明你已经成功渲染了Pug 模板！

完成上述要求后，请提交你的页面链接。 如果你遇到错误，可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-a-template-engine-1" target="_blank" rel="noopener noreferrer nofollow">查看已完成的项目</a>。

# --hints--

项目中应使用 Pug 作为依赖。

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'pug',
    'Your project should list "pug" as a dependency'
  );
}
```

View 引擎应该是 Pug。

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.['view engine'], "pug");
}
```

你应该将应用程序的 `views` 属性设置为 `./views/pug`。

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.views, "./views/pug");
}
```

使用正确的 ExpressJS 方法渲染来自响应的索引页。

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /FCC Advanced Node and Express/gi,
        'You successfully rendered the Pug template!'
      );
    }
```

Pug 应该正常运行。

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /pug-success-message/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
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
