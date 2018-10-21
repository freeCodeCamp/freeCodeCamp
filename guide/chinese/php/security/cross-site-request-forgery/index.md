---
title: Cross Site Request Forgery
localeTitle: 跨站点请求伪造
---
## 跨站点请求伪造

跨站点请求伪造是应用程序中的一个漏洞，由程序员无法检查请求的发送位置 - 此攻击被发送给高权限级别用户以获得对应用程序的更高级别访问权限。

### 示例跨站请求伪造攻击

在线博客允许用户提交评论并在评论中包含图像，博客的管理面板允许博客作者通过加载URL `/admin/deletecomment.php?id=123`删除评论。恶意用户可以制作加载删除评论网址的图片标记，例如`<img src="/admin/deletecomment.php?id=123" />`以便管理员在下次查看评论时，管理员的计算机将加载网址并删除评论编号123。

### 在PHP中保护您的网站免受跨站点请求伪造攻击

要防止跨站点请求伪造攻击，您应该检查定期更改的令牌。 url `/admin/deletecomment.php?id=123`将更改为`/admin/deletecomment.php?id=123&csrf-token=random-per-user-unique-string-here` 。

```PHP
<?php 
 // Checking a request's CSRF Token (if true the comment is deleted, if false the comment remains.) 
 session_start(); 
 if ($_GET['csrf-token'] == $_SESSION['csrf-token']){ 
  return true; 
 } else { 
  return false; 
 } 
```

**提示：**

*   保持CSRF令牌完全随机并按会话更改（openssl函数可以帮助解决此问题）
*   PHP会话对于存储用户和服务器都可访问的CSRF令牌非常有用，如果您愿意，也可以启动此流程数据库。
*   每24小时更改一次会话的CSRF令牌。在高风险应用程序上，您可能希望在每次成功请求时更改它，但这会导致用户使用多个选项卡时出现问题。

#### 安全地生成令牌

设置CSRF令牌时，重要的是无法猜出密钥。 PHP中的OpenSSL函数可以为您生成随机密钥并存储为会话变量。

```PHP
<?php 
 session_start(); 
 $_SESSION['csrf-token'] = bin2hex(openssl_random_pseudo_bytes(16)); 
```

#### 使用CSRF令牌完成合法请求

您可以在URL中包含先前保存的会话变量和CSRF令牌，以确保允许合法管理员删除注释。如果没有正确的令牌，请求将被阻止。

```PHP
<?php 
 session_start(); 
 echo '<a href="/admin/?id=123&csrf-token='.$_SESSION['csrf-token'].'">Delete Comment</a>'; // Only the logged in user has access to the CSRF Token - the token isn't accessible to the attacker preventing their attack from being successful. 
```

#### 更多信息：

*   [OWASP Wiki - 跨站请求伪造](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF))
*   [php.net bin2hex（）手册](https://secure.php.net/manual/en/function.bin2hex.php)
*   [php.net openssl\_random\_pseudo\_bytes（）手册](https://secure.php.net/manual/en/function.openssl-random-pseudo-bytes.php)