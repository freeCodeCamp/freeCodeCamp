---
id: 587d8247367417b2b2512c39
title: >-
  使用 helmet.xssFilter() 降低跨站点脚本（XSS）攻击的风险
challengeType: 2
forumTopicId: 301583
dashedName: mitigate-the-risk-of-cross-site-scripting-xss-attacks-with-helmet-xssfilter
---

# --description--

请注意，本项目是在 <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> 上的初始化项目的基础上进行开发，你也可以从 <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> 上克隆。

跨站脚本（XSS）是一种常见的攻击类型，恶意脚本被注入到易受攻击的页面，目的是窃取敏感数据，如会话 cookies 或密码。

降低 XSS 攻击风险的基本规则很简单："永远不要相信用户的输入"。 作为一个开发者，你应该始终对所有来自外部的输入进行消毒。 这包括来自表单、GET 查询URL，甚至来自 POST 请求体的数据。 净化意味着你应该找到并编码可能有危险的字符，例如 &lt;, >。

现代浏览器通过采用更好的软件策略来帮助降低风险。 通常情况下，这些都是可以通过 http 头文件来配置的。

X-XSS-Protection HTTP 消息头是一种基本的保护。 浏览器使用启发式过滤器检测潜在的注入脚本。 如果请求头被启用，浏览器会改变脚本代码，使其失效。 它得到的支持仍然有限。

# --instructions--

使用 `helmet.xssFilter()` 来净化发送到服务器的输入。

# --hints--

helmet.xssFilter() 中间件应正确安装。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'xXssProtection');
      assert.property(data.headers, 'x-xss-protection');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
