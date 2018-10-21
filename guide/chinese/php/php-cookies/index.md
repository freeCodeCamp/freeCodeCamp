---
title: PHP Cookies
localeTitle: PHP Cookies
---
# PHP COOKIES

## 什么是Cookie？

Cookie通常用于标识用户。它是服务器嵌入用户计算机的小文件。 每次同一台计算机通过浏览器请求页面时，它也会发送cookie。  
Cookie旨在成为记住有状态信息或记录用户浏览活动的可靠机制。  
它们还可用于记住用户先前在表单字段（如姓名，地址，密码等）中输入的任意信息。

## 使用PHP创建Cookie

使用PHP，您可以创建和检索cookie值。 使用setcookie（）函数创建cookie。

`setcookie(name, value, expire, path, domain, secure, httponly);`

只有_name_参数是必需参数。所有其他参数都是可选的。

## PHP创建/检索Cookie

以下示例创建名为“user”的cookie，其值为“John Doe”。  
Cookie将在30天后（86400 \* 30）过期。  
“/”表示cookie在整个网站中可用（否则，您可以选择您喜欢的目录）。  
然后我们检索cookie“user”的值（使用全局变量$ \_COOKIE）。  
我们还使用isset（）函数来确定cookie是否已设置：

**例：**
```
<?php 
 $cookie_name = "user"; 
 $cookie_value = "John Doe"; 
 setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");  // 86400 = 1 day 
 ?> 
 <html> 
 <body> 
 
 <?php 
 if(!isset($_COOKIE[$cookie_name])) { 
    echo "Cookie named '" . $cookie_name . "' is not set!"; 
 } else { 
    echo "Cookie '" . $cookie_name . "' is set!<br>"; 
    echo "Value is: " . $_COOKIE[$cookie_name]; 
 } 
 ?> 
 </body> 
 </html> 
```

**注意：** setcookie（）函数必须出现**在。之前** 标签。

输出：  
Cookie'用户'已设置！  
价值是：John Doe

## PHP修改Cookie值

要修改cookie，只需使用setcookie（）函数再次设置该值：

**例：**
```
<?php 
 $cookie_name = "user"; 
 $cookie_value = "Jane Porter"; 
 setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); 
 ?> 
 <html> 
 <body> 
 
 <?php 
 if(!isset($_COOKIE[$cookie_name])) { 
    echo "Cookie named '" . $cookie_name . "' is not set!"; 
 } else { 
    echo "Cookie '" . $cookie_name . "' is set!<br>"; 
    echo "Value is: " . $_COOKIE[$cookie_name]; 
 } 
 ?> 
 
 </body> 
 </html> 
```

输出：  
Cookie'用户'已设置！  
价值观是：Alex Porter

## PHP删除Cookie

要删除cookie，请使用过去有过期日期的setcookie（）函数：

**例：**
```
<?php 
 // set the expiration date to one hour ago 
 setcookie("user", "", time() - 3600); 
 ?> 
 <html> 
 <body> 
 
 <?php 
 echo "Cookie 'user' is deleted."; 
 ?> 
 
 </body> 
 </html> 
```

输出：  
Cookie'用户'已删除。