---
id: bd7158d8c443edefaeb5bdef
title: Timestamp Microservice
localeTitle: 时间戳微服务
challengeType: 4
isRequired: true
---

## Description
<section id='description'> 构建一个功能类似于此的完整堆栈JavaScript应用程序： <a href='https://curse-arrow.glitch.me/' target='_blank'>https://curse-arrow.glitch.me/</a> 。 在这个项目上工作将涉及您在我们的入门项目上的Glitch上编写代码。完成此项目后，您可以将公共故障网址（到应用程序的主页）复制到此屏幕进行测试！您可以选择在另一个平台上编写项目，但必须公开显示我们的测试。 使用<a href='https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/freeCodeCamp/boilerplate-project-timestamp/' target='_blank'>此链接</a>在Glitch上启动此项目或在GitHub上克隆<a href='https://github.com/freeCodeCamp/boilerplate-project-timestamp/'>此存储库</a> ！如果您使用Glitch，请记住将项目链接保存到安全的地方！ 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '它应该处理一个有效的日期，并返回正确的unix时间戳'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/2016-12-25'').then(data => { assert.equal(data.unix, 1482624000000, ''Should be a valid unix timestamp''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '它应该处理一个有效的日期，并返回正确的UTC字符串'
    testString: 'getUserInput => $.get(getUserInput(''url'')+ ''/api/timestamp/2016-12-25'').then(data => { assert.equal(data.utc, ''Sun, 25 Dec 2016 00:00:00 GMT'', ''Should be a valid UTC date string''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '它应该处理一个有效的unix日期，并返回正确的unix时间戳'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/1482624000000'').then(data => { assert.equal(data.unix, 1482624000000) ;  }, xhr => { throw new Error(xhr.responseText); })'
  - text: 它应返回无效日期的预期错误消息
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp/this-is-not-a-date'').then(data => { assert.equal(data.error.toLowerCase(), ''invalid date'');}, xhr => { throw new Error(xhr.responseText); })'
  - text: '它应该处理一个空的日期参数，并以unix格式返回当前时间'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp'').then(data => { var now = Date.now(); assert.approximately(data.unix, now, 20000) ;}, xhr => { throw new Error(xhr.responseText); })'
  - text: '它应该处理一个空日期参数，并以UTC格式返回当前时间'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/timestamp'').then(data => { var now = Date.now(); var serverTime = (new Date(data.utc)).getTime(); assert.approximately(serverTime, now, 20000) ;}, xhr => { throw new Error(xhr.responseText); })'

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
