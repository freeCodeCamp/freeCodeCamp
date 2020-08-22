---
id: 587d7fb2367417b2b2512bf8
title: Get Data from POST Requests
localeTitle: 从POST请求中获取数据
challengeType: 2
---

## Description
<section id='description'> 在路径<code>/name</code>处安装POST处理程序。它和以前一样。我们在html首页中准备了一个表单。它将提交练习10（查询字符串）的相同数据。如果正确配置了body-parser，您应该在对象<code>req.body</code>找到参数。看看通常的库示例： 
<blockquote>route: POST '/library'<br>urlencoded_body: userId=546&bookId=6754 <br>req.body: {userId: '546', bookId: '6754'}</blockquote> 使用与以前相同的JSON对象进行响应： <code>{name: 'firstname lastname'}</code> 。使用我们在应用程序首页中提供的html表单测试您的端点是否正常工作。 提示：除了GET和POST之外，还有其他几种http方法。按照惯例，http动词与您要在服务器上执行的操作之间存在对应关系。传统的映射是： 
POST（有时是PUT） - 使用随请求发送的信息创建新资源， 
GET  - 读取现有资源而不修改它， 
PUT或PATCH（有时是POST） - 使用数据更新资源已发送， 
DELETE =&gt;删除资源。 还有一些其他方法用于协商与服务器的连接。除了GET之外，上面列出的所有其他方法都可以有一个有效载荷（即数据进入请求体）。身体解析器中间件也适用于这些方法。 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '测试1：您的API端点应使用正确的名称进行响应'
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/name'', {first: ''Mick'', last: ''Jagger''}).then(data => { assert.equal(data.name, ''Mick Jagger'', ''Test 1: "POST /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: '测试2：您的API端点应使用正确的名称进行响应'
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/name'', {first: ''Keith'', last: ''Richards''}).then(data => { assert.equal(data.name, ''Keith Richards'', ''Test 2: "POST /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'

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
