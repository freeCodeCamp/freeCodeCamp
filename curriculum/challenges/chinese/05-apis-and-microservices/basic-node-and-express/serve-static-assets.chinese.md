---
id: 587d7fb0367417b2b2512bf0
title: Serve Static Assets
localeTitle: 服务静态资产
challengeType: 2
---

## Description
<section id='description'> 
HTML服务器通常有一个或多个用户可以访问的目录。您可以放置应用程序所需的静态资产（样式表，脚本，图像）。在Express中，您可以使用中间件<code>express.static(path)</code>来实现此功能，其中参数是包含资产的文件夹的绝对路径。如果您不知道中间件是什么，请不要担心。我们稍后会详细讨论它。基本上，中间件是拦截路由处理程序，添加某种信息的函数。需要使用<code>app.use(path, middlewareFunction)</code>方法<code>app.use(path, middlewareFunction)</code> 。第一个路径参数是可选的。如果您没有通过它，将为所有请求执行中间件。 
</section>

## Instructions
<section id='instructions'> 
使用<code>app.use()</code>为所有请求安装<code>express.static()</code>中间件。 assets文件夹的绝对路径是<code>__dirname + /public</code> 。 现在，您的应用应该能够提供CSS样式表。从公共文件夹外部将显示挂载到根目录。你的头版现在应该看起来好一点!
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的应用应该从<code>/public</code>目录提供资产文件
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/style.css'').then(data => { assert.match(data, /body\s*\{[^\}]*\}/, ''Your app does not serve static assets''); }, xhr => { throw new Error(xhr.responseText); })'

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
