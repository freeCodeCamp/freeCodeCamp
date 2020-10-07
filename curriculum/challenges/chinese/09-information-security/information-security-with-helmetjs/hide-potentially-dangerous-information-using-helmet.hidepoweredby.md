---
id: 587d8247367417b2b2512c37
challengeType: 2
forumTopicId: 301580
title: 使用 helmet.hidePoweredBy() 隐藏潜在的危险信息
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-infosec">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
如果黑客发现你的网站是用 Express 搭建的，那么他们就可以利用 Express 或 Node 现存的漏洞来攻击你的网站。<code>X-Powered-By: Express</code> 默认情况下会添加到所有响应的 header。不过 <code>helmet.hidePoweredBy()</code> 中间件可以帮你把 header 中的 X-Powered-By 字段移除。你甚至可以把它设置成其它的值来骗过黑客，比如 <code>app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应正确地加载 helmet.hidePoweredBy() 中间件
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'hidePoweredBy'); assert.notEqual(data.headers['x-powered-by'], 'Express')}, xhr => { throw new Error(xhr.responseText); })

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
