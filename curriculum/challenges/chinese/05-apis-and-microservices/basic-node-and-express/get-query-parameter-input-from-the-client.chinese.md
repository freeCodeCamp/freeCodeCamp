---
id: 587d7fb2367417b2b2512bf6
title: Get Query Parameter Input from the Client
localeTitle: 从客户端获取查询参数输入
challengeType: 2
---

## Description
<section id='description'> 从客户端获取输入的另一种常用方法是使用查询字符串对路径路径后的数据进行编码。查询字符串由问号（？）分隔，并包括field = value couple。每对夫妇用和号（＆）隔开。 Express可以解析查询字符串中的数据，并填充对象<code>req.query</code> 。某些字符不能在URL中，它们必须以<a href='https://en.wikipedia.org/wiki/Percent-encoding' target='_blank'>不同的格式</a>编码才能发送它们。如果您使用JavaScript中的API，则可以使用特定方法对这些字符进行编码/解码。 
<blockquote>route_path: '/library'<br>actual_request_URL: '/library?userId=546&bookId=6754' <br>req.query: {userId: '546', bookId: '6754'}</blockquote>
</section>

## Instructions
<section id='instructions'> 
构建一个以<code>GET /name</code>挂载的API端点。使用结构<code>{ name: 'firstname lastname'}</code>回复JSON文档。名字和姓氏参数应该在查询字符串中编码，例如<code>?first=firstname&amp;last=lastname</code> 。 提示：在下面的练习中，我们将在相同<code>/name</code>路径路径的POST请求中接收数据。如果需要，可以使用方法<code>app.route(path).get(handler).post(handler)</code> 。此语法允许您在同一路径路径上链接不同的动词处理程序。您可以节省一些打字，并拥有更清晰的代码。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '测试1：您的API端点应使用正确的名称进行响应'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/name?first=Mick&last=Jagger'').then(data => { assert.equal(data.name, ''Mick Jagger'', ''Test 1: "GET /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: '测试2：您的API端点应以正确的名称响应'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/name?last=Richards&first=Keith'').then(data => { assert.equal(data.name, ''Keith Richards'', ''Test 2: "GET /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'

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
