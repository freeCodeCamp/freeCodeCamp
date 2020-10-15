---
id: 587d8249367417b2b2512c3f
challengeType: 2
forumTopicId: 301585
title: 使用 helment.contentSecurityPolicy() 设置内容安全策略
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-infosec">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
在这个挑战中，我们要重点讨论现代浏览器中一种有效并且能大幅度减轻安全风险和很多种类型常见攻击的安全防护。通过配置内容安全策略，你可以防止很多类型的脚本恶意注入。这会让你的应用远离 XSS 漏洞、恶意追踪、恶意 frames 和很多其他攻击。CSP 通过配置资源白名单来避免这些问题。你可以给任何一种类型的页面资源（脚本、样式文件、字体、frames、媒体文件等）做这个配置。它支持很多指令，所以网站管理员可以做细致的控制。更多详情请参考 HTML 5 Rocks 和 KeyCDN。不幸的是，一些旧的浏览器不支持 CSP。
默认的指令很容易受到攻击, 所以设置 defaultSrc 指令作为降级方案很重要。Helmet 同时支持 defaultSrc 和 default-src 命名规范。降级方案可以应用在大部分指令上。
</section>

## Instructions
<section id='instructions'>
在这个练习中，我们使用 <code>helmet.contentSecurityPolicy()</code> 并配置 <code>defaultSrc</code> 为 <code>["self"]</code>（允许的资源列表必须在一个数组当中）。这样做表示只信任自己网站的域名。另外，配置 <code>scriptSrc</code> 指令可以限制脚本只能本网站域名上或者信任的域名 'trusted-cdn.com' 上下载。
提示: 在 <code>self</code> 关键词中, 单引号也是关键词的一部分, 所以你应该用双引号来包起它才能正常工作。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应正确加载 helmet.csp() 中间件
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'csp'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 你的 csp 配置不正确，defaultSrc 应为 ["'self'"] 并且 scriptSrc 应为 ["'self'", 'trusted-cdn.com']
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
