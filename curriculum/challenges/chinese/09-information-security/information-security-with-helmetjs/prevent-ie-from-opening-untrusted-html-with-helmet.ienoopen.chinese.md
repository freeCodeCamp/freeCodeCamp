---
id: 587d8248367417b2b2512c3b
title: Prevent IE from Opening Untrusted HTML with helmet.ieNoOpen()
challengeType: 2
videoUrl: ''
localeTitle: 使用helmet.ieNoOpen（）阻止IE打开不受信任的HTML
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a>克隆的。某些Web应用程序将提供不受信任的HTML以供下载。默认情况下，某些版本的Internet Explorer会在您的站点上下文中打开这些HTML文件。这意味着不受信任的HTML页面可能会在您的页面上下文中开始做坏事。此中间件将X-Download-Options标头设置为noopen。这将阻止IE用户在受信任站点的上下文中执行下载。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.ieNoOpen（）中间件应正确安装
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'ienoopen'); assert.equal(data.headers['x-download-options'], 'noopen'); }, xhr => { throw new Error(xhr.responseText); })

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
