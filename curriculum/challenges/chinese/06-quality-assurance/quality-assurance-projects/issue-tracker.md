---
id: 587d8249367417b2b2512c42
challengeType: 4
videoUrl: ''
title: 问题跟踪器
---

## Description
<section id="description">构建一个功能类似于此的完整堆栈JavaScript应用程序： <a href="https://protective-garage.glitch.me/" target="_blank">https</a> ： <a href="https://protective-garage.glitch.me/" target="_blank">//protective-garage.glitch.me/</a> 。在这个项目上工作将涉及您在我们的入门项目上在Glitch上编写代码。完成此项目后，您可以将公共故障网址（到应用程序的主页）复制到此屏幕进行测试！您可以选择在另一个平台上编写项目，但必须公开显示我们的测试。使用<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-issuetracker/">此链接</a>在Glitch上启动此项目或在GitHub上克隆<a href="https://github.com/freeCodeCamp/boilerplate-project-issuetracker/">此存储库</a> ！如果您使用Glitch，请记住将项目链接保存到安全的地方！ </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 防止跨站点脚本（XSS）攻击。
    testString: ''
  - text: '我可以使用包含所需issue_title，issue_text，created_by和可选的assigned_to和status_text的表单数据POST / api / issues / {projectname}。'
    testString: ''
  - text: 保存（和返回）的对象将包括所有这些字段（空白表示可选无输入），还包括created_on（日期/时间），updated_on（日期/时间），打开（布尔值，true表示打开，false表示关闭），和_id。
    testString: ''
  - text: '我可以使用id和对象中的任何字段PUT / api / issues / {projectname}，并使用值来对象表示对象。返回将“成功更新”或“无法更新”+ id。这应该始终更新updated_on。如果没有发送字段，则返回“未发送更新字段”。'
    testString: ''
  - text: '我可以使用id DELETE / api / issues / {projectname}来完全删除问题。如果没有发送_id，则返回“id error”，成功：“删除”+ id，失败：“无法删除”+ id。'
    testString: ''
  - text: '我可以GET / api / issues / {projectname}获取该特定项目中所有问题的数组，其中包含发布时返回的每个问题的所有信息。'
    testString: ''
  - text: '我可以通过传递查询中的任何字段和值来过滤我的获取请求（即。/ api / issues / {project}？open = false）。我可以传递尽可能多的字段/值。'
    testString: ''
  - text: 所有11项功能测试都已完成并通过。
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
