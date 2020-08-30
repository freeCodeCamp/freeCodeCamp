---
id: 587d7fb1367417b2b2512bf3
title: Implement a Root-Level Request Logger Middleware
localeTitle: 实现根级请求记录器中间件
challengeType: 2
---

## Description
<section id='description'> 在我们介绍<code>express.static()</code>中间件函数之前。现在是时候更详细地看看中间件是什么了。中间件函数是带有3个参数的函数：请求对象，响应对象和应用程序请求 - 响应周期中的下一个函数。这些函数执行一些可能对应用程序产生副作用的代码，并且通常会向请求或响应对象添加信息。当满足某些条件时，它们还可以结束发送响应的循环。如果他们没有发送响应，当他们完成时，他们开始执行堆栈中的下一个函数。触发调用第三个参数<code>next()</code> 。 <a href='http://expressjs.com/en/guide/using-middleware.html' target='_blank'>快递文档</a>中的更多信息。 查看以下示例： 
<blockquote>function(req, res, next) {<br>  console.log("I'm a middleware...");<br>  next();<br>}</blockquote> 假设我们在路线上安装了此功能。当请求与路由匹配时，它会显示字符串“我是中间件......”。然后它执行堆栈中的下一个函数。 在本练习中，我们将构建一个根级中间件。正如我们在挑战4中所见，要在根级别安装中间件功能，我们可以使用方法<code>app.use(&lt;mware-function&gt;)</code> 。在这种情况下，将对所有请求执行该功能，但您也可以设置更具体的条件。例如，如果您希望仅为POST请求执行某个函数，则可以使用<code>app.post(&lt;mware-function&gt;)</code> 。所有http动词都有类似的方法（GET，DELETE，PUT，...）。
</section>

## Instructions
<section id='instructions'> 
构建一个简单的记录器。对于每个请求，它应该在控制台中登录一个字符串，采用以下格式： <code>method path - ip</code> 。示例如下： <code>GET /json - ::ffff:127.0.0.1</code> 。请注意， <code>method</code>和<code>path</code>之间有一个空格，并且破折号分隔<code>path</code>和<code>ip</code>被两侧的空格包围。您可以使用<code>req.method</code> ， <code>req.path</code>和<code>req.ip</code>从请求对象获取请求方法（http谓词），相对路由路径和调用者的ip。记得在完成后调用<code>next()</code> ，否则你的服务器将永远停留。确保打开“日志”，并查看某些请求到达时会发生什么... 提示：Express按照它们在代码中出现的顺序评估函数。中间件也是如此。如果您希望它适用于所有路由，则应在它们之前安装它。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 根级别记录器中间件应该是活动的
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/root-middleware-logger'').then(data => { assert.isTrue(data.passed, ''root-level logger is not working as expected''); }, xhr => { throw new Error(xhr.responseText); })'

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
