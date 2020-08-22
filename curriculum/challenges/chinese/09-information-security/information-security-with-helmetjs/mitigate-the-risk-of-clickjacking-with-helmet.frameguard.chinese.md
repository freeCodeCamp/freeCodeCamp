---
id: 587d8247367417b2b2512c38
title: Mitigate the Risk of Clickjacking with helmet.frameguard()
challengeType: 2
videoUrl: ''
localeTitle: 使用helmet.frameguard（）降低点击劫持的风险
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a>克隆的。未经您的同意，您的页面可以放在<code>&lt;frame&gt;</code>或<code>&lt;iframe&gt;</code> 。除其他外，这可能导致点击劫持攻击。点击劫持是一种欺骗用户与不同于用户认为的页面进行交互的技术。这可以通过iframing在恶意上下文中执行您的页面获得。在这种情况下，黑客可以在页面上放置隐藏层。隐藏按钮可用于运行错误的脚本。此中间件设置X-Frame-Options标头。它限制了谁可以将您的网站放在框架中。它有三种模式：DENY，SAMEORIGIN和ALLOW-FROM。我们不需要我们的应用程序框架。您应该使用配置对象<code>{action: &#39;deny&#39;}</code>传递的<code>helmet.frameguard()</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.frameguard（）中间件应正确安装
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'frameguard', 'helmet.frameguard() middleware is not mounted correctly'); }, xhr => { throw new Error(xhr.responseText); })
  - text: helmet.frameguard（）'action'应该设置为'DENY'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.property(data.headers, 'x-frame-options'); assert.equal(data.headers['x-frame-options'], 'DENY');}, xhr => { throw new Error(xhr.responseText); })

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
