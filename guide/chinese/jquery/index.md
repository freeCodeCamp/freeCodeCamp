---
title: jQuery
localeTitle: jQuery的
---
## jQuery的

![logo](https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/250px-JQuery_logo.svg.png "jQuery徽标")

jQuery是使用最广泛的JavaScript库，在所有主要网站的一半以上使用。

jQuery通过提供许多“帮助”功能使Web开发更容易使用。这些可以帮助开发人员快速编写DOM（文档对象模型）交互，而无需手动编写尽可能多的JavaScript。

jQuery添加了一个全局变量，附加了所有库方法。命名约定是将此全局变量设为`$` 。输入`$.`你可以使用所有的jQuery方法。

## 例

当用户点击按钮时，全部

元素将被隐藏：

```javascript
$(document).ready(function(){ 
    $("button").click(function(){ 
        $("p").hide(); 
    }); 
 }); 
```

#### 更多信息

*   [jQuery主页](https://jquery.com/)