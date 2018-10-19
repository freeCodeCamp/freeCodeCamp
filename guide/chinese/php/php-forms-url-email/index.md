---
title: PHP 5 Forms - Validate E-mail and URL
localeTitle: PHP 5表单 - 验证电子邮件和URL
---
本章介绍如何验证名称，电子邮件和URL。

### PHP - 验证名称

下面的代码显示了一种检查名称字段是否只包含字母和空格的简单方法。如果name字段的值无效，则存储错误消息：

```php
$name = test_input($_POST["name"]); 
 if (!preg_match("/^[a-zA-Z ]*$/",$name)) { 
  $nameErr = "Only letters and white space allowed"; 
 } 
```

> **preg\_match（）函数在字符串中搜索pattern，如果模式存在则返回true，否则返回false。**

### PHP - 验证电子邮件

检查电子邮件地址是否格式正确的最简单，最安全的方法是使用PHP的filter\_var（）函数。

在下面的代码中，如果电子邮件地址格式不正确，则存储错误消息：

```php
$email = test_input($_POST["email"]); 
 if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { 
  $emailErr = "Invalid email format"; 
 } 
```

### PHP - 验证URL

下面的代码显示了一种检查URL地址语法是否有效的方法（此正则表达式也允许URL中的破折号）。如果URL地址语法无效，则存储错误消息：

```php
$website = test_input($_POST["website"]); 
 if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) { 
  $websiteErr = "Invalid URL"; 
 } 
```

### PHP - 验证名称，电子邮件和URL

现在，脚本看起来像这样：

#### 例

```php
<?php 
 // define variables and set to empty values 
 $nameErr = $emailErr = $genderErr = $websiteErr = ""; 
 $name = $email = $gender = $comment = $website = ""; 
 
 if ($_SERVER["REQUEST_METHOD"] == "POST") { 
  if (empty($_POST["name"])) { 
    $nameErr = "Name is required"; 
  } else { 
    $name = test_input($_POST["name"]); 
    // check if name only contains letters and whitespace 
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) { 
      $nameErr = "Only letters and white space allowed"; 
    } 
  } 
 
  if (empty($_POST["email"])) { 
    $emailErr = "Email is required"; 
  } else { 
    $email = test_input($_POST["email"]); 
    // check if e-mail address is well-formed 
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { 
      $emailErr = "Invalid email format"; 
    } 
  } 
 
  if (empty($_POST["website"])) { 
    $website = ""; 
  } else { 
    $website = test_input($_POST["website"]); 
    // check if URL address syntax is valid (this regular expression also allows dashes in the URL) 
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) { 
      $websiteErr = "Invalid URL"; 
    } 
  } 
 
  if (empty($_POST["comment"])) { 
    $comment = ""; 
  } else { 
    $comment = test_input($_POST["comment"]); 
  } 
 
  if (empty($_POST["gender"])) { 
    $genderErr = "Gender is required"; 
  } else { 
    $gender = test_input($_POST["gender"]); 
  } 
 } 
 ?> 

```