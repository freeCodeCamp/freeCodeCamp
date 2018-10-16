---
title: PHP Switch
localeTitle: PHP开关
---
## PHP开关

PHP中的`switch`语句类似于同一表达式上的一系列`if`语句。 `switch`语句用于在不同条件下执行不同的操作。 `switch`语句的语法如下
```
switch (expression) { 
 
    case label1: 
        // code block to be executed if there is a match with result of expression 
        break; 
    case label2: 
        // code block to be executed if there is a match with result of expression 
        break; 
    case label3: 
        // code block to be executed if there is a match with result of expression 
        break; 
    default: 
        // code block to be executed if there is no match with result of expression 
 
 } 
```

当我们运行程序时，将评估`switch`语句中的表达式。如果存在匹配则使用相应的标签检查该表达式的结果，然后执行相应的`case`块。如果未找到任何case语句的匹配项，则仅执行`default`后面的代码块。

`switch`声明的例证与一个例子的
```
<?php 
 
 $i = 1 
 switch ($i) { 
    case 0: 
        echo "i equals 0"; 
        break; 
    case 1: 
        echo "i equals 1"; 
        break; 
    case 2: 
        echo "i equals 2"; 
        break; 
 } 
 
 ?> 
```

`switch`语句也可以在没有`break`语句的情况下使用。在这种情况下，匹配案例之后的陈述将被执行。下面是没有`break`语句的`switch`语句的用法。
```
<?php 
 switch ($i) { 
    case 0: 
        echo "i equals 0"; 
    case 1: 
        echo "i equals 1"; 
    case 2: 
        echo "i equals 2"; 
 } 
 ?> 
 
 /*output --> i equals 0i equals 1i equals 2 */ 
```

#### 更多信息：

[Switch语句 - PHP文档](http://php.net/manual/en/control-structures.switch.php)

[PHP5 Switch - W3Schools](https://www.w3schools.com/php/php_switch.asp)