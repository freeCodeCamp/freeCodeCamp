---
id: 587d8248367417b2b2512c3d
title: Disable DNS Prefetching with helmet.dnsPrefetchControl()
challengeType: 2

videoUrl: ''
localeTitle: Disable DNS Prefetching with helmet.dnsPrefetchControl()
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
Helmet 通过配置不同的 HTTP 头部信息来使你的 Express 应用更加安全。安装，并引入 Helmet 这个包。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.dnsPrefetchControl() 中间件应该被正确加载
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "dnsPrefetchControl"); assert.equal(data.headers["x-dns-prefetch-control"], "off"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              