---
id: 587d7fb1367417b2b2512bf2
title: Use the .env File
localeTitle: 使用.env文件
challengeType: 2
---

## Description
<section id='description'> 
<code>.env</code>文件是一个隐藏文件，用于将环境变量传递给应用程序。这个文件是秘密的，没有人可以访问它，它可以用来存储你想保密或隐藏的数据。例如，您可以存储来自外部服务或数据库URI的API密钥。您还可以使用它来存储配置选项。通过设置配置选项，您可以更改应用程序的行为，而无需重写某些代码。 可以从应用程序访问环境变量<code>process.env.VAR_NAME</code> 。 <code>process.env</code>对象是一个全局Node对象，变量作为字符串传递。按照惯例，变量名都是大写的，单词用下划线分隔。 <code>.env</code>是一个shell文件，因此您不需要在引号中包装名称或值。同样重要的是要注意，当您为变量赋值时，等号周围不能有空格，例如<code>VAR_NAME=value</code> 。通常，您将每个变量定义放在单独的行上。  
</section>

## Instructions
<section id='instructions'> 
让我们添加一个环境变量作为配置选项。将变量<code>MESSAGE_STYLE=uppercase</code>存储在<code>.env</code>文件中。然后告诉您在上一次质询中创建的GET <code>/json</code>路由处理程序，如果<code>process.env.MESSAGE_STYLE</code>等于<code>uppercase</code>则将响应对象的消息转换为<code>uppercase</code> 。响应对象应该成为<code>{"message": "HELLO JSON"}</code> 。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 端点<code>/json</code>的响应应根据环境变量<code>MESSAGE_STYLE</code>
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/use-env-vars'').then(data => { assert.isTrue(data.passed, ''The response of "/json" does not change according to MESSAGE_STYLE''); }, xhr => { throw new Error(xhr.responseText); })'

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
