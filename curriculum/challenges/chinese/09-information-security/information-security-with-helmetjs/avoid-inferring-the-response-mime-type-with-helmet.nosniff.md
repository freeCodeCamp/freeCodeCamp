---
id: 587d8248367417b2b2512c3a
challengeType: 2
forumTopicId: 301574
title: 使用 helment.noSniff() 来避免推断响应的 MIME 类型
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-infosec">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
浏览器可以通过 content 或者 MIME 嗅探来判断不同的响应内容。这两个的优先级比 header 中的 Content-Type 高。这在一些情况下非常方便，但也会造成一定的安全风险。我们可以通过中间件来把 header 中的 X-Content-Type-Options 字段设置为 nosniff，这样浏览器就不会绕过 header 中的 Content-Type 了。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应正确加载 helmet.noSniff() 中间件
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'nosniff'); assert.equal(data.headers['x-content-type-options'], 'nosniff'); }, xhr => { throw new Error(xhr.responseText); })

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
