---
id: 587d8248367417b2b2512c3d
title: Disable DNS Prefetching with helmet.dnsPrefetchControl()
challengeType: 2
isHidden: false
forumTopicId: 301577
localeTitle: 使用 helmet.dnsPrefetchControl() 禁用 DNS 预取
---

## Description
<section id='description'>
温馨提醒，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
为了提高性能，大部分浏览器都会为页面上的链接预先加载 DNS 记录。这样当用户点击一个链接的时候浏览器已经提前知道 IP 地址了。但这也会造成 DNS 服务的过度使用（如果你是一个大型网站，有这千万级的用户的情况下），隐私问题 (窃听者可以推测出你在哪个页面上)，和页面数据准确性（有些没访问过的链接会被标记成已访问）。如果你对安全性要求比较高，你应该禁用 DNZ 预加载。当然，这样做性能上会有一点点损失.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.dnsPrefetchControl() 中间件应该被正确加载
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'dnsPrefetchControl'); assert.equal(data.headers['x-dns-prefetch-control'], 'off'); }, xhr => { throw new Error(xhr.responseText); })

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
