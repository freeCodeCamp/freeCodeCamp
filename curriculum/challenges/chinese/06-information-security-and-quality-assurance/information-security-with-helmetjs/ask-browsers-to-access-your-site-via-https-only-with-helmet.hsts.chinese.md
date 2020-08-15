---
id: 587d8248367417b2b2512c3c
title: Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()
challengeType: 2
isHidden: false
forumTopicId: 301573
localeTitle: 使用 helmet.hsts() 要求浏览器只通过HTTPS访问你的网站
---

## Description
<section id='description'>
温馨提醒，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
HTTP严格安全传输 (HSTS) 是一个能帮助我们防护网站被协议降低攻击和 Cookie 挟持的 WEB 安全协议。如果你的网站支持 HTTPS 的话你可以让你的用户停止使用不安全的 HTTP。通过设置头部 ``Strict-Transport-Security``, 你告诉浏览器使用在未来的某段指定时间内使用 HTTPS 来请求网站内容。首次请求之后所以的后续请求都将使用 HTTPS
</section>

## Instructions
<section id='instructions'>
配置 helmet.hsts() 在未来的90天内使用 HTTPS。传递配置对象 {maxAge: timeInMilliseconds, force: true}. Glitch 默认已经开启 ``hsts``. 但你仍然可以通过 "force" 来覆盖它的配置。为了测试，我们会审查 Glitch 请求头部，然后拦截并恢复。
注意: 配置 HTTPS 需要域名以及 SSL/TSL 证书。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.hsts() 中间件应该被正确加载
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'hsts'); assert.property(data.headers, 'strict-transport-security'); }, xhr => { throw new Error(xhr.responseText); })
  - text: maxAge 应该等于 7776000 ms (90天)
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.match(data.headers['strict-transport-security'], /^max-age=7776000;?/); }, xhr => { throw new Error(xhr.responseText); })

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
