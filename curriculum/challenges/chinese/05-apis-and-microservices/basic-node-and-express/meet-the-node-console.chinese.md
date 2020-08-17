---
id: 587d7fb0367417b2b2512bed
title: Meet the Node console
localeTitle: 认识节点控制台
challengeType: 2
---

## Description
<section id='description'> 在开发过程中，能够检查代码中发生的情况非常重要。 Node只是一个JavaScript环境。与客户端JavaScript一样，您可以使用控制台显示有用的调试信息。在本地计算机上，您将在终端中看到控制台输出。在Glitch上，您可以打开屏幕下方的日志。您可以使用“日志”按钮切换日志面板（左上角，在应用名称下）。 要开始使用，只需在控制台中打印经典的“Hello World”即可。我们建议在应对这些挑战时保持日志面板处于打开状态。阅读日志，您可以了解可能发生的错误的性质。 
</section>

## Instructions
<section id='instructions'> 修改<code>myApp.js</code>文件以将“Hello World”记录到控制台。 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>"Hello World"</code>应该在控制台中
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/hello-console'').then(data => { assert.isTrue(data.passed, ''"Hello World" is not in the server console''); }, xhr => { throw new Error(xhr.responseText); })'

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
