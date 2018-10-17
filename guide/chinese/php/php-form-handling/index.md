---
title: PHP 5 Form Handling
localeTitle: PHP 5表单处理
---
PHP superglobals $ _GET和$_ POST用于收集表单数据。

### PHP - 一个简单的HTML表单

下面的示例显示了一个包含两个输入字段和一个提交按钮的简单HTML表单：

#### 例

```php
<html> 
 <body> 
 
 <form action="welcome.php" method="post"> 
 Name: <input type="text" name="name"><br> 
 E-mail: <input type="text" name="email"><br> 
 <input type="submit"> 
 </form> 
 
 </body> 
 </html> 
```

当用户填写上面的表单并单击提交按钮时，表单数据将被发送到名为“welcome.php”的PHP文件进行处理。表单数据使用HTTP POST方法发送。

要显示提交的数据，您可以简单地回显所有变量。 “welcome.php”看起来像这样：

```php
<html> 
 <body> 
 
 Welcome <?php echo $_POST["name"]; ?><br> 
 Your email address is: <?php echo $_POST["email"]; ?> 
 
 </body> 
 </html> 
```

输出可能是这样的：
```
Welcome John 
 Your email address is john.doe@example.com 
```

使用HTTP GET方法也可以实现相同的结果：

#### 例

```php
<html> 
 <body> 
 
 <form action="welcome_get.php" method="get"> 
 Name: <input type="text" name="name"><br> 
 E-mail: <input type="text" name="email"><br> 
 <input type="submit"> 
 </form> 
 
 </body> 
 </html> 
```

并且“welcome\_get.php”看起来像这样：

```php
<html> 
 <body> 
 
 Welcome <?php echo $_GET["name"]; ?><br> 
 Your email address is: <?php echo $_GET["email"]; ?> 
 
 </body> 
 </html> 
```

上面的代码非常简单。然而，最重要的是缺少。您需要验证表单数据以保护脚本免受恶意代码的攻击。

> **在处理PHP表单时考虑安全性！**
> 
> 此页面不包含任何表单验证，它只显示如何发送和检索表单数据。
> 
> 但是，接下来的页面将展示如何在考虑安全性的情况下处理PHP表单！正确验证表单数据对于保护您的表单免受黑客和垃圾邮件发送者的侵害非常重要！

### GET与POST

GET和POST都创建一个数组（例如array（key => value，key2 => value2，key3 => value3，...））。此数组包含键/值对，其中键是表单控件的名称，值是来自用户的输入数据。

GET和POST都被视为$ _GET和$_ POST。这些是超级全局，这意味着它们始终可以访问，无论范围如何 - 您可以从任何函数，类或文件访问它们，而无需执行任何特殊操作。

$ \_GET是通过URL参数传递给当前脚本的变量数组。

$ \_POST是通过HTTP POST方法传递给当前脚本的变量数组。

### 什么时候使用GET？

使用GET方法从表单发送的信息对每个人都可见（所有变量名称和值都显示在URL中）。 GET还对要发送的信息量有限制。限制大约是2000个字符。但是，由于变量显示在URL中，因此可以为页面添加书签。在某些情况下，这可能很有用。

GET可用于发送非敏感数据。

**注意：**绝不应将GET用于发送密码或其他敏感信息！

### 什么时候使用POST？

使用POST方法从表单发送的信息**对其他人不可见** （所有名称/值都嵌入在HTTP请求的主体内），并且对要发送的信息量**没有限制** 。

此外，POST支持高级功能，例如在将文件上载到服务器时支持多部分二进制输入。

但是，由于变量未显示在URL中，因此无法为页面添加书签。

> **开发人员更喜欢POST来发送表单数据。**