---
title: PHP - Hello World
localeTitle: PHP  -  Hello World
---
## PHP - Hello World

PHP脚本在服务器上执行。

在继续之前，您应该对以下内容有基本的了解：

### HTML

### CSS

### JavaScript的

PHP文件可以包含Text，HTML，CSS，JavaScript和PHP代码。 在服务器上执行PHP脚本，并将纯HTML结果发送回浏览器。

PHP脚本以`<?php`开头，以`?>`结尾：

```php
<?php 
 // PHP code goes here 
 ?> 
```

要么 你也可以写一个以`<?php`开头的PHP脚本，不用`?>`结束：

```php
<?php 
 // PHP code goes here 
```

下面，我们有一个简单的PHP文件示例，其中一个PHP脚本使用内置的PHP函数“echo”来输出文本“Hello World！”。在网页上：

```php
<!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 echo "My first PHP script!"; 
 ?> 
 
 </body> 
 </html> 

```