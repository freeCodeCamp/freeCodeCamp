---
id: 587d8248367417b2b2512c3a
title: Avoid Inferring the Response MIME Type with helmet.noSniff()
challengeType: 2
isHidden: false
forumTopicId: 301574
localeTitle: 使用 helment.noSniff() 避免推断响应的 MIME 类型
---

## Description
<section id='description'>
温馨提醒，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
浏览器可以通过探查 ``content`` 或者 ``MIME`` 头部来判断不同的响应内容。这两个的优先级比 ``Content-Type`` 还高，浏览器可以通过这两个头部来猜测并处理响应。这个在某些情况下非常实用，但也会造成一定的潜在风险。我们可以通过中间件来设置 ``X-Content-Type-Options`` 头部为 ``nosniff``。 这样，浏览器就不会绕过 ``Content-Type`` 这个头了。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.noSniff() 中间件应该被正确加载
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
