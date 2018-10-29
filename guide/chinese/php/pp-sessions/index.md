---
title: PHP Sessions
localeTitle: PHP会话
---
# PHP会话

会话是一种存储要在多个页面中使用的信息（在变量中）的方法。  
与cookie不同，信息不存储在用户的计算机上。

## 什么是PHP会话？

使用应用程序时，打开它，进行一些更改，然后关闭它。这很像一个Session。  
电脑知道你是谁。它知道您何时启动应用程序以及何时结束。  
但在互联网上存在一个问题：Web服务器不知道您是谁或您做了什么，因为HTTP地址_不维护状态_ 。

会话变量通过存储要在多个页面中使用的用户信息（例如用户名，喜欢的颜色等）来解决此问题。  
默认情况下，会话变量会持续到用户关闭浏览器为止。

**会话变量包含有关单个用户的信息，并且可用于一个应用程序中的所有页面。**

**注意：**如果需要永久存储，则可能需要将数据存储在数据库中。

## 启动PHP会话

使用_session_ start（）\_函数启动_会话_ 。  
会话变量使用PHP全局变量设置：$ \_SESSION。

**例：**
```
<?php 
 // Start the session 
 session_start(); 
 ?> 
 <!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // Set session variables 
 $_SESSION["favcolor"] = "blue"; 
 $_SESSION["favanimal"] = "dog"; 
 echo "Session variables are set."; 
 ?> 
 
 </body> 
 </html> 
```

**注意：** session\_start（）函数必须是文档中的**第一件事** 。 **在**任何HTML标记**之前** 。

输出：  
会话变量已设置。

## 获取PHP会话变量值

请注意，会话变量不会单独传递到每个新页面，而是从我们在每个页面开头打开的会话（session\_start（））中检索它们。

另请注意，所有会话变量值都存储在全局$ \_SESSION变量中：

**例：**
```
<?php 
 session_start(); 
 ?> 
 <!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // Echo session variables that were set on previous page 
 echo "Favorite color is " . $_SESSION["favcolor"] . ".<br>"; 
 echo "Favorite animal is " . $_SESSION["favanimal"] . "."; 
 ?> 
 
 </body> 
 </html> 
```

输出：  
最喜欢的颜色是蓝色。  
最喜欢的动物是狗。

显示用户会话的所有会话变量值的另一种方法是运行以下代码：
```
<?php 
 print_r($_SESSION); 
 ?> 
```

### 它是如何工作的？

大多数会话在用户的计算机上设置用户密钥，如下所示：765487cf34ert8dede5a562e4f3a7e12。  
然后，当在另一个页面上打开会话时，它会扫描计算机以查找用户密钥。  
如果匹配，则访问该会话，否则，它将启动新会话。

## 修改会话变量

要更改会话变量，只需覆盖它：

**例：**
```
<?php 
 session_start(); 
 ?> 
 <!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // to change a session variable, just overwrite it 
 $_SESSION["favcolor"] = "pink"; 
 print_r($_SESSION); 
 ?> 
 
 </body> 
 </html> 
```

## 销毁PHP会话

要删除所有全局会话变量并销毁会话，请使用_session_ unset（）\_和_session_ destroy（）\_：

**例：**
```
<?php 
 session_start(); 
 ?> 
 <!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // remove all session variables 
 session_unset(); 
 
 // destroy the session 
 session_destroy(); 
 ?> 
 
 </body> 
 </html> 

```