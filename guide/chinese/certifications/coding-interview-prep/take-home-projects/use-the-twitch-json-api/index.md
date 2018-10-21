---
title: Use the Twitch JSON API
localeTitle: 使用Twitch JSON API
---
2016年9月29日更新：Twitch已更改其API，现在需要API密钥才能运行查询。如果您使用CodePen或GitHub页面来构建这些页面，我们建议您出于安全原因向项目添加API密钥。

我们建议不要使用Twitch的API，而是[将此JSON](https://gist.github.com/QuincyLarson/2ff6892f948d0b7118a99264fd9c1ce8)硬编码到您的应用中作为变量。这是来自Twitch的不同账户的一系列回复。

* * *

如果您正尝试使用jQuery的`$.getJSON()`方法来解决此挑战，您可能会收到有关跨源资源共享（CORS）的错误消息。

解决此问题的最简单方法是使用jQuery的JSONP功能。从Twitch API的[自述页面](https://github.com/justintv/Twitch-API#json-p) ：

> 所有API方法都通过为请求提供回调参数来支持JSON-P。

[jQuery文档还](http://api.jquery.com/jQuery.getJSON/)指出：

> 如果URL包含字符串“callback =？” （或类似的，由服务器端API定义），请求被视为JSONP。

以下是获取免费代码营的Twitch频道数据的示例调用：
```
$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) { 
  console.log(data); 
 }); 
```

[根据维基百科](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing#CORS_vs_JSONP) ，JSONP被认为是不安全的，但应该足以满足我们的目的。有关Twitch的CORS限制的详细讨论，请阅读Twitch-API存储库上的[问题＃133](https://github.com/justintv/Twitch-API/issues/133) 。