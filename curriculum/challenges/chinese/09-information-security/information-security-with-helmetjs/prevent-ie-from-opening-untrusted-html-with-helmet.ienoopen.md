---
id: 587d8248367417b2b2512c3b
challengeType: 2
forumTopicId: 301584
title: 使用 helment.ieNoOpen() 防止 IE 打开不受信任的 HTML
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-infosec">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
有些网站会下载不安全的 HTML 文件，某些版本的 IE 默认情况下还会在你网站的作用域下打开这些 HTML 文件。换句话说，这些不安全的 HTML 页面可以在你的网站做恶意行为。我们可以通过中间件来设置 header 中的 X-Download-Options 字段，让它的值为 noopen。这样就可以防止 IE 在不信任的网站下执行下载的文件。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应正确加载 helmet.ieNoOpen() 中间件
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'ienoopen'); assert.equal(data.headers['x-download-options'], 'noopen'); }, xhr => { throw new Error(xhr.responseText); })

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
