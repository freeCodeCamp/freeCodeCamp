---
id: 587d7fb1367417b2b2512bf1
title: Serve JSON on a Specific Route
localeTitle: 在特定路线上提供JSON
challengeType: 2
---

## Description
<section id='description'> 虽然HTML服务器提供（您猜对了！）HTML，但API提供数据。 <dfn>REST</dfn> （REpresentational State Transfer）API允许以简单的方式进行数据交换，而无需客户端知道有关服务器的任何细节。客户端只需要知道资源的位置（URL），以及它想要对其执行的操作（动词）。当您获取某些信息而不修改任何信息时，将使用GET动词。目前，用于在Web上移动信息的首选数据格式是JSON。简单地说，JSON是一种将JavaScript对象表示为字符串的便捷方式，因此可以轻松传输。 让我们通过在路径<code>/json</code>处创建一个以JSON响应的路由来创建一个简单的API。您可以像往常一样使用<code>app.get()</code>方法执行此操作。在路由处理程序内部使用方法<code>res.json()</code> ，将对象作为参数传入。此方法关闭请求 - 响应循环，返回数据。在幕后，它将有效的JavaScript对象转换为字符串，然后设置相应的标题以告诉您的浏览器您正在提供JSON，并将数据发回。有效对象具有通常的结构<code>{key: data}</code> 。数据可以是数字，字符串，嵌套对象或数组。数据也可以是变量或函数调用的结果，在这种情况下，它将在转换为字符串之前进行评估。  
</section>

## Instructions
<section id='instructions'> 
将对象<code>{"message": "Hello json"}</code>作为JSON格式的响应提供给对路由<code>/json</code>的GET请求。然后将浏览器指向 <code>your-app-url/json</code>，您应该在屏幕上看到该消息。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'endpoint <code>/json</code>应该服务于json对象<code>{"message": "Hello json"}</code> '
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/json'').then(data => { assert.equal(data.message, ''Hello json'', ''The \''/json\'' endpoint does not serve the right data''); }, xhr => { throw new Error(xhr.responseText); })'

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
