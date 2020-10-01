---
id: 587d7fb0367417b2b2512bed
challengeType: 2
forumTopicId: 301515
title: 认识 Node 的控制台
---

## Description
<section id='description'>
在开发过程中，能够随时看到代码的运行结果是非常重要的。Node 只是一个 JavaScript 环境。与客户端 JavaScript 一样，你可以使用控制台输出有用的调试信息。在本地计算机上，你可以在终端中输出调试信息。在 Glitch 上，你可以打开屏幕下方的日志。使用 "Logs" 按钮切换日志面板（在左上角，应用名称的下面）。
我们建议在做这些挑战题时，保持日志面板处于打开状态。通过这些错误日志，你可能会发现这些错误的本质原因。
</section>

## Instructions
<section id='instructions'>

如果还没准备好，请阅读[介绍](/learn/apis-and-microservices/basic-node-and-express/)里面的指引，在 Glitch 里通过这个[链接](https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/freeCodeCamp/boilerplate-express/)创建一个新项目。
  
修改 <code>myApp.js</code> 文件，在控制台打印出经典的 "Hello World" 即可。

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "控制台应该输出：<code>'Hello World'</code>"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/hello-console'').then(data => { assert.isTrue(data.passed, ''"Hello World" is not in the server console''); }, xhr => { throw new Error(xhr.responseText); })'

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
