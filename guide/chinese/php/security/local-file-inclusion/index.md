---
title: Local File Inclusion
localeTitle: 本地文件包含
---
## 本地文件包含

程序员需要用户提供的文件输入而不是在访问所请求的文件之前清理输入而导致的应用程序漏洞。这导致文件被包含在不应该包含的位置。

### 示例本地文件包含攻击

一个网站允许您将PDF视为`download.php?file=myfile.php` ，因为缺乏正确的检查，恶意用户可以请求/ etc / passwd并从Web服务器获取敏感的配置信息。

### 在PHP中保护您的网站免受本地文件包含攻击

```PHP
<?php 
 if(basename($_GET['file]) !== $_GET['file']) { 
  die('INVALID FILE REQUESTED'); 
 } 
```

#### 更多信息：

*   [OWASP Wiki - 测试本地文件包含](https://www.owasp.org/index.php/Testing_for_Local_File_Inclusion)