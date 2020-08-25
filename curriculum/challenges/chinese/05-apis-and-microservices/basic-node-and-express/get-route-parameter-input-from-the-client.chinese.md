---
id: 587d7fb2367417b2b2512bf5
title: Get Route Parameter Input from the Client
localeTitle: 从客户端获取路由参数输入
challengeType: 2
---

## Description
<section id='description'> 构建API时，我们必须允许用户与我们沟通他们希望从我们的服务中获得什么。例如，如果客户端请求有关存储在数据库中的用户的信息，他们需要一种方法让我们知道他们感兴趣的用户。实现此结果的一种可能方法是使用路由参数。路由参数是URL的命名段，由斜杠（/）分隔。每个段捕获URL的与其位置匹配的部分的值。捕获的值可以在<code>req.params</code>对象中找到。
<blockquote>route_path: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote> 
</section>

## Instructions
<section id='instructions'> 
构建一个安装在路径<code>GET /:word/echo</code>的回显服务器。使用结构<code>{echo: word}</code>响应JSON对象。您可以在<code>req.params.word</code>找到要重复的<code>req.params.word</code> 。您可以从浏览器的地址栏测试您的路线，访问一些匹配的路线，例如 your-app-rootpath/freecodecamp/echo 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '测试1：您的echo服务器应该正确重复单词'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/eChOtEsT/echo'').then(data => { assert.equal(data.echo, ''eChOtEsT'', ''Test 1: the echo server is not working as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: '测试2：您的echo服务器应该正确重复单词'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/ech0-t3st/echo'').then(data => { assert.equal(data.echo, ''ech0-t3st'', ''Test 2: the echo server is not working as expected'') }, xhr => { throw new Error(xhr.responseText); })'

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
