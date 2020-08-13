---
id: 587d8248367417b2b2512c3d
title: Disable DNS Prefetching with helmet.dnsPrefetchControl()
challengeType: 2
videoUrl: ''
localeTitle: 使用helmet.dnsPrefetchControl（）禁用DNS预取
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a>克隆的。为了提高性能，大多数浏览器都会为页面中的链接预取DNS记录。以这种方式，当用户点击链接时，目标IP已知。这可能导致过度使用DNS服务（如果您拥有一个大网站，数百万人访问......），隐私问题（一个窃听者可能会推断您在某个页面上），或者页面统计信息更改（某些链接可能会即使他们不是，也会出现。）如果您有高安全性需求，则可以以性能损失为代价禁用DNS预取。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该正确安装helmet.dnsPrefetchControl（）中间件
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'dnsPrefetchControl'); assert.equal(data.headers['x-dns-prefetch-control'], 'off'); }, xhr => { throw new Error(xhr.responseText); })

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
