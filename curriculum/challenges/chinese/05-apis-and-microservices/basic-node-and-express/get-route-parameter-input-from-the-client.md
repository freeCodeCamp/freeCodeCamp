---
id: 587d7fb2367417b2b2512bf5
challengeType: 2
forumTopicId: 301513
title: 从客户端获取路由参数输入
---

## Description
<section id='description'>
在构建 API 时，我们要让用户告诉我们他们想从服务中获取什么。举个例子，如果客户请求数据库中存储的用户信息，他们需要一种方法让我们知道他们对哪个用户感兴趣。实现这个需求的的方式就是使用路由参数。路由参数是由斜杠 (/) 分隔的 URL 命名段。每一小段能捕获与其位置匹配的 URL 部分的值。捕获的值能够在<code>req.params</code>对象中找到。
<blockquote>route_path: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote>
</section>

## Instructions
<section id='instructions'>
在路由中<code>GET /:word/echo</code>构建一个 echo 服务，响应一个采用<code>{echo: word}</code>结构的 JSON 对象。你可以在<code>req.params.word</code>中找到要重复的单词。你可以在浏览器的地址栏测试你的路由，访问一些匹配的路由，比如：your-app-rootpath/freecodecamp/echo
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 测试 1：你的 echo 服务应该正确地重复单词
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/eChOtEsT/echo'').then(data => { assert.equal(data.echo, ''eChOtEsT'', ''Test 1: the echo server is not working as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: 测试 2：你的 echo 服务应该正确地重复单词
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/ech0-t3st/echo'').then(data => { assert.equal(data.echo, ''ech0-t3st'', ''Test 2: the echo server is not working as expected'') }, xhr => { throw new Error(xhr.responseText); })'

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
