---
title: Cross Site Scripting
localeTitle: 跨站脚本
---
## 跨站脚本

跨站点脚本是Web应用程序中的一种漏洞，由程序员在将输入输出到Web浏览器之前不清理输入（例如，博客上的注释）。它通常用于在Web浏览器中运行恶意javascript以执行攻击，例如在其他恶意操作中窃取会话cookie以获得Web应用程序中的更高级别权限。

### 示例跨站点脚本攻击

博客允许用户使用HTML标记设置其评论样式，但是为博客提供支持的脚本不会删除`<script>`标记，允许任何用户在页面上运行javascript。攻击者可以利用此优势在浏览器中运行恶意javascript。他们可以使用恶意软件感染用户，窃取会话cookie等。

```HTML
<script> 
  alert('Cross Site Scripting!'); 
 </script> 
```

### 在PHP中保护您的网站免受跨站点脚本攻击

在PHP中，有两个主要功能， `htmlspecialchars()`和`strip_tags()` ，内置以保护自己免受跨站点脚本攻击。

`htmlspecialchars($string)`函数将阻止HTML字符串呈现为HTML并将其作为纯文本显示到Web浏览器。 **htmlspecialchars（）代码示例**

```PHP
<?php 
 $usercomment = "<string>alert('Cross Site Scripting!');</script>"; 
 echo htmlspecialchars($usercomment); 
```

另一种方法是`strip_tags($string, $allowedtags)`函数，该函数删除除已列入白名单的HTML标记之外的所有HTML标记。重要的是要注意，使用`strip_tags()`函数你必须更加小心，这个函数不会阻止用户将javascript包含为链接，你必须自己清理它。

**strip\_tags（）代码示例**

```php
<?php 
 $usercomment = "<string>alert('Cross Site Scripting!');</script>"; 
 $allowedtags = "<p><a><h1><h2><h3>"; 
 echo strip_tags($usercomment, $allowedtags); 
```

**设置X-XSS保护标头：**

在PHP中，您可以发送`X-XSS-Protection` Header，它将告诉浏览器检查反映的Cross Site Scripting攻击并阻止页面加载。这并不会阻止所有跨站点脚本攻击仅反映出来，并且应该与其他方法结合使用。

```PHP
<?php 
 header("X-XSS-Protection: 1; mode=block"); 
```

**编写自己的清理功能** 如果您希望更好地控制清理工作方式，另一个选择是编写自己的HTML清理函数，不建议PHP初学者使用，因为错误会使您的网站容易受到攻击。

### 使用内容安全策略保护您的网站免受跨站点脚本攻击

防止跨站点脚本攻击的有效方法是使用内容安全策略，这可能需要对Web应用程序的设计和代码库进行大量调整。

#### 将内容安全策略设置为HTTP标头

设置内容安全策略的最常用方法是直接在HTTP标头中设置它。这可以通过Web服务器编辑它的配置或通过PHP发送来完成。

**HTTP标头中设置的内容安全策略示例**

```php
<?php 
 header("content-security-policy: default-src 'self'; img-src https://*; child-src 'none';"); 
```

#### 将内容安全策略设置为Meta标记

您可以在页面的HTML中包含内容安全策略，并逐页设置。此方法要求您在每个页面上设置，否则您将失去该策略的好处。

**HTML元标记中设置的内容安全策略示例**

```HTML
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';"> 
```

#### 更多信息：

*   [OWASP Wiki - 跨站点脚本](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS))
*   [php.net strip\_tags（）手册](https://secure.php.net/manual/en/function.strip-tags.php)
*   [php.net htmlspecialchars（）手册](https://secure.php.net/manual/en/function.htmlspecialchars.php)
*   [MDN - 内容安全策略（CSP）](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)