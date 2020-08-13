---
id: 587d824a367417b2b2512c45
title: Anonymous Message Board
challengeType: 4
isRequired: true
videoUrl: ''
localeTitle: 匿名留言板
---

## Description
<section id="description">构建一个功能类似于此的完整堆栈JavaScript应用程序： <a href='https://spiky-well-vein.glitch.me/' target='_blank'>https://spiky-well-vein.glitch.me/</a> 。在这个项目上工作将涉及您在我们的入门项目上在Glitch上编写代码。完成此项目后，您可以将公共故障网址（到应用程序的主页）复制到此屏幕进行测试！您可以选择在另一个平台上编写项目，但必须公开显示我们的测试。使用<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-messageboard/">此链接</a>在Glitch上启动此项目或在GitHub上克隆<a href="https://github.com/freeCodeCamp/boilerplate-project-messageboard/">此存储库</a> ！如果您使用Glitch，请记住将项目链接保存到安全的地方！ </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 只允许您的网站加载到您自己网页上的iFrame中。
    testString: ''
  - text: 不允许DNS预取。
    testString: ''
  - text: 只允许您的网站为您自己的网页发送引荐来源。
    testString: ''
  - text: '我可以通过将表单数据文本和deletepassword_传递给/api/threads/ {board}将一个帖子发布到一个特定的留言板。（推荐res.redirect到电路板页面/ b / {board}）保存的至少是_id，text ，createdon_（日期和时间），bumpedon_（日期和时间，与created_on相同），报告（布尔值），deletepassword_和回复（数组）。'
    testString: ''
  - text: '我可以通过将表单数据文本，deletepassword_和threadid_传递给/ api / replies / {board}来对特定板上的线程发送回复，并且还会将bumped_on日期更新到注释日期。（推荐res.redirect到thread page / b / {board} / {thread_id}）在线程的回复数组中将保存_id，text，createdon_，deletepassword_，并报告。'
    testString: ''
  - text: '我可以在电路板上获取最近10个凸起线程的数组，其中最近只有来自/ api / threads / {board}的3个回复。 report和deletepasswords_字段不会发送到客户端。'
    testString: ''
  - text: '我可以使用/ api / replies / {board}的所有回复获取整个帖子吗？thread_id = {thread_id}。同样隐藏客户端应该看到的相同字段。'
    testString: ''
  - text: '如果我向/ api / threads / {board}发送DELETE请求并传递threadid_＆deletepassword_，我可以完全删除一个线程。 （文字回复将是“密码不正确”或“成功”）'
    testString: ''
  - text: '如果我向/ api / replies / {board}发送DELETE请求并传递threadid_，replyid_和deletepassword_，我可以删除帖子（只是将文本更改为“[已删除]”而不是像线程一样完全删除）。 （文字回复将是“密码不正确”或“成功”）'
    testString: ''
  - text: '我可以通过向/ api / threads / {board}发送PUT请求并传递threadid_来报告一个线程并将其报告值更改为true。 （文字回复将是“成功”）'
    testString: ''
  - text: '我可以通过向/ api / replies / {board}发送PUT请求并传递threadid_＆replyid_来报告回复并将其报告值更改为true。 （文字回复将是“成功”）'
    testString: ''
  - text: 完整的功能测试，完全测试路线和通过。
    testString: ''

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
