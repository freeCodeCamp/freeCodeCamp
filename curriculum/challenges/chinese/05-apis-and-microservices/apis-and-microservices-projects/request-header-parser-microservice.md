---
id: bd7158d8c443edefaeb5bdff
challengeType: 4
forumTopicId: 301507
title: 请求头解析器
---

## Description
<section id='description'>
构建一个功能类似于 <a href='https://dandelion-roar.glitch.me/' target='_blank'>https://dandelion-roar.glitch.me/</a> 的 JavaScript 全栈应用。
在开发这个项目时，我们推荐你在 <a href='https://glitch.com/'>Glitch</a> 上编码。编码完成之后，你可以把应用主页的链接复制到屏幕的输入框中，测试你的代码是否能通过项目需求。当然你也可以基于其他的平台来完成自己的项目，只要提供一个公开的主页便于我们测试就行。
参考示例：你可以通过 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-headerparser/'>这个链接</a> 访问在 Glitch 上的项目，或者从 GitHub 上 clone <a href='https://github.com/freeCodeCamp/boilerplate-project-headerparser/'>这个仓库的代码</a>。如果你使用 Glitch，请记住将项目链接保存到妥当的地方。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 我可以获得浏览器的IP地址、语言和操作系统信息。
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/whoami'').then(data => assert(data.ipaddress && data.ipaddress.length > 0), xhr => { throw new Error(xhr.responseText)})'
  - text: '首选语言应该在 <code>language</code> 键里返回。'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/whoami'').then(data => assert(data.language && data.language.length > 0), xhr => { throw new Error(xhr.responseText)})'
  - text: 'software 应该在 <code>software</code>  键里返回。'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/api/whoami'').then(data => assert(data.software && data.software.length > 0), xhr => { throw new Error(xhr.responseText)})'
    
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
