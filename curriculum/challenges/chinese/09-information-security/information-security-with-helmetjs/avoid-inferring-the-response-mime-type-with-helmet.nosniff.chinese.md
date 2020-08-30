---
id: 587d8248367417b2b2512c3a
title: Avoid Inferring the Response MIME Type with helmet.noSniff()
challengeType: 2
videoUrl: ''
localeTitle: 避免使用helmet.noSniff（）推断响应MIME类型
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a>克隆的。浏览器可以使用内容或MIME嗅探来适应来自响应的不同数据类型。它们覆盖Content-Type标头以猜测和处理数据。虽然这在某些情况下可能很方便，但它也可能导致一些危险的攻击。此中间件将X-Content-Type-Options标头设置为nosniff。这指示浏览器不绕过提供的Content-Type。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.noSniff（）中间件应该正确安装
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'nosniff'); assert.equal(data.headers['x-content-type-options'], 'nosniff'); }, xhr => { throw new Error(xhr.responseText); })

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
