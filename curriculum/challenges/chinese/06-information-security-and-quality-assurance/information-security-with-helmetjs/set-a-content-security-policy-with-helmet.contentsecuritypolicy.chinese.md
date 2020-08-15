---
id: 587d8249367417b2b2512c3f
title: Set a Content Security Policy with helmet.contentSecurityPolicy()
challengeType: 2
isHidden: false
forumTopicId: 301585
localeTitle: 使用 helment.contentSecurityPolicy() 设置内容安全策略
---

## Description
<section id='description'>
温馨提醒，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
这个挑战重点讨论一种现代浏览器中有效并且能大幅度减轻安全风险和很多种类型常见攻击的安全防护。通过配置内容安全策略你可以防止很多类型的脚本恶意注入。这会让你的应用远离 XSS 漏洞、恶意追踪、恶意 frames 和很多很多其他攻击。CSP 通过配置资源白名单来避免这些问题。 你可以给任何一种类型的页面资源 (脚本、样式文件、字体、frames、媒体文件等等等）做这个配置，它支持很多指令，所以网站管理员可以做细致的控制。更多详情请参考 HTML 5 Rocks，KeyCDN。不幸的是。一些旧的浏览器不支持 CSP。
默认的指令很容易受到攻击, 所以设置 defaultSrc 指令作为降级方案很重要。Helmet 同时支持 defaultSrc 和 default-src 命名规范。降级方案可以被应用在大部分指令上。
</section>

## Instructions
<section id='instructions'>
在这个练习中，我们使用 helmet.contentSecurityPolicy()，并配置 defaultSrc 指令为 ["self"] (允许的资源列表必须在一个数组当中), 这样做表示只信任自己的网站域名。另外配置 scriptSrc 指令可以限制脚本只能本网站域名上或者信任的域名‘trusted-cdn.com’上下载
提示: 在 "'self'" 关键词, 单引号也是关键词的一部分, 所以你应该用双引号来包起它才能正常工作。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.csp() 中间件应该被正确加载
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'csp'); }, xhr => { throw new Error(xhr.responseText); })
  - text: '你的 csp 配置不正确. defaultSrc 应该是 [""self""] 并且scriptSrc 应该是 [""self"", "trusted-cdn.com"]'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { var cspHeader = Object.keys(data.headers).filter(function(k){ return k === 'content-security-policy' || k === 'x-webkit-csp' || k === 'x-content-security-policy' })[0]; assert.equal(data.headers[cspHeader], "default-src 'self'; script-src 'self' trusted-cdn.com"); }, xhr => { throw new Error(xhr.responseText); })

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
