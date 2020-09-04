---
id: 587d8249367417b2b2512c3f
title: Set a Content Security Policy with helmet.contentSecurityPolicy()
challengeType: 2
videoUrl: ''
localeTitle: 使用helmet.contentSecurityPolicy（）设置内容安全策略
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a>克隆的。这一挑战突出了一个有希望的新防御，它可以显着降低现代浏览器中许多类型攻击的风险和影响。通过设置和配置内容安全策略，您可以防止在页面中无意中注入任何内容。这样可以保护您的应用免受XSS漏洞，不受欢迎的跟踪，恶意帧等攻击。 CSP通过定义受信任的内容源的白名单来工作。您可以为网页可能需要的每种资源（脚本，样式表，字体，框架，媒体等等）配置它们。有多个指令可用，因此网站所有者可以拥有精细控制。有关详细信息，请参阅HTML 5 Rocks，KeyCDN。不幸的是旧版浏览器不支持CSP。默认情况下，指令是全开的，因此将defaultSrc指令设置为回退非常重要。 Helmet支持defaultSrc和default-src命名样式。回退适用于大多数未指定的指令。在本练习中，使用helmet.contentSecurityPolicy（），并将其配置为将defaultSrc指令设置为["self"]（允许的源列表必须在数组中），以便默认只信任您的网站地址。同时设置scriptSrc指令，以便允许从您的网站和域"trusted-cdn.com"下载脚本。提示：在"&#39;self&#39;"关键字中，单引号是关键字本身的一部分，因此需要用双引号括起来才能生效。 </section>

## Instructions
<section id="instructions">
在本练习中，使用<code>helmet.contentSecurityPolicy()</code>，并将其配置为将<code>defaultSrc指令</code>设置为<code>["self"]</code>（允许的列表） 来源必须位于一个数组中，以便默认情况下仅信任您的网站地址。 还设置<code>scriptSrc</code>指令，以便您允许从您的网站以及"trusted-cdn.com"域下载脚本。
提示：在<code>self</code>关键字中，单引号是关键字本身的一部分，因此需要使用双引号将其括起来才能起作用。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.csp()中间件应该正确安装。
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'csp'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 你的csp配置不正确。 defaultSrc应该是["self"]而scriptSrc应该是["self"，"trusted-cdn.com"]
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { var cspHeader = Object.keys(data.headers).filter(function(k){ return k === 'content-security-policy' || k === 'x-webkit-csp' || k === 'x-content-security-policy' })[0]; assert.equal(data.headers[cspHeader], "default-src 'self'; script-src 'self' trusted-cdn.com"); }, xhr => { throw new Error(xhr.responseText); })

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
