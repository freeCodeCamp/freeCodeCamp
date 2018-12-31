---
title: PHP 5 echo and print Statements
localeTitle: PHP 5回显和打印语句
---
在PHP中，有两种基本的输出方式：echo和print。

在本教程中，我们几乎在每个示例中都使用echo（和pr​​int）。因此，本章包含有关这两个输出语句的更多信息。

### PHP回显和打印语句

回声和打印或多或少相同。它们都用于将数据输出到屏幕。

差异很小：echo没有返回值，而print的返回值为1，因此可以在表达式中使用。 echo可以采用多个参数（虽然这种用法很少见），而print可以采用一个参数。回声比打印快一点。

### PHP echo语句

echo语句可以带括号或不带括号使用：echo或echo（）。

#### 显示文字

以下示例显示如何使用echo命令输出文本（请注意文本可以包含HTML标记）：

#### 例

```php
<?php 
 echo "<h2>PHP is Fun!</h2>"; 
 echo "Hello world!<br>"; 
 echo "I'm about to learn PHP!<br>"; 
 echo "This ", "string ", "was ", "made ", "with multiple parameters."; 
 ?> 
```

#### 显示变量

以下示例显示如何使用echo语句输出文本和变量：

#### 例

```php
<?php 
 $txt1 = "Learn PHP"; 
 $txt2 = "W3Schools.com"; 
 $x = 5; 
 $y = 4; 
 
 echo "<h2>" . $txt1 . "</h2>"; 
 echo "Study PHP at " . $txt2 . "<br>"; 
 echo $x + $y; 
 ?> 
```

### PHP打印声明

print语句可以带括号或不带括号使用：print或print（）。

#### 显示文字

以下示例显示如何使用print命令输出文本（请注意文本可以包含HTML标记）：

#### 例

```php
<?php 
 print "<h2>PHP is Fun!</h2>"; 
 print "Hello world!<br>"; 
 print "I'm about to learn PHP!"; 
 ?> 
```

#### 显示变量

以下示例显示如何使用print语句输出文本和变量：

#### 例

```php
<?php 
 $txt1 = "Learn PHP"; 
 $txt2 = "W3Schools.com"; 
 $x = 5; 
 $y = 4; 
 
 print "<h2>" . $txt1 . "</h2>"; 
 print "Study PHP at " . $txt2 . "<br>"; 
 print $x + $y; 
 ?> 

```