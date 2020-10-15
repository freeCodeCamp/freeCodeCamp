---
id: 587d7fb1367417b2b2512bf2
challengeType: 2
forumTopicId: 301521
title: 使用 .env 文件
---

## Description
<section id='description'>
<code>.env</code>文件是一个隐藏文件，用于将环境变量传给应用程序。这是一个私密文件，除了你之外没人可以访问它，它可以用来存储你想保持私有或者隐藏的数据。举个例子，可以存储第三方服务 API 密钥或者数据库 URI。你也可以使用它来存储配置选项。通过设置配置选项，你可以改变应用程序的行为，而无需重写一些代码。
在应用程序中可以通过<code>process.env.VAR_NAME</code>访问到环境变量。<code>process.env</code>是 Node 程序中的一个全局对象，可以给这个变量传字符串。按照惯例，变量名都是大写的，单词之间用下划线隔开。<code>.env</code>是一个 shell 文件，因此不需要用给变量名和值加引号。还有一点需要注意，当你给变量赋值时，等号周围不能有空格，举个例子：<code>VAR_NAME=value</code>。通常来讲，每一个变量会单独定义在新的一行。
</section>

## Instructions
<section id='instructions'>
让我们添加一个环境变量作为配置选项。
在<code>.env</code>文件中保存变量<code>MESSAGE_STYLE=uppercase</code>。它的作用是，告诉上一次挑战中的路由处理程序，当我们 GET 方法请求 /JSON 时，如果<code>process.env.MESSAGE_STYLE</code>的值为<code>uppercase</code>，那么返回的对象则应该是<code>{"message": "HELLO JSON"}</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 客户端响应<code>/json</code>的值，应该随着环境变量<code>MESSAGE_STYLE</code>的变化而改变
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/use-env-vars'').then(data => { assert.isTrue(data.passed, ''The response of "/json" does not change according to MESSAGE_STYLE''); }, xhr => { throw new Error(xhr.responseText); })'

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
