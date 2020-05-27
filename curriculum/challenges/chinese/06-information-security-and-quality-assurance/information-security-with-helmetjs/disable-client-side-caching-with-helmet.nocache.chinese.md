---
id: 587d8249367417b2b2512c3e
title: Disable Client-Side Caching with helmet.noCache()
challengeType: 2
isHidden: false
forumTopicId: 301576
localeTitle: 使用 helment.noCache() 禁用客户端缓存
---

## Description
<section id='description'>
温馨提醒，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
如果你为你的网站发布了一个更新，你想要用户永远使用最新的版本。你可以通过禁用浏览器的缓存来实现。这个功能在开发环境中也非常有用。当然你会失去缓存在性能上的优势，所以你应该在真正有必要的时候才用这个功能
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.noCache() 中间件应该被正确加载
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'nocache'); assert.equal(data.headers['cache-control'], 'no-store, no-cache, must-revalidate, proxy-revalidate'); }, xhr => { throw new Error(xhr.responseText); })

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
