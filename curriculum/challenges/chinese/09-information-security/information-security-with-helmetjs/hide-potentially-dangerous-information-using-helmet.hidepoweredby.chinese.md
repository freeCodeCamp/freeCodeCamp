---
id: 587d8247367417b2b2512c37
title: Hide Potentially Dangerous Information Using helmet.hidePoweredBy()
challengeType: 2
videoUrl: ''
localeTitle: 使用helmet.hidePoweredBy（）隐藏潜在的危险信息
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a>克隆的。如果黑客看到您的网站由Express提供支持，他们可以利用Express / Node中的已知漏洞。 X-Powered-By：Express默认发送来自Express的每个请求。 helmet.hidePoweredBy（）中间件将删除X-Powered-By标头。您还可以将标头显式设置为其他内容，以便让人们离开。例如app.use（helmet.hidePoweredBy（{setTo：&#39;PHP 4.2.0&#39;}）） </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.hidePoweredBy（）中间件应正确安装
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'hidePoweredBy'); assert.notEqual(data.headers['x-powered-by'], 'Express')}, xhr => { throw new Error(xhr.responseText); })

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
