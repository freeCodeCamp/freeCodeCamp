---
id: 587d7fb1367417b2b2512bf4
title: Chain Middleware to Create a Time Server
localeTitle: 链中间件创建时间服务器
challengeType: 2
---

## Description
<section id='description'>使用<code>app.METHOD(path, middlewareFunction)</code>可以在特定路径上安装<code>app.METHOD(path, middlewareFunction)</code> 。中间件也可以在路由定义中链接。查看以下示例： 
<blockquote>app.get('/user', function(req, res, next) {<br>  req.user = getTheUserSync();  // Hypothetical synchronous operation<br>  next();<br>}, function(req, res) {<br>  res.send(req.user);<br>})</blockquote>此方法可用于将服务器操作拆分为较小的单元。这导致了更好的应用程序结构，以及在不同位置重用代码的可能性。此方法还可用于对数据执行某些验证。在中间件堆栈的每个点，您可以阻止当前链的执行，并将控制权传递给专门用于处理错误的函数。或者您可以将控制权传递给下一个匹配的路径，以处理特殊情况。我们将在高级Express部分中看到如何。在路径<code>app.get('/now', ...)</code>链中间件函数和最终处理程序。在中间件功能中，您应该在<code>req.time</code>键中将当前时间添加到请求对象。您可以使用<code>new Date().toString()</code> 。在处理程序中，使用JSON对象进行响应，采用结构<code>{time: req.time}</code> 。提示：如果不链接中间件，测试将无法通过。如果将函数挂载到其他位置，即使输出结果正确，测试也会失败。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: / now端点应该已经安装了中间件
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/chain-middleware-time'').then(data => { assert.equal(data.stackLength, 2, ''"/now" route has no mounted middleware''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: / now端点应返回从现在起+/- 20秒的时间
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/chain-middleware-time'').then(data => { var now = new Date(); assert.isAtMost(Math.abs(new Date(data.time) - now), 20000, ''the returned time is not between +- 20 secs from now''); }, xhr => { throw new Error(xhr.responseText); })'

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
