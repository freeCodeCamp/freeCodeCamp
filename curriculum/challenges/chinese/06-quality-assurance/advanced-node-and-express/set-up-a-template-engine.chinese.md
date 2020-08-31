---
id: 5895f700f9fc0f352b528e63
title: Set up a Template Engine
challengeType: 2
videoUrl: ''
localeTitle: 设置模板引擎
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a>克隆的。模板引擎使您可以在应用程序中使用静态模板文件（例如用<em>Pug</em>编写的文件）。在运行时，模板引擎将模板文件中的变量替换为可由服务器提供的实际值，并将模板转换为静态HTML文件，然后将其发送到客户端。这种方法可以更轻松地设计HTML页面，并允许在页面上显示变量，而无需从客户端进行API调用。要设置<em>Pug</em>以便在项目中使用，您需要先在package.json中将其作为依赖项添加。 <code>&quot;pug&quot;: &quot;^0.1.0&quot;</code>现在告诉Node / Express使用模板引擎，你必须告诉你的快递<b>应用程序</b> <b>将</b> &#39;pug&#39; <b>设置</b>为&#39;view-engine&#39;。 <code>app.set(&#39;view engine&#39;, &#39;pug&#39;)</code>最后，你应该改变请求您响应该指数路线<code>res.render</code>与路径视图<em>意见/哈巴狗/ index.pug。</em>如果一切按计划进行，您应该刷新应用程序主页并看到一条小消息，说您已成功从我们的Pug文件中删除Pug！当您认为自己已经做对时，请提交您的页面。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 帕格是一个依赖
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'pug', 'Your project should list "pug" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 查看引擎是帕格
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /('|")view engine('|"),( |)('|")pug('|")/gi, 'Your project should set Pug as a view engine'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 帕格正在工作
    testString: getUserInput => $.get(getUserInput('url')+ '/') .then(data => { assert.match(data, /pug-success-message/gi, 'Your projects home page should now be rendered by pug with the projects .pug file unaltered'); }, xhr => { throw new Error(xhr.statusText); })

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
