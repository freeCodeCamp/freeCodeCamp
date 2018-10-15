---
title: Page Redirects Using JavaScript
localeTitle: 页面重定向使用JavaScript
---
## 页面重定向使用JavaScript

如果您尝试将用户重定向到另一个页面，则可以轻松使用JavaScript来完成此任务。请务必注意以下事项：

即使您在脚本中加载了jQuery库，您也可能希望将纯JavaScript解决方案用于页面重定向以提高效率。

有几种不同的方法可以解决这个问题，但最简单的方法是使用`window.location`对象将用户发送到您希望将其重定向到的页面。所述`window.location`对象可以使用任何有效的URL值如`http://www.yoururl.com` ， `somepage.html`等

```javascript
window.location = 'http://www.yoururl.com'; 
 // window.location = 'somepage.html'; 
 // etc. 
```

### 特殊情况重定向

您可以使用特殊的重定向方法，默认情况下，该方法附加到名为`replace()`每个主要浏览器中的`window.location`对象。此方法接受与仅使用`window.location`相同的有效URL值。

下面是使用此方法的示例（它仍然与在其他浏览器中使用`window.location`相同）：

```javascript
window.location.replace('http://www.yoururl.com'); 
 // window.location.replace('somepage.html'); 
 // etc. 
```

### 使用JS进行简单的定时重定向

以下是使用`setTimeout()`函数进行简单定时重定向的示例。定时重定向非常有用，您可以通过重定向页面上的内容向用户解释将其重定向到另一个页面的原因。

```javascript
// the 5000 below is 5000 milliseconds which equals 5 seconds until the redirect happens 
 // keep in mind that 1 second = 1000 milliseconds 
 setTimeout(function () { 
    window.location = 'http://www.yoururl.com'; 
    // window.location = 'somepage.html'; 
    // etc. 
 }, 5000); 
```

### 倒退

有时用户在禁用JavaScript的情况下浏览互联网，这显然会带来JS依赖重定向解决方案的问题。我建议设置一个`<meta>`元素，它将使用新位置刷新浏览器。我应该在JS重定向发生后将这个元素设置为秒。因此，如果您在5秒后在JS中发生重定向，请将`<meta>`元素重定向设置为6秒。

将`<meta>`元素放在文档的`<head>` ，如下所示：

```html

<head> 
    <!-- Change the 6 below to however many seconds you wish to wait until redirection to the new page.  Change the portion after "URL=" to the URL of your choice.  This can be a local page: URL=somepage.html, a web address: URL=http://www.yoururl.com, or any other valid URL. It is important to note the semicolon between the number of seconds to refresh and the URL. --> 
    <meta http-equiv="refresh" content="6;URL=http://www.yoururl.com"> 
 </head> 
```

请记住，并非所有浏览器都支持`<meta>`元素（我正在看你，IE的旧版本和Safari），但大多数现代浏览器都支持（Microsoft Edge，谷歌浏览器，Mozilla Firefox，Opera）。