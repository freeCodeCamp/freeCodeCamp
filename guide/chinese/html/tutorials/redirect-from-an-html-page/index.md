---
title: Redirect from an HTML Page
localeTitle: 从HTML页面重定向
---
## 从HTML页面重定向

如果您更改了HTML网页的网址并希望自动将访问者重定向到网页的新位置，则可以在旧HTML网页的`<head>`区域内使用元标记。

`html <head> <meta http-equiv="refresh" content="0; url=http://freecodecamp.org/" /> </head>` 在上面的示例中，页面的访问者将从旧的html页面重定向到[http://freecodecamp.org/](http://freecodecamp.org/) 。 `content="0`的属性意味着浏览器将在0秒后重定向到新页面。将值更改为`content="2`将在2秒后重定向。

#### 更多信息：

*   [MDN - HTTP中的重定向](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections)