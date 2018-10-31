---
title: Session Hijacking
localeTitle: 会话劫持
---
## 会话劫持

会话劫持是由攻击者获取对用户会话标识符的访问权并且能够使用模仿他们的其他用户帐户所导致的漏洞。这通常用于访问管理用户的帐户。

### 防御PHP中的会话劫持攻击

要防止会话劫持攻击，您需要根据存储的有关会话的信息检查当前用户的浏览器和位置信息。下面是一个示例实现，可以帮助减轻会话劫持攻击的影响。它检查IP地址，用户代理，以及会话是否已过期在恢复会话之前删除会话。

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

#### 更多信息：

*   [php.net会话安全手册](https://secure.php.net/manual/en/session.security.php)