---
id: 587d8247367417b2b2512c39
title: Mitigate the Risk of Cross Site Scripting (XSS) Attacks with helmet.xssFilter()
challengeType: 2
isHidden: false
forumTopicId: 301583
localeTitle: 使用 helmet.xssFilter() 降低跨站点脚本（XSS）攻击的风险
---

## Description
<section id='description'>
温馨提醒，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
跨站脚本攻击 (XSS) 是一种比较常见的攻击手段，通过给页面注入恶意脚本来获取用户的 session, 密码等信息。
防止这类型的攻击也非常简单：“永远不要相信用户的输入”。 作为一名开发人员，你一定要对所有外部的输入进行审查，其中包括来自表单，GET 请求，POST 请求主体的内容。审核就是说你需要查找并给有潜在风险的字符进行编码，例如：<, >.
现代浏览器已经有非常好的软件策略来应对着类型问题。通常是通过配置 http 头部来实现.
X-XSS-Protection HTTP 头部是一个基本的防护。浏览器通过启发式过滤法则来检测有潜在风险的注入脚本，这是有如果这个头部被启用了，浏览器就能改成脚本里面的代码从而使恶意代码不再生效。
但是浏览器对这个功能的支持有限。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.xssFilter() 应该被正确地加载
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'xXssProtection'); assert.property(data.headers, 'x-xss-protection'); }, xhr => { throw new Error(xhr.responseText); })

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
