---
id: 587d8249367417b2b2512c3e
title: Disable Client-Side Caching with helmet.noCache()
challengeType: 2
videoUrl: ''
localeTitle: 使用helmet.noCache（）禁用客户端缓存
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a>克隆的。如果您要为您的网站发布更新，并且您希望用户始终下载较新的版本，您可以（尝试）在客户端的浏览器上禁用缓存。它在开发中也很有用。缓存具有性能优势，您将失去这些优势，因此只有在真正需要时才使用此选项。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该正确安装helmet.noCache（）中间件
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'nocache'); assert.equal(data.headers['cache-control'], 'no-store, no-cache, must-revalidate, proxy-revalidate'); }, xhr => { throw new Error(xhr.responseText); })

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
