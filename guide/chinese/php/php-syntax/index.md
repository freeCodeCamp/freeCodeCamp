---
title: PHP Syntax
localeTitle: PHP语法
---
# 基本的PHP语法

### 开始

所有PHP文件都以`.php`扩展名保存。 PHP脚本可以添加到文档中的任何位置。 PHP脚本以`<?php`开头，以`?>`结尾。

`<?php //PHP code goes here ?>`

### 打印

要在PHP中打印任何语句，我们使用`echo`命令。

#### 代码示例
```
<!DOCTYPE html> 
 <html> 
 <body> 
 
 <h1>My first PHP page</h1> 
 
 <?php 
 echo "Hello World!"; 
 ?> 
 
 </body> 
 </html> 
```

##### 注意：PHP语句以分号结尾`;`

### 声明变量

我们通过在它们之前添加美元`$`符号在PHP中声明变量。
```
<?php 
 $x = 5; 
 echo $x; 
 ?> 
```

### PHP中的评论

要在PHP中编写单行注释，我们将hashtag `#`或在注释之前放置`//` 。
```
<?php 
 # This is a single line comment 
 // This is also a single line comment 
 ?> 
```

要写双行注释，我们用`/*`开始注释，用`*/`结束。
```
<?php 
 /* This is a 
 Double line comment. */ 
 ?> 
```

我们还可以注释掉代码行的某些部分。

#### 代码示例
```
<!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // You can also use comments to leave out parts of a code line 
 $x = 5 /* + 15 */ + 5; 
 echo $x; 
 ?> 
 
 </body> 
 </html> 
```

您可以在[PHP手册](http://php.net/manual/en/)上看到更多相关信息