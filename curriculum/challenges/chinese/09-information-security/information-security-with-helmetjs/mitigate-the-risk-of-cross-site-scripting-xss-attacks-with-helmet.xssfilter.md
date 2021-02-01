---
id: 587d8247367417b2b2512c39
title: 使用 helmet.xssFilter() 降低跨站点脚本（XSS）攻击的风险
challengeType: 2
forumTopicId: 301583
dashedName: mitigate-the-risk-of-cross-site-scripting-xss-attacks-with-helmet-xssfilter
---

# --description--

请注意，本项目在 [这个 Repl.it 项目](https://repl.it/github/freeCodeCamp/boilerplate-infosec) 的基础上进行开发。你也可以从 [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) 上克隆。

跨站脚本攻击（XSS）是一种比较常见的攻击手段，通过给页面注入恶意脚本来获取用户的 session cookie 和密码等信息。

防止这类型的攻击也非常简单：“永远不要相信用户的输入”。作为一名开发人员，你一定要对所有外部的输入进行审查，其中包括来自表单、GET 请求的 URL、POST 请求主体的内容等。审核的意思是，你需要查找并给有潜在风险的字符进行编码，比如 &lt; 和 >

现代浏览器中已经存在有效的策略来应对这一类问题。通常是通过配置 HTTP 请求的 header 来实现。

HTTP header 的 X-XSS-Protection 字段就可以为我们提供最基本的保护。浏览器通过启发式过滤法则来检测有潜在风险的注入脚本，如果这个 header 字段被启用，浏览器就会改变脚本中存在风险的代码，从而使恶意代码不再生效。

但是浏览器对这个功能的支持十分有限。

# --hints--

应正确加载 helmet.xssFilter() 中间件

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
