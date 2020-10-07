---
id: 587d7fb1367417b2b2512bf3
challengeType: 2
forumTopicId: 301514
title: 实现一个根层的请求记录器中间件
---

## Description
<section id='description'>
前面我们介绍了<code>express.static()</code>中间件函数。现在是时候更详细地了解什么是中间件了。中间件是一个接收 3 个参数的函数：请求对象、响应对象和在应用请求响应循环中的下一个函数。这些函数执行一些可能对应用程序产生副作用的代码，通常还会在请求对象或者响应对象里添加一些信息。当满足某些条件时，它们也可以结束发送响应的循环。如果它们没有发送响应，那么当它们完成时就会开始执行堆栈中的下一个函数。这将触发调用第 3 个参数<code>next()</code>。更多信息请查看 <a href='http://expressjs.com/en/guide/using-middleware.html' target='_blank'>express 文档</a>。
看看下面的例子：

```js
function(req, res, next) {
  console.log("I'm a middleware...");
  next();
}
```

假设我们在某个路由上安装了这个中间件函数。当一个请求与路由匹配时，它会显示字符串"我是中间件..."。然后它执行堆栈中的下一个函数。
在这个练习中，我们将构建根级中间件。正如我们在挑战 4 中看到的，要在根层级安装中间件函数，我们可以使用<code>app.use(&lt;mware-function&gt;)</code>方法。在这种情况下，该函数将对所有请求执行，但是你还是可以设置成更具体的条件来执行。举个例子，如果你希望某个函数只针对 POST 请求执行，可以使用<code>app.post(&lt;mware-function&gt;)</code>方法。所有 http 动作都有类似的方法，比如 GET、DELETE、PUT 等等。
</section>

## Instructions
<section id='instructions'>
构建一个简单的日志记录器。对于每个请求，它应该在控制台中记录一个采用以下格式的字符串：<code>method path - ip</code>。一个简单的日志看起来就像这样：<code>GET /json - ::ffff:127.0.0.1</code>。注意<code>method</code>和<code>path</code>有一个空格，并且<code>path</code>和<code>ip</code>中间的破折号两边都有空格。在请求对象中，可以使用<code>req.method</code>、<code>req.path</code>和<code>req.ip</code>获取请求方法（http 动词）、路由相对路径和请求者的 IP 信息。记住，当你完成时，要调用<code>next()</code>方法，否则你的服务器将一直处于挂起状态。请确保 "Logs" 是打开的，观察一下当一些请求被响应时会发生什么……
提示: Express 按照函数在代码中出现的顺序来评估函数。中间件也是如此。如果你想让中间件函数适用于所有路由，那么应该在路由之前配置好中间件。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 根级记录器中间件应该被激活
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/root-middleware-logger'').then(data => { assert.isTrue(data.passed, ''root-level logger is not working as expected''); }, xhr => { throw new Error(xhr.responseText); })'

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
