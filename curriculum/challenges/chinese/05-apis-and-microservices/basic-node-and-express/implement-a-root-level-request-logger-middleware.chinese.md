---
id: 587d7fb1367417b2b2512bf3
title: Implement a Root-Level Request Logger Middleware
challengeType: 2

videoUrl: ''
localeTitle: Implement a Root-Level Request Logger Middleware
---

## Description
<section id='description'>
在开发过程中，能够随时看到代码的运行结果是非常重要的。Node 只是一个 JavaScript 环境。与客户端 JavaScript 一样，你可以使用控制台输出有用的调试信息。在本地计算机上，你可以在终端中输出调试信息。在 Glitch 上，你可以打开屏幕下方的日志。使用 "Logs" 按钮切换日志面板（在左上角，应用名称的下面）。
准备开始，我们只需要在控制台打印出经典的 "Hello World" 即可。我们建议在做这些挑战题时，保持日志面板处于打开状态。通过这些错误日志，你可能会发现这些错误的本质原因。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 根级记录器中间件应该被激活
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/root-middleware-logger").then(data => { assert.isTrue(data.passed, "根级日志记录器未按照预期执行"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              