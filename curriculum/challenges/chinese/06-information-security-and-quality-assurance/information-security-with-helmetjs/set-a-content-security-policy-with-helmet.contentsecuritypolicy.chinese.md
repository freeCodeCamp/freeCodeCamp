---
id: 587d8249367417b2b2512c3f
title: Set a Content Security Policy with helmet.contentSecurityPolicy()
challengeType: 2

videoUrl: ''
localeTitle: Set a Content Security Policy with helmet.contentSecurityPolicy()
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
  - text: helmet.csp() 中间件应该被正确加载
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "csp"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '你的 csp 配置不正确. defaultSrc 应该是 [""self""] 并且scriptSrc 应该是 [""self"", "trusted-cdn.com"]'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { var cspHeader = Object.keys(data.headers).filter(function(k){ return k === "content-security-policy" || k === "x-webkit-csp" || k === "x-content-security-policy" })[0]; assert.equal(data.headers[cspHeader], "default-src "self"; script-src "self" trusted-cdn.com"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              