---
id: 587d7fb1367417b2b2512bf1
challengeType: 2
forumTopicId: 301517
title: 服务指定路由上的 JSON
---

## Description
<section id='description'>
HTML 服务器提供 HTML，API 服务器提供数据。<dfn>REST</dfn>（表现层状态转换）API 允许使用更简易的方式交换数据，从而不需要客户端知道服务器的实现细节。客户端只要知道需请求资源对应的 URL 是什么，以及需要对这个 URL 进行何种操作就够了。比如 GET 这个动作，就是从服务器上获取某些信息，它不会修改任何数据。如今，在 web 上传输数据的首选数据格式是 JSON。简言之，JSON 是一种将 JavaScript 对象表示为字符串的简易方式，因此可以很容易地传输这些数据。
我们来创建一个简单的 API，一个路径为<code>/json</code>且返回数据是 JSON 格式的路由，你可以像之前那样通过<code>app.get()</code>方法来做，然后在路由处理部分使用<code>res.json()</code>方法返回 JSON 格式的数据，这个方法可以接收一个配置对象。这个方法会结束请求响应循环（request-response loop），然后返回数据。<code>res.json()</code>将一个有效的 JavaScript 对象转化为字符串，然后会设置适当的头信息（headers）来告诉浏览器，这是一个 JSON 数据，最后返回给客户端进行处理。一个有效的对象通常是这种结构：<code>{key: data}</code>。数据可以是数字、字符串、嵌套对象或数组。也可以是变量或者函数返回值，在这种情况下，会以它们的执行结果为基准，再转成字符串。
</section>

## Instructions
<section id='instructions'>
当 GET 请求路由<code>/json</code>时，将对象<code>{"message": "Hello json"}</code>作为 JSON 格式返回给客户端。然后在浏览器里输入完整的 URL，比如<code>your-app-url/json</code>，就可以在屏幕上看到这个消息了。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '服务端<code>/json</code>应该返回一个 JSON 对象<code>{"message": "Hello json"}</code>'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/json'').then(data => { assert.equal(data.message, ''Hello json'', ''The \''/json\'' endpoint does not serve the right data''); }, xhr => { throw new Error(xhr.responseText); })'

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
