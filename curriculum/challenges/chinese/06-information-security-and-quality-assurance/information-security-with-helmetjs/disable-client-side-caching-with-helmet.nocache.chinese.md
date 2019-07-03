---
id: 587d8249367417b2b2512c3e
title: Disable Client-Side Caching with helmet.noCache()
challengeType: 2

videoUrl: ''
localeTitle: Disable Client-Side Caching with helmet.noCache()
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
  - text: helmet.noCache() 中间件应该被正确加载
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "nocache"); assert.equal(data.headers["cache-control"], "no-store, no-cache, must-revalidate, proxy-revalidate"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              