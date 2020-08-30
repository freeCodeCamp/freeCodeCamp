---
id: 587d8247367417b2b2512c39
title: Mitigate the Risk of Cross Site Scripting (XSS) Attacks with helmet.xssFilter()
challengeType: 2
videoUrl: ''
localeTitle: 使用helmet.xssFilter（）降低跨站点脚本（XSS）攻击的风险
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a>克隆的。跨站点脚本（XSS）是一种常见的攻击类型，其中恶意脚本被注入易受攻击的页面，目的是窃取会话cookie或密码等敏感数据。降低XSS攻击风险的基本规则很简单：“绝不信任用户的输入”。作为开发人员，您应该始终清理来自外部的所有输入。这包括来自表单，GET查询URL，甚至来自POST主体的数据。消毒意味着您应该找到并编码可能有危险的字符，例如&lt;，&gt;。现代浏览器可以通过采用更好的软件策略来帮助降低风险。通常这些都可以通过http标头进行配置。 X-XSS-Protection HTTP标头是一种基本保护。浏览器使用启发式过滤器检测潜在的注入脚本。如果启用了标头，则浏览器会更改脚本代码，从而中和它。它仍然有限的支持。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.xssFilter（）中间件应该正确安装
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'xXssProtection'); assert.property(data.headers, 'x-xss-protection'); }, xhr => { throw new Error(xhr.responseText); })

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
