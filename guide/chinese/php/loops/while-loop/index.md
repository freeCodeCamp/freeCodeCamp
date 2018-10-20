---
title: While Loop
localeTitle: 而Loop
---
## 而Loop

`while loop`是PHP中最简单的循环类型之一。它执行语句块，直到表达式求值为**TRUE** 。如果表达式的值在执行时发生变化，则循环运行直到表达式求值为**FALSE。While**循环的基本形式如下：

```shell
while (expr) 
    statement 
```

while循环中的语句可以包含在花括号中，也可以根据以下语法使用：

```shell
while (expr): 
    statement 
    ... 
 endwhile; 
```

使用示例说明while循环的简单和替代语法：

```php
<?php 
 
 /* using the simple form of while loop */ 
 
 $i = 1;  /* initialisation part */ 
 
 while ($i <= 100 && $i!=5 ) 
 { 
    echo $i++; 
 } 
 
 /*using the alternate synatx of while loop*/ 
 
 $i = 0; 
 
 while ($i <= 10): 
    echo $i++; 
 endwhile; 
 
 ?> 
```

#### 更多信息

[while循环 - PHP文档](http://php.net/manual/en/control-structures.while.php)