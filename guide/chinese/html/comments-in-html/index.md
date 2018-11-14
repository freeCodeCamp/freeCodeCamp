---
title: Comments in HTML
localeTitle: HTML中的评论
---
## HTML中的评论

comment标签是用于留下笔记的元素，主要与项目或网站相关。此标记经常用于解释代码中的某些内容或留下有关项目的一些建议。注释标记还使开发人员更容易回来并理解他在稍后阶段编写的代码。注释还可用于注释掉代码行以进行调试。

最好在代码中添加注释，尤其是在与团队或公司合作时。

注释以`<!--`开头，以`-->`结束，可以跨越多行。它们可以包含代码或文本，并且在用户访问页面时不会显示在网站的前端。您可以通过Inspector控制台或查看页面源来查看注释。

### 例

```html

<!-- You can comment out a large number of lines like this. 
 Author: xyz 
 Date: xx/xx/xxxx 
 Purpose: abc 
 --> 
 Read more: https://html.com/tags/comment-tag/#ixzz4vtZHu5uR 
 <!DOCTYPE html> 
 <html> 
    <body> 
        <h1>FreeCodeCamp web</h1> 
        <!-- Leave some space between the h1 and the p in order to understand what are we talking about--> 
        <p>FreeCodeCamp is an open-source project that needs your help</p> 
            <!-- For readability of code use proper indentation --> 
    </body> 
 </html> 
```

## 条件评论

条件注释定义了某些编码完成时要执行的一些HTML标记。

条件注释仅由Internet Explorer版本5到版本9 - IE5 - IE9识别。

### 例

```html

<!DOCTYPE html> 
 <html> 
    <body> 
        <!--[if IE 9]> 
                <h1>FreeCodeCamp web</h1> 
            <p>FreeCodeCamp is an open-source project that needs your help</p> 
        <![endif]--> 
    </body> 
 </html> 
```

### IE条件评论

这些注释仅在Internet Explorer中可用，最多可用于IE9。在当今时代，你将永远不会看到它们有一个很好的变化，但了解它们的存在是很好的。条件注释是为不同客户端浏览器提供不同体验的一种方式。例如：

```html

<!--[if lt IE 9]> <p>Your browser is lower then IE9</p> <![endif]--> 
 <!--[if IE 9]> <p>Your browser is IE9</p> <![endif]--> 
 <!--[if gt IE 9]> <p>Your browser is greater then IE9</p> <![endif]--> 
```

[关于条件评论](https://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx)