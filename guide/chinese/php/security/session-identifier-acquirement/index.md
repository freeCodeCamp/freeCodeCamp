---
title: Session Identifier Acquirement
localeTitle: 会话标识符获取
---
## 会话标识符获取

会话标识符获取是由攻击者能够猜测用户的会话标识符或利用应用程序本身或用户的浏览器中的漏洞来获取会话标识符而导致的漏洞。此攻击是执行会话劫持攻击的先决条件。

### 例

攻击者有几个选项来执行会话标识符获取攻击。

*   猜测标识符：一个简短且可猜测的会话标识符可能允许攻击者暴力破解会话的ID并进入。
*   攻击浏览器：如果您将会话标识符存储在浏览器的cookie中 - 如果您的网站容易受到跨站点脚本攻击，则攻击者可以利用此漏洞收集会话标识符cookie并访问高权限级别区域（例如管理面板） 。
*   将ID更改为攻击者的选择：在旧版本的PHP中，您可以在URL中设置会话的ID。现在默认禁用它，如果有疑问，请确保`session.use_trans_sid`为false。这不再是一个常见的问题，但它仍然可以发生，比抱歉更安全。

### 在PHP中防御会话标识符获取攻击

要防止会话标识符获取攻击，您需要根据多个因素检查尝试的会话访问，以确认它是否是合法访问并避免用户成功劫持用户的会话。以下是可以帮助减轻会话标识符获取攻击的影响的示例实现。它会检查IP地址，用户代理以及会话过期是否在获取会话之前删除会话。

```PHP
<?php 
 session_start(); 
 
 // Does IP Address match? 
 if ($_SERVER['REMOTE_ADDR'] != $_SESSION['ipaddress']) 
 { 
 session_unset(); 
 session_destroy(); 
 } 
 
 // Does user agent match? 
 if ($_SERVER['HTTP_USER_AGENT'] != $_SESSION['useragent']) 
 { 
  session_unset(); 
  session_destroy(); 
 } 
 
 // Is the last access over an hour ago? 
 if (time() > ($_SESSION['lastaccess'] + 3600)) 
 { 
  session_unset(); 
  session_destroy(); 
 } 
 else 
 { 
  $_SESSION['lastaccess'] = time(); 
 } 
```

**提示：**

*   存储大量有关当前会话的信息（用户代理字符串，IP地址，上次访问时间等）
*   根据存储的有关会话的信息检查每个请求（是否匹配？如果不删除会话并要求用户再次登录）
*   会话不应该永远持续 - 它们应该在某个时间点到期以保持会话安全性。
*   速率限制用户可以尝试访问的会话数量（用户是否尝试访问1000多个无效会话？他们有机会猜测 - 阻止IP地址在几个小时内尝试更多会话）。

#### 更多信息：

*   [php.net会话安全手册](https://secure.php.net/manual/en/session.security.php)