---
id: 5895f700f9fc0f352b528e63
challengeType: 2
forumTopicId: 301564
title: 设置模板引擎
---

## Description

<section id='description'>

请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://repl.it/github/freeCodeCamp/boilerplate-mochachai'>GitHub</a> 上克隆。

你可以在应用的模版引擎中使用静态模板文件（如那些写在 <em>Pug</em> 里的）。在运行时，模版引擎会用服务端的真实数据替换掉模版文件中的变量，然后将模版转译成发送给客户端的 HTML 静态文件。这样可以轻松地构造 HTML 页面，允许在页面直接显示变量内容而不需要发送 API 请求。

为了在项目中使用 <em>Pug</em>，你需要在 package.json 中添加依赖 <code>"pug": "^0.1.0"</code>。注意，依赖的名称和版本号都要添加。

为了在 Express 中使用 pug 作为模版引擎，你需要在 express 中将 <b>app</b> 的 "view-engine" 设置为 "pug"，就像这样：<code>app.set('view engine', 'pug')</code>。

如果没有正确的 <em>render</em> <em>'views/pug'</em> 路径下的 index 文件，页面将不会被加载。

最后, 你需要修改 <code>res.render()</code> 方法，设置 <code>/</code> 的响应。<code>res.render()</code> 方法接收一个文件路径作为参数，这个路径既可以是相对路径（相对于 views），也可以是绝对路径。而且，我们不需要给它添加文件扩展名（文件后缀名）。

如果一切顺利，刷新一下应用的主页就不会看到 "Pug template is not defined." 的报错了，而是会看到 Pug 成功加载的提示。

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 <a href='https://gist.github.com/camperbot/3515cd676ea4dfceab4e322f59a37791' target='_blank'>这里</a> 的答案。

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: 项目中应使用 Pug 作为依赖。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'pug', 'Your project should list "pug" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 项目中应使用 Pug 作为模版引擎。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /('|")view engine('|"),( |)('|")pug('|")/gi, 'Your project should set Pug as a view engine'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 在 Response 里使用正确的 ExpressJS 方法渲染主页面。
    testString: getUserInput => $.get(getUserInput('url')+ '/') .then(data => { assert.match(data, /FCC Advanced Node and Express/gi, 'You successfully rendered the Pug template!'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Pug 应该生效。
    testString: getUserInput => $.get(getUserInput('url')+ '/') .then(data => { assert.match(data, /pug-success-message/gi, 'Your projects home page should now be rendered by pug with the projects .pug file unaltered'); }, xhr => { throw new Error(xhr.statusText); })
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
